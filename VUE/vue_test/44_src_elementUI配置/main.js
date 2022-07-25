/**
 * 该文件是整个项目的入口文件
 */

// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入ElementUI插件（完整引入）
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 引入ElementUI插件（部分引入）
import { Button, Row, DatePicker,TimePicker ,Carousel,CarouselItem} from 'element-ui';

// 关闭vue生产提示
Vue.config.productionTip = false
// 应用ElementUI(全局)
// Vue.use(ElementUI)
// 引入ElementUI组件
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker)
Vue.component(TimePicker.name, TimePicker)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)

// 创建vue实例对象
new Vue({
  el: "#root",
  render: h => h(App),
})


