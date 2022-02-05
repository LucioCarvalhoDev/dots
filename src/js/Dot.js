export default class Dot {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} dir 0~360
     */
    constructor(x, y, dir, speed = (Math.random() * 2 + 0.5)) {
        this.x = x;
        this.y = y;

        this.connections = [];

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

    checkCol(dots) {
        if (this.connections.length == 0) {
            this.connections = [
                new Dot(Infinity, Infinity, 0, 1),
                new Dot(Infinity, Infinity, 0, 1),
                new Dot(Infinity, Infinity, 0, 1),];
        }

        let otherDots = dots.filter(dot => dot != this);

        this.connections = this.connections.map(curDot => {
            const curDistance = this._distanceTo(curDot.x, curDot.y);
            const othersDistances = otherDots.map(dot => dot._distanceTo(this.x, this.y));
            const smallestDistance = Math.min(...othersDistances);
            if (curDistance > smallestDistance) {
                const otherIdx = othersDistances.indexOf(smallestDistance);
                return otherDots.splice(otherIdx, 1)[0];
            } else {
                return curDot;
            }
        });


    }

    _distanceTo(x, y) {
        let c1 = this.x - x;
        let c2 = this.y - y;
        let d = Math.sqrt(c1 ** 2 + c2 ** 2);
        return d;
    }

    move() {
        const movX = Math.cos(this.dir) * this.speed;
        const movY = Math.sin(this.dir) * this.speed;

        this.x += movX;
        this.y += movY;
    }
}