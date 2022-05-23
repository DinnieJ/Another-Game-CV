import { Rectangle } from "pixi.js"
import CollisionObject from "./CollisionObject";
import Entity from "./Entity"

class Layer {
    _entities: Array<CollisionObject>

    constructor() {

    }

    public addEntity(ent: Entity): Layer {
        // ent._collideFn = this.isCollide.bind(this, ent);
        this._entities.push(ent);

        return this;
    }



    private isCollide(ent: Entity) {
        this._entities.forEach(item => {
            if (item._id !== ent._id) {
                const entBound: Rectangle = ent.getBounds();
                const contactEntBound: Rectangle = item.getBounds();
                if (contactEntBound.x < entBound.x + entBound.width &&
                    contactEntBound.x + contactEntBound.width > entBound.x &&
                    contactEntBound.y < entBound.y + entBound.height &&
                    contactEntBound.height + contactEntBound.y > entBound.y
                ) {
                    // ent.handleCollision(item);
                }
            }
        })
    }
}