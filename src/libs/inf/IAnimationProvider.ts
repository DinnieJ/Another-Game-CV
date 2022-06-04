import { AnimatedSprite, DisplayObject, Sprite, Texture } from "pixi.js";
import AnimatedObject from "../AnimatedObject";

export default interface IAnimationProvider {
    animations: Array<AnimatedObject>
    current: number

    addAnimation: Function
    changeAnimation: Function
}