exports.id = 136;
exports.ids = [136];
exports.modules = {

/***/ 4136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5000);
/* harmony import */ var _assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4791);
/* harmony import */ var _assets_images_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


 // import ArrowRight from '../../assets/images/icons/RightArrow'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';





const Event = ({
  image,
  name,
  instructor,
  price,
  sessions,
  sm,
  whiteBg
}) => {
  //needs container for width
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()((_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventContainer), sm && (_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventSm), whiteBg && (_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventWhite)),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageContainer),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: image
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dataContainer),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
        children: name
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        children: instructor
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divider)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divider)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().priceContainer),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        children: ["Sessions: ", sessions]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        children: ["Price: ", price]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: (_assets_styleSheets_kits_event_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actionBtn),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: (_assets_images_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default())
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);

/***/ }),

/***/ 5000:
/***/ ((module) => {

// Exports
module.exports = {
	"eventContainer": "event_eventContainer__1rXFU",
	"imageContainer": "event_imageContainer__1FfoX",
	"eventSm": "event_eventSm__31FO1",
	"eventWhite": "event_eventWhite__3QOIt",
	"actionBtn": "event_actionBtn__2ylow",
	"dataContainer": "event_dataContainer__2ZlCu",
	"divider": "event_divider__1ydWd",
	"priceContainer": "event_priceContainer__1OGZT"
};


/***/ }),

/***/ 4791:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5Ljk0NyIgaGVpZ2h0PSIxNi45MzEiIHZpZXdCb3g9IjAgMCA5Ljk0NyAxNi45MzEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGQ9Ik0xMTEuMTU1LDcuOCwxMDMuNjIuMjdhLjkyOC45MjgsMCwwLDAtMS4zMSwwbC0uNTU1LjU1NWEuOTI3LjkyNywwLDAsMCwwLDEuMzFsNi4zMjcsNi4zMjdMMTAxLjc0OCwxNC44YS45MjguOTI4LDAsMCwwLDAsMS4zMWwuNTU1LjU1NWEuOTI4LjkyOCwwLDAsMCwxLjMxLDBsNy41NDEtNy41NDFhLjkzNS45MzUsMCwwLDAsMC0xLjMxNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuNDc4IDApIiBmaWxsPSIjMDRhNzc3Ii8+PC9nPjwvZz48L3N2Zz4="

/***/ })

};
;