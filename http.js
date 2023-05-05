const http = require('http')
// console.log(http);

const server = http.createServer((req, res) => {
    // res.write("Welcome to my page")
    // res.end()
    if (req.url == "/") {
        res.end("WALCOME TO MY SERVE")
    }
    if (req.url == "/about") {
        res.end("about server")
    }
})
server.listen(4000)