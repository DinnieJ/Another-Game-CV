import { Point } from "pixi.js"
import { MoveState } from "../enum"

export default interface IMoveable {
    isMoving: boolean,
    status: MoveState
    destination?: Point
    speed?: number
    velocity?: number

    update: Function
    onTick: Function
}

