"use strict";
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Media = () => {
  const {
    0: wid,
    1: setWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: hei,
    1: setHei
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: href,
    1: setHref
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: url,
    1: setUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  console.log('url', url);
  console.log('href', href);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (false) {}
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["width is : ", wid]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["height is : ", hei]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["url is : ", url]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["href is : ", href]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);

/***/ })

};
;