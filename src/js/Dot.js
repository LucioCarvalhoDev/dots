import { GAME_RULES } from "../index.js";

export default class Dot {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} dir 0~360
     */
    constructor(x, y, dir, speed) {
        this.x = x;
        this.y = y;

        this.dir = dir;
        this.speed = speed;
    }

    update(canvasWidth, canvasHeight) {
        this.move();

        if ((this.x < -GAME_RULES.distanceToDie || this.x > canvasWidth + GAME_RULES.distanceToDie) || (this.y < -GAME_RULES.distanceToDie || this.y > canvasHeight + GAME_RULES.distanceToDie)) {
            return 0;
        } else {
            return 1;
        }
    }

    _distanceTo(x, y) {
        let c1 = this.x - x;
        let c2 = this.y - y;
        let d = Math.sqrt(c1 ** 2 + c2 ** 2);
        return d;
    }

    _degToRad(deg) {
        return deg * (Math.PI / 180);
    }

    move() {
        const movX = Math.cos(this._degToRad(this.dir)) * this.speed;
        const movY = Math.sin(this._degToRad(this.dir)) * this.speed;

        this.x += movX;
        this.y += movY;
    }
}