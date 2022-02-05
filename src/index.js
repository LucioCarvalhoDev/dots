import Controller from "./js/Controller.js";

export const GAME_RULES = {
    distanceToDie: 200,
    initialPopulation: 30
};

let flagPlay = false;

const play = document.querySelector('.play');
play.onclick = () => {
    flagPlay = !flagPlay;
};

const controller = new Controller(document.getElementById('canvas'));
controller.populate(GAME_RULES.initialPopulation);
controller.renderDots();
controller.renderLines();

function gameLoop() {
    if (flagPlay) {
        const population = controller.renderDots();
        if (population < GAME_RULES.initialPopulation)
            controller.rePopulate(1);

        controller.renderLines();
        // controller.debugRenderLine();
    }
}

setInterval(gameLoop, 30); 