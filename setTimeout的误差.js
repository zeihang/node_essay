//由于js的单线程与运行机制，setTimeout有微小的偏差，累加来会出现不少的延迟
let countdown = 100000;
let countIndex = 1;
const timeout = 1000;
const startTime = new Date().getTime();
startCountdown(timeout);
function startCountdown(interval) {
    setTimeout(() => {
        const endTime = new Date().getTime();
        const deviation = endTime - (startTime + countIndex * timeout);
        console.log(`${countIndex}: 偏差${deviation}ms`);
        countIndex++;
        // 我们只能尽量减少这个误差
        startCountdown(timeout - deviation);
    }, interval)
}

// 为了节能，对于运行在后台的tab页，定时器的延时被设置为>=1000ms，
// 所以会出现倒计时在切到其他页面时，就出错的情况
// 解决方式就是监听 window.focus window.blur visibilityChange事件 区服务器重新获取倒计时时间
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        
    }
})


