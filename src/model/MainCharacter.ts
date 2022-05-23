import { AnimatedSprite, DisplayObject, Point, Sprite } from "pixi.js";
import AnimatedObject from "../libs/AnimatedObject";
import CollisionObject from "../libs/CollisionObject";
import { MoveState } from "../libs/enum";
import IAnimationProvider from "../libs/inf/IAnimationProvider";
import IMoveable from "../libs/inf/IMoveable";

class MainCharacter extends CollisionObject implements IAnimationProvider, IMoveable {
    animations: AnimatedObject[];
    current: number;

    constructor(type: string, meta: Object) {
        super(type, meta);
        this.onTick = this.onTick.bind(this);
    }

    addAnimation() {

    }

    changeAnimation(target: AnimatedObject): Function {
        throw new Error("Method not implemented.");
    }
    isMoving: boolean;
    status: MoveState;
    destination?: Point;
    speed?: number;
    velocity?: number;
    update: Function;
    onTick() {

    };
}