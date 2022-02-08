export default class UiController {
    constructor() {
        this.sensor = document.querySelector('.ui_sensor');
        this.controls = document.querySelector('.ui_cntrls');

        this.cntrlsState = false;
    }

    _setCntrlsVisibility(bool) {
        if (bool) {
            this.sensor.classList.add('visible');
        } else {
            this.sensor.classList.remove('visible');
        }
    }

    manageControls() {
        const state = this.controls.classList.toggle('on');
        this._setCntrlsVisibility(state);

    }
}