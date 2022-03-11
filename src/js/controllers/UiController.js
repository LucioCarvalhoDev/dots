/**
 * @module module:UiController
 */

export default class UiController {
    /**
     * @constructor
     */
    constructor() {
        this.sensor = document.querySelector('.ui_sensor');
        this.button = document.querySelector('.ui_sensor_open');
        this.controls = document.querySelector('.ui_menu');

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
        let state;
        if (this.controls.classList.contains('on')) {
            this._setCntrlsVisibility(false);
            state = false;
            const animation = this.controls.animate([
                { opacity: '90%' },
                { opacity: '0%' }
            ], {
                duration: 500,
                iterations: 1,
                direction: 'normal',
            });
            animation.onfinish = () => {
                this.controls.classList.remove('on');
            };
        } else {
            this.controls.classList.add('on');
            this._setCntrlsVisibility(true);
            state = true;
        }

        this.button.animate([
            { transform: 'rotate(0)' },
            { transform: 'rotate(90deg)' }
        ], {
            duration: 500,
            iterations: 1,
            direction: state ? 'normal' : 'reverse',
            fill: "forwards"
        });
    }
}