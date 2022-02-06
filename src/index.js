import Controller from "./js/Controller.js";

export const GAME_RULES = {
    dotDistanceToDie: 200,
    dotInitialPopularion: 400,
    lineMaxLenght: 70

};

let flagPlay = true;

const play = document.querySelector('.play');
play.onclick = () => {
    flagPlay = !flagPlay;
};

const controller = new Controller(document.getElementById('canvas'));
controller.populate(GAME_RULES.dotInitialPopularion);
controller.renderDots();
controller.renderLines();

function gameLoop() {
    if (flagPlay) {
        const population = controller.updateDots();
        controller.renderDots();
        if (population < GAME_RULES.dotInitialPopularion)
            controller.rePopulate(GAME_RULES.dotInitialPopularion - population);

        controller.renderLines();
    }
}

setInterval(gameLoop, 30); 