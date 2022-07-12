$(function (){
//   准备工作
    var $container = $('#outer')
    var $list = $('#imgList')
    var $points = $('#navDiv>a')
    var $prev = $('#prev')
    var $next = $('#next')
    var PAGE_WIDTH = 520 //页的宽度
    var TIME = 400
    var ITEM_TIME = 20
    var imgCount = $points.length
    var index = 0;//当前下标
    var moving = false;//标识是否正在翻页

 // 1. 点击向右(左)的图标，平滑切换到下(上)一页
    $next.click(function (){
       nextPage(true)
    })
    $prev.click(function (){
       nextPage(false)
    })

// 3. 每隔3s自动滑动到下一页
    var intervalId = setInterval(function (){
       nextPage(true)
    }, 2000)
    
// 4. 当鼠标进入图片区域时，自动切换停止，当鼠标离开后,又开始自动切换
    $container.hover(function (){
    //    鼠标移入，清除定时器
        clearInterval(intervalId)
    },function (){
    //   鼠标移出,开启定时器
    intervalId = setInterval(function (){
       nextPage(true)
    }, 2000)
    })

// 6. 点击圆点图标切换到对应的页
    $points.click(function () {
        // 目标页下标(此时this是Dom对象)
        var targetIndex = $(this).index()
        if (index != targetIndex) {
            nextPage(targetIndex)
        }
    })


    /**
     * 平滑翻页
     * @param next
     * true：下一页
     * false：上一页
     * 数值：指定下标页
     */
    function nextPage(next) {
        /*平滑翻页：
        总的偏移量：offset
        总时间 TIME =400
        单元移动的间隔时间：ITEM_TIME = 20
        所以
        单元移动的偏移量 = offset(TIME/ITEM_TIME)
         */

        // 解决bug：如果正在翻页提前结束
        if (moving) {
            return
        }
        moving =true


        var offset = 0
        if (typeof next === 'boolean') {
          offset = next ? -PAGE_WIDTH : PAGE_WIDTH   
        } else {
            offset = -(next-index)*PAGE_WIDTH
        }

        var itemOffset = offset/20
        var currentLeft = $list.position().left
        // 计算出目标left
        var targetLeft = currentLeft + offset
        // 启动定时器
        var intervalId = setInterval(function () {
            currentLeft += itemOffset
            // 注意：if语句应该写在currentLeft += itemOffset之后
            // 因为停掉调计时器！=跳出循环，只要开启了定时器就一定要把本次计时器执行完。
            // 如果先写if语句再写currentLeft += itemOffset就会多移动一个单元位置
            if (currentLeft === targetLeft) {
                clearInterval(intervalId)
                moving=false//标识翻页停止
   
                
 //  2. 无限循环切换:第一页的上一页为最后页，最后一页的下一页是第一页
                // 如果达到了最右边的图片，跳到最左边的第二张
                // 由于浏览器会取小数，这里使用Math.round进行取整
                if (Math.round(currentLeft) === -(imgCount + 1) * PAGE_WIDTH) {
                    currentLeft = -PAGE_WIDTH
                }else if (Math.round(currentLeft) === 0) {
                    // 如果达到了最左边的图片，跳到最右边的第二张
                    currentLeft = -imgCount*PAGE_WIDTH
                }
             }
            $list.css('left', currentLeft) 
        },ITEM_TIME)

        // var currentLeft = $list.position().left
        // var offset = next ? -PAGE_WIDTH : PAGE_WIDTH
        // $list.css('left',currentLeft+offset)

        // 更新a
        updatePoints(next) 
    }

// 5. 切换页面时,下面的圆点也同步更新
    // 更新a
    function updatePoints(next) {
        // 计算出目标点的下标
        var targetIndex = 0

        if (typeof next === 'boolean') {
                if (next) {
                targetIndex = index + 1
                if (targetIndex == imgCount)
                    targetIndex = 0
            } else {
                targetIndex = index - 1
                if (targetIndex == -1)
                    targetIndex = imgCount-1
            }
        } else {
            targetIndex = next
        }

        // 将当前index的a的class移除
        $points.eq(index).removeClass('on')
        // $points[index].className = ''

        // 计算出目标点的下标，并添加样式
        $points.eq(targetIndex).addClass('on')
        //  $points[index].className = 'on'

        // 将index更新为targetIndex
        index = targetIndex
    }   
})