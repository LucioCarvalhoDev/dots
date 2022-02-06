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

        const c1 = ax - bx;
        const c2 = ay - by;
        const distance = Math.round(Math.sqrt(c1 ** 2 + c2 ** 2));
        let trans = 255 - distance;
        if (trans < 0)
            trans = 0;

        trans = trans == 0 ? '00' : Number(trans).toString(16);

        this.brush.beginPath();

        this.brush.moveTo(ax, ay);
        this.brush.lineTo(bx, by);

        // Fill with gradient
        // console.log(trans);
        const color = "#ffffff" + trans;

        this.brush.strokeStyle = color;
        this.brush.stroke();

        this.brush.closePath();
    }
}