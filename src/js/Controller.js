import Dot from "./Dot.js";
import Drafter from "./Drafter.js";

const QUANTITY = 10;

export default class Controller {
    constructor(target) {
        this.canvas = {
            element: target,
            witdh: target.clientWidth,
            height: target.clientHeight
        };

        this.drafter = new Drafter(this.canvas.element);

        this.dots = [];

        this.init();
    }

    init() {

    }

    createDot(posX = undefined, posY = undefined, mvDir = undefined, mvSpd = undefined) {
        const x = posX || Math.round(Math.random() * this.canvas.witdh);
        const y = posY || Math.round(Math.random() * this.canvas.height);
        const dir = mvDir || Math.round(Math.random() * 360);
        const spd = mvSpd || Math.random() * 2 + 0.5;

        const dot = new Dot(x, y, dir, spd);
        this.dots.push(dot);
    }

    populate(n = QUANTITY) {
        for (let i = 1; i <= n; i++) {
            this.createDot();
        }
    }

    updateDots() {
        this.dots.forEach((dot, idx) => {
            if (!dot.update(this.canvas.witdh, this.canvas.height)) {
                delete this.dots[idx];
            }
        });
    }

    renderDots() {
        this.drafter.brush.clearRect(0, 0, this.canvas.witdh, this.canvas.height);
        this.dots.forEach((dot, idx) => {
            if (dot.update(this.canvas.witdh, this.canvas.height)) {
                let color = "#ffffff";
                // if (dot == this.dots[0]) {
                //     color = "#ff0000";
                // }
                this.drafter.dot(dot.x, dot.y, color);
            } else {
                delete this.dots[idx];
            }
        });

        this.dots = this.dots.filter(d => d);
        return this.dots.length;
    }

    renderLines() {

        this.dots.forEach(startDot => {
            startDot.checkCol([].concat(this.dots));
            startDot.connections.forEach(endDot => {
                this.drafter.line(startDot.x, startDot.y, endDot.x, endDot.y);
            });
        });
    }

    debugRenderLine() {
        const startDot = this.dots[0];
        startDot.checkCol([].concat(this.dots));
        startDot.connections.forEach(endDot => {
            this.drafter.line(startDot.x, startDot.y, endDot.x, endDot.y);
        });
    }
}