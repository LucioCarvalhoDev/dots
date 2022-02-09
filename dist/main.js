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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    width: 100vw;\\r\\n    height: 100vh;;\\r\\n    margin: 0px;\\r\\n    overflow: hidden;\\r\\n    background: black;\\r\\n}\\r\\n\\r\\n* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n#canvas {\\r\\n    /* width: 100vw;\\r\\n    height: 100vh; */\\r\\n    overflow: hidden;\\r\\n    background: linear-gradient(rgba(175, 37, 164, 0.616), rgba(0, 0, 104, 0.664));\\r\\n}\\r\\n\\r\\n.dot {\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n.ui {\\r\\n    position: absolute;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    background: transparent;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n}\\r\\n\\r\\n.ui_sensor {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    position: absolute;\\r\\n    background: transparent;\\r\\n    border-radius: 100%;\\r\\n    width: 100vw;\\r\\n    height: 300px;\\r\\n    transform: x;\\r\\n    top: -100px;\\r\\n}\\r\\n\\r\\n.ui_sensor.visible > *,\\r\\n.ui_sensor:hover > * {\\r\\n    opacity: 90% !important;\\r\\n}\\r\\n\\r\\n@keyframes fade {\\r\\n    0% {\\r\\n        opacity: 90%;\\r\\n    }\\r\\n    70% {\\r\\n        opacity: 90%;\\r\\n    }\\r\\n    to {\\r\\n        opacity: 0%;\\r\\n    }\\r\\n}\\r\\n\\r\\n.ui_sensor_open {\\r\\n    opacity: 0%;\\r\\n    color: rgb(255, 255, 255);\\r\\n    position: absolute;\\r\\n    top: 110px;\\r\\n    background: transparent;\\r\\n    border: none;\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    transition: all 1s;\\r\\n    animation: fade 4s;\\r\\n}\\r\\n\\r\\n.ui_sensor_open:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.ui_sensor_open:focus {\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.ui_sensor_open > i {\\r\\n    font-size: 2rem\\r\\n}\\r\\n\\r\\n.ui_cntrls {\\r\\n    position: relative;\\r\\n    top: 60px;\\r\\n    display: grid;\\r\\n    row-gap: 5px;\\r\\n    grid-template-areas: \\r\\n        \\\"r1\\\" \\\"r2\\\" \\\"r3\\\";\\r\\n    border-radius: 15px;\\r\\n    padding: 15px;\\r\\n    background: #fdfdfd;\\r\\n    opacity: 90%;\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.ui_cntrls.on {\\r\\n    display: block;\\r\\n    animation: fade 1s reverse;\\r\\n}\\r\\n\\r\\n.play {\\r\\n    grid-area: r1;\\r\\n    margin: 0px auto;\\r\\n    border-style: solid;\\r\\n    border-width: 15px 0px 15px 30px;\\r\\n    box-sizing: border-box;\\r\\n    background-color: transparent;\\r\\n    border-color: transparent transparent transparent #202020;\\r\\n}\\r\\n\\r\\n.play:hover {\\r\\n    cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dots/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dots/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dots/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dots/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dots/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dots/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dots/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dots/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dots/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dots/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GAME_RULES\": () => (/* binding */ GAME_RULES)\n/* harmony export */ });\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _js_controllers_CanvasController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/controllers/CanvasController.js */ \"./src/js/controllers/CanvasController.js\");\n/* harmony import */ var _js_controllers_UiController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/controllers/UiController.js */ \"./src/js/controllers/UiController.js\");\n\r\n\r\n\r\n\r\n\r\nconst GAME_RULES = {\r\n    dotDistanceToDie: 200,\r\n    dotPopulation: localStorage.getItem('dotPopulation') || 35,\r\n    lineMaxLenght: localStorage.getItem('lineMaxLenght') || 255\r\n\r\n};\r\n\r\n// update GAME_RULES\r\nconst iptPopulation = document.getElementById('ipt-population');\r\niptPopulation.value = GAME_RULES.dotPopulation;\r\niptPopulation.onchange = e => {\r\n    GAME_RULES.dotPopulation = e.target.value;\r\n    localStorage.setItem('dotPopulation', e.target.value);\r\n};\r\nconst iptLines = document.getElementById('ipt-lines');\r\niptLines.value = GAME_RULES.lineMaxLenght;\r\niptLines.onchange = e => {\r\n    GAME_RULES.lineMaxLenght = +e.target.value;\r\n    localStorage.setItem('lineMaxLenght', +e.target.value);\r\n};\r\n\r\n// set ui\r\nconst ui = new _js_controllers_UiController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\ndocument.querySelector('.ui_sensor_open').onclick = ui.manageControls.bind(ui);\r\n\r\n// play and pause\r\nlet flagPlay = true;\r\ndocument.querySelector('.play').onclick = () => {\r\n    flagPlay = !flagPlay;\r\n};\r\n\r\n// set canvas\r\nconst canvas = new _js_controllers_CanvasController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById('canvas'));\r\nconst screen = document.querySelector('body');\r\ncanvas.display(screen.clientWidth, screen.clientHeight);\r\ncanvas.populate(GAME_RULES.dotPopulation);\r\ncanvas.renderDots();\r\ncanvas.renderLines();\r\n\r\nfunction gameLoop() {\r\n    canvas.display(screen.clientWidth, screen.clientHeight);\r\n    if (flagPlay) {\r\n        const population = canvas.updateDots();\r\n        if (population < GAME_RULES.dotPopulation)\r\n            canvas.rePopulate(GAME_RULES.dotPopulation - population);\r\n    }\r\n    canvas.renderDots();\r\n    canvas.renderLines();\r\n}\r\n\r\nsetInterval(gameLoop, 30); \n\n//# sourceURL=webpack://dots/./src/index.js?");

/***/ }),

/***/ "./src/js/Dot.js":
/*!***********************!*\
  !*** ./src/js/Dot.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dot)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\nclass Dot {\r\n    /**\r\n     * \r\n     * @param {number} x \r\n     * @param {number} y \r\n     * @param {number} dir 0~360\r\n     * @param {number} speed\r\n     */\r\n    constructor(x, y, dir, speed) {\r\n        this.x = x;\r\n        this.y = y;\r\n\r\n        this.dir = dir;\r\n        this.speed = speed;\r\n        // console.log(dir);\r\n    }\r\n\r\n    update(canvasWidth, canvasHeight) {\r\n        this.move();\r\n\r\n        if ((this.x < -_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie || this.x > canvasWidth + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie) || (this.y < -_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie || this.y > canvasHeight + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie)) {\r\n            return 0;\r\n        } else {\r\n            return 1;\r\n        }\r\n    }\r\n\r\n    _distanceTo(otherDot) {\r\n        let c1 = this.x - otherDot.x;\r\n        let c2 = this.y - otherDot.y;\r\n        let d = Math.sqrt(c1 ** 2 + c2 ** 2);\r\n        return d;\r\n    }\r\n\r\n    _degToRad(deg) {\r\n        return deg * (Math.PI / 180);\r\n    }\r\n\r\n    move() {\r\n        const movX = Math.cos(this._degToRad(this.dir)) * this.speed;\r\n        const movY = Math.sin(this._degToRad(this.dir)) * this.speed;\r\n\r\n        this.x += movX;\r\n        this.y += movY;\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Dot.js?");

/***/ }),

/***/ "./src/js/Drafter.js":
/*!***************************!*\
  !*** ./src/js/Drafter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drafter)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\nclass Drafter {\r\n    constructor(canvas) {\r\n        this.canvas = canvas;\r\n\r\n        this.brush = this.canvas.getContext(\"2d\");\r\n    }\r\n\r\n    dot(x, y, color = \"#ffffff\") {\r\n        this.brush.beginPath();\r\n\r\n        this.brush.arc(x, y, 2.5, 0, Math.PI * 2);\r\n        this.brush.fillStyle = color;\r\n        this.brush.fill();\r\n\r\n        this.brush.closePath();\r\n    }\r\n\r\n    line(dot1, dot2, opacity) {\r\n        this.brush.beginPath();\r\n\r\n        this.brush.moveTo(dot1.x, dot1.y);\r\n        this.brush.lineTo(dot2.x, dot2.y);\r\n\r\n        // Fill with gradient\r\n        const color = \"#ffffff\" + opacity;\r\n\r\n        this.brush.strokeStyle = color;\r\n        this.brush.stroke();\r\n\r\n        this.brush.closePath();\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/Drafter.js?");

/***/ }),

/***/ "./src/js/controllers/CanvasController.js":
/*!************************************************!*\
  !*** ./src/js/controllers/CanvasController.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CanvasController)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ \"./src/index.js\");\n/* harmony import */ var _Dot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dot.js */ \"./src/js/Dot.js\");\n/* harmony import */ var _Drafter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Drafter.js */ \"./src/js/Drafter.js\");\n/* harmony import */ var _helper_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/_math.js */ \"./src/js/helper/_math.js\");\n\r\n\r\n\r\n\r\n\r\nclass CanvasController {\r\n    constructor(target) {\r\n        this.canvas = {\r\n            element: target,\r\n            witdh: target.clientWidth,\r\n            height: target.clientHeight\r\n        };\r\n\r\n        this.drafter = new _Drafter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.canvas.element);\r\n\r\n        this.dots = [];\r\n    }\r\n\r\n    display(wid, hei) {\r\n        this.canvas.witdh = wid;\r\n        this.canvas.height = hei;\r\n\r\n        this.canvas.element.width = wid;\r\n        this.canvas.element.height = hei;\r\n    }\r\n\r\n    createDot(posX = undefined, posY = undefined, mvDir = undefined, mvSpd = undefined) {\r\n        const x = posX || _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie, this.canvas.witdh + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie);\r\n        const y = posY || _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie, this.canvas.height + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie);\r\n        const dir = mvDir === 0 ? mvDir : Math.round(Math.random() * 360);\r\n        const spd = mvSpd || Math.random() * 2 + 0.1;\r\n\r\n        const dot = new _Dot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, dir, spd);\r\n        this.dots.push(dot);\r\n    }\r\n\r\n    rePopulate(n = 1) {\r\n        for (let i = 1; i <= n; i++) {\r\n            const xRange = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.choose(\r\n                [-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie, 0],\r\n                [this.canvas.witdh, this.canvas.witdh + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie]\r\n            );\r\n\r\n            const yRange = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.choose(\r\n                [-_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie, 0],\r\n                [this.canvas.height, this.canvas.height + _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.dotDistanceToDie]\r\n            );\r\n\r\n            const x = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(...xRange);\r\n            const y = _helper_math_js__WEBPACK_IMPORTED_MODULE_3__._math.numberBetween(...yRange);\r\n\r\n            this.createDot(x, y);\r\n        }\r\n    }\r\n\r\n    populate(n = 1) {\r\n        for (let i = 1; i <= n; i++) {\r\n            this.createDot();\r\n        }\r\n    }\r\n\r\n    updateDots() {\r\n        this.dots.forEach((dot, idx) => {\r\n            if (!dot.update(this.canvas.witdh, this.canvas.height)) {\r\n                delete this.dots[idx];\r\n            }\r\n        });\r\n        this.dots = this.dots.filter(d => d);\r\n        return this.dots.length;\r\n    }\r\n\r\n    renderDots() {\r\n        this.drafter.brush.clearRect(0, 0, this.canvas.witdh, this.canvas.height);\r\n\r\n        const visibleDots = this.dots.filter(dot =>\r\n            dot.x >= - 5 && dot.x <= this.canvas.witdh + 5 &&\r\n            dot.y >= - 5 && dot.y <= this.canvas.height + 5\r\n        );\r\n        // console.log(visibleDots.length);\r\n        visibleDots.forEach(dot => {\r\n            const color = '#ffffff';\r\n            this.drafter.dot(dot.x, dot.y, color);\r\n        });\r\n\r\n\r\n        return visibleDots.length;\r\n    }\r\n\r\n    renderLines() {\r\n        const dotList = [].concat(this.dots);\r\n        const maxDistance = 255 * _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME_RULES.lineMaxLenght / 100;\r\n\r\n        // evita linhas repetidas\r\n        for (let i = 0; i < this.dots.length; i++) {\r\n            const dotStart = dotList.splice(0, 1)[0];\r\n            for (let j = i + 1; j < this.dots.length; j++) {\r\n                const dotEnd = this.dots[j];\r\n\r\n                const distance = dotStart._distanceTo(dotEnd);\r\n\r\n                if (distance < maxDistance) {\r\n                    const opacity = Number(Math.round(Math.abs((distance / maxDistance) - 1) * 255))\r\n                        .toString(16).padStart(2, '0');\r\n\r\n                    this.drafter.line(dotStart, dotEnd, opacity);\r\n                }\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://dots/./src/js/controllers/CanvasController.js?");

/***/ }),

/***/ "./src/js/controllers/UiController.js":
/*!********************************************!*\
  !*** ./src/js/controllers/UiController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UiController)\n/* harmony export */ });\nclass UiController {\r\n    constructor() {\r\n        this.sensor = document.querySelector('.ui_sensor');\r\n        this.button = document.querySelector('.ui_sensor_open');\r\n        this.controls = document.querySelector('.ui_cntrls');\r\n\r\n        this.cntrlsState = false;\r\n    }\r\n\r\n    _setCntrlsVisibility(bool) {\r\n        if (bool) {\r\n            this.sensor.classList.add('visible');\r\n        } else {\r\n            this.sensor.classList.remove('visible');\r\n        }\r\n    }\r\n\r\n    manageControls() {\r\n        let state;\r\n        if (this.controls.classList.contains('on')) {\r\n            this._setCntrlsVisibility(false);\r\n            state = false;\r\n            const animation = this.controls.animate([\r\n                { opacity: '90%' },\r\n                { opacity: '0%' }\r\n            ], {\r\n                duration: 500,\r\n                iterations: 1,\r\n                direction: 'normal',\r\n            });\r\n            animation.onfinish = () => {\r\n                this.controls.classList.remove('on');\r\n            };\r\n        } else {\r\n            this.controls.classList.add('on');\r\n            this._setCntrlsVisibility(true);\r\n            state = true;\r\n        }\r\n\r\n        this.button.animate([\r\n            { transform: 'rotate(0)' },\r\n            { transform: 'rotate(90deg)' }\r\n        ], {\r\n            duration: 500,\r\n            iterations: 1,\r\n            direction: state ? 'normal' : 'reverse',\r\n            fill: \"forwards\"\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://dots/./src/js/controllers/UiController.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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