const YAML = require("yaml");

// const jsonObject = {
//   version: "1.0.0",
//   dependencies: {
//     yaml: "^1.10.0",
//   },
//   package: {
//     exclude: [".idea/**", ".gitignore"],
//   },
// };

export function jsonToYaml(json) {
  const doc = new YAML.Document();
  doc.contents = json;
  return doc.toString();
}
