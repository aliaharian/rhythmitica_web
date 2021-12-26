exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 9807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8166);
/* harmony import */ var _assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const Instructor = ({
  image,
  name,
  instrument,
  languages,
  family,
  sm,
  disableLangs,
  imageBorder
}) => {
  const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const md = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down(1300));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()((_assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().instructorContainer), sm && (_assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().instructorContainerSm)),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),
      style: imageBorder ? {
        borderColor: imageBorder
      } : {},
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
        src: image
      }), !disableLangs && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().languagesContainer),
        children: languages.map(lang => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().language),
          children: lang
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_assets_styleSheets_kits_instructor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dataContainer),
      children: [
      /*#__PURE__*/
      // md ?
      //     <h3>{name}<br /> {family}</h3>
      //     :
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
        children: [name, " ", family]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        children: instrument
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instructor);

/***/ }),

/***/ 8166:
/***/ ((module) => {

// Exports
module.exports = {
	"instructorContainer": "instructor_instructorContainer__1Redf",
	"imageContainer": "instructor_imageContainer__3zq35",
	"dataContainer": "instructor_dataContainer__MQkg-",
	"instructorContainerSm": "instructor_instructorContainerSm__I0fWs",
	"language": "instructor_language__xD5Du",
	"languagesContainer": "instructor_languagesContainer__M6r1y"
};


/***/ })

};
;