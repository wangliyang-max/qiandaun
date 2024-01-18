
import "core-js";
import count from './js/count'
import sum from './js/sum'
// 想要webpack打包资源，必须从入口引入该资源
import "./css/index.css"
import "./less/index.less"
import "./sass/index.sass"
import "./sass/index.scss"
import "./stylus/index.styl"

import "./css/iconfont.css"

const result = count(2, 1)
console.log(result)
console.log(sum(1, 2, 3, 4, 5))

// 添加promise代码
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});


document.getElementById("btn").onclick = function () {
  // 动态导入
  import('./js/math').then(({ mul })=> {
     console.log(mul(3,3))
   })
}

// 判断是否支持HMR功能
if (module.hot) {
//module.hot.accept引入文件，使之HMR，则当该文件改变的时候，局部更新打包文件
//module.hot.accept第一个参数是文件的路径，第二个参数是一个函数，当第一个参数的文件变动了，就执行第二个箭头函数
  module.hot.accept("./js/count.js");

  module.hot.accept("./js/sum.js", function (sum) {
    const result2 = sum(1, 2, 3, 4);
    console.log(result2);
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}