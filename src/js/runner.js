import { Actor, Input, Vector } from "excalibur"
import { Resources } from './resources.js'



export class Runner extends Actor {

   

    constructor() {
        super({height: Resources.runner.height * 0.5, width: Resources.runner.width * 0.5})
    }

    onInitialize(engine) {

        

        this.graphics.use(Resources.runner.toSprite())
        this.pos = new Vector(300, 350)
        this.vel = new Vector(0, 0)
        this.scale = new Vector(0.2, 0.2)

        this.on('collisionstart', (event) =>{
            if(event.other._name == 'piranha') {
                console.log(event)
                engine.goToScene('gameover')
            }
        })

        // this.on('collisionstart', (event) => this.hitSomething(event))

        // hitSomething(event) {
        //     if (event.other instanceof Runner) {
        //     event.other.doodgaatding()
        //     this.enginegoToScene('gameover')
        //     }
        //     }
       


    }

    onPreUpdate(engine) { 
        //zorgt ervoor dat de code elke frame word uitgevoerd wat voor bewegen natuurlijk zeer belangrijk is.
        let xspeed = 0        
        let yspeed = 0        
        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) { 
            yspeed = -300 
        }
            
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) { 
            yspeed = 300 
        } 
        
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) { 
            xspeed = -300 
        } 
        
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
             xspeed = 300 
        } 

        this.vel = new Vector(xspeed, yspeed) 

        if(this.pos.y > 400){
            console.log('ik raak het water')
        }

        // if(this.onPostKill){
        //     this.game.goToScene('gameover')
        // }
    }

}