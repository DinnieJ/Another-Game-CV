import { AnimatedSprite, Rectangle, Sprite, Texture } from "pixi.js";
import Entity from "./libs/Entity";
import { MainArgs } from "./types";

// All the coding goes here for the game
const main: Function = function(_context: MainArgs) {

    const sprite = new Sprite(_context.assets.kamae.texture);
    const frames = [];
    for(let i = 0; i < 4; i++) {
        let point = new Rectangle(i*190, 0, 190, 210);
        console.log(point.toString())
        let tex = new Texture(_context.assets.kamae.texture.baseTexture)
        tex.frame = point

        frames.push(tex);
    }

    const anim = new AnimatedSprite(frames);
    _context.app.stage.addChild(anim);
    window.addEventListener("keydown", (ev: KeyboardEvent) => {
        switch(ev.key) {
            case 'ArrowLeft':
                if(anim.anchor.x == 0) {
                    anim.scale.x *= -1;
                    anim.anchor.x = 1;
                }
                anim.x -= 5;
                break;
            case 'ArrowRight':
                if(anim.anchor.x == 1) {
                    anim.scale.x *= -1;
                    anim.anchor.x = 0;
                }
                anim.x += 5
                break;
            default:
                break;
        }
    })
    anim.position.set(100,100)
    anim.animationSpeed = 0.1
    anim.play();



}

export default main;

