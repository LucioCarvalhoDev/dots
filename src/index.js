import Controller from "./js/Controller.js";

const controller = new Controller(document.getElementById('canvas'));

const q = 15;
controller.populate(q);

function gameLoop() {
    const population = controller.update();
    if (population < q)
        controller.populate(1);

}

setInterval(gameLoop, 30); 