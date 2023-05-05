//fs-module sync
const { writeFileSync, readFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//console.log(second)

writeFileSync("./content/main.txt", `${first} ${second}`)

//fs-module async
const { writeFile, readFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log("1-------->", err)
        return
    } else {
        writeFile('./content/result-async',
            `here is the result ${first}`, (err, res) => {
                if (err) {
                    console.log("2--------->", err)
                    return
                } else {
                    console.log(res)            //result will be undefined as it will return nothing
                }
            })
    }
})