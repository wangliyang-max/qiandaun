// 定义类
class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement
    constructor() {
        // 获取页面的父元素并赋值给element
        this.element = document.getElementById("food")!;
    }
    // 获取食物的坐标
    get x() {
        return this.element.offsetLeft
    }
    get y() {
        return this.element.offsetTop
    }

    change() {
        // 随机数
        // 事物的位置 0-290
        // 设移动一次应该是10,所以食物的位置需要时10的倍数


        //  Math.round(Math.random() * 29):四舍五入取到0-29之间的数
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        
        this.element.style.left = left+'px';
        this.element.style.top = top+'px'
    }
}

// const food = new Food();
// console.log(food.x, food.y)
// food.change()
// console.log(food.x, food.y)

export default Food