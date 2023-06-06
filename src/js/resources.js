import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import runnerImage from '../images/jetpack.png'
import backGround from '../images/background.png'
import piranha from '../images/piranha.png'
import startbutton from '../images/startbutton.png'
import again from '../images/retry.png'
import heart from '../images/heart.png'

const Resources = {
    runner: new ImageSource(runnerImage),
    background: new ImageSource(backGround),
    piranha: new ImageSource(piranha),
    startbutton: new ImageSource(startbutton),
    again: new ImageSource(again), 
    heart: new ImageSource(heart) 
}

const ResourceLoader = new Loader([Resources.runner, Resources.background, Resources.piranha, Resources.startbutton, Resources.again, Resources.heart ])

export { Resources, ResourceLoader }