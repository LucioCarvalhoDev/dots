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

    createDot(_x = undefined, _y = undefined, _dir = undefined, _speed = undefined, _state = undefined, _hp = undefined) {
        const x = _x || _math.numberBetween(-GAME_RULES.dotDistanceToDie, this.canvas.witdh + GAME_RULES.dotDistanceToDie);
        const y = _y || _math.numberBetween(-GAME_RULES.dotDistanceToDie, this.canvas.height + GAME_RULES.dotDistanceToDie);
        const dir = _dir != undefined ? _dir : Math.round(Math.random() * 360);
        const speed = _speed || Math.random() * 2 + 0.1;
        const state = _state || 'idle';
        const hp = state === 'born' ? 0 : 100;

        const dot = new Dot(x, y, dir, speed, state, hp);
        dot.rate = _math.numberBetween(0.01, 1);
        this.dots.push(dot);
    }

    rePopulate(n = 1) {
        for (let i = 1; i <= n; i++) {
            // const xRange = _math.choose(
            //     [-GAME_RULES.dotDistanceToDie, 0],
            //     [this.canvas.witdh, this.canvas.witdh + GAME_RULES.dotDistanceToDie]
            // );

            // const yRange = _math.choose(
            //     [-GAME_RULES.dotDistanceToDie, 0],
            //     [this.canvas.height, this.canvas.height + GAME_RULES.dotDistanceToDie]
            // );

            // const x = _math.numberBetween(...xRange);
            // const y = _math.numberBetween(...yRange);

            // this.createDot(x, y);
            this.createDot(undefined, undefined, undefined, undefined, 'born');
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

    kill(n) {
        for (let i = 0; i < n; i++) {
            this.dots[i].rate = _math.numberBetween(0.01, 2);
            this.dots[i].die();
        }
    }

    renderDots() {
        this.drafter.brush.clearRect(0, 0, this.canvas.witdh, this.canvas.height);

        const visibleDots = this.dots.filter(dot =>
            dot.x >= - 5 && dot.x <= this.canvas.witdh + 5 &&
            dot.y >= - 5 && dot.y <= this.canvas.height + 5
        );
        // console.log(visibleDots.length);
        visibleDots.forEach(dot => {
            const opacity = Number(Math.round(255 * dot.hp / 100)).toString(16).padStart(2, '0');

            const color = '#ffffff' + opacity;
            if (color == '#ffffff118')
                console.log(dot.hp);
            this.drafter.dot(dot.x, dot.y, color);
        });


        return visibleDots.length;
    }

    renderLines() {
        const dotList = [].concat(this.dots);
        const maxDistance = 255 * GAME_RULES.lineMaxLenght / 100;
        const screenWalls = [
            [{ x: 0, y: 0 }, { x: this.canvas.witdh, y: 0 }],
            [{ x: 0, y: this.canvas.height }, { x: this.canvas.witdh, y: this.canvas.height }],
            [{ x: 0, y: 0 }, { x: 0, y: this.canvas.height }],
            [{ x: this.canvas.witdh, y: 0 }, { x: this.canvas.witdh, y: this.canvas.height }],
        ];

        // evita linhas repetidas
        for (let i = 0; i < this.dots.length; i++) {
            const dotStart = dotList.splice(0, 1)[0];
            for (let j = i + 1; j < this.dots.length; j++) {
                const dotEnd = this.dots[j];

                const distance = dotStart._distanceTo(dotEnd);

                if (distance < maxDistance) {
                    const lineWillBeVisible = screenWalls.map(([w1, w2]) => {

                        if ((this._isPointInsideRect(dotStart, [0, 0], [this.canvas.witdh, this.canvas.height])) ||
                            this._isPointInsideRect(dotEnd, [0, 0], [this.canvas.witdh, this.canvas.height]))
                            return true;

                        return this._checkIfLinesCross(w1, w2, dotStart, dotEnd);
                    }).reduce((acc, cur) => acc || cur);


                    if (lineWillBeVisible) {
                        const baseLineOpacity = Math.abs((distance / maxDistance) - 1) * 255;
                        const medDotsOpacity = ((dotStart.hp + dotEnd.hp) / 2) / 100;
                        const opacity = Number(Math.round(baseLineOpacity * medDotsOpacity))
                            .toString(16).padStart(2, '0');

                        const color = "#ffffff" + opacity;

                        this.drafter.line(dotStart, dotEnd, color);
                    }

                }

            }
        }
    }

    _checkIfLinesCross(p1, p2, q1, q2) {
        // code from 
        const a = p1.x;
        const b = p1.y;
        const c = p2.x;
        const d = p2.y;
        const p = q1.x;
        const q = q1.y;
        const r = q2.x;
        const s = q2.y;

        var det, gamma, lambda;
        det = (c - a) * (s - q) - (r - p) * (d - b);
        if (det === 0) {
            return false;
        } else {
            lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
            gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
            return ((0 < lambda && lambda < 1) && (0 < gamma && gamma < 1));
        }
    }

    _isPointInsideRect({ x, y }, [x1, y1], [x2, y2]) {
        return (x > x1 && x < x2) && (y > y1 && y < y2);
    }

}