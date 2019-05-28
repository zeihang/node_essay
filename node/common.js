// 一个文件就是一个模块
// 封装功能
// 解决依赖
// 工作效率高

(function (exports, require, module, __filename, __dirname) {
    exports = module.exports = {}
    exports.name = 'zfpx';
    exports = { name: 'zfpx' };
    return module.exports;
})

// require是同步的

// this 就是 module.exports

console.log(module.exports)

let r = v(function (params) {
    module.exports = 'xxx'
    return module.exports
})()

// eval

let fn = new Function('x', 'y', 'return x + y')
console.log(fn.toString())

let vm = require('vm');
var aaa = 'aaa'
vm.runInThisContext('console.log(aaa)')