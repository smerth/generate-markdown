//svg, png, mixed

export function createImageString(name, ext) {
  let image = "";
  switch (ext) {
    case "svg":
      image = `${name}.svg`;
      break;
    case "mix":
      // 50 / 50
      if (Math.random() < 0.5) {
        image = `${name}.png`;
      } else {
        image = `${name}.svg`;
      }
      break;
    default:
      image = `${name}.png`;
      break;
  }
  return image;
}
