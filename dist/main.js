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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GAME_RULES\": () => (/* binding */ GAME_RULES)\n/* harmony export */ });\n/* harmony import */ var _js_Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Controller.js */ \"./src/js/Controller.js\");\n\n\nconst GAME_RULES = {\n    distanceToDie: 200,\n    initialPopulation: 30\n};\n\nlet flagPlay = false;\n\nconst play = document.querySelector('.play');\nplay.onclick = () => {\n    flagPlay = !flagPlay;\n};\n\nconst controller = new _js_Controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('canvas'));\ncontroller.populate(GAME_RULES.initialPopulation);\ncontroller.renderDots();\ncontroller.renderLines();\n\nfunction gameLoop() {\n    if (flagPlay) {\n        const population = controller.renderDots();\n        if (population < GAME_RULES.initialPopulation)\n            controller.rePopulate(1);\n\n        controller.renderLines();\n        // controller.debugRenderLine();\n    }\n}\n\nsetInterval(gameLoop, 30); \n\n//# sourceURL=webpack://dots/./src/index.js?");

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _Dot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dot.js */ \"./src/js/Dot.js\");\n/* harmony import */ var _Drafter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drafter.js */ \"./src/js/Drafter.js\");\n/* harmony import */ var _helper_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/_math.js */ \"./src/js/helper/_math.js\");\n\n\n\n\n\nconst QUANTITY = 10;\n\nclass Controller {\n    constructor(target) {\n        this.canvas = {\n            element: target,\n            witdh: target.clientWidth,\n            height: target.clientHeight\n        };\n\n        this.drafter = new _Drafter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.canvas.element);\n\n        this.dots = [];\n\n        this.init();\n    }\n\n    init() {\n\n    }\n\n    createDot(posX = undefined, posY = undefined, mvDir = undefined, mvSpd = undefined) {\n        const x = posX || _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie, this.canvas.witdh + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie);\n        const y = posY || _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie, this.canvas.height + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie);\n        const dir = mvDir || Math.round(Math.random() * 360);\n        const spd = mvSpd || Math.random() * 2 + 0.1;\n\n        const dot = new _Dot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, dir, spd);\n        this.dots.push(dot);\n    }\n\n    rePopulate() {\n        const xRange = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.choose(\n            [-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie, 0],\n            [this.canvas.witdh, this.canvas.witdh + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie]\n        );\n\n        const yRange = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.choose(\n            [-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie, 0],\n            [this.canvas.height, this.canvas.height + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie]\n        );\n\n        const x = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(...xRange);\n        const y = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(...yRange);\n\n        this.createDot(x, y);\n    }\n\n    populate(n = QUANTITY) {\n        for (let i = 1; i <= n; i++) {\n            this.createDot();\n        }\n    }\n\n    updateDots() {\n        this.dots.forEach((dot, idx) => {\n            if (!dot.update(this.canvas.witdh, this.canvas.height)) {\n                delete this.dots[idx];\n            }\n        });\n    }\n\n    renderDots() {\n        this.drafter.brush.clearRect(0, 0, this.canvas.witdh, this.canvas.height);\n        this.dots.forEach((dot, idx) => {\n            if (dot.update(this.canvas.witdh, this.canvas.height)) {\n                let color = \"#ffffff\";\n                // if (dot == this.dots[0]) {\n                //     color = \"#ff0000\";\n                // }\n                this.drafter.dot(dot.x, dot.y, color);\n            } else {\n                delete this.dots[idx];\n            }\n        });\n\n        this.dots = this.dots.filter(d => d);\n        return this.dots.length;\n    }\n\n    renderLines() {\n        this.dots.forEach(startDot => {\n            const others = this.dots.filter(d => d != startDot);\n            // startDot.checkCol([].concat(this.dots));\n            others.forEach(endDot => {\n                this.drafter.line(startDot.x, startDot.y, endDot.x, endDot.y);\n            });\n        });\n    }\n\n    debugRenderLine() {\n        const startDot = this.dots[0];\n        startDot.checkCol([].concat(this.dots));\n        startDot.connections.forEach(endDot => {\n            this.drafter.line(startDot.x, startDot.y, endDot.x, endDot.y);\n        });\n    }\n}\n\n//# sourceURL=webpack://dots/./src/js/Controller.js?");

/***/ }),

/***/ "./src/js/Dot.js":
/*!***********************!*\
  !*** ./src/js/Dot.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dot)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\nclass Dot {\n    /**\n     * \n     * @param {number} x \n     * @param {number} y \n     * @param {number} dir 0~360\n     */\n    constructor(x, y, dir, speed) {\n        this.x = x;\n        this.y = y;\n\n        this.dir = dir;\n        this.speed = speed;\n    }\n\n    update(canvasWidth, canvasHeight) {\n        this.move();\n\n        if ((this.x < -_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie || this.x > canvasWidth + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie) || (this.y < -_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie || this.y > canvasHeight + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.distanceToDie)) {\n            return 0;\n        } else {\n            return 1;\n        }\n    }\n\n    _distanceTo(x, y) {\n        let c1 = this.x - x;\n        let c2 = this.y - y;\n        let d = Math.sqrt(c1 ** 2 + c2 ** 2);\n        return d;\n    }\n\n    _degToRad(deg) {\n        return deg * (Math.PI / 180);\n    }\n\n    move() {\n        const movX = Math.cos(this._degToRad(this.dir)) * this.speed;\n        const movY = Math.sin(this._degToRad(this.dir)) * this.speed;\n\n        this.x += movX;\n        this.y += movY;\n    }\n}\n\n//# sourceURL=webpack://dots/./src/js/Dot.js?");

/***/ }),

/***/ "./src/js/Drafter.js":
/*!***************************!*\
  !*** ./src/js/Drafter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drafter)\n/* harmony export */ });\nclass Drafter {\n    constructor(canvas) {\n        this.canvas = canvas;\n\n        this.brush = this.canvas.getContext(\"2d\");\n    }\n\n    dot(x, y, color = \"#ffffff\") {\n        this.brush.beginPath();\n\n        this.brush.arc(x, y, 2.5, 0, Math.PI * 2);\n        this.brush.fillStyle = color;\n        this.brush.fill();\n\n        this.brush.closePath();\n    }\n\n    line(ax, ay, bx, by) {\n\n        const c1 = ax - bx;\n        const c2 = ay - by;\n        const distance = Math.round(Math.sqrt(c1 ** 2 + c2 ** 2));\n        let trans = 200 - distance;\n        if (trans < 0)\n            trans = 0;\n\n        trans = trans == 0 ? '00' : Number(trans).toString(16);\n\n        this.brush.beginPath();\n\n        this.brush.moveTo(ax, ay);\n        this.brush.lineTo(bx, by);\n\n        // Fill with gradient\n        // console.log(trans);\n        const color = \"#ffffff\" + trans;\n\n        this.brush.strokeStyle = color;\n        this.brush.stroke();\n\n        this.brush.closePath();\n    }\n}\n\n//# sourceURL=webpack://dots/./src/js/Drafter.js?");

/***/ }),

/***/ "./src/js/helper/_math.js":
/*!********************************!*\
  !*** ./src/js/helper/_math.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_math\": () => (/* binding */ _math)\n/* harmony export */ });\nconst _math = {\n    choose: (...options) => {\n        return options[Math.round(Math.random() * (options.length - 1))];\n    },\n    numberBetween: (...range) => {\n        const max = Math.max(...range);\n        const min = Math.min(...range);\n        // console.log(range, max, min);\n        return Math.random() * (max - min) + min;\n    }\n}\n\n//# sourceURL=webpack://dots/./src/js/helper/_math.js?");

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