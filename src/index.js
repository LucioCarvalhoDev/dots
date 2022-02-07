import Controller from "./js/Controller.js";

export const GAME_RULES = {
    dotDistanceToDie: 200,
    dotInitialPopularion: 20,
    lineMaxLenght: 200

};

const controls = document.querySelector('.ui_cntrls');
document.querySelector('.ui_sensor_open').onclick = () => {
    controls.classList.toggle('off')
}

let flagPlay = true;
document.querySelector('.play').onclick = () => {
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