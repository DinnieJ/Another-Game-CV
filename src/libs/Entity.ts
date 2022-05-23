import { SoundSprite } from "@pixi/sound";
import { AnimatedSprite, Container, Rectangle } from "pixi.js";
import { v4 as uuid} from 'uuid'

abstract class Entity extends Container {
    _id: string
    _type: string
    _meta: Object

    constructor(type: string, meta: Object) {
        super();
        this._id = uuid();
        this._type = type;
        this._meta = meta;
    }
}

export default Entity;