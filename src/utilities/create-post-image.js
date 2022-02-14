const fs = require("fs");
const { createCanvas } = require("canvas");

function wrapText(context, text, x, y, maxWidth, lineHeight, textColor) {
  var words = text.split(" ");
  var line = "";
  context.fillStyle = textColor;
  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

export function createPostImage(w, h, text, path, textColor, backgroundColor) {
  const canvas = createCanvas(w, h);
  var context = canvas.getContext("2d");

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, w, h);

  var maxWidth = canvas.width - 400;
  var lineHeight = 350;
  var x = (canvas.width - maxWidth) / 2;
  var y = 460;

  context.font = "250pt Calibri";

  wrapText(context, text, x, y, maxWidth, lineHeight, textColor);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(path, buffer);
}
