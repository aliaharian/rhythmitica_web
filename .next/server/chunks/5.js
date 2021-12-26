exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 1005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2650);
/* harmony import */ var _assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const RhRadioButton = ({
  label,
  checked,
  key,
  onChange,
  color,
  style,
  xl
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: style ? style : {},
    onClick: onChange,
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()((_assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkbox), color == 'green' && (_assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().greenBg)),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: checked ? clsx__WEBPACK_IMPORTED_MODULE_0___default()((_assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkedIcon), xl && (_assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkedIconXl)) : clsx__WEBPACK_IMPORTED_MODULE_0___default()((_assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon), xl && (_assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().iconXl))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
      className: xl && (_assets_styleSheets_kits_radioButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().xlLabel),
      children: label
    })]
  }, key);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RhRadioButton);

/***/ }),

/***/ 2650:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "radioButton_icon__1E8KT",
	"iconXl": "radioButton_iconXl__EiKRB",
	"checkedIcon": "radioButton_checkedIcon__2Ks4m",
	"checkedIconXl": "radioButton_checkedIconXl__1RbFk",
	"checkbox": "radioButton_checkbox__1jEol",
	"greenBg": "radioButton_greenBg__1ekMx",
	"xlLabel": "radioButton_xlLabel__oht7a"
};


/***/ })

};
;