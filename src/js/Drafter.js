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

    line(ax, ay, bx, by) {
        this.brush.beginPath();

        this.brush.moveTo(ax, ay);
        this.brush.lineTo(bx, by);

        // Fill with gradient
        this.brush.strokeStyle = "#ffffff20";
        this.brush.stroke();

        this.brush.closePath();
    }
}