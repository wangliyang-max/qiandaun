const fs = require("fs")

const readStream = fs.createReadStream("./a.txt")

const writeStream = fs.createWriteStream("./b.txt")

readStream.pipe(writeStream)
 