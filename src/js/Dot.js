export default class Dot {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} dir 0~360
     */
    constructor(x, y, dir, speed = (Math.random() * 2 + 1)) {
        this.x = x;
        this.y = y;

        this.dir = dir;
        this.speed = speed;
    }

    update(canvasWidth, canvasHeight) {
        this.move();

        if ((this.x < -5 || this.x > canvasWidth + 5) || (this.y < -5 || this.y > canvasHeight + 5)) {
            return 0;
        } else {
            return 1;
        }
    }

    move() {
        const movX = Math.cos(this.dir) * this.speed;
        const movY = Math.sin(this.dir) * this.speed;

        this.x += movX;
        this.y += movY;
    }
}