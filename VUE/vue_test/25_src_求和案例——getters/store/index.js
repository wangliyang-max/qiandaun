// 该文件用于创建vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 准备actions——用于相应组件中的动作
const actions = {
    // jia: function () {} 简写为
    // jia(context, value) {
    //     console.log("actions中的jia被调用了")
    //     // context:将store中我们可能用到的方法包中成函数放到context中
    //     //  value是传过来的数据
    //     context.commit('JIA',value)
    // },
    // jian(context, value) {
    //     console.log("actions中的jian 被调用了")
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context, value) {
        console.log("actions中的jiaOdd 被调用了")
        if(context.state.sum%2)
        context.commit('JIA',value)
    },
    jiaWait(context, value) {
        console.log("actions中的jiaWait 被调用了")
        setTimeout(() => {
            context.commit('JIA',value)
        },500)   
    }
}
//准备mutations—用于操作数据（state)
const mutations = {
    JIA(state, value) {
        console.log("mutations中的JIA被调用了")
        state.sum+=value
    },
    JIAN(state, value) {
        console.log("mutations中的JIAN被调用了")
        state.sum-=value
    }
}
//准备state—用于存储数据
const state = {
    sum:0,//当前的和
}

// 准备getters—用于state数据加工
const getters = {
    bigSum(state) {
        return state.sum*10
    }
}

Vue.use(Vuex)
// 创建并暴露store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters:getters
})