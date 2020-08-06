require("dotenv").config();
let request = require("request");
let range = (n) => Array.from(Array(n).keys());

const fs = require("fs");

for (let i = 1; i < process.env.N_SEGMENTS; i++) {
  const segment = `${process.env.SEG_1}${i}${process.env.SEG_2}`;
  const url = `${process.env.URL}/${segment}`;
  request(url, null, (err) => {
    if (err) {
      console.log(err);
    }
  }).pipe(fs.createWriteStream(`${process.env.DIR}/${pad(i, 6)}.ts`));
}

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length - size);
}
