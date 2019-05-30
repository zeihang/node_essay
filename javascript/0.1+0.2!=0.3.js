console.log(0.1.toString(2))
console.log(0.2.toString(2))
console.log(0.3.toString(2))
//十进制计算时实际上转换成二进制先计算
//但0.1与0.2转换时出现无限循环，系统四舍五入了，导致直接想加不等于0.3直接转换成二进制的值，才出现报错