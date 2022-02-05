import Controller from "./js/Controller.js";

const controller = new Controller(document.getElementById('canvas'));

const q = 100;
controller.populate(q);
controller.renderDots();

function gameLoop() {
    const population = controller.renderDots();
    if (population < q)
        controller.populate(1);

    controller.renderLines();

}

setInterval(gameLoop, 30); 