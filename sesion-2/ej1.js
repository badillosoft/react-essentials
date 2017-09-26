const fs = require("fs");

const content = fs.readFileSync("mi_archivo.csv", "utf-8");

console.log(content);

const lines = content.split("\n");

console.log(lines);

for (let line of lines) {
    let row = line.split(/,\s?/);
    console.log(row);
}