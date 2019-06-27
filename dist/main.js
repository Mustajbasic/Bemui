var bemui =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bemui/AppEngine.js":
/*!****************************!*\
  !*** ./bemui/AppEngine.js ***!
  \****************************/
/*! exports provided: AppEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppEngine\", function() { return AppEngine; });\nclass AppEngineClass {\n\n  constructor() {\n    this.components = {};\n    this.styles = '';\n  }\n\n  setPageTitle(title) {\n    document.title = title;\n    return this;\n  }\n\n  registerComponent(Component) {\n    this.components[Component.componentName] = Component;\n    return this;\n  }\n\n  registerStyle(style) {\n    this.styles += style;\n    return this;\n  }\n\n  applyStyle() {\n    const head = document.getElementsByTagName('head')[0];\n    const styleTag = `<style type=\"text/css\">${this.styles}</style>`\n    head.innerHTML = head.innerHTML + styleTag;\n    return this;\n  }\n\n\n  mountComponent(component, rootElementID) {\n    this.applyStyle();\n    document.getElementById(rootElementID).innerHTML = component.parse();\n  }\n  \n  mountRouter(router, rootElementID) {\n    this.applyStyle();\n    this.router = router;\n    this.router.mount(rootElementID);\n  }\n\n  loadRoute(route) {\n    this.router.loadRoute(route);\n  }\n}\n\nconst AppEngine = new AppEngineClass();\n\n\n//# sourceURL=webpack://bemui/./bemui/AppEngine.js?");

/***/ }),

/***/ "./bemui/Bemui.js":
/*!************************!*\
  !*** ./bemui/Bemui.js ***!
  \************************/
/*! exports provided: Component, Router, AppEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./bemui/Component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]; });\n\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router */ \"./bemui/Router.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return _Router__WEBPACK_IMPORTED_MODULE_1__[\"Router\"]; });\n\n/* harmony import */ var _AppEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppEngine */ \"./bemui/AppEngine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AppEngine\", function() { return _AppEngine__WEBPACK_IMPORTED_MODULE_2__[\"AppEngine\"]; });\n\n\n\n\n\n//# sourceURL=webpack://bemui/./bemui/Bemui.js?");

/***/ }),

/***/ "./bemui/Component.js":
/*!****************************!*\
  !*** ./bemui/Component.js ***!
  \****************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony import */ var _ParseHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParseHelper */ \"./bemui/ParseHelper.js\");\n\n\nclass Component {\n  constructor(componentName, template, props = {}) {\n    this.totalBoundElements = 0;\n    this.componentName = componentName;\n\n    this.scope = {};\n    for(const key in props) {\n      this.scope[key] = {\n        value: props[key],\n        boundElements: []\n      }\n    }\n    \n    this.template = template;\n  }\n\n  updateBoundElements(boundElements, value) {\n    boundElements.forEach(id => {\n      document.getElementById(id).innerHTML = value;\n    });\n  }\n\n  setUpdateTrigger(parentTrigger) {\n    this.parentTrigger = parentTrigger;\n  }\n\n  updateScope(newScope) {\n    for(const key in newScope) {\n      if(!this.scope.hasOwnProperty(key)) {\n        this.scope[key] = {\n          value: newScope[key],\n          boundElements: []\n        }\n      } else {\n        this.scope[key].value = newScope[key];\n        this.updateBoundElements(this.scope[key].boundElements, newScope[key]);\n      }\n    }\n  }\n\n  parse() {\n    let html = this.template;\n    const regex = /\\{\\{[a-z]:(.*?)\\}\\}/g;\n    const regexForIf = /(\\[\\[(.*?):(.*?)\\]\\])/g;\n    const tagNameRegex = /^[a-zA-Z_][a-zA-Z_$0-9]*$/;\n    const allowedTagTypes = ['r', 'f', 'o', 'b', 'c'];\n    let tags = html.match(regex);\n    let ifs = html.match(regexForIf);\n\n    \n\n    if(!tags) {\n      tags = [];\n    }\n    tags.forEach(tag => {\n      const {\n        tagType, tagName\n      } = _ParseHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parseTag(tag, allowedTagTypes);\n      \n      switch (tagType) {\n        case 'o':\n          html = _ParseHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paseO.call(this, tag, tagName, html, tagNameRegex);\n          break;\n        case 'b':\n          html = _ParseHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parseB.call(this, tag, tagName, html, tagNameRegex);\n          break;\n        case 'f':\n          html = _ParseHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parseF.call(this, tag, tagName, html, tagNameRegex);\n          break;\n        case 'c':\n          html = _ParseHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parseC.call(this, tag, tagName, html, tagNameRegex);\n          break;\n        case 'r':\n          html = _ParseHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parseR.call(this, tag, tagName, html, tagNameRegex);\n          break;\n        default:\n          break;\n      }\n    });\n    return html;\n  }\n\n  render() {\n    this.fill();\n    return this.template;\n  }\n}\n\n\n//# sourceURL=webpack://bemui/./bemui/Component.js?");

/***/ }),

/***/ "./bemui/ParseHelper.js":
/*!******************************!*\
  !*** ./bemui/ParseHelper.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ParseHelpers = {\n  /**\n   * Extracts only unique elements from an array into a new array\n   * @param {Array<any>} arr Array from which to remove the dupliccates\n   * @returns {Array<any} Array with only unique elements from input array\n   */\n  withoutDuplicates(arr) {\n    const newArray = [];\n    arr.forEach(element => {\n      if(newArray.includes(element)) {\n        return;\n      }\n      newArray.push(element);\n    });\n    return newArray;\n  },\n\n  /**\n   * Finds all occurrances of the given tag in the html string. \n   * @param {string} html The html object\n   * @param {string} tag The tag that we are searching for\n   * @returns {Array<number>} Array of all occurrances of tag in html. Elements are indexes of the first character in tag\n   */\n  searchAll(html, tag) {\n    const indexes = [];\n    let startFrom = 0;\n    while (true) {\n      startFrom = html.indexOf(tag, startFrom);\n      if(startFrom === -1) {\n        return indexes;\n      }\n      indexes.push(startFrom);\n      startFrom++;\n    }\n  },\n\n  /**\n   * Replaces all the occurances of a given tag in an html object with a corresponding elements\n   * @param {string} html The html object\n   * @param {string} tag Tag to be replaced\n   * @param {Array<string>} elements Array of elements to be inserted instead of tags\n   * @param {Array<number>} positions Array of indexes of found tags\n   * @returns {string} THe html object with all the tags replaced with the corresponding elements\n   */\n  replaceAll(html, tag, elements, positions) {\n    let final = '';\n    positions = positions.reverse();\n    positions.forEach(pos => {\n      final = html.slice(pos) + final;\n      html = html.slice(0, pos);\n      const newTag = elements.shift()\n      \n      final = final.replace(tag, newTag);\n    });\n    final = html + final;\n    return final;\n  },\n\n  /**\n   * Parses a given BemUI tag into the tagType and tagName\n   * @param {string} tag BemUI tag to be barsed\n   * @param {Array<string>} allowedTagTypes Alloed types of a tag(o,b,c,f...)\n   * @returns {string, string} Object containing tagType and tagName\n   */\n  parseTag(tag, allowedTagTypes) {\n    const rawTag = tag.substring(2, tag.length-2).trim();\n    const tagType = rawTag[0];\n    const colon = rawTag[1];\n    const tagName = rawTag.slice(2).trim();\n\n    if(!allowedTagTypes.includes(tagType) || colon !== ':') {\n      throw 'Error';\n    }\n    return {\n      tagType, tagName\n    }\n  },\n\n  /**\n   * Parses BemUI tags of type O (one-time bind)\n   * @param {string} tag Original tag\n   * @param {string} tagName Tag name (must match the name from the scope of the Component)\n   * @param {string} html The html objest in which the tag is located\n   * @param {regex} regex Regex for validating the tag name\n   */\n  paseO(tag, tagName, html, regex) {\n    if(!regex.test(tagName)) {\n      throw 'Error';\n    }\n    return html.replace(tag, this.scope[tagName].value);\n  },\n\n  /**\n   * Parses BemUI tags of type B (dynamic bind)\n   * @param {string} tag Original tag\n   * @param {string} tagName Tag name (must match the name from the scope of the Component)\n   * @param {string} html The html objest in which the tag is located\n   * @param {regex} regex Regex for validating the tag name\n   */\n  parseB(tag, tagName, html, regex) {\n    if(!regex.test(tagName)) {\n      throw 'Error';\n    }\n    const positions = ParseHelpers.searchAll(html,tag);\n    \n    const elements = [];\n    positions.forEach(() => {\n      this.totalBoundElements++;\n      const uniqueID = this.componentName + '-' + this.totalBoundElements;\n      this.scope[tagName].boundElements.push(uniqueID);\n      elements.push(`<span id=\"${uniqueID}\">${this.scope[tagName].value}</span>`);\n    });\n    \n    return ParseHelpers.replaceAll(html,tag,elements,positions);\n  },\n\n  /**\n   * Parses BemUI tags of type F (function)\n   * @param {string} tag Original tag\n   * @param {string} tagName Tag name (must match the name from the scope of the Component)\n   * @param {string} html The html objest in which the tag is located\n   * @param {regex} regex Regex for validating the tag name\n   */\n  parseF(tag, tagName, html, regex) {\n    if(!regex.test(tagName)) {\n      throw 'Error';\n    }\n    \n    return html.replace(tag, `\"bemui.default.${this.componentName}.${tagName}()\"`);\n  },\n\n  /**\n   * Parses BemUI tags of type C (comoponent)\n   * @param {string} tag Original tag\n   * @param {string} tagName Tag name (must match the name from the scope of the Component)\n   * @param {string} html The html objest in which the tag is located\n   * @param {regex} regex Regex for validating the tag name\n   */\n  parseC(tag, tagName, html, regex) {\n    if(!regex.test(tagName)) {\n      throw 'Error';\n    }\n    this.totalBoundElements++;\n    const uniqueID = this.componentName + '-' + this.totalBoundElements;\n    const component = this.scope[tagName].value;\n    const insert = `<span id=\"${uniqueID}\">${component.parse()}</span>`\n    return html.replace(tag, insert);\n  },\n\n  /**\n   * Parses BemUI tags of type R (resource)\n   * @param {string} tag Original tag\n   * @param {string} tagName Tag name (must either match the name from the scope of the Component or be a firect file name located in the resource folder)\n   * @param {string} html The html objest in which the tag is located\n   * @param {regex} regex Regex for validating the tag name\n   */\n  parseR(tag, tagName, html, regex) {\n    if(!regex.test(tagName)) {\n      return html.replace(tag, `\"./resources/${tagName.substring(1,tagName.length-1)}\"`);\n    } else {\n      return html.replace(tag, `\"./resources/${this.scope[tagName].value}\"`);\n    }\n  },\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParseHelpers);\n\n//# sourceURL=webpack://bemui/./bemui/ParseHelper.js?");

/***/ }),

/***/ "./bemui/Router.js":
/*!*************************!*\
  !*** ./bemui/Router.js ***!
  \*************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return Router; });\nclass Router {\n  constructor() {\n    this.routes = {}\n  }\n\n  setRoute(route,component, guards=[]) {\n    if (this.routes.hasOwnProperty(route)) {\n      throw 'Route already exists';\n    }\n\n    this.routes[route] = {\n      component,\n      guards\n    }\n\n    return this;\n  }\n  set404(route) {\n    this.route404 = route;\n    return this;\n  }\n\n  parseRoute() {\n    const hash = location.hash;\n    let route = this.routes[this.route404];\n    if (this.routes['/' + hash.slice(1)]) {\n      route = this.routes['/' + hash.slice(1)];\n    }\n    \n    // @TODO Make guards wait for async functions\n    for (const guard of route.guards) {\n      const guardRes = guard();\n      if (!guardRes) {\n        return;\n      }\n    }\n    document.getElementById(this.locationId).innerHTML = route.component.parse();\n  }\n\n  loadRoute(route) {\n    location.hash = route.slice(1);\n  }\n\n  mount(locationId) {\n    this.locationId = locationId;\n    window.addEventListener(\"hashchange\", this.parseRoute.bind(this));\n    this.parseRoute();\n  }\n}\n\n//# sourceURL=webpack://bemui/./bemui/Router.js?");

/***/ }),

/***/ "./src/components/404/404.html":
/*!*************************************!*\
  !*** ./src/components/404/404.html ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"{{c:menu}}\\n<h1>Oops! Seems you're lost. :(</h1>\");\n\n//# sourceURL=webpack://bemui/./src/components/404/404.html?");

/***/ }),

/***/ "./src/components/404/404.js":
/*!***********************************!*\
  !*** ./src/components/404/404.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../bemui/Bemui */ \"./bemui/Bemui.js\");\n/* harmony import */ var _404_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.html */ \"./src/components/404/404.html\");\n/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Menu */ \"./src/components/Menu/Menu.js\");\n\n\n\n\n\nconst scope = {\n  menu: _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}\n\nconst FourOFour = new _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]('FourOFour', _404_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"], scope);\n\n_bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"AppEngine\"].registerComponent(FourOFour);\n/* harmony default export */ __webpack_exports__[\"default\"] = (FourOFour);\n\n//# sourceURL=webpack://bemui/./src/components/404/404.js?");

/***/ }),

/***/ "./src/components/Home/Home.css":
/*!**************************************!*\
  !*** ./src/components/Home/Home.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"\");\n\n//# sourceURL=webpack://bemui/./src/components/Home/Home.css?");

/***/ }),

/***/ "./src/components/Home/Home.html":
/*!***************************************!*\
  !*** ./src/components/Home/Home.html ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"{{c:menu}}\\n<h1>Welcome to {{o:pageName}}</h1>\\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit excepturi accusamus corporis quas, assumenda quibusdam dicta fuga aliquid inventore esse est dolore similique pariatur neque optio quos et. Officia, incidunt.</p>\\n{{b:testing}}\\n<hr>\\n<h1>Dynamic bind: {{b:testing}}</h1>\");\n\n//# sourceURL=webpack://bemui/./src/components/Home/Home.html?");

/***/ }),

/***/ "./src/components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/components/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../bemui/Bemui */ \"./bemui/Bemui.js\");\n/* harmony import */ var _Home_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.html */ \"./src/components/Home/Home.html\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ \"./src/components/Home/Home.css\");\n/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/Menu */ \"./src/components/Menu/Menu.js\");\n\n\n\n\n\n\nconst scope = {\n  pageName: 'BemUI Demo Page',\n  menu: _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  testing: 'Hello there',\n  admin: true,\n  user: true,\n  jackass: true,\n}\n\n\nconst Home = new _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]('Home', _Home_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"], scope);\n\nsetTimeout(()=>{\n  Home.updateScope({\n    testing: 'Goodbye now'\n  });\n}, 3000)\n\n_bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"AppEngine\"].registerStyle(_Home_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).registerComponent(Home);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack://bemui/./src/components/Home/Home.js?");

/***/ }),

/***/ "./src/components/Login/Login.css":
/*!****************************************!*\
  !*** ./src/components/Login/Login.css ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".bemu-margin-top {\\n  margin-top: 15px;\\n}\");\n\n//# sourceURL=webpack://bemui/./src/components/Login/Login.css?");

/***/ }),

/***/ "./src/components/Login/Login.html":
/*!*****************************************!*\
  !*** ./src/components/Login/Login.html ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"{{c:menu}}\\n<form action=\\\"\\\">\\n  <input type=\\\"text\\\" name=\\\"\\\" value=\\\"{{o:username}}\\\" id=\\\"login-username\\\" oninput={{f:handleOnUsernameInput}} placeholder=\\\"Username\\\" />\\n  <input type=\\\"password\\\" name=\\\"\\\" value=\\\"{{o:password}}\\\" id=\\\"login-password\\\" oninput={{f:handleOnPasswordInput}} />\\n  <input type=\\\"button\\\" value=\\\"Login\\\" onclick={{f:login}}>\\n</form>\\n<img src={{r:'hello.png'}} class=\\\"bemu-margin-top\\\" alt=\\\"Hello\\\">\");\n\n//# sourceURL=webpack://bemui/./src/components/Login/Login.html?");

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../bemui/Bemui */ \"./bemui/Bemui.js\");\n/* harmony import */ var _Login_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.html */ \"./src/components/Login/Login.html\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.css */ \"./src/components/Login/Login.css\");\n/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/Menu */ \"./src/components/Menu/Menu.js\");\n\n\n\n\n\n\n\nconst scope = {\n  username: '',\n  password: '',\n  menu: _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}\n\nclass LoginComponent extends _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  login() {\n    alert(`Username: ${this.scope.username.value} Password: ${this.scope.password.value}`);\n  }\n\n  handleOnUsernameInput() {\n    this.updateScope({\n      username: document.getElementById('login-username').value\n    })\n  }\n\n  handleOnPasswordInput() {\n    this.updateScope({\n      password: document.getElementById('login-password').value\n    })\n  }\n}\nconst Login = new LoginComponent('Login', _Login_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"], scope);\n\n_bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"AppEngine\"].registerStyle(_Login_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).registerComponent(Login);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack://bemui/./src/components/Login/Login.js?");

/***/ }),

/***/ "./src/components/Menu/Menu.css":
/*!**************************************!*\
  !*** ./src/components/Menu/Menu.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".bemui-menu {\\n  margin-bottom: 15px;\\n  background-color: aquamarine;\\n}\\n\\n.bemu-menu-element {\\n  padding: 10px;\\n}\");\n\n//# sourceURL=webpack://bemui/./src/components/Menu/Menu.css?");

/***/ }),

/***/ "./src/components/Menu/Menu.html":
/*!***************************************!*\
  !*** ./src/components/Menu/Menu.html ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div class=\\\"pure-menu pure-menu-horizontal bemui-menu\\\">\\n  <a href=\\\"#\\\" class=\\\"pure-menu-heading pure-menu-link bemu-menu-element\\\">BemUI</a>\\n  <ul class=\\\"pure-menu-list bemu-menu-element\\\">\\n      <li class=\\\"pure-menu-item\\\"><a onclick={{f:loadHome}} class=\\\"pure-menu-link\\\">Home</a></li>\\n      <li class=\\\"pure-menu-item\\\"><a onclick={{f:loadLogin}} class=\\\"pure-menu-link\\\">Login</a></li>\\n  </ul>\\n</div>\");\n\n//# sourceURL=webpack://bemui/./src/components/Menu/Menu.html?");

/***/ }),

/***/ "./src/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../bemui/Bemui */ \"./bemui/Bemui.js\");\n/* harmony import */ var _Menu_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.html */ \"./src/components/Menu/Menu.html\");\n/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.css */ \"./src/components/Menu/Menu.css\");\n\n\n\n\n\nclass MenuComponent extends _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  loadHome() {\n    _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"AppEngine\"].loadRoute('/');\n  }\n\n  loadLogin() {\n    console.log('Go to login 1');\n    \n    _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"AppEngine\"].loadRoute('/login');\n  }\n}\n\nconst Menu = new MenuComponent('Menu', _Menu_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n_bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"AppEngine\"].registerStyle(_Menu_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).registerComponent(Menu);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack://bemui/./src/components/Menu/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bemui/Bemui */ \"./bemui/Bemui.js\");\n/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home/Home */ \"./src/components/Home/Home.js\");\n/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Login/Login */ \"./src/components/Login/Login.js\");\n/* harmony import */ var _components_404_404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/404/404 */ \"./src/components/404/404.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n\n\n\n\n\n\n\nconst MainRouter = new _bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\n\nMainRouter\n  .setRoute('/', _components_Home_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  .setRoute('/login', _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"],[])\n  .setRoute('/404', _components_404_404__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n  .set404('/404');\n  \n_bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"AppEngine\"]\n  .setPageTitle('BemUI App')\n  .registerStyle(_main_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n  .mountRouter(MainRouter,'rootElementID'); \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_bemui_Bemui__WEBPACK_IMPORTED_MODULE_0__[\"AppEngine\"].components);\n\n//# sourceURL=webpack://bemui/./src/index.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"body {\\n  background-color: beige;\\n}\");\n\n//# sourceURL=webpack://bemui/./src/main.css?");

/***/ })

/******/ });