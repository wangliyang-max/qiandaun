class Snake{
    // 表示蛇的元素
    head: HTMLElement;
    bodies: HTMLCollection

    // 获取蛇的容器
    element:HTMLElement

    constructor() {
        this.head = document.querySelector('#snake>div')! as HTMLElement
        //  document.getElementById('snake')!.getElementsByTagName("div")这样获取的是一个集合
        this.bodies = document.getElementById('snake')!.getElementsByTagName("div")

        this.element=document.getElementById('snake')!

    }

    // 获取蛇(蛇头)的坐标

    get x() {
        return this.head.offsetLeft;
    }

    get y() {
        return this.head.offsetTop;
    }

    set x(value: number) {
        if (this.x == value) {
            return;
        }
        // 是否撞墙
        // x合法值 0-290
        if(value < 0 || value > 290) {
            throw new Error("蛇撞墙了")
        }

        // 蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log("水平方向发生了掉头")
            // 蛇按原方向继续移动
            if (value > this.x) {
                // 想要向右走，说明现在是向左走，为了控制蛇不能掉头，所以继续设置他向左走
                value = this.x-10
            } else {
                value = this.x+10
            }

        }


        // 蛇的移动是通过后面的结点替代前面的结点，所以一定从后向前进行替换，所以先处理身体再处理蛇头
        // 身体移动
        this.moveBody()

        this.head.style.left = value + 'px'

        // 蛇头修改完成之后在判断是否撞到自己
        this.cheackHeadBody()
    }

    set y(value: number) {
        if (this.y == value) {
            return;
        }
        // 是否撞墙
        // y合法值 0-290
        if(value < 0 || value > 290) {
            throw new Error("蛇撞墙了")
        }

         // 蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // console.log("垂直方向发生了掉头")
            // 蛇按原方向继续移动
            if (value > this.y) {
                // 想要向下走，说明现在是向上走，为了控制蛇不能掉头，所以继续设置他向上走
                value = this.y-10
            } else {
                value = this.y+10
            }

        }

        // 身体移动
        this.moveBody()

        this.head.style.top = value + 'px'

        // 蛇头修改完成之后在判断是否撞到自己
        this.cheackHeadBody()

    }

    // 蛇增长
    addBody() {
        // beforeend是说把内容加到element结束标签之前
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    // 移动身体(蛇头的位置由键盘控制，这里不做修改)
    moveBody(){
    /**
     * 将后面的身体设置为前面的身体的位置，并且一定要从后向前进行修改
     */
        for (let i = this.bodies.length - 1; i > 0; i--){
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 移动
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }

    cheackHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for(let i = 1; i < this.bodies.length; i++) {
            if (this.x === (this.bodies[i] as HTMLElement).offsetLeft && this.y === (this.bodies[i] as HTMLElement).offsetTop) {
                throw new Error("蛇撞到自己了")
            }
        }
    }

}

export default Snake