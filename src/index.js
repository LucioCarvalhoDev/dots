import Controller from "./js/Controller.js";

const controller = new Controller(document.getElementById('canvas'));

let flagPlay = false;

const play = document.querySelector('.play');
play.onclick = () => {
    flagPlay = !flagPlay;
};

const q = 15;
controller.populate(q);
// controller.renderDots();
// controller.renderLines();

controller.renderDots();
controller.renderLines();
console.log(controller.dots[0].connections);
function gameLoop() {
    if (flagPlay) {
        const population = controller.renderDots();
        if (population < q)
            controller.populate(1);

        controller.renderLines();
    }

}

setInterval(gameLoop, 30); 