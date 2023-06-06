// import { Actor } from "excalibur";
import * as ex from 'excalibur'
import { Life } from "./life";
import {Engine} from 'excalibur'

export class Health extends ex.Actor{

    healthAmount

    life1
    life2
    life3

    game;
    
    constructor(){

        super()
        this.healthAmount = 3
        this.life1 = new Life(40, 40)
        this.life2 = new Life(140, 40)
        this.life3 = new Life(240, 40)
    }

    onInitialize(engine){
        this.healthAmount = 3

        this.game = engine;
        
        engine.currentScene.add(this.life1)
        engine.currentScene.add(this.life2)
        engine.currentScene.add(this.life3)

        console.log(this.life1.scene)

    }



    onHit(engine){
        
// CHild class, je gebruikt parameters uit een class. 
        console.log("you have been hit")
        if(this.healthAmount === 1){
            this.life1.kill()
            //console.log(this.life1, 'this.life1')
            this.game.goToScene('gameover') 
        }

        if(this.healthAmount === 2){
            this.life2.kill()
            this.healthAmount = 1
        }
        
        if(this.healthAmount === 3){
            this.life3.kill()
            this.healthAmount = 2 
        }

        console.log(this.healthAmount)
    }}
    