/**
 * 主体
 * @param {*} executor 调试器
 */
function Promise(executor) {
    let self = this;

    self.value = undefined;
    self.reason = undefined;

    self.status = 'pending';
    self.onResolvedCallbacks = [];
    self.onRejectedCallbacks = [];

    let resolve = (value) => {
        if (self.status === 'pending') {
            self.status = 'fulfilled';
            self.value = value;
            self.onResolvedCallbacks.forEach(fn => {
                fn()
            });
        }
    }
    let reject = (reason) => {
        if (self.status === 'pending') {
            self.status = 'rejected';
            self.reason = reason;
            self.onResolvedCallbacks.forEach(fn => {
                fn()
            });
        }
    }

    // 捕获错误
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e)
    }

}

function resovePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('you are lose'))
    }
    // 防止重复调用
    let called;
    if ((x !== null && typeof x === 'function') || typeof x === 'function') {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, (y) => {
                    if (!called) {
                        called = true;
                    } else {
                        return
                    }
                    resovePromise(x, y, resolve, reject);
                }, (r) => {
                    if (!called) {
                        called = true;
                    } else {
                        return
                    }
                    reject(r);
                })
            } else {
                // x是普通值，
                if (!called) {
                    called = true
                } else {
                    return
                }
                resolve(x)
            }
        } catch (e) {
            // x是普通值，
            if (!called) {
                called = true
            } else {
                return
            }
            reject(e)
        }
    } else {
        // x是普通值，
        if (!called) {
            called = true
        } else {
            return
        }
        resolve(x)
    }
}

Promise.prototype.then = (onFulfilled, onRejected) => {
    // 保证onFulfilled、onRejected是函数，不是则赋予默认函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => {
        return data
    }
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
        throw err
    }
    let self = this;
    let promise2 = new Promise((resolve, reject) => {
        if (self.status === 'fulfilled') {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0)
        }
        if (self.status === 'rejected') {
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0);
        }
        if (self.status === 'pending') {
            self.onResolvedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            });
            self.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            })
        }

    });
    return promise2;
}

Promise.prototype.catch = (onRejected) => {
    return Promise.then(null, onRejected)
}

Promise.prototype.finally = function (fn) {
    return Promise.then(data => {
        fn();
        return data;
    }, err => {
        fn();
        throw err;
    });
}

Promise.resolve = function(value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}

Promise.resolve = function(err) {
    return new Promise((resolve, reject) => {
        reject(err)
    })
}

Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let arr = [];
        function processData(index, data) {
            arr[index] = data;
            if (++count === promises.length) {
                resolve(arr);
            }
        }
        for (let i in promises) {
            let promise = promises[i];
            if (typeof promise.then === 'function') {
                promise.then((data) => {
                    processData(i, data)
                }, reject)
            } else {
                processData(i, promise)
            }
        }
    })
}

Promise.race = function (promises) {
    return new Promise ((resolve, reject) => {
        for (let i in promises) {
            let promise = promises[i];
            if (typeof promise.then === 'function') {
                promise.then(resolve, reject)
            } else{
                resolve(promise)
            }
        }
    });
}