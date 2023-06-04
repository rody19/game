import { Actor, GraphicsGroup, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Piranha extends Actor {

    constructor() {
        super({height: Resources.piranha.height * 0.5, width: Resources.piranha.width * 0.5, name: 'piranha'})

        // width: Resources.Piranha.width,
        //         height: Resources.Piranha.height,
        //      });
        this.graphics.use(Resources.piranha.toSprite())
        this.scale = new Vector(0.1, 0.1)
        //this.anchor = new Vector(0.5,0.5)
        this.pos = new Vector(900, Math.random() * 400 + 100)
        this.vel = new Vector(-400, 0)
        this.on("exitviewport", (event) => {
            this.pos = new Vector(900, Math.random() * 400 + 100)
        })

    }



}