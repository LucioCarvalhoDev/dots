import './css/styles.css';

import CanvasController from "./js/controllers/CanvasController.js";
import UiController from "./js/controllers/UiController.js";

export const GAME_RULES = {
    dotDistanceToDie: 200,
    dotPopulation: localStorage.getItem('dotPopulation') || 35,
    lineMaxLenght: localStorage.getItem('lineMaxLenght') || 255

};

// update GAME_RULES
const iptPopulation = document.getElementById('ipt-population');
iptPopulation.value = GAME_RULES.dotPopulation;
iptPopulation.onchange = e => {
    GAME_RULES.dotPopulation = e.target.value;
    localStorage.setItem('dotPopulation', e.target.value);
};
const iptLines = document.getElementById('ipt-lines');
iptLines.value = GAME_RULES.lineMaxLenght;
iptLines.onchange = e => {
    GAME_RULES.lineMaxLenght = +e.target.value;
    localStorage.setItem('lineMaxLenght', +e.target.value);
};

// set ui
const ui = new UiController();
document.querySelector('.ui_sensor_open').onclick = ui.manageControls.bind(ui);

// play and pause
let flagPlay = true;
document.querySelector('.play').onclick = () => {
    flagPlay = !flagPlay;
};

// set canvas
const canvas = new CanvasController(document.getElementById('canvas'));
const screen = document.querySelector('body');
canvas.display(screen.clientWidth, screen.clientHeight);
// canvas.populate(GAME_RULES.dotPopulation);
canvas.createDot(200, 200);
canvas.createDot(300, 200);
canvas.renderDots();
canvas.renderLines();

function gameLoop() {
    canvas.display(screen.clientWidth, screen.clientHeight);
    if (flagPlay) {
        const population = canvas.updateDots();
        if (population < GAME_RULES.dotPopulation)
            canvas.rePopulate(GAME_RULES.dotPopulation - population);
    }
    canvas.renderDots();
    canvas.renderLines();
}

// setInterval(gameLoop, 30); 