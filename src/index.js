import CanvasController from 'dots-galaxy';
import './css/styles.css';
import UiController from './js/controllers/UiController.js';


const GAME_RULES = {
    screenMargin: 5,
    dotColor: "#ffffff",
    dotFade: false,
    lineColor: "#ffffff",
    lineFade: false,
    dotPopulation: 100,
    lineMaxLenght: 0,
    dotBornMode: 'anywere'
};


for (const rule in GAME_RULES) {
    try {
        const ipt = document.getElementById(rule);
        if (ipt.type == 'checkbox') {
            ipt.checked = GAME_RULES[rule];
        } else {             
            ipt.value = GAME_RULES[rule];
        }     
    } catch {}
}


// set ui
const ui = new UiController();
document.querySelector('.ui_sensor_open').onclick = ui.manageControls.bind(ui);

// play and pause
let flagPlay = true;
document.querySelector('.play').onclick = () => {
    flagPlay = !flagPlay;
};
    
    // set canvas
const canvas = new CanvasController(document.getElementById('canvas'), GAME_RULES);
const screen = document.querySelector('body');
canvas.display(screen.clientWidth, screen.clientHeight);
canvas.populate(GAME_RULES.dotPopulation);
canvas.renderDots();
canvas.renderLines();

const form = document.querySelector('.ui_menu_settings');
form.onchange = (e) => {
    let settings;

    if (e.target.type === "checkbox") {
        settings = {[e.target.id]: e.target.checked};
    } else {
        settings = {[e.target.id]: +e.target.value || e.target.value};
    }

    canvas.setRules(settings);
}

function gameLoop() {
    canvas.display(screen.clientWidth, screen.clientHeight);
    if (flagPlay) {
        const population = canvas.updateDots();
        if (population <= canvas._rules.dotPopulation) {
            canvas.rePopulate(canvas._rules.dotPopulation - population);
        } else {
            canvas.kill(population - canvas._rules.dotPopulation);
        }
    }
    canvas.renderDots();
    canvas.renderLines();
}

setInterval(gameLoop, 10);