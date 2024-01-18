class Promise{
    // 构造方法
    constructor(executor) {
        // 属性
        this.PromiseState = 'pending'
        this.PromiseResult = null
        // 存储then
        this.callback = []
        const self = this

        // resolve函数 
        function resolve(data) {
            // 判断，确保状态只能被修改一次
            if (self.PromiseState !== 'pending') return;
            // 修改对象的状态(PromiseState)
            // 直接使用this.PromiseState，this指向的是windowa，而不是实例对象 
            self.PromiseState = 'fulfilled'
            // 修改对象的结果(PromiseResult)
            self.PromiseResult = data
            // 调用then方法
            setTimeout(() => {
                self.callback.forEach((item) => {
                    if (item.onResolved) {
                        item.onResolved(data)
                    }
                })
            })

        }  
        // reject函数
        function reject(data) {
            // 判断，确保状态只能被修改一次 
            if (self.PromiseState !== 'pending') return;
            // 修改对象的状态(PromiseState)
            self.PromiseState = 'reject'
            // 修改对象的结果(PromiseResult)
            self.PromiseResult = data
            // 调用then方法
            setTimeout(() => {
                self.callback.forEach((item) => {
                    if (item.onReject) {
                        item.onReject(data)
                    }
                })
            })
        }

        // 捕获异常(throw抛出的错误)
        try {
            // 同步调用的 执行器函数
            executor(resolve, reject)
        } catch (e) {
            // 修改状态为失败
            reject(e)
        }
    }

    // then方法
    // 添加then方法
    then(onResolved, onReject) {
        const self = this
        // 处理回调函数的参数
        if (typeof onResolved !== 'function') {
            onResolved = value => value
        }
        if (typeof onReject !== 'function') {
            onReject = reason => {
                throw reason
            }
        }
        // 返回Promise状态的对象
        return new Promise((resolve, reject) => {
            // 结果处理函数
            function resultCallback(typeFunction) {
                try {
                    // 获取回调函数的执行结果
                    let result = typeFunction(self.PromiseState)
                    if (result instanceof Promise) {
                        // 如果是Promise对象的话，直接返回Promise
                        result.then(v => {
                            resolve(v)
                        }, r => {
                            reject(r)
                        })
                    } else {
                        // 不是Promise对象的话，结果的对象状态为成功
                        resolve(result)
                    }
                } catch (e) {
                    reject(e)
                }
            }
            // 成功的回调(then方法是Promise实例对象调用的，所以this指向的是实例对象)
            if (this.PromiseState === "fulfilled") {
                setTimeout(() => {
                    resultCallback(onResolved)
                })
            }
            // 失败的回调
            if (this.PromiseState === "rejected") {
                setTimeout(() => {
                    resultCallback(onReject)
                })
            }
            // pending的回调(保存回调函数，暂不执行)
            if (this.PromiseState === "pending") {
                // 保存回调函数
                this.callback.push({
                    onResolved: function () {
                        resultCallback(onResolved)
                    },
                    onReject: function () {
                        resultCallback(onReject)
                    },
                })
            }
        })
    }

    // catch方法
    catch(onReject) {
        return this.then(undefined, onReject)
    }

    // resolve方法,类上的方法
    static resolve(value) {
         // 返回Promise对象
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                // 如果是Promise对象的话，直接返回Promise
                value.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            } else {
                // 不是Promise对象的话，结果的对象状态为成功
                resolve(value)
            }
        })
    }

    static reject(reason){
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promises) {
        // 返回结果是Promise对象
        return new Promise((resolve, reject) => {
            // 遍历
            let count = 0;
            let arr = []
            for (let i = 0; i < promises.lengthy; i++){
                promises[i].then(v => {
                    // 三个Promise对象都成功才调用
                    count++
                    // 将当前Promise对象成功的结果存入到数组中
                    arr[i] = v
                    if (count === promises.length) {
                        resolve(arr)
                    }
                }, r => {
                    reject(r)
                })
            }

        }) 
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++){
                promises[i].then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            }
        })
    }  
}
