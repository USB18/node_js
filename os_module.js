const os = require('os')

console.log("os------>", os)
const osObject = {
    name: os.type(),
    total: os.totalmem(),
    release: os.release(),
    free: os.freemem(),
    time: os.uptime()
}

console.log("osObject------>", osObject)