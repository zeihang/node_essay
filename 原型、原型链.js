// 原型 prototype 原型链 __proto__
// 每个函数都有 prototype属性
// 每个对象都有__proto__属性

function Servant(name) {
    this.name = name
}
Servant.prototype.name = 'saber'
let saber = new Servant('阿尔托莉雅');
console.log(saber.__proto__ === Servant.prototype)
// 实例会先找自身的属性，如果没有，会顺着原型链向上查找
console.log(saber , saber.name)
console.log(saber.__proto__.__proto__ === Object.prototype)
console.log(saber.__proto__.constructor === Servant)
// 原型链的顶层，也就是根
console.log(Object.prototype.__proto__ === null)
console.log(saber.__proto__.__proto__.__proto__ === null)

// 特殊的 Function Object （即是对象 也是函数）