// 事件环

// 优先处理同步任务，然后是异步，异步分为宏、微两种

// 浏览器里，每处理一个宏任务，就会清一遍微任务

// node里，处理完一个队列再找另一个队列，队列切换中间执行微任务

// 主执行栈 定时器队列 i/o队列 setInmmdiate队列

