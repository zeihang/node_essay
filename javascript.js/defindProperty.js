let obj = {

}
let temp = 'saber'
Object.defineProperty(obj, 'name', {
    // enumerable: true, // 是否可以被枚举
    // configurable: true, // 是否可以配置
    // writable: true // 是否可以被改写
    // value: 'saber',
    get() {
        return temp
    },
    set(value) {
        temp = value
    }
})

for (let key in obj) {
    console.log(obj[key], '~')
}

obj.name = 'lancer'
delete obj.name
console.log(obj.name, '~~')