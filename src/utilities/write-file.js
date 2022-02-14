import path from "path";
import fs from "fs-extra";

export function writeFile(directory, content, filename, ext) {
  const file = path.join(".", directory, `${filename}.${ext}`);

  fs.writeFile(file, content);
}
