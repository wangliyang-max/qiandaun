import axios from "axios"
import { nanoid } from "nanoid"
export default {
    namespaced:true,//设置namespaced为true，为了让组件中的map方法能够识别该配置
    actions: {
        // 只添加姓王的人
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('personAdd',value)
            } else {
                alert('添加的人不姓王')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('personAdd',{id:nanoid(),name:response.data})
                },
                error =>{
                    console.log(error.message)
                }
            )
        }
    },
    mutations: {
        personAdd(state, value) {
            console.log("mutations中的personAdd被调用了")
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{
            id:'001',name:'张三'
        }]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}