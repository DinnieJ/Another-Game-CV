import { AnimatedSprite, Rectangle, Sprite, Texture } from "pixi.js"
import { v4 as uuid } from 'uuid'

class AnimatedObject {
    _id: string
    animation: AnimatedSprite
    _sprite: Texture
    _name: string
    meta: any
    
    constructor(name: string, sprite: Texture, meta: Object) {
        this._id = uuid()
        this._name = name
        this._sprite = sprite
        this.meta = meta
        this.configure();
    }

    configure = () => {
        let frames = [];
        for(const [_, val] of Object.entries<any>(this.meta.frames)) {
            // console.log(val);
            let point = new Rectangle(val.frame.x, val.frame.y, val.frame.w, val.frame.h)
            let tex = new Texture(this._sprite.baseTexture);
            tex.frame = point;
            frames.push(tex)
        }

        // console.log(frames)

        this.animation = new AnimatedSprite(frames);

        this.animation.position.set(100,100)
        this.animation.scale.set(this.meta.meta.scale, this.meta.meta.scale);
        this.animation.animationSpeed = this.meta.meta.duration / 1000
        // this.animation.play();
        console.log(this.animation);
    }
}

export default AnimatedObject;