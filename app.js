// const number = 10;

// if (number > 5) {
//     console.log("larger number")
// } else {
//     console.log("small number")
// }

// console.log("hello world my first node app")

const name = require('./names')
const sayHi = require('./utils')
//fuction is called itself on it module.
require('./flavour')

sayHi(name.a)
sayHi(name.b)