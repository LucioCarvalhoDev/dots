import Controller from "./js/Controller.js";

const controller = new Controller(document.getElementById('canvas'));

const q = 100;
controller.populate(q);

controller.render();
function gameLoop() {
    const population = controller.render();
    if (population < q)
        controller.populate(1);

}

setInterval(gameLoop, 30); 