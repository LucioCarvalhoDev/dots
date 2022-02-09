import { GAME_RULES } from "../index.js";

export default class Drafter {
    constructor(canvas) {
        this.canvas = canvas;

        this.brush = this.canvas.getContext("2d");
    }

    dot(x, y, color = "#ffffff") {
        this.brush.beginPath();

        this.brush.arc(x, y, 2.5, 0, Math.PI * 2);
        this.brush.fillStyle = color;
        this.brush.fill();

        this.brush.closePath();
    }

    line(dot1, dot2, opacity) {
        this.brush.beginPath();

        this.brush.moveTo(dot1.x, dot1.y);
        this.brush.lineTo(dot2.x, dot2.y);

        // Fill with gradient
        const color = "#ffffff" + opacity;

        this.brush.strokeStyle = color;
        this.brush.stroke();

        this.brush.closePath();
    }
}