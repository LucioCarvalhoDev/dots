import Dot from "./Dot.js";
import circleHtml from "./../circle.html";

const QUANTITY = 10;

export default class Controller {
    constructor(target) {
        this.canvas = {
            element: target,
            witdh: target.clientWidth,
            height: target.clientHeight
        };

        this.init();
    }

    init() {

    }

    createDot() {
        const x = Math.round(Math.random() * this.canvas.witdh);
        const y = Math.round(Math.random() * this.canvas.height);
        const dir = Math.round(Math.random() * 360);

        const dot = new Dot(x, y, dir);
        const dotElem = document.createElement('svg');
        dotElem.classList.add('dot');
        dotElem.innerHTML = circleHtml;

        this.canvas.element.appendChild(dotElem);

        dotElem.dataset.dir = dot.dir;
        dotElem.dataset.speed = dot.speed;

        dotElem.style.left = dot.x + 'px';
        dotElem.style.top = dot.y + 'px';


    }

    populate(n = QUANTITY) {
        for (let i = 1; i <= n; i++) {
            this.createDot();
        }
    }

    update() {
        const dotsElem = Array.from(this.canvas.element.children);

        dotsElem.forEach(dotElem => {
            const dot = new Dot(
                +dotElem.style.left.slice(0, -2),
                +dotElem.style.top.slice(0, -2),
                +dotElem.dataset.dir,
                +dotElem.dataset.speed);

            if (dot.update(this.canvas.witdh, this.canvas.height) === 0) {
                dotElem.remove();
            } else {
                dotElem.style.left = dot.x + 'px';
                dotElem.style.top = dot.y + 'px';
            }
        });

        return dotsElem.length;
    }
}