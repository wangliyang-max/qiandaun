export default{
    install(Vue) {
        console.log("@", Vue)

        // 定义全局过滤器
        Vue.filter('mySlice',function (value){
         return value.slice(0, 4);
        })
        
        // 定义全局指令
        Vue.directive("fbind", {
        // 指令与元素成功绑定时（一上来)调用
        bind(element, binding) {
          element.value = binding.value;
            },
            
        // 指令所在模板被重新解析是调用
        update(element, binding) {
          element.value = binding.value;
        },
      });

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    a: 1,
                b: 0
                }
            }
        })
        
        // 给Vue原型上添加一个方法
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}