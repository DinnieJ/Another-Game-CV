import { SoundSprite } from "@pixi/sound";
import { AnimatedSprite, Container, Rectangle } from "pixi.js";
import { v4 as uuid} from 'uuid'

abstract class Entity {
    _id: string
    _type: string
    _container: Container
    _sfx: Array<SoundSprite>
    _anim: Array<AnimatedSprite>
    _bound: Rectangle
    _collideFn: Function
    _meta: JSON

    constructor() {
        this._id = uuid();
        this._bound = new Proxy(this._container.getBounds(), {
            set(obj: any, prop, val) {
                if((prop == 'x' && obj.x !== val) || (prop == 'y' && obj.y !== val)) {
                    this._collideFn();
                }

                obj[prop] = val;
                return true;
            }
        })
    }

    public addAnimation(anim:AnimatedSprite): Entity {
        this._anim.push(anim)
        return this;
    }

    public addSfx(sfx: SoundSprite): Entity {
        this._sfx.push(sfx);
        return this;
    }

    public getBound(): Rectangle {
        return this._container.getBounds();
    }

    abstract handleCollision(ent: Entity): void;
}

export default Entity;