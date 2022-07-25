export default {
    namespaced:true,//设置namespaced为true，为了让组件中的map方法能够识别该配置
    actions: {
    incrementOdd(context, value) {
        console.log("actions中的jiaOdd 被调用了")
        if(context.state.sum%2)
        context.commit('increment',value)
    },
    incrementWait(context, value) {
        console.log("actions中的jiaWait 被调用了")
        setTimeout(() => {
            context.commit('increment',value)
        },500)   
    }
    },
    mutations: {
        increment(state, value) {
            console.log("mutations中的JIA被调用了")
            state.sum+=value
        },
        decrement(state, value) {
            console.log("mutations中的JIAN被调用了")
            state.sum-=value
        },
    },
    state: {
        sum: 0,//当前的和
    },
    getters: {
        bigSum(state) {
            return state.sum*10
        }
    }
}