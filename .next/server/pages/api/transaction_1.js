"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/transaction_1";
exports.ids = ["pages/api/transaction_1"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/transaction_1.js":
/*!************************************!*\
  !*** ./pages/api/transaction_1.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/client */ \"(api)/./prisma/client.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const result = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$transaction(async (prisma)=>{\n                const customer = await prisma.customer.create({\n                    data: {\n                        first_name: \"John\",\n                        paternal_surname: \"Doe\",\n                        maternal_surname: \"Smith\",\n                        rfc_customer: \"ABC123\",\n                        street: \"123 Main St\",\n                        number_street: \"Apt 4B\",\n                        city: \"New York\",\n                        state: \"NY\",\n                        zip_code: \"10001\",\n                        email: \"john.doe@example.com\",\n                        phone: \"555-1234\"\n                    }\n                });\n                const product = await prisma.product.create({\n                    data: {\n                        product_name: \"Laptop\",\n                        product_description: \"High-performance laptop\",\n                        brand_id: 1,\n                        category_id: 1,\n                        model_year: 2023,\n                        list_price: 1999.99\n                    }\n                });\n                const customers = await prisma.customer.findMany();\n                const products = await prisma.product.findMany();\n                return {\n                    customer,\n                    product,\n                    customers,\n                    products\n                };\n            });\n            res.status(200).json(result);\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Error al ejecutar la transacci\\xf3n\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb25fMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUUxQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsV0FBVyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxTQUFTLE1BQU1MLG1FQUFtQk0sQ0FBQyxPQUFPTjtnQkFDOUMsTUFBTU8sV0FBVyxNQUFNUCxPQUFPTyxTQUFTQyxPQUFPO29CQUM1Q0MsTUFBTTt3QkFDSkMsWUFBWTt3QkFDWkMsa0JBQWtCO3dCQUNsQkMsa0JBQWtCO3dCQUNsQkMsY0FBYzt3QkFDZEMsUUFBUTt3QkFDUkMsZUFBZTt3QkFDZkMsTUFBTTt3QkFDTkMsT0FBTzt3QkFDUEMsVUFBVTt3QkFDVkMsT0FBTzt3QkFDUEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxNQUFNQyxVQUFVLE1BQU1yQixPQUFPcUIsUUFBUWIsT0FBTztvQkFDMUNDLE1BQU07d0JBQ0phLGNBQWM7d0JBQ2RDLHFCQUFxQjt3QkFDckJDLFVBQVU7d0JBQ1ZDLGFBQWE7d0JBQ2JDLFlBQVk7d0JBQ1pDLFlBQVk7b0JBQ2Q7Z0JBQ0Y7Z0JBRUEsTUFBTUMsWUFBWSxNQUFNNUIsT0FBT08sU0FBU3NCO2dCQUN4QyxNQUFNQyxXQUFXLE1BQU05QixPQUFPcUIsUUFBUVE7Z0JBRXRDLE9BQU87b0JBQ0x0QjtvQkFDQWM7b0JBQ0FPO29CQUNBRTtnQkFDRjtZQUNGO1lBRUEzQixJQUFJNEIsT0FBTyxLQUFLQyxLQUFLM0I7UUFDdkIsRUFBRSxPQUFPNEIsT0FBTztZQUNkQyxRQUFRRCxNQUFNQTtZQUNkOUIsSUFBSTRCLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsT0FBTztZQUFtQztRQUNuRTtJQUNGLE9BQU87UUFDTDlCLElBQUk0QixPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFzQjtJQUN0RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uZXhpb25kYi8uL3BhZ2VzL2FwaS90cmFuc2FjdGlvbl8xLmpzPzRjMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9wcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jIChwcmlzbWEpID0+IHtcclxuICAgICAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHByaXNtYS5jdXN0b21lci5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiAnSm9obicsXHJcbiAgICAgICAgICAgIHBhdGVybmFsX3N1cm5hbWU6ICdEb2UnLFxyXG4gICAgICAgICAgICBtYXRlcm5hbF9zdXJuYW1lOiAnU21pdGgnLFxyXG4gICAgICAgICAgICByZmNfY3VzdG9tZXI6ICdBQkMxMjMnLFxyXG4gICAgICAgICAgICBzdHJlZXQ6ICcxMjMgTWFpbiBTdCcsXHJcbiAgICAgICAgICAgIG51bWJlcl9zdHJlZXQ6ICdBcHQgNEInLFxyXG4gICAgICAgICAgICBjaXR5OiAnTmV3IFlvcmsnLFxyXG4gICAgICAgICAgICBzdGF0ZTogJ05ZJyxcclxuICAgICAgICAgICAgemlwX2NvZGU6ICcxMDAwMScsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnam9obi5kb2VAZXhhbXBsZS5jb20nLFxyXG4gICAgICAgICAgICBwaG9uZTogJzU1NS0xMjM0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwcm9kdWN0X25hbWU6ICdMYXB0b3AnLFxyXG4gICAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiAnSGlnaC1wZXJmb3JtYW5jZSBsYXB0b3AnLFxyXG4gICAgICAgICAgICBicmFuZF9pZDogMSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IDEsXHJcbiAgICAgICAgICAgIG1vZGVsX3llYXI6IDIwMjMsXHJcbiAgICAgICAgICAgIGxpc3RfcHJpY2U6IDE5OTkuOTksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21lcnMgPSBhd2FpdCBwcmlzbWEuY3VzdG9tZXIuZmluZE1hbnkoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRNYW55KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjdXN0b21lcixcclxuICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICBjdXN0b21lcnMsXHJcbiAgICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIGFsIGVqZWN1dGFyIGxhIHRyYW5zYWNjacOzbicgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNw6l0b2RvIG5vIHBlcm1pdGlkbycgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVzdWx0IiwiJHRyYW5zYWN0aW9uIiwiY3VzdG9tZXIiLCJjcmVhdGUiLCJkYXRhIiwiZmlyc3RfbmFtZSIsInBhdGVybmFsX3N1cm5hbWUiLCJtYXRlcm5hbF9zdXJuYW1lIiwicmZjX2N1c3RvbWVyIiwic3RyZWV0IiwibnVtYmVyX3N0cmVldCIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwiZW1haWwiLCJwaG9uZSIsInByb2R1Y3QiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X2Rlc2NyaXB0aW9uIiwiYnJhbmRfaWQiLCJjYXRlZ29yeV9pZCIsIm1vZGVsX3llYXIiLCJsaXN0X3ByaWNlIiwiY3VzdG9tZXJzIiwiZmluZE1hbnkiLCJwcm9kdWN0cyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction_1.js\n");

/***/ }),

/***/ "(api)/./prisma/client.js":
/*!**************************!*\
  !*** ./prisma/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsUUFBUTtRQUNsQkUsT0FBT0YsU0FBUyxJQUFJRCx3REFBWUE7SUFDbEM7SUFDQUMsU0FBU0UsT0FBT0Y7QUFDbEI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmV4aW9uZGIvLi9wcmlzbWEvY2xpZW50LmpzP2IxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxubGV0IHByaXNtYTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICB9XHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./prisma/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transaction_1.js"));
module.exports = __webpack_exports__;

})();