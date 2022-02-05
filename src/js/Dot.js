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
            this.connections = [new Dot(Infinity, Infinity, 0, 1)];
        }
        dots.forEach(dot => {
            if (dot == this) {
                return;
            } else {
                const distance = this._distanceTo(dot.x, dot.y);
                const connectedDistances = this.connections.map(connectedDot => connectedDot._distanceTo(this.x, this.y));
                const smallestConnectedDistance = Math.min(...connectedDistances);
                if (distance < smallestConnectedDistance) {
                    const idToSub = connectedDistances.indexOf(smallestConnectedDistance);
                    this.connections[idToSub] = dot;
                }
            }
        });
        // console.log(this.connections[0]);
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