const { readFile, readFileSync } = require("fs");

readFile("./readme.txt", "utf8", (err, txt) => {
  console.log(txt);
});



console.log(process.env.USER);
