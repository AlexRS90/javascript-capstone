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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/MarvelRegular-Dj83.ttf */ \"./src/assets/fonts/MarvelRegular-Dj83.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Captainmarvel-anm9.ttf */ \"./src/assets/fonts/Captainmarvel-anm9.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--marvel-blue);\\n  font-family: 'cpt-marvel', monospace;\\n  color: white;\\n}\\n\\n@font-face {\\n  font-family: marvel-logo;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n  font-family: cpt-marvel;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --marvel-red: #e23636;\\n  --marvel-brown: #504a4a;\\n  --marvel-blue: rgb(18, 17, 47);\\n  --marvel-orange: #f78f3f;\\n}\\n\\n.d-flex {\\n  display: flex;\\n}\\n\\n.logo-wrap {\\n  background-color: var(--marvel-red);\\n  display: flex;\\n  align-items: center;\\n  padding: 20px 16px 8px 20px;\\n}\\n\\n.logo {\\n  font-family: 'marvel-logo', monospace !important;\\n  font-size: 60px;\\n  color: white;\\n  padding: 0;\\n  margin: 0;\\n  letter-spacing: 2px;\\n}\\n\\n.nav-container {\\n  justify-content: space-between;\\n  padding: 12px 16px;\\n  background-color: var(--marvel-blue);\\n  box-shadow: 0 0 8px 0 var(--marvel-red);\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n}\\n\\n.nav-menu {\\n  list-style: none;\\n  justify-content: space-between;\\n  padding-left: 0;\\n  align-items: center;\\n}\\n\\n.nav-menu li {\\n  color: #fff;\\n  margin: 0 16px;\\n  cursor: pointer;\\n}\\n\\n.super-heroes-container {\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n.card-container {\\n  flex-direction: column;\\n  width: 25%;\\n  margin: 2.5%;\\n  background-color: var(--marvel-brown);\\n  padding: 1%;\\n  border-radius: 10px;\\n}\\n\\n.card-container img {\\n  border-radius: 10px;\\n}\\n\\n.card-info {\\n  justify-content: space-between;\\n}\\n\\n.main-btn {\\n  margin: 5px;\\n  padding: 6px;\\n  font-weight: 600;\\n  cursor: pointer;\\n}\\n\\n.main-btn:hover {\\n  background-color: var(--marvel-blue);\\n  color: white;\\n  border: 1px solid white;\\n}\\n\\n#footer {\\n  width: 100%;\\n  bottom: 0;\\n  padding: 16px;\\n  background: var(--marvel-orange);\\n}\\n\\n.overlay {\\n  position: fixed;\\n  height: 100vh;\\n  width: 100%;\\n  top: 0;\\n  backdrop-filter: blur(5px);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  z-index: 50;\\n}\\n\\n.content-rsvtn {\\n  width: 100%;\\n  max-width: 800px;\\n  height: 750px;\\n  background-color: white;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 24px;\\n  color: var(--marvel-blue);\\n  border-radius: 5px;\\n  position: relative;\\n  overflow-y: auto;\\n}\\n\\n.content-rsvtn h2 {\\n  padding: 0;\\n  margin: 0 0 24px 0;\\n  font-size: 28px;\\n}\\n\\n.content-rsvtn p {\\n  font-size: 18px;\\n}\\n\\n.content-rsvtn img {\\n  border-radius: 5px;\\n}\\n\\n.close-rsvtn {\\n  position: absolute;\\n  top: 16px;\\n  right: 16px;\\n  border: none;\\n  color: var(--marvel-red);\\n  background-color: transparent;\\n  padding: 8px 12px;\\n  border-radius: 8px;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n\\n.close-rsvtn:hover {\\n  background-color: var(--marvel-red);\\n  color: white;\\n}\\n\\n.fa-heart {\\n  color: var(--marvel-blue);\\n  width: 20px;\\n}\\n\\n.likes-container {\\n  padding-top: 5px;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.rsvtn-form {\\n  text-align: center;\\n  width: 75%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 16px;\\n}\\n\\n.rsvtn-form h2 {\\n  grid-column: 1 / 3;\\n  color: var(--marvel-brown);\\n}\\n\\n.rsvtn-form button {\\n  cursor: pointer;\\n  padding: 16px;\\n  grid-column: 1 / 3;\\n}\\n\\n.rsvtn-label {\\n  width: 100%;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.rsvtn-input {\\n  width: 100%;\\n  padding: 8px;\\n}\\n\\n.label-name {\\n  grid-column: 1 / 3;\\n}\\n\\n.rsvtns-list {\\n  list-style: none;\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  gap: 16px;\\n}\\n\\n.rsvtns-list h2 {\\n  grid-column: 1 / 4;\\n  color: var(--marvel-brown);\\n}\\n\\n.rsvtns-list li {\\n  color: white;\\n  padding: 4px;\\n  background-color: var(--marvel-brown);\\n  border-radius: 4px;\\n}\\n\\n.rsvtns-list li * {\\n  font-size: 14px;\\n  margin: 4px 0;\\n  padding: 0 0;\\n}\\n\\n#comment-input {\\n  display: flex;\\n  flex-direction: column;\\n  color: #000;\\n}\\n\\n#comment-input h3 {\\n  font-size: 25px;\\n}\\n\\n#comment-input input,\\n#comment-input textarea {\\n  padding: 10px 10px;\\n  margin: 10px 0;\\n}\\n\\n#comment-input textarea {\\n  padding: 30px 10px;\\n}\\n\\n#comment-input button {\\n  font-family: 'cpt-marvel', monospace;\\n  background-color: var(--marvel-red);\\n  border: none;\\n  color: #fff;\\n  margin: 0 200px;\\n  padding: 10px 10px;\\n}\\n\\n.single-comment {\\n  background-color: var(--marvel-blue);\\n  padding: 2px 10px;\\n  margin: 10px 0;\\n  border-radius: 8px;\\n  border: 1px solid #000;\\n}\\n\\n.single-comment p {\\n  font-size: 24px;\\n  color: #fff;\\n}\\n\\n.single-comment h4 {\\n  margin-left: 10px;\\n  color: #fff;\\n}\\n\\n.number-of-items {\\n  padding: 120px 0 0 16px;\\n  font-size: 20px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display-comments.js":
/*!*********************************!*\
  !*** ./src/display-comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments),\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments)\n/* harmony export */ });\nconst commentSection = document.createElement('div');\ncommentSection.id = 'comment-input';\nconst commentContainer = document.createElement('div');\nconst commentsHeading = document.createElement('h4');\nlet singleComment = document.createElement('div');\nlet commentHeader = document.createElement('p');\nlet commenter = document.createElement('h4');\ncommentContainer.classList = 'comment-container';\n\nconst listComments = (data) => {\n  commentContainer.innerHTML = '';\n\n  let comments;\n\n  comments = data;\n  commentsHeading.innerHTML = `${comments.length !== undefined ? comments.length : '0'} Comment(s)`;\n\n  if (comments.error !== undefined) {\n    comments = [];\n    const noComment = document.createElement('p');\n    noComment.innerHTML = 'No Comments Yet';\n    commentContainer.appendChild(noComment);\n  }\n\n  commentContainer.appendChild(commentsHeading);\n\n  comments.forEach((comment) => {\n    singleComment = document.createElement('div');\n    singleComment.classList = 'single-comment';\n    commentHeader = document.createElement('p');\n    commenter = document.createElement('h4');\n\n    commentHeader.innerHTML = `\"${comment.comment}\"`;\n    commenter.innerHTML = `~ ${comment.username}`;\n\n    singleComment.appendChild(commentHeader);\n    singleComment.appendChild(commenter);\n    commentContainer.appendChild(singleComment);\n  });\n};\n\nconst displayComments = async (characterId) => {\n  try {\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bJg0BJIh3l3Fd7AaCJp1/comments?item_id=${characterId}`;\n    const comments = await fetch(url);\n    const result = await comments.json();\n    return result;\n  } catch (e) {\n    return e;\n  }\n};\n\nconst postComment = async (characterId, username, comment) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bJg0BJIh3l3Fd7AaCJp1/comments';\n  const sendObj = {\n    item_id: characterId,\n    username,\n    comment,\n  };\n  const postComment = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(sendObj),\n    headers: { 'Content-type': 'application/json; charset=UTF-8' },\n  });\n\n  const getUpdatedComments = await displayComments(characterId);\n  await listComments(getUpdatedComments);\n  return postComment;\n};\n\nconst comments = async (characterData) => {\n  const content = document.querySelector('.content-rsvtn');\n  commentSection.innerHTML = '';\n\n  const commentSecHeading = document.createElement('h3');\n  commentSecHeading.id = 'comment-heading';\n  commentSecHeading.innerHTML = `Write your comments/reviews of ${characterData.name}`;\n\n  const usernameInput = document.createElement('input');\n  usernameInput.placeholder = 'Your Name';\n  const commentInput = document.createElement('textarea');\n  commentInput.placeholder = 'Your Comment';\n\n  usernameInput.value = '';\n  commentInput.value = '';\n\n  const submitComment = document.createElement('button');\n  submitComment.innerHTML = 'Submit Comment';\n  submitComment.addEventListener('click', () => {\n    postComment(characterData.id, usernameInput.value, commentInput.value);\n    usernameInput.value = '';\n    commentInput.value = '';\n  });\n\n  const comments = await displayComments(characterData.id);\n\n  listComments(comments);\n\n  commentSection.appendChild(commentSecHeading);\n  commentSection.appendChild(usernameInput);\n  commentSection.appendChild(commentInput);\n  commentSection.appendChild(submitComment);\n  commentSection.appendChild(commentContainer);\n  content.appendChild(commentSection);\n};\n\n\n\n\n//# sourceURL=webpack://webpack/./src/display-comments.js?");

/***/ }),

/***/ "./src/display-item.js":
/*!*****************************!*\
  !*** ./src/display-item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-comments.js */ \"./src/display-comments.js\");\n/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-up.js */ \"./src/pop-up.js\");\n/* harmony import */ var _retrieve_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retrieve-item.js */ \"./src/retrieve-item.js\");\n\n\n\n\nconst displayItem = async (id) => {\n  const displayItem = await (0,_retrieve_item_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n  const charData = displayItem.data.results[0];\n  (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(charData);\n  (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_0__.comments)(charData);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItem);\n\n\n//# sourceURL=webpack://webpack/./src/display-item.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displaySHCards\": () => (/* binding */ displaySHCards),\n/* harmony export */   \"displayLike\": () => (/* binding */ displayLike)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _reservations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservations.js */ \"./src/reservations.js\");\n/* harmony import */ var _likes_involment_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes_involment_api.js */ \"./src/likes_involment_api.js\");\n/* harmony import */ var _testing_items_homepage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testing-items-homepage.js */ \"./src/testing-items-homepage.js\");\n/* harmony import */ var _marvel_api_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marvel-api-call */ \"./src/marvel-api-call.js\");\n/* harmony import */ var _display_item_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-item.js */ \"./src/display-item.js\");\n\n\n//eslint-disable-line\n\n\n//eslint-disable-line\n\n\nlet superHeroes = [];\nlet likesCounter = [];\n\nconst displaySHCards = (arraySuperH) => {\n  superHeroes = arraySuperH;\n  const message = 'Superheroes: ';\n  let newCard = '';\n  superHeroes.forEach((heroes) => {\n    newCard += `<div class=\"card-container d-flex\">\n    <img src=\"${heroes.thumbnail.path}/portrait_fantastic.${heroes.thumbnail.extension}\" alt=\"${heroes.name} pincture\">\n    <div class=\"d-flex card-info\">\n        <h3>${heroes.name}</h3>\n        <div class=\"likes-container d-flex\">\n            <i class=\"fas fa-heart\" id=\"like_${heroes.id}\"></i>\n            <p class=\"number-likes\" id=\"pLike_${heroes.id}\"></p>\n        </div>\n    </div>\n    <input type=\"button\" class=\"btn-comments main-btn\" value=\"Comments\" id=\"${heroes.id}\">\n    <input type=\"button\" class=\"btn-reservation main-btn\" value=\"Reservations\" id=\"${heroes.id}\">\n    </div>`;\n  });\n  document.querySelector('.super-heroes-container').innerHTML = newCard;\n  document.querySelector('.number-of-items').innerHTML = message + (0,_testing_items_homepage_js__WEBPACK_IMPORTED_MODULE_3__.countingCards)(superHeroes);\n};\n\nconst displayLike = (likeArray) => {\n  const singular = ' like';\n  const plural = ' likes';\n  likesCounter = likeArray;\n  setTimeout(() => {\n    document.querySelectorAll('.number-likes').forEach((like) => {\n      const getId = like.id;\n      likesCounter.forEach((find) => {\n        if (find.item_id.split('_', 2)[1] === getId.split('_', 2)[1]) {\n          if (find.likes === 1) {\n            like.innerHTML = find.likes + singular;\n          } else {\n            like.innerHTML = find.likes + plural;\n          }\n        }\n      });\n    });\n  }, 500);\n};\n\n(0,_marvel_api_call__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n_likes_involment_api_js__WEBPACK_IMPORTED_MODULE_2__.getLike();\n\nwindow.onload = setTimeout(() => {\n  document.querySelectorAll('.btn-reservation').forEach((el) => {\n    el.addEventListener('click', () => {\n      _reservations_js__WEBPACK_IMPORTED_MODULE_1__.create(el.id);\n    });\n  });\n\n  document.querySelectorAll('.btn-comments').forEach((el) => {\n    el.addEventListener('click', () => {\n      (0,_display_item_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(el.id);\n    });\n  });\n\n  document.querySelectorAll('.fa-heart').forEach((like) => {\n    like.addEventListener('click', () => {\n      like.style.color = 'red';\n      _likes_involment_api_js__WEBPACK_IMPORTED_MODULE_2__.giveLike(like.id);\n    });\n  });\n}, 1000);\n\n\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/likes_involment_api.js":
/*!************************************!*\
  !*** ./src/likes_involment_api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"giveLike\": () => (/* binding */ giveLike),\n/* harmony export */   \"getLike\": () => (/* binding */ getLike)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n//eslint-disable-line\n\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bJg0BJIh3l3Fd7AaCJp1/likes';\n\nconst getLike = async () => {\n  const checkLikes = await fetch(url);\n  const allLikes = await checkLikes.json();\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.displayLike)(allLikes);\n};\n\nconst giveLike = async (newLike) => {\n  await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: newLike,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  getLike();\n};\n\n\n\n//# sourceURL=webpack://webpack/./src/likes_involment_api.js?");

/***/ }),

/***/ "./src/marvel-api-call.js":
/*!********************************!*\
  !*** ./src/marvel-api-call.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n//eslint-disable-line\n\nconst url = 'https://gateway.marvel.com/v1/public/characters?ts=1&hash=cef440fde913b8756e1db19d5f18cd9e&apikey=580e7d5773a2965034fd7fcd3cad5f53';\nconst apiCall = async () => {\n  const call = await fetch(url);\n  const arr = await call.json();\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.displaySHCards)(arr.data.results);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiCall);\n\n//# sourceURL=webpack://webpack/./src/marvel-api-call.js?");

/***/ }),

/***/ "./src/pop-up.js":
/*!***********************!*\
  !*** ./src/pop-up.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popUp = (characterData) => {\n  const overlay = document.createElement('div');\n  overlay.classList.add('overlay');\n  const content = document.createElement('div');\n  content.classList.add('content-rsvtn');\n  const charName = document.createElement('h2');\n  charName.innerText = characterData.name;\n  const charDesc = document.createElement('p');\n  charDesc.innerText = characterData.description\n    || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu.';\n  const charPicture = document.createElement('img');\n  charPicture.src = `${characterData.thumbnail.path}/standard_fantastic.${characterData.thumbnail.extension}`;\n  const closeBtn = document.createElement('button');\n  closeBtn.innerText = 'X';\n  closeBtn.classList.add('close-rsvtn');\n  closeBtn.addEventListener('click', () => {\n    document.body.removeChild(overlay);\n  });\n\n  content.append(charName, charPicture, charDesc, closeBtn);\n\n  overlay.appendChild(content);\n  overlay.addEventListener('click', (e) => {\n    if (overlay !== e.target) return;\n    document.body.removeChild(overlay);\n  });\n  document.body.appendChild(overlay);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);\n\n\n//# sourceURL=webpack://webpack/./src/pop-up.js?");

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countRsvtns\": () => (/* binding */ countRsvtns),\n/* harmony export */   \"fillRsrvtns\": () => (/* binding */ fillRsrvtns),\n/* harmony export */   \"create\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up.js */ \"./src/pop-up.js\");\n\n\nconst appID = 'bJg0BJIh3l3Fd7AaCJp1';\n\nconst countRsvtns = (rsvtns) => `${rsvtns.length} ${rsvtns.length === 1 ? 'person' : 'people'} is being rescued by this Hero in the next days`;\n\nconst fillRsrvtns = async (id) => {\n  let rsvtns = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/reservations?item_id=${id}`).then((response) => response.json()).catch(() => []);\n  if (rsvtns.error) {\n    rsvtns = [];\n  }\n  const futureRsvtns = document.querySelector('.rsvtns-list');\n  futureRsvtns.innerHTML = '';\n  const rsvtnsCount = document.createElement('h2');\n  rsvtnsCount.innerText = countRsvtns(rsvtns);\n  futureRsvtns.appendChild(rsvtnsCount);\n  rsvtns.forEach((reservation) => {\n    const card = document.createElement('li');\n    card.innerHTML = `<p>${reservation.username}</p>\n    <p>From: ${reservation.date_start}</p>\n    <p>To: ${reservation.date_end}</p>`;\n    futureRsvtns.appendChild(card);\n  });\n};\n\nconst create = async (id) => {\n  const character = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&hash=cef440fde913b8756e1db19d5f18cd9e&apikey=580e7d5773a2965034fd7fcd3cad5f53`).then((response) => response.json());\n  const charData = character.data.results[0];\n  (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(charData);\n  const content = document.querySelector('.content-rsvtn');\n  const futureRsvtns = document.createElement('ul');\n  futureRsvtns.classList.add('rsvtns-list');\n  content.appendChild(futureRsvtns);\n  fillRsrvtns(id);\n  const rsvtnForm = document.createElement('form');\n  rsvtnForm.innerHTML = `<h2>Get rescued by this hero, Reserve Now!</h2>\n                          <label for=\"rsvtn-name\" class=\"rsvtn-label label-name\">\n                            <input class=\"rsvtn-input\" type=\"text\" placeholder=\"Your name\" required id=\"rsvtn-name\">\n                          </label>\n                          <label for=\"dateStart\" class=\"rsvtn-label\">\n                            <input class=\"rsvtn-input\" type=\"date\" min=\"2021-11-17\" required id=\"dateStart\">\n                          </label>\n                          <label for=\"dateEnd\" class=\"rsvtn-label\">\n                            <input class=\"rsvtn-input\" type=\"date\" min=\"2021-11-17\" required id=\"dateEnd\">\n                          </label>\n                          <button type=\"submit\">Rescue Me!</button>`;\n  rsvtnForm.classList.add('rsvtn-form');\n  rsvtnForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/reservations`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: document.querySelector('#rsvtn-name').value,\n        date_start: document.querySelector('#dateStart').value,\n        date_end: document.querySelector('#dateEnd').value,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    }).then(() => {\n      document.querySelector('#rsvtn-name').value = '';\n      document.querySelector('#dateStart').value = '';\n      document.querySelector('#dateEnd').value = '';\n      fillRsrvtns(id);\n    });\n  });\n  content.appendChild(rsvtnForm);\n};\n\n\n//# sourceURL=webpack://webpack/./src/reservations.js?");

/***/ }),

/***/ "./src/retrieve-item.js":
/*!******************************!*\
  !*** ./src/retrieve-item.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst retrieveItem = async (id) => {\n  const character = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&hash=cef440fde913b8756e1db19d5f18cd9e&apikey=580e7d5773a2965034fd7fcd3cad5f53`);\n  return character.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveItem);\n\n//# sourceURL=webpack://webpack/./src/retrieve-item.js?");

/***/ }),

/***/ "./src/testing-items-homepage.js":
/*!***************************************!*\
  !*** ./src/testing-items-homepage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countingCards\": () => (/* binding */ countingCards),\n/* harmony export */   \"hello\": () => (/* binding */ hello)\n/* harmony export */ });\nconst countingCards = (heroArray) => {\n  const allCards = heroArray.length;\n  return (allCards);\n};\n\nconst hello = () => {\n\n};\n\n\n\n//# sourceURL=webpack://webpack/./src/testing-items-homepage.js?");

/***/ }),

/***/ "./src/assets/fonts/Captainmarvel-anm9.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Captainmarvel-anm9.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5fc999d957a88d8067b.ttf\";\n\n//# sourceURL=webpack://webpack/./src/assets/fonts/Captainmarvel-anm9.ttf?");

/***/ }),

/***/ "./src/assets/fonts/MarvelRegular-Dj83.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/MarvelRegular-Dj83.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"329acb512a429ca2049d.ttf\";\n\n//# sourceURL=webpack://webpack/./src/assets/fonts/MarvelRegular-Dj83.ttf?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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