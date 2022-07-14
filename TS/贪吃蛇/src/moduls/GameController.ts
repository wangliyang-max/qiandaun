import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器
class GameController{

    snake: Snake
    food: Food
    scorePanel: ScorePanel
    // 创建属性来记录游戏是否结束
    isLive = true

    // 创建属性存储按键方向
    direction:string='Right'
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        // 可以自己设置等级，和几分升一级
        this.scorePanel = new ScorePanel(10,10)
        this.init()
        this.run()
    }

    // 游戏初始化
    init() {
        this.food.change()
        // 监听键盘按下事件
        // 这里有一个问题，回调函数keydownHander中的this是谁，在js中谁调用这个函数this就是谁，这里显然是document，但是我们希望是这个类中的this。所以可以使用bind函数进行this绑定
        // this.keydownHander.bind(this)表示将当前函数的this绑定给keydownHander
        document.addEventListener('keydown',this.keydownHander.bind(this))
    }

    keydownHander(event: KeyboardEvent) {
        /**
         * this.direction:
         * ArrowUp Up
         * ArrowDown Down
         * ArrowLeft Left
         * ArrowRight Right
        */
        // 检查方向是否合法

        this.direction = event.key
    }

    run() {
        // 获取蛇头位置
        let x = this.snake.x
        let y = this.snake.y
        
        /**
         * 根据this.direction来使蛇的位置改变
         * 向上 top减少
         * 向下 top增加
         * 向左 left减少
         * 向右 left增加
         */
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10
                break;
            case "ArrowDown":
            case "Down":
                y += 10
                break
            case "ArrowLeft":
            case "Left":
                x -= 10
                break
            case "ArrowRight":
            case "Right":
                x += 10
                break
        }
        // 判断是否吃到食物
        this.checkEat(x, y)

        // 蛇进行移动
        try {
            this.snake.x = x
            this.snake.y = y
        } catch (e) {
            console.log(e)
            alert(e+",游戏结束！")
            this.isLive = false
        }
        

        // 由于函数嵌套的作用，每隔300ms调用一次run函数，就会一直移动
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
        
    }


    // 定义函数检查蛇是否吃到食物
    checkEat(x: number, y: number) {
        if (x === this.food.x && y === this.food.y) {
            console.log("吃到食物")
            // 食物位置改变
            this.food.change()
            // 分数增加
            this.scorePanel.addScore();
            // 蛇长的增加
            this.snake.addBody()
       }
        
    }
}

export default GameController