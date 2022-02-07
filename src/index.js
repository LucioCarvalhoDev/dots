import Controller from "./js/Controller.js";

export const GAME_RULES = {
    dotDistanceToDie: 200,
    dotPopulation: 20,
    lineMaxLenght: 200

};

// config ui controls
const controls = document.querySelector('.ui_cntrls');
document.querySelector('.ui_sensor_open').onclick = () => {
    controls.classList.toggle('off');
};

// update GAME_RULES
const iptPopulation = document.getElementById('ipt-population');
iptPopulation.value = GAME_RULES.dotPopulation;
iptPopulation.onchange = e => {
    GAME_RULES.dotPopulation = e.target.value;
};
const iptLines = document.getElementById('ipt-lines');
iptLines.value = GAME_RULES.lineMaxLenght;
iptLines.onchange = e => {
    GAME_RULES.lineMaxLenght = +e.target.value;
}

// play and pause
let flagPlay = true;
document.querySelector('.play').onclick = () => {
    flagPlay = !flagPlay;
};

const controller = new Controller(document.getElementById('canvas'));
const screen = document.querySelector('body');
controller.populate(GAME_RULES.dotPopulation);
controller.renderDots();
controller.renderLines();

function gameLoop() {
    controller.display(screen.clientWidth, screen.clientHeight);
    if (flagPlay) {
        const population = controller.updateDots();
        if (population < GAME_RULES.dotPopulation)
            controller.rePopulate(GAME_RULES.dotPopulation - population);
    }
    controller.renderDots();
    controller.renderLines();
}

setInterval(gameLoop, 30); 