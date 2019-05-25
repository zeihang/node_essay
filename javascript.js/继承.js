function Anl(name) {
    this.name = name
}
Anl.prototype.cry = '吼'
// 1) 只继承实例上的
function Cat() {
    Anl.call(this, name)
}
// 2）只继承原型上的
Cat.prototype.__proto__ = Anl.prototype
// 3) 都继承
// call + 原型继承
