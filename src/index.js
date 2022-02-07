import Controller from "./js/Controller.js";

export const GAME_RULES = {
    dotDistanceToDie: 200,
    dotInitialPopularion: 20,
    lineMaxLenght: 200

};

let flagPlay = true;

const play = document.querySelector('.play');
play.onclick = () => {
    flagPlay = !flagPlay;
};

const controller = new Controller(document.getElementById('canvas'));
const screen = document.querySelector('body');
controller.populate(GAME_RULES.dotInitialPopularion);
controller.renderDots();
controller.renderLines();

function gameLoop() {
    controller.display(screen.clientWidth, screen.clientHeight);
    if (flagPlay) {
        const population = controller.updateDots();

        if (population < GAME_RULES.dotInitialPopularion)
            controller.rePopulate(GAME_RULES.dotInitialPopularion - population);
    }
    controller.renderDots();
    controller.renderLines();
}

setInterval(gameLoop, 30); 