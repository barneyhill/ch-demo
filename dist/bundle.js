/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sql.js-httpvfs/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/index.js ***!
  \***************************************************/
/***/ (function(module) {

eval("!function(e,t){if(true)module.exports=t();else { var r, n; }}(this,(function(){return(()=>{\"use strict\";var e={870:(e,t,n)=>{n.r(t),n.d(t,{createEndpoint:()=>o,expose:()=>l,proxy:()=>v,proxyMarker:()=>r,releaseProxy:()=>a,transfer:()=>y,transferHandlers:()=>c,windowEndpoint:()=>g,wrap:()=>f});const r=Symbol(\"Comlink.proxy\"),o=Symbol(\"Comlink.endpoint\"),a=Symbol(\"Comlink.releaseProxy\"),i=Symbol(\"Comlink.thrown\"),s=e=>\"object\"==typeof e&&null!==e||\"function\"==typeof e,c=new Map([[\"proxy\",{canHandle:e=>s(e)&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return l(e,t),[n,[n]]},deserialize:e=>(e.start(),f(e))}],[\"throw\",{canHandle:e=>s(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener(\"message\",(function n(r){if(!r||!r.data)return;const{id:o,type:a,path:s}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(w);let f;try{const t=s.slice(0,-1).reduce(((e,t)=>e[t]),e),n=s.reduce(((e,t)=>e[t]),e);switch(a){case 0:f=n;break;case 1:t[s.slice(-1)[0]]=w(r.data.value),f=!0;break;case 2:f=n.apply(t,c);break;case 3:f=v(new n(...c));break;case 4:{const{port1:t,port2:n}=new MessageChannel;l(e,n),f=y(t,[t])}break;case 5:f=void 0}}catch(e){f={value:e,[i]:0}}Promise.resolve(f).catch((e=>({value:e,[i]:0}))).then((e=>{const[r,i]=b(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),i),5===a&&(t.removeEventListener(\"message\",n),u(t))}))})),t.start&&t.start()}function u(e){(function(e){return\"MessagePort\"===e.constructor.name})(e)&&e.close()}function f(e,t){return d(e,[],t)}function p(e){if(e)throw new Error(\"Proxy has been released and is not useable\")}function d(e,t=[],n=function(){}){let r=!1;const i=new Proxy(n,{get(n,o){if(p(r),o===a)return()=>E(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{u(e),r=!0}));if(\"then\"===o){if(0===t.length)return{then:()=>i};const n=E(e,{type:0,path:t.map((e=>e.toString()))}).then(w);return n.then.bind(n)}return d(e,[...t,o])},set(n,o,a){p(r);const[i,s]=b(a);return E(e,{type:1,path:[...t,o].map((e=>e.toString())),value:i},s).then(w)},apply(n,a,i){p(r);const s=t[t.length-1];if(s===o)return E(e,{type:4}).then(w);if(\"bind\"===s)return d(e,t.slice(0,-1));const[c,l]=m(i);return E(e,{type:2,path:t.map((e=>e.toString())),argumentList:c},l).then(w)},construct(n,o){p(r);const[a,i]=m(o);return E(e,{type:3,path:t.map((e=>e.toString())),argumentList:a},i).then(w)}});return i}function m(e){const t=e.map(b);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const h=new WeakMap;function y(e,t){return h.set(e,t),e}function v(e){return Object.assign(e,{[r]:!0})}function g(e,t=self,n=\"*\"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function b(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:3,name:t,value:r},o]}return[{type:0,value:e},h.get(e)||[]]}function w(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function E(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join(\"-\");e.addEventListener(\"message\",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener(\"message\",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}},162:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,\"default\",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)\"default\"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,\"__esModule\",{value:!0}),t.createDbWorker=void 0;const i=a(n(870));async function s(e){if(e.data&&\"eval\"===e.data.action){const t=new Int32Array(e.data.notify,0,2),n=new Uint8Array(e.data.notify,8);let r;try{r={ok:await u(e.data.request)}}catch(t){console.error(\"worker request error\",e.data.request,t),r={err:String(t)}}const o=(new TextEncoder).encode(JSON.stringify(r));n.set(o,0),t[1]=o.length,Atomics.notify(t,0)}}function c(e){if(\"BODY\"===e.tagName)return\"body\";const t=[];for(;e.parentElement&&\"BODY\"!==e.tagName;){if(e.id){t.unshift(\"#\"+e.id);break}{let n=1,r=e;for(;r.previousElementSibling;)r=r.previousElementSibling,n++;t.unshift(e.tagName.toLowerCase()+\":nth-child(\"+n+\")\")}e=e.parentElement}return t.join(\" > \")}function l(e){return Object.keys(e)}async function u(e){if(console.log(\"dom vtable request\",e),\"select\"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const n={};for(const r of e.columns)\"selector\"===r?n.selector=c(t):\"parent\"===r?t.parentElement&&(n.parent=t.parentElement?c(t.parentElement):null):\"idx\"===r||(n[r]=t[r]);return n}));if(\"insert\"===e.type){if(!e.value.parent)throw Error('\"parent\" column must be set when inserting');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const n=t[0];if(!e.value.tagName)throw Error(\"tagName must be set for inserting\");const r=document.createElement(e.value.tagName);for(const t of l(e.value))if(null!==e.value[t]){if(\"tagName\"===t||\"parent\"===t)continue;if(\"idx\"===t||\"selector\"===t)throw Error(`${t} can't be set`);r[t]=e.value[t]}return n.appendChild(r),null}if(\"update\"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const n=[];for(const r of l(e.value)){const o=e.value[r];if(\"parent\"!==r){if(\"idx\"!==r&&\"selector\"!==r&&o!==t[r]){if(console.log(\"SETTING \",r,t[r],\"->\",o),\"tagName\"===r)throw Error(\"can't change tagName\");n.push(r)}}else if(o!==c(t.parentElement)){const e=document.querySelectorAll(o);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const r of n)t[r]=e.value[r];return null}throw Error(`unknown request ${e.type}`)}i.transferHandlers.set(\"WORKERSQLPROXIES\",{canHandle:e=>!1,serialize(e){throw Error(\"no\")},deserialize:e=>(e.start(),i.wrap(e))}),t.createDbWorker=async function(e,t,n,r=1/0){const o=new Worker(t),a=i.wrap(o),c=await a.SplitFileHttpDatabase(n,e,void 0,r);return o.addEventListener(\"message\",s),{db:c,worker:a,configs:e}}},432:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)\"default\"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,\"__esModule\",{value:!0}),o(n(162),t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n(432)})()}));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/index.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst sql_js_httpvfs_1 = __webpack_require__(/*! sql.js-httpvfs */ \"./node_modules/sql.js-httpvfs/dist/index.js\");\nconst workerUrl = new URL(/* asset import */ __webpack_require__(/*! sql.js-httpvfs/dist/sqlite.worker.js */ \"./node_modules/sql.js-httpvfs/dist/sqlite.worker.js\"), __webpack_require__.b).toString();\nconst wasmUrl = new URL(/* asset import */ __webpack_require__(/*! sql.js-httpvfs/dist/sql-wasm.wasm */ \"./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm\"), __webpack_require__.b).toString();\nlet worker;\nfunction init() {\n    return __awaiter(this, void 0, void 0, function* () {\n        worker = yield (0, sql_js_httpvfs_1.createDbWorker)([{\n                from: \"jsonconfig\",\n                configUrl: \"../companies_house/config.json\"\n            }], workerUrl, wasmUrl);\n        setupEventListeners();\n    });\n}\nfunction searchCompanies(searchTerm) {\n    return __awaiter(this, void 0, void 0, function* () {\n        return yield worker.db.query(`\n      SELECT company_name, company_number\n      FROM companies_name_search \n      WHERE company_name MATCH ?\n      LIMIT 10;`, [searchTerm]);\n    });\n}\nfunction getCompanyIndividuals(companyNumber) {\n    return __awaiter(this, void 0, void 0, function* () {\n        return yield worker.db.query(`SELECT name, date_of_birth_month, date_of_birth_year FROM PersonCompanyLink WHERE company_number = ?`, [companyNumber]);\n    });\n}\nfunction getCompanyAddress(companyNumber) {\n    return __awaiter(this, void 0, void 0, function* () {\n        // Fetching the individuals linked to the company\n        return worker.db.query(`SELECT address_line_1, postal_code FROM companies WHERE company_number = ?`, [companyNumber]);\n    });\n}\nfunction createTable(data, headers) {\n    const table = document.createElement(\"table\");\n    const thead = document.createElement(\"thead\");\n    const tbody = document.createElement(\"tbody\");\n    table.appendChild(thead);\n    table.appendChild(tbody);\n    // Add headers\n    const headerRow = document.createElement(\"tr\");\n    headers.forEach(header => {\n        const th = document.createElement(\"th\");\n        th.textContent = header;\n        headerRow.appendChild(th);\n    });\n    thead.appendChild(headerRow);\n    // Add data\n    data.forEach(row => {\n        const tableRow = document.createElement(\"tr\");\n        headers.forEach(header => {\n            const cellValue = row[header.toLowerCase().replace(/ /g, '_')]; // Convert header to column name format\n            const td = document.createElement(\"td\");\n            td.textContent = String(cellValue);\n            tableRow.appendChild(td);\n        });\n        tbody.appendChild(tableRow);\n    });\n    return table;\n}\nfunction setupEventListeners() {\n    const searchInput = document.getElementById(\"companySearch\");\n    const searchResultsTableDiv = document.getElementById(\"searchResultsTable\");\n    const addressesDiv = document.getElementById(\"addresses\");\n    const individualsDiv = document.getElementById(\"individuals\");\n    searchInput.addEventListener(\"input\", (event) => __awaiter(this, void 0, void 0, function* () {\n        const searchTerm = event.target.value;\n        const companies = yield searchCompanies(searchTerm);\n        searchResultsTableDiv.innerHTML = \"\";\n        if (companies.length) {\n            console.log(companies);\n            const resultsTable = createTable(companies, ['Company Name']);\n            searchResultsTableDiv.appendChild(resultsTable);\n            // Add click event listeners to rows to fetch and display details\n            resultsTable.querySelectorAll('tbody tr').forEach((row, index) => {\n                row.addEventListener(\"click\", () => __awaiter(this, void 0, void 0, function* () {\n                    console.log(\"Company Number:\", companies[index].company_number);\n                    const individuals = yield getCompanyIndividuals(companies[index].company_number);\n                    const addresses = yield getCompanyAddress(companies[index].company_number);\n                    addressesDiv.innerHTML = \"\";\n                    const addressTable = createTable(addresses, ['Address Line 1', 'Postal Code']);\n                    addressesDiv.appendChild(addressTable);\n                    individualsDiv.innerHTML = \"\";\n                    const individualTable = createTable(individuals, ['Name', 'Date of Birth Month', 'Date of Birth Year']);\n                    individualsDiv.appendChild(individualTable);\n                }));\n            });\n        }\n    }));\n}\ninit();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm":
/*!********************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8a2a3c8efae774018112.wasm\";\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm?");

/***/ }),

/***/ "./node_modules/sql.js-httpvfs/dist/sqlite.worker.js":
/*!***********************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/sqlite.worker.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9181ee78cd72b9be8ba3.js\";\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/sqlite.worker.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;