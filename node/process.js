// 当前执行的文件夹
console.log(process.cwd());

// set NODE_ENV = dev
console.log(process.env.NODE_ENV)

process.nextTick(() => {
    console.log(123)
})

// 存放参数
// node node/process.js --port 4400
console.log(process.argv)