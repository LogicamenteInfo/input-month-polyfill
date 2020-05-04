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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/input-month-polyfill.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.modernizrrc.json":
/*!***************************!*\
  !*** ./.modernizrrc.json ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

;(function(window){
var hadGlobal = 'Modernizr' in window;
var oldGlobal = window.Modernizr;
/*! modernizr 3.11.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-inputtypes-setclasses !*/
!function(e,t,n,a){function s(e,t){return typeof e===t}var o=[],i={_version:"3.11.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=i,Modernizr=new Modernizr;var l=[],r=n.documentElement,c="svg"===r.nodeName.toLowerCase(),f=function(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):c?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}("input");!function(){for(var e,t,a,s=["search","tel","url","email","datetime","date","month","week","time","datetime-local","number","range","color"],o=0;o<s.length;o++)f.setAttribute("type",e=s[o]),a="text"!==f.type&&"style"in f,a&&(f.value="1)",f.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&void 0!==f.style.WebkitAppearance?(r.appendChild(f),t=n.defaultView,a=t.getComputedStyle&&"textfield"!==t.getComputedStyle(f,null).WebkitAppearance&&0!==f.offsetHeight,r.removeChild(f)):/^(search|tel)$/.test(e)||(a=/^(url|email)$/.test(e)?f.checkValidity&&!1===f.checkValidity():"1)"!==f.value)),Modernizr.addTest("inputtypes."+e,!!a)}(),function(){var e,t,n,a,i,r,c;for(var f in o)if(o.hasOwnProperty(f)){if(e=[],t=o[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)r=e[i],c=r.split("."),1===c.length?Modernizr[c[0]]=a:(Modernizr[c[0]]&&(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean)||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=a),l.push((a?"":"no-")+c.join("-"))}}(),function(e){var t=r.className,n=Modernizr._config.classPrefix||"";if(c&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),c?r.className.baseVal=t:r.className=t)}(l),delete i.addTest,delete i.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();e.Modernizr=Modernizr}(window,window,document);
module.exports = window.Modernizr;
if (hadGlobal) { window.Modernizr = oldGlobal; }
else { delete window.Modernizr; }
})(window);

/***/ }),

/***/ "./src/input-month-polyfill.js":
/*!*************************************!*\
  !*** ./src/input-month-polyfill.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modernizr */ "./.modernizrrc.json");
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(modernizr__WEBPACK_IMPORTED_MODULE_0__);


window.onload = function () {
  if (!modernizr__WEBPACK_IMPORTED_MODULE_0___default.a.inputtypes.month) {
    console.log('Dont support month input');
  }
};

/***/ })

/******/ });
//# sourceMappingURL=input-month-polyfill.js.map