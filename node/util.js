// until.inherits 继承
// util.promisify promise化

let fs = require('mz/fs')
let path = require('path')

let read = async function (url) {
    return await fs.readFile(url, 'utf8')
}

console.log(read())