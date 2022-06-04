import { AnimatedSprite, DisplayObject, Graphics, Point, Sprite, Ticker } from "pixi.js";
import AnimatedObject from "../libs/AnimatedObject";
import CollisionObject from "../libs/CollisionObject";
import { MoveState } from "../libs/enum";
import IAnimationProvider from "../libs/inf/IAnimationProvider";
import IMoveable from "../libs/inf/IMoveable";

class MainCharacter extends CollisionObject implements IAnimationProvider, IMoveable {
    animations: AnimatedObject[];
    currentAnim: AnimatedObject;
    current: number;
    side: MoveState

    constructor() {
        super("char", {});
        this.animations = []
        this.status = MoveState.NEUTRAL
        this.side = MoveState.RIGHT
        this.onTick = this.onTick.bind(this);
        Ticker.shared.add(this.onTick);
    }

     init = () => {
        // console.log(this.x, this.y, this.width, this.height);
        this.changeAnimation("neutral")
    }

    addAnimation(anim: AnimatedObject) {
        this.animations.push(anim);
    }

    changeAnimation = (target: any) => {
        // if(this.currentAnim._name !== target) {
            this.currentAnim = this.animations.find((item) => {
                return item._name == target
            });
            this.removeChildren();
            // console.log(this.currentAnim.animation);
            this.addChild(this.currentAnim.animation);
            this.currentAnim.animation.play();
        // }
    }
    isMoving: boolean;
    status: MoveState;
    destination?: Point;
    speed?: number;
    velocity?: number;
    update: Function;

    onTick = (tick: number) => {
        switch(this.status) {
            case MoveState.NEUTRAL:
                this.currentAnim.animation.onFrameChange = null
                if(this.currentAnim._name !== "neutral") {

                    this.changeAnimation("neutral");

                    if(this.side == MoveState.RIGHT && this.currentAnim.animation.anchor.x == 1) {
                        this.currentAnim.animation.anchor.x = 0
                        this.currentAnim.animation.scale.x *= -1
                    } else if (this.side == MoveState.LEFT && this.currentAnim.animation.anchor.x == 0) {
                        this.currentAnim.animation.anchor.x = 1
                        this.currentAnim.animation.scale.x *= -1;
                    }
                } 
                break;
            case MoveState.LEFT:
                this.currentAnim.animation.onFrameChange = () => {
                    this.x -= 20
                }
                this.changeAnimation("run")
                if(this.currentAnim.animation.anchor.x == 0) {
                    this.currentAnim.animation.anchor.x = 1
                    this.currentAnim.animation.scale.x *= -1
                }
                this.side = MoveState.LEFT
                break;
            case MoveState.RIGHT:
                this.currentAnim.animation.onFrameChange = () => {
                    this.x += 20
                }
                this.changeAnimation("run")
                if (this.currentAnim.animation.anchor.x == 1) {
                    this.currentAnim.animation.anchor.x = 0
                    this.currentAnim.animation.scale.x *= -1;
                }
                this.side = MoveState.RIGHT
                break;
            default:
                break;
        }
        // console.log("ok", tick)
    };
}

export default MainCharacter;