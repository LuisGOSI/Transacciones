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
exports.id = "pages/api/transaction_2";
exports.ids = ["pages/api/transaction_2"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/transaction_2.js":
/*!************************************!*\
  !*** ./pages/api/transaction_2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/client */ \"(api)/./prisma/client.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const result = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$transaction(async (prisma)=>{\n                const customer = await prisma.customer.update({\n                    where: {\n                        customer_id: 1\n                    },\n                    data: {\n                        first_name: \"Jane\",\n                        paternal_surname: \"Smith\",\n                        maternal_surname: \"Doe\",\n                        rfc_customer: \"XYZ789\",\n                        street: \"456 Elm St\",\n                        number_street: \"Apt 2C\",\n                        city: \"Los Angeles\",\n                        state: \"CA\",\n                        zip_code: \"90001\",\n                        email: \"jane.smith@example.com\",\n                        phone: \"555-5678\"\n                    }\n                });\n                const customers = await prisma.customer.findMany();\n                return {\n                    customer,\n                    customers\n                };\n            });\n            res.status(200).json(result);\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Error al ejecutar la transacci\\xf3n\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb25fMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUUxQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsV0FBVyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxTQUFTLE1BQU1MLG1FQUFtQk0sQ0FBQyxPQUFPTjtnQkFDOUMsTUFBTU8sV0FBVyxNQUFNUCxPQUFPTyxTQUFTQyxPQUFPO29CQUM1Q0MsT0FBTzt3QkFBRUMsYUFBYTtvQkFBRTtvQkFDeEJDLE1BQU07d0JBQ0pDLFlBQVk7d0JBQ1pDLGtCQUFrQjt3QkFDbEJDLGtCQUFrQjt3QkFDbEJDLGNBQWM7d0JBQ2RDLFFBQVE7d0JBQ1JDLGVBQWU7d0JBQ2ZDLE1BQU07d0JBQ05DLE9BQU87d0JBQ1BDLFVBQVU7d0JBQ1ZDLE9BQU87d0JBQ1BDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsTUFBTUMsWUFBWSxNQUFNdkIsT0FBT08sU0FBU2lCO2dCQUV4QyxPQUFPO29CQUNMakI7b0JBQ0FnQjtnQkFDRjtZQUNGO1lBR0FwQixJQUFJc0IsT0FBTyxLQUFLQyxLQUFLckI7UUFDdkIsRUFBRSxPQUFPc0IsT0FBTztZQUNkQyxRQUFRRCxNQUFNQTtZQUNkeEIsSUFBSXNCLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsT0FBTztZQUFtQztRQUNuRTtJQUNGLE9BQU87UUFDTHhCLElBQUlzQixPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFzQjtJQUN0RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uZXhpb25kYi8uL3BhZ2VzL2FwaS90cmFuc2FjdGlvbl8yLmpzPzA5ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9wcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jIChwcmlzbWEpID0+IHtcclxuICAgICAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHByaXNtYS5jdXN0b21lci51cGRhdGUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgY3VzdG9tZXJfaWQ6IDEgfSxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZmlyc3RfbmFtZTogJ0phbmUnLFxyXG4gICAgICAgICAgICBwYXRlcm5hbF9zdXJuYW1lOiAnU21pdGgnLFxyXG4gICAgICAgICAgICBtYXRlcm5hbF9zdXJuYW1lOiAnRG9lJyxcclxuICAgICAgICAgICAgcmZjX2N1c3RvbWVyOiAnWFlaNzg5JyxcclxuICAgICAgICAgICAgc3RyZWV0OiAnNDU2IEVsbSBTdCcsXHJcbiAgICAgICAgICAgIG51bWJlcl9zdHJlZXQ6ICdBcHQgMkMnLFxyXG4gICAgICAgICAgICBjaXR5OiAnTG9zIEFuZ2VsZXMnLFxyXG4gICAgICAgICAgICBzdGF0ZTogJ0NBJyxcclxuICAgICAgICAgICAgemlwX2NvZGU6ICc5MDAwMScsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnamFuZS5zbWl0aEBleGFtcGxlLmNvbScsXHJcbiAgICAgICAgICAgIHBob25lOiAnNTU1LTU2NzgnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VzdG9tZXJzID0gYXdhaXQgcHJpc21hLmN1c3RvbWVyLmZpbmRNYW55KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjdXN0b21lcixcclxuICAgICAgICAgIGN1c3RvbWVycyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBhbCBlamVjdXRhciBsYSB0cmFuc2FjY2nDs24nIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTcOpdG9kbyBubyBwZXJtaXRpZG8nIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlc3VsdCIsIiR0cmFuc2FjdGlvbiIsImN1c3RvbWVyIiwidXBkYXRlIiwid2hlcmUiLCJjdXN0b21lcl9pZCIsImRhdGEiLCJmaXJzdF9uYW1lIiwicGF0ZXJuYWxfc3VybmFtZSIsIm1hdGVybmFsX3N1cm5hbWUiLCJyZmNfY3VzdG9tZXIiLCJzdHJlZXQiLCJudW1iZXJfc3RyZWV0IiwiY2l0eSIsInN0YXRlIiwiemlwX2NvZGUiLCJlbWFpbCIsInBob25lIiwiY3VzdG9tZXJzIiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction_2.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transaction_2.js"));
module.exports = __webpack_exports__;

})();