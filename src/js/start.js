import { Scene, Vector } from 'excalibur'
import { Button } from './Button'
import { Resources } from './resources'

export class StartScene extends Scene {

    constructor() {
        super()
    }

    onInitialize() {
        let startButton = new Button(Resources.startbutton, Resources.startbutton, new Vector(0.3, 0.3), new Vector(200, 200), 'level')
        this.add(startButton)
    }
}