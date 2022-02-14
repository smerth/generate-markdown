import fs from "fs";
import request from "request";

// example uri: "https://api.multiavatar.com/Stan Smith.png"

export function getRemoteFile(uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    // console.log("content-type:", res.headers["content-type"]);
    // console.log("content-length:", res.headers["content-length"]);
    // console.log(res);
    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
}
