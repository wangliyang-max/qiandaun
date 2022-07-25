// 该文件用于创建vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)
// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions: countOptions,
        personOptions:personOptions,
    }

})