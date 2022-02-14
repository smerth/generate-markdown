// reference: https://www.albertgao.xyz/2016/12/09/testing-via-mocha-and-chai-in-es5-and-es6/
import { assert, expect } from "chai";
import options from "../options/options";
import { deleteContent } from "./delete-content";
import shell from "shelljs";
const fs = require("fs");

const dir = "test/delete/directory/";
shell.mkdir("-p", dir);

describe("delete-content", () => {
  it(`delete the nested folders at ${dir}`, () => {
    deleteContent(dir);
    return !fs.existsSync(dir);
  });
});
