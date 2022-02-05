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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Controller.js */ \"./src/js/Controller.js\");\n\r\n\r\nconst controller = new _js_Controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('canvas'));\r\n\r\nconst q = 100;\r\ncontroller.populate(q);\r\ncontroller.renderDots();\r\n\r\nfunction gameLoop() {\r\n    const population = controller.renderDots();\r\n    if (population < q)\r\n        controller.populate(1);\r\n\r\n    controller.renderLines();\r\n\r\n}\r\n\r\nsetInterval(gameLoop, 30); \n\n//# sourceURL=webpack://dots/./src/index.js?");

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _Dot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dot.js */ \"./src/js/Dot.js\");\n/* harmony import */ var _Drafter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drafter.js */ \"./src/js/Drafter.js\");\n\r\n\r\n\r\nconst QUANTITY = 10;\r\n\r\nclass Controller {\r\n    constructor(target) {\r\n        this.canvas = {\r\n            element: target,\r\n            witdh: target.clientWidth,\r\n            height: target.clientHeight\r\n        };\r\n\r\n        this.drafter = new _Drafter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas.element);\r\n\r\n        this.dots = [];\r\n\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n\r\n    }\r\n\r\n    createDot() {\r\n        const x = Math.round(Math.random() * this.canvas.witdh);\r\n        const y = Math.round(Math.random() * this.canvas.height);\r\n        const dir = Math.round(Math.random() * 360);\r\n\r\n        const dot = new _Dot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, dir);\r\n        this.dots.push(dot);\r\n    }\r\n\r\n    populate(n = QUANTITY) {\r\n        for (let i = 1; i <= n; i++) {\r\n            this.createDot();\r\n        }\r\n    }\r\n\r\n    renderDots() {\r\n        this.drafter.brush.clearRect(0, 0, this.canvas.witdh, this.canvas.height);\r\n        this.dots.forEach((dot, idx) => {\r\n            if (dot.update(this.canvas.witdh, this.canvas.height)) {\r\n                this.drafter.dot(dot.x, dot.y);\r\n            } else {\r\n                delete this.dots[idx];\r\n            }\r\n        });\r\n\r\n        this.dots = this.dots.filter(d => d);\r\n        return this.dots.length;\r\n    }\r\n\r\n    renderLines() {\r\n\r\n        this.dots.forEach(startDot => {\r\n            startDot.checkCol([].concat(this.dots));\r\n            this.drafter.line(startDot.x, startDot.y, startDot.connections[0].x, startDot.connections[0].y);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Controller.js?");

/***/ }),

/***/ "./src/js/Dot.js":
/*!***********************!*\
  !*** ./src/js/Dot.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dot)\n/* harmony export */ });\nclass Dot {\r\n    /**\r\n     * \r\n     * @param {number} x \r\n     * @param {number} y \r\n     * @param {number} dir 0~360\r\n     */\r\n    constructor(x, y, dir, speed = (Math.random() * 2 + 0.5)) {\r\n        this.x = x;\r\n        this.y = y;\r\n\r\n        this.connections = [];\r\n\r\n        this.dir = dir;\r\n        this.speed = speed;\r\n    }\r\n\r\n    update(canvasWidth, canvasHeight) {\r\n        this.move();\r\n\r\n        if ((this.x < -5 || this.x > canvasWidth + 5) || (this.y < -5 || this.y > canvasHeight + 5)) {\r\n            return 0;\r\n        } else {\r\n            return 1;\r\n        }\r\n    }\r\n\r\n    checkCol(dots) {\r\n        if (this.connections.length == 0) {\r\n            this.connections = [new Dot(Infinity, Infinity, 0, 1)];\r\n        }\r\n        dots.forEach(dot => {\r\n            if (dot == this) {\r\n                return;\r\n            } else {\r\n                const distance = this._distanceTo(dot.x, dot.y);\r\n                const connectedDistances = this.connections.map(connectedDot => connectedDot._distanceTo(this.x, this.y));\r\n                const smallestConnectedDistance = Math.min(...connectedDistances);\r\n                if (distance < smallestConnectedDistance) {\r\n                    const idToSub = connectedDistances.indexOf(smallestConnectedDistance);\r\n                    this.connections[idToSub] = dot;\r\n                }\r\n            }\r\n        });\r\n        // console.log(this.connections[0]);\r\n    }\r\n\r\n    _distanceTo(x, y) {\r\n        let c1 = this.x - x;\r\n        let c2 = this.y - y;\r\n        let d = Math.sqrt(c1 ** 2 + c2 ** 2);\r\n        return d;\r\n    }\r\n\r\n    move() {\r\n        const movX = Math.cos(this.dir) * this.speed;\r\n        const movY = Math.sin(this.dir) * this.speed;\r\n\r\n        this.x += movX;\r\n        this.y += movY;\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Dot.js?");

/***/ }),

/***/ "./src/js/Drafter.js":
/*!***************************!*\
  !*** ./src/js/Drafter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drafter)\n/* harmony export */ });\nclass Drafter {\r\n    constructor(canvas) {\r\n        this.canvas = canvas;\r\n\r\n        this.brush = this.canvas.getContext(\"2d\");\r\n    }\r\n\r\n    dot(x, y) {\r\n        this.brush.beginPath();\r\n\r\n        this.brush.arc(x, y, 2.5, 0, Math.PI * 2);\r\n        this.brush.fillStyle = \"#ffffff\";\r\n        this.brush.fill();\r\n\r\n        this.brush.closePath();\r\n    }\r\n\r\n    line(ax, ay, bx, by) {\r\n        this.brush.beginPath();\r\n\r\n        this.brush.moveTo(ax, ay);\r\n        this.brush.lineTo(bx, by);\r\n\r\n        // Fill with gradient\r\n        this.brush.strokeStyle = \"#ffffff20\";\r\n        this.brush.stroke();\r\n\r\n        this.brush.closePath();\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Drafter.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;