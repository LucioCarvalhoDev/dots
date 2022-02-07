/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GAME_RULES\": () => (/* binding */ GAME_RULES)\n/* harmony export */ });\n/* harmony import */ var _js_Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Controller.js */ \"./src/js/Controller.js\");\n\r\n\r\nconst GAME_RULES = {\r\n    dotDistanceToDie: 200,\r\n    dotInitialPopularion: 20,\r\n    lineMaxLenght: 200\r\n\r\n};\r\n\r\nlet flagPlay = true;\r\n\r\nconst play = document.querySelector('.play');\r\nplay.onclick = () => {\r\n    flagPlay = !flagPlay;\r\n};\r\n\r\nconst controller = new _js_Controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('canvas'));\r\nconst screen = document.querySelector('body');\r\ncontroller.populate(GAME_RULES.dotInitialPopularion);\r\ncontroller.renderDots();\r\ncontroller.renderLines();\r\n\r\nfunction gameLoop() {\r\n    controller.display(screen.clientWidth, screen.clientHeight);\r\n    if (flagPlay) {\r\n        const population = controller.updateDots();\r\n\r\n        if (population < GAME_RULES.dotInitialPopularion)\r\n            controller.rePopulate(GAME_RULES.dotInitialPopularion - population);\r\n    }\r\n    controller.renderDots();\r\n    controller.renderLines();\r\n}\r\n\r\nsetInterval(gameLoop, 30); \n\n//# sourceURL=webpack://dots/./src/index.js?");

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _Dot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dot.js */ \"./src/js/Dot.js\");\n/* harmony import */ var _Drafter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drafter.js */ \"./src/js/Drafter.js\");\n/* harmony import */ var _helper_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/_math.js */ \"./src/js/helper/_math.js\");\n\r\n\r\n\r\n\r\n\r\nclass Controller {\r\n    constructor(target) {\r\n        this.canvas = {\r\n            element: target,\r\n            witdh: target.clientWidth,\r\n            height: target.clientHeight\r\n        };\r\n\r\n        this.drafter = new _Drafter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.canvas.element);\r\n\r\n        this.dots = [];\r\n    }\r\n\r\n    display(wid, hei) {\r\n        this.canvas.witdh = wid;\r\n        this.canvas.height = hei;\r\n\r\n        this.canvas.element.width = wid;\r\n        this.canvas.element.height = hei;\r\n    }\r\n\r\n    createDot(posX = undefined, posY = undefined, mvDir = undefined, mvSpd = undefined) {\r\n        const x = posX || _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie, this.canvas.witdh + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie);\r\n        const y = posY || _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie, this.canvas.height + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie);\r\n        const dir = mvDir || Math.round(Math.random() * 360);\r\n        const spd = mvSpd || Math.random() * 2 + 0.1;\r\n\r\n        const dot = new _Dot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, dir, spd);\r\n        this.dots.push(dot);\r\n    }\r\n\r\n    rePopulate(n = 1) {\r\n        for (let i = 1; i <= n; i++) {\r\n            const xRange = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.choose(\r\n                [-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie, 0],\r\n                [this.canvas.witdh, this.canvas.witdh + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie]\r\n            );\r\n\r\n            const yRange = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.choose(\r\n                [-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie, 0],\r\n                [this.canvas.height, this.canvas.height + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie]\r\n            );\r\n\r\n            const x = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(...xRange);\r\n            const y = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(...yRange);\r\n\r\n            this.createDot(x, y);\r\n        }\r\n    }\r\n\r\n    populate(n = 1) {\r\n        for (let i = 1; i <= n; i++) {\r\n            this.createDot();\r\n        }\r\n    }\r\n\r\n    updateDots() {\r\n        this.dots.forEach((dot, idx) => {\r\n            if (!dot.update(this.canvas.witdh, this.canvas.height)) {\r\n                delete this.dots[idx];\r\n            }\r\n        });\r\n        this.dots = this.dots.filter(d => d);\r\n        return this.dots.length;\r\n    }\r\n\r\n    renderDots() {\r\n        this.drafter.brush.clearRect(0, 0, this.canvas.witdh, this.canvas.height);\r\n\r\n        const visibleDots = this.dots.filter(dot =>\r\n            dot.x >= - 5 && dot.x <= this.canvas.witdh + 5 &&\r\n            dot.y >= - 5 && dot.y <= this.canvas.height + 5\r\n        );\r\n        // console.log(visibleDots.length);\r\n        visibleDots.forEach(dot => {\r\n            const color = '#ffffff';\r\n            this.drafter.dot(dot.x, dot.y, color);\r\n        });\r\n\r\n\r\n        return visibleDots.length;\r\n    }\r\n\r\n    renderLines() {\r\n        this.dots.forEach(startDot => {\r\n            // array com todos os dots que devem ser ligados\r\n            const others = this.dots.filter(d => {\r\n                return d != startDot && d._distanceTo(startDot.x, startDot.y) <= _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.lineMaxLenght;\r\n            });\r\n\r\n            others.forEach(endDot => {\r\n                this.drafter.line(startDot.x, startDot.y, endDot.x, endDot.y);\r\n            });\r\n        });\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Controller.js?");

/***/ }),

/***/ "./src/js/Dot.js":
/*!***********************!*\
  !*** ./src/js/Dot.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dot)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\nclass Dot {\r\n    /**\r\n     * \r\n     * @param {number} x \r\n     * @param {number} y \r\n     * @param {number} dir 0~360\r\n     * @param {number} speed\r\n     */\r\n    constructor(x, y, dir, speed) {\r\n        this.x = x;\r\n        this.y = y;\r\n\r\n        this.dir = dir;\r\n        this.speed = speed;\r\n    }\r\n\r\n    update(canvasWidth, canvasHeight) {\r\n        this.move();\r\n\r\n        if ((this.x < -_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie || this.x > canvasWidth + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie) || (this.y < -_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie || this.y > canvasHeight + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie)) {\r\n            return 0;\r\n        } else {\r\n            return 1;\r\n        }\r\n    }\r\n\r\n    _distanceTo(x, y) {\r\n        let c1 = this.x - x;\r\n        let c2 = this.y - y;\r\n        let d = Math.sqrt(c1 ** 2 + c2 ** 2);\r\n        return d;\r\n    }\r\n\r\n    _degToRad(deg) {\r\n        return deg * (Math.PI / 180);\r\n    }\r\n\r\n    move() {\r\n        const movX = Math.cos(this._degToRad(this.dir)) * this.speed;\r\n        const movY = Math.sin(this._degToRad(this.dir)) * this.speed;\r\n\r\n        this.x += movX;\r\n        this.y += movY;\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Dot.js?");

/***/ }),

/***/ "./src/js/Drafter.js":
/*!***************************!*\
  !*** ./src/js/Drafter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drafter)\n/* harmony export */ });\nclass Drafter {\r\n    constructor(canvas) {\r\n        this.canvas = canvas;\r\n\r\n        this.brush = this.canvas.getContext(\"2d\");\r\n    }\r\n\r\n    dot(x, y, color = \"#ffffff\") {\r\n        this.brush.beginPath();\r\n\r\n        this.brush.arc(x, y, 2.5, 0, Math.PI * 2);\r\n        this.brush.fillStyle = color;\r\n        this.brush.fill();\r\n\r\n        this.brush.closePath();\r\n    }\r\n\r\n    line(ax, ay, bx, by) {\r\n\r\n        const c1 = ax - bx;\r\n        const c2 = ay - by;\r\n        const distance = Math.round(Math.sqrt(c1 ** 2 + c2 ** 2));\r\n        let trans = 255 - distance;\r\n        if (trans < 0)\r\n            trans = 0;\r\n\r\n        trans = trans == 0 ? '00' : Number(trans).toString(16);\r\n\r\n        this.brush.beginPath();\r\n\r\n        this.brush.moveTo(ax, ay);\r\n        this.brush.lineTo(bx, by);\r\n\r\n        // Fill with gradient\r\n        // console.log(trans);\r\n        const color = \"#ffffff\" + trans;\r\n\r\n        this.brush.strokeStyle = color;\r\n        this.brush.stroke();\r\n\r\n        this.brush.closePath();\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Drafter.js?");

/***/ }),

/***/ "./src/js/helper/_math.js":
/*!********************************!*\
  !*** ./src/js/helper/_math.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_math\": () => (/* binding */ _math)\n/* harmony export */ });\nconst _math = {\r\n    choose: (...options) => {\r\n        return options[Math.round(Math.random() * (options.length - 1))];\r\n    },\r\n    numberBetween: (...range) => {\r\n        const max = Math.max(...range);\r\n        const min = Math.min(...range);\r\n        // console.log(range, max, min);\r\n        return Math.random() * (max - min) + min;\r\n    },\r\n    distanceBetween: (ax, ay, bx, by) => {\r\n        let c1 = ax - bx;\r\n        let c2 = ay - by;\r\n        let d = Math.sqrt(c1 ** 2 + c2 ** 2);\r\n        return d;\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/helper/_math.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;