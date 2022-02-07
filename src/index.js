import CanvasController from "./js/controllers/CanvasController.js";

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

const canvas = new CanvasController(document.getElementById('canvas'));
const screen = document.querySelector('body');
canvas.populate(GAME_RULES.dotPopulation);
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

setInterval(gameLoop, 30); 