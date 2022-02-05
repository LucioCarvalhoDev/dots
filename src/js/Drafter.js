export default class Drafter {
    constructor(canvas) {
        this.canvas = canvas;

        this.brush = this.canvas.getContext("2d");
    }

    dot(x, y) {
        this.brush.beginPath();

        this.brush.arc(x, y, 2.5, 0, Math.PI * 2);
        this.brush.fillStyle = "#ffffff";
        this.brush.fill();

        this.brush.closePath();
    }
}