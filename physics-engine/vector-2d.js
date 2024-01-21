import { Point2D } from "./point-2d.js";

export class Vector2D extends Point2D {
    #length = 0;

    constructor(x, y, length) {
        super(x,y);
        this.#length = length;
    }

    get length() {
        return this.#length;
    }

    set length(length) {
        this.#length = length;
    }
}