import '../css/style.css'
import { Actor, Engine, Scene, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
// import { background } from './background'
// import { Runner } from './runner'
// import { Piranha } from './piranha'
import { Level1 } from './level1'
import { StartScene } from './start'
import { Gameover } from './gameover' 
import { DataClass } from './Data.js'

export class Game extends Engine {

    startscherm
    level1
    startScene
    gameover
    Dataclass

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
       // this.showDebug(true)
    }

    startGame() {
        this.Dataclass = new DataClass()
        this.level1 = new Level1(this.Dataclass)
        this.startScene = new StartScene()    
        this.gameover = new Gameover(this.Dataclass)

        this.addScene('start', this.startScene)
        this.addScene('level', this.level1)
        this.addScene('gameover', this.gameover)

        // this.add('gameover', new this.gameOver())
        this.goToScene('start')
    }
    // gameOver() {
    //     this.game.goToScene('gameover')
    // }
}
new Game()
