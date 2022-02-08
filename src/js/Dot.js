import { GAME_RULES } from "../index.js";

export default class Dot {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} dir 0~360
     * @param {number} speed
     */
    constructor(x, y, dir, speed) {
        this.x = x;
        this.y = y;

        this.dir = dir;
        this.speed = speed;
        // console.log(dir);
    }

    update(canvasWidth, canvasHeight) {
        this.move();

        if ((this.x < -GAME_RULES.dotDistanceToDie || this.x > canvasWidth + GAME_RULES.dotDistanceToDie) || (this.y < -GAME_RULES.dotDistanceToDie || this.y > canvasHeight + GAME_RULES.dotDistanceToDie)) {
            return 0;
        } else {
            return 1;
        }
    }

    _distanceTo(otherDot) {
        let c1 = this.x - otherDot.x;
        let c2 = this.y - otherDot.y;
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