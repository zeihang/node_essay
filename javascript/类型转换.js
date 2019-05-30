// !可以转换布尔类型
// 0,'',NaN,undedind,null都是false
console.log(!!''); //false

//运算符可以转换部分类型
console.log(1 + true) //2
//有一方是字符串，就会变成字符串拼接
console.log(1 + '111') //1111
//可以先转换成数字类型
console.log(+'111' + 1) //112
console.log(typeof +'a') //number
console.log(+'a') //NaN

//null在运算时可以看作0
console.log(1 + null) //1
console.log(1 + {}) //1[object Object]

//重写toString方法
let obj = {
    toString() {
        return 100
    }
}
console.log(1+obj)

// 按顺序，任何一个返回数值类型，就返回
let objOne = {
    [Symbol.toPrimitive]() {

    },
    valueof() {

    },
    toString(){

    }
}