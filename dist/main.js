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

/***/ "./src/circle.html":
/*!*************************!*\
  !*** ./src/circle.html ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<svg class=\\\"dot\\\" data-dir=\\\"0\\\">\\r\\n    <circle fill=\\\"white\\\" r=\\\"2.5\\\" cx=\\\"5\\\" cy=\\\"5\\\"></circle>\\r\\n</svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://dots/./src/circle.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Controller.js */ \"./src/js/Controller.js\");\n\r\n\r\nconst controller = new _js_Controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('canvas'));\r\n\r\nconst q = 15;\r\ncontroller.populate(q);\r\n\r\nfunction gameLoop() {\r\n    const population = controller.update();\r\n    if (population < q)\r\n        controller.populate(1);\r\n\r\n}\r\n\r\nsetInterval(gameLoop, 30); \n\n//# sourceURL=webpack://dots/./src/index.js?");

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _Dot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dot.js */ \"./src/js/Dot.js\");\n/* harmony import */ var _circle_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../circle.html */ \"./src/circle.html\");\n\r\n\r\n\r\nconst QUANTITY = 10;\r\n\r\nclass Controller {\r\n    constructor(target) {\r\n        this.canvas = {\r\n            element: target,\r\n            witdh: target.clientWidth,\r\n            height: target.clientHeight\r\n        };\r\n\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n\r\n    }\r\n\r\n    createDot() {\r\n        const x = Math.round(Math.random() * this.canvas.witdh);\r\n        const y = Math.round(Math.random() * this.canvas.height);\r\n        const dir = Math.round(Math.random() * 360);\r\n\r\n        const dot = new _Dot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, dir);\r\n        const dotElem = document.createElement('svg');\r\n        dotElem.classList.add('dot');\r\n        dotElem.innerHTML = _circle_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n        this.canvas.element.appendChild(dotElem);\r\n\r\n        dotElem.dataset.dir = dot.dir;\r\n        dotElem.dataset.speed = dot.speed;\r\n\r\n        dotElem.style.left = dot.x + 'px';\r\n        dotElem.style.top = dot.y + 'px';\r\n\r\n\r\n    }\r\n\r\n    populate(n = QUANTITY) {\r\n        for (let i = 1; i <= n; i++) {\r\n            this.createDot();\r\n        }\r\n    }\r\n\r\n    update() {\r\n        const dotsElem = Array.from(this.canvas.element.children);\r\n\r\n        dotsElem.forEach(dotElem => {\r\n            const dot = new _Dot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n                +dotElem.style.left.slice(0, -2),\r\n                +dotElem.style.top.slice(0, -2),\r\n                +dotElem.dataset.dir,\r\n                +dotElem.dataset.speed);\r\n\r\n            if (dot.update(this.canvas.witdh, this.canvas.height) === 0) {\r\n                dotElem.remove();\r\n            } else {\r\n                dotElem.style.left = dot.x + 'px';\r\n                dotElem.style.top = dot.y + 'px';\r\n            }\r\n        });\r\n\r\n        return dotsElem.length;\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Controller.js?");

/***/ }),

/***/ "./src/js/Dot.js":
/*!***********************!*\
  !*** ./src/js/Dot.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dot)\n/* harmony export */ });\nclass Dot {\r\n    /**\r\n     * \r\n     * @param {number} x \r\n     * @param {number} y \r\n     * @param {number} dir 0~360\r\n     */\r\n    constructor(x, y, dir, speed = (Math.random() * 2 + 1)) {\r\n        this.x = x;\r\n        this.y = y;\r\n\r\n        this.dir = dir;\r\n        this.speed = speed;\r\n    }\r\n\r\n    update(canvasWidth, canvasHeight) {\r\n        this.move();\r\n\r\n        if ((this.x < -5 || this.x > canvasWidth + 5) || (this.y < -5 || this.y > canvasHeight + 5)) {\r\n            return 0;\r\n        } else {\r\n            return 1;\r\n        }\r\n    }\r\n\r\n    move() {\r\n        const movX = Math.cos(this.dir) * this.speed;\r\n        const movY = Math.sin(this.dir) * this.speed;\r\n\r\n        this.x += movX;\r\n        this.y += movY;\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Dot.js?");

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