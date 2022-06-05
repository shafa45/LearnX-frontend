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
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Register() {\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // console.table({ name, email, password });\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default()(`http://localhost:8000/api/register`);\n        console.log(\"REGISTER RESPONSE\", data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center bg-primary square\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NewDrive\\\\Courses\\\\WEB\\\\Project\\\\LearnX\\\\client\\\\pages\\\\register.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value)\n                            ,\n                            placeholder: \"Enter name\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NewDrive\\\\Courses\\\\WEB\\\\Project\\\\LearnX\\\\client\\\\pages\\\\register.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                            ,\n                            placeholder: \"Enter email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NewDrive\\\\Courses\\\\WEB\\\\Project\\\\LearnX\\\\client\\\\pages\\\\register.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                            ,\n                            placeholder: \"Enter password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NewDrive\\\\Courses\\\\WEB\\\\Project\\\\LearnX\\\\client\\\\pages\\\\register.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"form-control btn btn-primary btn-block p-2\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NewDrive\\\\Courses\\\\WEB\\\\Project\\\\LearnX\\\\client\\\\pages\\\\register.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NewDrive\\\\Courses\\\\WEB\\\\Project\\\\LearnX\\\\client\\\\pages\\\\register.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\NewDrive\\\\Courses\\\\WEB\\\\Project\\\\LearnX\\\\client\\\\pages\\\\register.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ1A7QUFFWCxTQUFTRSxRQUFRLEdBQUc7SUFDakMsTUFBTSxFQUpSLEdBSVNDLElBQUksR0FKYixHQUllQyxPQUFPLE1BQUlKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sRUFMUixHQUtTSyxLQUFLLEdBTGQsR0FLZ0JDLFFBQVEsTUFBSU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxFQU5SLEdBTVNPLFFBQVEsR0FOakIsR0FNbUJDLFdBQVcsTUFBSVIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTVMsWUFBWSxHQUFHLE9BQU9DLENBQUMsR0FBSztRQUNoQ0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQiw0Q0FBNEM7UUFDNUMsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNWCw0Q0FBSyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUNsRVksT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVGLElBQUksQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QscUJBQ0U7OzBCQUNFLDhEQUFDRyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMseUNBQXlDOzBCQUFDLFVBQVE7Ozs7O29CQUFLOzBCQUVyRSw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLHFDQUFxQzswQkFDbEQsNEVBQUNFLE1BQUk7b0JBQUNDLFFBQVEsRUFBRVYsWUFBWTs7c0NBQzFCLDhEQUFDVyxPQUFLOzRCQUNKQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEwsU0FBUyxFQUFDLHVCQUF1Qjs0QkFDakNNLEtBQUssRUFBRW5CLElBQUk7NEJBQ1hvQixRQUFRLEVBQUUsQ0FBQ2IsQ0FBQyxHQUFLTixPQUFPLENBQUNNLENBQUMsQ0FBQ2MsTUFBTSxDQUFDRixLQUFLLENBQUM7NEJBQUE7NEJBQ3hDRyxXQUFXLEVBQUMsWUFBWTs0QkFDeEJDLFFBQVE7Ozs7O2dDQUNSO3NDQUVGLDhEQUFDTixPQUFLOzRCQUNKQyxJQUFJLEVBQUMsT0FBTzs0QkFDWkwsU0FBUyxFQUFDLHVCQUF1Qjs0QkFDakNNLEtBQUssRUFBRWpCLEtBQUs7NEJBQ1prQixRQUFRLEVBQUUsQ0FBQ2IsQ0FBQyxHQUFLSixRQUFRLENBQUNJLENBQUMsQ0FBQ2MsTUFBTSxDQUFDRixLQUFLLENBQUM7NEJBQUE7NEJBQ3pDRyxXQUFXLEVBQUMsYUFBYTs0QkFDekJDLFFBQVE7Ozs7O2dDQUNSO3NDQUVGLDhEQUFDTixPQUFLOzRCQUNKQyxJQUFJLEVBQUMsVUFBVTs0QkFDZkwsU0FBUyxFQUFDLHVCQUF1Qjs0QkFDakNNLEtBQUssRUFBRWYsUUFBUTs0QkFDZmdCLFFBQVEsRUFBRSxDQUFDYixDQUFDLEdBQUtGLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDYyxNQUFNLENBQUNGLEtBQUssQ0FBQzs0QkFBQTs0QkFDNUNHLFdBQVcsRUFBQyxnQkFBZ0I7NEJBQzVCQyxRQUFROzs7OztnQ0FDUjtzQ0FDRiw4REFBQ0MsUUFBTTs0QkFDTE4sSUFBSSxFQUFDLFFBQVE7NEJBQ2JMLFNBQVMsRUFBQyw0Q0FBNkM7c0NBQ3hELFFBRUQ7Ozs7O2dDQUFTOzs7Ozs7d0JBQ0o7Ozs7O29CQUNIOztvQkFDTCxDQUNIO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9yZWdpc3Rlci5qc3g/ZTgyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUudGFibGUoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyYCk7XHJcbiAgICBjb25zb2xlLmxvZygnUkVHSVNURVIgUkVTUE9OU0UnLCBkYXRhKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPSdqdW1ib3Ryb24gdGV4dC1jZW50ZXIgYmctcHJpbWFyeSBzcXVhcmUnPlJlZ2lzdGVyPC9oMT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGItNSc+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgbWItNCBwLTQnXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgbmFtZSdcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBtYi00IHAtNCdcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGVtYWlsJ1xyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIG1iLTQgcC00J1xyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgcGFzc3dvcmQnXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgIHAtMidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.jsx"));
module.exports = __webpack_exports__;

})();