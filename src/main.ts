import { AnimatedSprite, Rectangle, Sprite, Texture, Ticker } from "pixi.js";
import AnimatedObject from "./libs/AnimatedObject";
import Entity from "./libs/Entity";
import { MoveState } from "./libs/enum";
import MainCharacter from "./model/MainCharacter";
import { MainArgs } from "./types";

// All the coding goes here for the game
const main: Function = function(_context: MainArgs) {

    const char = new MainCharacter();
    char.addAnimation(new AnimatedObject("neutral", _context.assets.idle.texture, _context.assets.idleMeta.data ));
    char.addAnimation(new AnimatedObject("run", _context.assets.run.texture, _context.assets.runMeta.data));
    char.init();
    _context.app.stage.addChild(char);
    
    window.addEventListener("keydown", (ev: KeyboardEvent) => {
        switch(ev.key) {
            case 'ArrowLeft':
                char.status = MoveState.LEFT
                break;
            case 'ArrowRight':
                // char.changeAnimation("test");
                char.status = MoveState.RIGHT
                break;
            default:
                break;
        }
    })

    window.addEventListener("keyup", (ev: KeyboardEvent) => {
        switch(ev.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
                // char.lastState = char.status
                char.status = MoveState.NEUTRAL
                break;
            default:
                break;
        }
    })

}

export default main;

