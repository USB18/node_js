const path = require('path')

//console.log("path------>", path)

const filpath = "/user/account/file/file.txt"

console.log(path.basename(filpath))
const file = path.join('/content', 'filename', 'file.txt')
console.log(file)

const absolute = path.resolve(__dirname)
console.log(absolute)