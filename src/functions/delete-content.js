import shell from "shelljs";

export function deleteContent(path) {
  // remove generated files from previous run if they exist
  shell.rm("-rf", path);
}
