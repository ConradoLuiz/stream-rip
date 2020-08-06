require("dotenv").config();
const { exec } = require("child_process");
const concat_files = require("concat-files");
const fs = require("fs");
fs.readdir(process.env.DIR, function (err, filenames) {
  if (err) {
    onError(err);
    return;
  }

  concat_files(
    filenames.map((filename) => `${process.env.DIR}/${filename}`),
    process.env.EP,
    function (err) {
      if (err) throw err;
      console.log("done");
    }
  );
});
