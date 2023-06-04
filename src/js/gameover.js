import { Scene, ScreenElement, Label, Vector, Font } from 'excalibur'
import { Resources } from './resources'
import { Button } from './Button'

export class Gameover extends Scene {

    Dataclass
    label

    constructor(dataclass) {
        super({
        })
        this.Dataclass = dataclass
    }

    onInitialize(Engine) {
        //nieuwe instance van button hierdoor zitten dezelfde functie in "button" je roept button dus aan vanuit een andere file.
        let button = new Button(Resources.again, Resources.again, new Vector(1, 1), new Vector(200, 200), 'level')


        this.label = new Label({
            pos: new Vector(200, 100),
            text: `score: ${this.Dataclass.getScore()}`,
            font: new Font({ size: 60 }),
        })

        this.add(this.label)
        this.add(button)

    }
    onActivate() {
        console.log("You died")
        this.Dataclass.setRestart(true)
        this.label.text = `score: ${this.Dataclass.getScore()}`
    }
}
