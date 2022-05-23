import Entity from "./Entity";

class CollisionObject extends Entity {
    constructor(type: string, meta: Object) {
        super(type, meta)
    }
}

export default CollisionObject;