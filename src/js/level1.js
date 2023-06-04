import { Color, Scene, Timer } from "excalibur";
import '../css/style.css'
import {Vector } from "excalibur"

import { background } from './background'
import { Runner } from './runner'
import { Piranha } from './piranha'
import { Label, FontUnit, Font } from "excalibur";


export class Level1 extends Scene {

    timealive
    label
    Dataclass
    piranha = []
    runner
    timer

    constructor(dataclass) {
        super({})
        this.Dataclass = dataclass
    }

    onInitialize() {

        this.timealive = 0
        this.timer = new Timer({
            fcn: () => this.timealive++,
            repeats: true,
            interval: 1000,
        })

        this.add(this.timer)

        this.timer.start()

        this.label = new Label({
            text: `Score: ${this.timealive}`,
            pos: new Vector(300, 50),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
               color: Color.Blue
            })
        })

        this.add(this.label)

        const bg = new background()
        // this.runner = new Runner()
        // this.piranha[0] = new Piranha()
        // this.piranha[1] = new Piranha()
        // this.piranha[2] = new Piranha()

        //voegt het nu toe   
        this.add(bg)
        // this.add(this.runner)
        // this.add(this.piranha[0])
        // this.add(this.piranha[1])
        // this.add(this.piranha[2])
    }

    onActivate() {
        if(this.Dataclass.getRestart()) {
            this.runner.kill()
            this.piranha[0].kill()
            this.piranha[1].kill()
            this.piranha[2].kill()
            this.timealive = 0
            this.Dataclass.setScore(0)
            this.Dataclass.setRestart(false)
        }
        this.runner = new Runner()
        this.piranha[0] = new Piranha()
        this.piranha[1] = new Piranha()
        this.piranha[2] = new Piranha()

        this.add(this.runner)
        this.add(this.piranha[0])
        this.add(this.piranha[1])
        this.add(this.piranha[2])
    }

    onPreUpdate() {
        this.Dataclass.setScore(this.timealive)
        this.updateScore()
    }
    
    updateScore() {
        // this.score++
        this.label.text = `Score: ${this.timealive}`
    }
}