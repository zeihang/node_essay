// this是函数在运行时，在函数体内部自动生成的一个对象，只能在函数内部使用
// this就是函数运行时所在的环境对象

/**
 * 第一种
 * 函数时全局性调用时，this指向全局对象
 */
var x = 1;
function test() {
    console.log(this.x)
}
test()

/**
 * 第二种
 * 函数作为某个对象的方法调用时，这时this就指向这个上级对象
 */
var obj = {};
obj.x = 1;
obj.m = test;
obj.m();

/**
 * 第三种
 * 通过构造函数生成一个新对象，this指向这个新函数
 */
let newObj = function () {
    this.x = 2
}
let objOne = new newObj()
console.log(objOne.x)

/**
 * 第四种
 * apply函数，它的this指的就是第一个参数
 */

 /**
  * 第五种
  * 作为一个DOM事件处理函数时，this指向出发事件的元素
  */

//箭头函数没有自己的this和arguments，它只会从自身作用域链的上一层继承this