import { GAME_RULES } from "../../index.js";
import Dot from "../Dot.js";
import Drafter from "../Drafter.js";
import { _math } from "../helper/_math.js";

export default class CanvasController {
    constructor(target) {
        this.canvas = {
            element: target,
            witdh: target.clientWidth,
            height: target.clientHeight
        };

        this.drafter = new Drafter(this.canvas.element);

        this.dots = [];
    }

    display(wid, hei) {
        this.canvas.witdh = wid;
        this.canvas.height = hei;

        this.canvas.element.width = wid;
        this.canvas.element.height = hei;
    }

    createDot(posX = undefined, posY = undefined, mvDir = undefined, mvSpd = undefined) {
        const x = posX || _math.numberBetween(-GAME_RULES.dotDistanceToDie, this.canvas.witdh + GAME_RULES.dotDistanceToDie);
        const y = posY || _math.numberBetween(-GAME_RULES.dotDistanceToDie, this.canvas.height + GAME_RULES.dotDistanceToDie);
        const dir = mvDir || Math.round(Math.random() * 360);
        const spd = mvSpd || Math.random() * 2 + 0.1;

        const dot = new Dot(x, y, dir, spd);
        this.dots.push(dot);
    }

    rePopulate(n = 1) {
        for (let i = 1; i <= n; i++) {
            const xRange = _math.choose(
                [-GAME_RULES.dotDistanceToDie, 0],
                [this.canvas.witdh, this.canvas.witdh + GAME_RULES.dotDistanceToDie]
            );

            const yRange = _math.choose(
                [-GAME_RULES.dotDistanceToDie, 0],
                [this.canvas.height, this.canvas.height + GAME_RULES.dotDistanceToDie]
            );

            const x = _math.numberBetween(...xRange);
            const y = _math.numberBetween(...yRange);

            this.createDot(x, y);
        }
    }

    populate(n = 1) {
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
        this.dots = this.dots.filter(d => d);
        return this.dots.length;
    }

    renderDots() {
        this.drafter.brush.clearRect(0, 0, this.canvas.witdh, this.canvas.height);

        const visibleDots = this.dots.filter(dot =>
            dot.x >= - 5 && dot.x <= this.canvas.witdh + 5 &&
            dot.y >= - 5 && dot.y <= this.canvas.height + 5
        );
        // console.log(visibleDots.length);
        visibleDots.forEach(dot => {
            const color = '#ffffff';
            this.drafter.dot(dot.x, dot.y, color);
        });


        return visibleDots.length;
    }

    renderLines() {
        this.dots.forEach(startDot => {
            // array com todos os dots que devem ser ligados
            const others = this.dots.filter(d => {
                return d != startDot && d._distanceTo(startDot.x, startDot.y) <= GAME_RULES.lineMaxLenght;
            });

            others.forEach(endDot => {
                this.drafter.line(startDot.x, startDot.y, endDot.x, endDot.y);
            });
        });
    }

}