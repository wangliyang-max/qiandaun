/*
1．鼠标移入显示,移出隐藏
目标:手机京东，客户服务，网站导航，我的京东，去购物车结算，全部商品
2．鼠标移动切换二级导航菜单的切换显示和隐藏
3．输入搜系键字，列表显示匹配的结果
4.点击显示或者隐藏更多的分享图标
5．鼠标移入移出切换地址的显示隐藏
6.点击切换地址tab
7．鼠标移入移出切换显示迷你购物车
8．点击切换产品选项（商品详情等显示出来)
9．点击向右/左，移动当前展示商品的小图片
10．当鼠标悬停在某个小图上,在上方显示对应的中图

*/

$(function () {

    showhide()
    hoverSubMenu()
    search()
    share()
    address()
    clickTabs()
    hoverMiniCart()
    clickProductTabs()
    moveMiniImg()
    hoverMiniImg()
    bidImg()


    /** 1．鼠标移入显示,移出隐藏
    目标:手机京东，客户服务，网站导航，我的京东，去购物车结算，全部商品*/
    function showhide(){
        // 1．对哪个 / 哪些元素绑定什么监听 ?
        $('[name=show_hide]').hover(function () {
        // 2．对哪个 / 哪些元素进行什么DOM操作 ?      
        //    alert(this.id)
            var id = this.id + '_items'
            $('#'+id).show()
        }, function () {
            var id = this.id + '_items'
            $('#'+id).hide()
        })
    }


    /**2．鼠标移动切换二级导航菜单的切换显示和隐藏 */
    function hoverSubMenu (){
        $('#category_items>div').hover(function () {
        //    this代表的是DOM对象，需要包装成jQuery对象调用方法
          $(this).children(':last').show()
       },function (){
           $(this).children(':last').hide()
       })
    }

    /** 3．输入搜系键字，列表显示匹配的结果*/
    // keyup、focus：显示内容
    // blur：隐藏内容
    function search() {
        // 可以使用on为多个事件绑定同一函数
        $('#txt')
        .on('keyup focus',function (){
        //    如果输入框有文本才显示列表
            var txt = this.value.trim()
            if (txt) {
               $('#search_helper').show() 
            }
        })
        .blur(function (){
           $('#search_helper').show() 
        })
       
    }


    /**4.点击显示或者隐藏更多的分享图标 */
    function share() {
        var isOpen = false
        var $shareMore = ('#shareMore')
        var $parent = $shareMore.parent()
        var $as = $shareMore.prevAll('a:lt(2)')
        var $b = $shareMore.children()

       $($shareMore).click(function (){
           if (isOpen) {
            //   去关闭
               $parent.css('width', 155)
               $as.hide()
               $b.removeClass('backword')
               
           } else {
               $parent.css('width', 200)
               $as.show()
               $b.addClass('backword')
               
           }
           isOpen =!isOpen
       })
    }


    /**5．鼠标移入移出切换地址的显示隐藏 */
    function address() {
        var $select = $('#store_select')
       $select.hover(function (){
          $(this).children('div:gt(0)').show()
       },function (){
          $(this).children('div:gt(0)').hide()
       })
        .children(':last')
        .click(function  (){
             $select.children('div:gt(0)').hide()
        })
    }

    /**6.点击切换地址tab */
    function clickTabs (){
       $('#store_tabs>li').click(function (){
           $('#store_tabs>li').removeClass('hover')
        //    原生写法
        this.className = 'hover'
        $(this).addClass('hover')
       })
    }

    /** 7．鼠标移入移出切换显示迷你购物车*/
    function hoverMiniCart () {
       $('#minicart').hover(function (){
           this.className = 'minicart'
           $(this).children(":last").show()
       },function (){
           $(this).children(':last').hide()
       })
    }

    /**8.点击切换产品选项 */
    function clickProductTabs() {
        var $lis = $('#product_detail>ul>li')
        var $content = $('#product_detail>div:gt(0)')
       $lis.click(function (){
           $lis.removeClass('current')
           this.className = 'current'

           $content.hide()
           var index = $(this).index()
           $content.eq(index).show()
       })
    }


/**9．点击向右/左,移动当前展示商品的小图片 */
    function moveMiniImg (){
        var $as = $('#preview>h1>a')
        var $backward = $as.first()
        var $forward = $as.last()
        var $Ul = $('#icon_list')
        var SHOW_COUNT = 5
        var imgCount = $Ul.children('li').length
        var liWidth = $Ul.children(":first").width() //每次移动的长度

        var moveCount = 0 //>0表示点击向右的箭头


        if (imgCount > SHOW_COUNT) {
            $forward.attr('class','forward')
        }
        // 向右的绑定点击监听
        $forward.click(function () {
            // 向右点击之后也就可以向前点击了
           $backward.attr('class','backward')
        })


        // 给向右的按谬绑定点击监听
        $forward.click(function (){
            if (moveCount === imgCount - SHOW_COUNT){
               return
            }
            moveCount++
            // 更新向左的按钮
            $backward.attr('class', 'backward')
            // 更新向右的按钮
            if (moveCount === imgCount - SHOW_COUNT) {
                $forward.attr('class','forward_disabled')  
            }
            // 移动Ul
            $Ul.css({
                left:-moveCount*liWidth
            })

        })

        // 给向左的按谬绑定点击监听
        $forward.click(function (){
            if (moveCount === 0){
               return
            }
            moveCount--
            // 更新向右的按钮
            $forward.attr('class', 'forward')
            // 更新向右的按钮
            if (moveCount === 0) {
                $backward.attr('class','backward_disabled')  
            }
            // 移动Ul
            $Ul.css({
                left:moveCount*liWidth
            })

        })
    }

    /**10．当鼠标悬停在某个小图上,在上方显示对应的中图 */
    function hoverMiniImg (){
       $('#icon_list>li').hover(function (){
        //    this.children()[0].className = 'hoveredThumb'
           var $img = $(this).children()
           $img.addClass('hoveredThumb')
        //    显示对应的中图
           var src = $img.attr('src').replace('.jpg', '-m.jpg')
           $('#mediumImg').attr('src',src)
       },function (){
          $(this).children().addClass('removedThumb')
       })
    }

// 11．当鼠标在中图上移动时,显示对应大图的附近部分区域
    function bigImg() {
        var $mediumImg = $("#mediumImg")
        var $mask = $("#mask")//小黄块
        var $maskTop = $("#tmaskTop")
        var $largeImgContainer = $('#1argeImgContainer')
        var $loading = $("#loading")
        var $largeImg = $('#1argeImg')
        var maskWidth = $mask.width()
        var maskHeight = $mask.height()
        var maskTopWidth = $maskTop.width()
        var maskTopHeight = $maskTop.height()

        $maskTop.hover(function () {
            $mask.show()
            // 计算left,top

            // 加载大图
                var src = $mediumImg.attr('src').replace('-m.', '-l.')
                
                $largeImg.attr('src', src)
                
                $largeImgContainer.show()
            $largeImg.on('load', function () {
                    
                var largeWidth = $largeImg.width()
                var largeHeigth = $largeImg.height()

                $largeImgContainer.css({
                    width: largeWidth / 2,
                    height:largeHeigth/2
                })

                $largeImg.show()
                $loading.hide()

             // 绑定mousemove
            $maskTop.mousemove(function (event) {
                var left = 0
                var top = 0
                var eventLeft = event.offsetX
                var eventTop = event.top

                left = eventLeft - maskWidth / 2
                top = eventTop - maskHeight / 2
                // left: 0 ~  maskTopWidth-maskWidth
                if (left < 0) {
                    left = 0
                } else if (left > maskTopWidth - maskWidth) {
                    left = maskTopWidth-maskWidth
                }
                    
                // top:0 ~  maskTopHeigth-maskHeigth
                if (top < 0) {
                    top = 0
                } else if (top > maskTopHeigth-maskHeigth) {
                    top = maskTopHeigth-maskHeigth
                }

               $mask.css({
                left:left,
                top:top
               })
                
                
                // 移动大图
                
                left = -left * (largeWidth / maskTopWidth)
                top = -top*(largeHeigth/maskTopHeigth)
                
                $largeImg.css({
                    left: left,
                    top:top
                })
                
                
            })    
                    

                       
                })

           
        },function  (){
            $mask.hide()
            $largeImgContainer.hide()
            $largeImg.hide()
        })
    }


    // 
   
})