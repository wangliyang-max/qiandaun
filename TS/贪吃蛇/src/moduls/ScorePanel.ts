// 计分牌
class ScorePanel{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    upScore:number//每几分升一级
    constructor(maxLevel:number=10,upScore:number=10) {
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    // 加分方法
    addScore(){
        this.scoreEle.innerHTML = 'SCORE:'+ (++this.score)
        // 每10分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    // 等级提升
    levelUp() {
        if (this.level < this.maxLevel ) {
            this.levelEle.innerHTML = 'level:'+(++this.level)
        }
    }
}

// const scorePanel = new ScorePanel()
// scorePanel.addScore()
// console.log(scorePanel.score)

// for (let i = 0; i < 200; i++){
//     scorePanel.addScore();
// }

export default ScorePanel