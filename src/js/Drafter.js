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

    line(dot1, dot2) {
        const c1 = dot1.x - dot2.x;
        const c2 = dot1.y - dot2.y;
        const distance = Math.round(Math.sqrt(c1 ** 2 + c2 ** 2));
        let trans = 255 - distance;
        if (trans < 0)
            trans = 0;

        trans = Number(trans).toString(16).padStart(2, '0');

        this.brush.beginPath();

        this.brush.moveTo(dot1.x, dot1.y);
        this.brush.lineTo(dot2.x, dot2.y);

        // Fill with gradient
        const color = "#ffffff" + trans;

        this.brush.strokeStyle = color;
        this.brush.stroke();

        this.brush.closePath();
    }
}