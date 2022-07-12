       // 根据元素的样式名获取样式值
      function getStyle(obj, name) {
        if (window.getComputedStyle) {
          // 正常浏览器
          return getComputedStyle(obj, null)[name];
          //    IE8
        } else {
          return obj.currentStrly[name];
        }
      }
// 对象
// speed移动速度
// target目的地
// attr:要执行动画的样式:left,top,width
// callback:回调函数中再嵌套回调函数,可以添加样式效果
      function move(obj,attr,target,speed,callback){

            clearInterval(obj.timer);
            var current = parseInt(getStyle(obj,attr));
            if(target < current){
                speed = -speed;
            }
        // 开启定时器执行动态效果
            obj.timer = setInterval(function () {
            var oldValue = parseInt(getStyle(obj,attr));
            newValue = oldValue + speed;
            
            if(speed<0&&newValue<target || speed>0&&newValue>target){
                newValue = target;
            }
            // attr是变量需要使用[]获取
            obj.style[attr] = newValue + "px";

            if(newValue == target){
              clearInterval(obj.timer);
              callback && callback();
            }

        }, 30);

      }
      



            function addClass(obj, cn) {
        //   没有改属性才添加
        if (!hasClass(box, "b2")) {
          obj.className += " " + cn;
        }
      }
      function deleteClass(obj, cn) {
        //创建正则表达式进行查找删除
        var reg = new RegExp("\\b" + cn + "\\b");
        obj.className = obj.className.replace(reg, "");
      }

      /*
      toggleclass可以用来切换一个类
      如果元素中具有该类,则删除
      如果元素中没有该类，则添加*/
      function toggleClass(obj, cn) {
        if (hasClass(obj, cn)) {
          deleteClass(obj, cn);
        } else {
          addClass(obj, cn);
        }
      }

      // 判断一个元素中是否含有指定的class属性值
      // 如果有该class，则返回true，没有则返回falsel
      function hasClass(obj, cn) {
        // 使用正则表达式判断
        // var reg=/\bb2\b/;
        // 使用new可以传递变量
        var reg = new RegExp("\\b" + cn + "\\b");
        return reg.test(obj.className);
      }