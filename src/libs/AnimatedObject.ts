import { AnimatedSprite } from "pixi.js"
import { v4 as uuid } from 'uuid'

class AnimatedObject {
    _id: string
    _animatedSprite: AnimatedSprite
    
    constructor(sprite: AnimatedSprite) {
        this._id = uuid()
        this._animatedSprite = sprite
    }
}

export default AnimatedObject;