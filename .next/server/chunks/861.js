exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 7568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_styleSheets_kits_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5398);
/* harmony import */ var _assets_styleSheets_kits_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styleSheets_kits_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const RhCheckbox = ({
  label,
  checked,
  key,
  onChange,
  color
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    onClick: onChange,
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()((_assets_styleSheets_kits_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkbox), color == 'green' && (_assets_styleSheets_kits_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default().greenBg)),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: checked ? (_assets_styleSheets_kits_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon) : (_assets_styleSheets_kits_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      children: label
    })]
  }, key);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RhCheckbox);

/***/ }),

/***/ 8629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const staffLangs = input => {
  try {
    let json = JSON.parse(input);
    let langArray = [];

    if (json.LanguagesSpoken) {
      let parsed = json.LanguagesSpoken.replace(/[-_,&/]/g, ' ');
      let arr = parsed.split(' ');
      arr.map((a, index) => {
        if (a != '') {
          langArray.push(a.substring(0, 2));
        }
      });
      return langArray;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  staffLangs
});

/***/ }),

/***/ 5398:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "checkbox_icon__Y5ezd",
	"checkedIcon": "checkbox_checkedIcon__2T7w0",
	"checkbox": "checkbox_checkbox__2Lv_v",
	"greenBg": "checkbox_greenBg__2J5Wv"
};


/***/ }),

/***/ 279:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MS41OTgiIGhlaWdodD0iNDEuNTk4IiB2aWV3Qm94PSIwIDAgNDEuNTk4IDQxLjU5OCI+PHBhdGggZD0iTTI1Ljc5Miw1QTIwLjgsMjAuOCwwLDEsMCw0MC41LDExLjA5MSwyMC44LDIwLjgsMCwwLDAsMjUuNzkyLDVabS0xNCw2Ljc5NWExOS44ODQsMTkuODg0LDAsMCwxLDQuNTM1LTMuNEwxOC43LDEwLjE4NmE2LjksNi45LDAsMCwwLC42NTUuNDM2LDUuOTEyLDUuOTEyLDAsMCwxLDEuODYsMS43MjJMMjIuNiwxNC4zM2ExLjY2MiwxLjY2MiwwLDAsMS0uMDUsMS45NjlsLS42MzkuODI5YS45NzcuOTc3LDAsMCwxLS44OTMuMzcxbC0uNzI1LS4wOTNhMy4xMTMsMy4xMTMsMCwwLDAtMy4wOSwxLjUyNS45ODkuOTg5LDAsMCwxLS45ODkuNDY3bC0xLjY1OC0uMjExYTMuMiwzLjIsMCwwLDAtMy4wNjksMS4zODcsMi45LDIuOSwwLDAsMC0uMDQ5LDMuMTc5TDEyLjU0MSwyNS41YTIuNzQ0LDIuNzQ0LDAsMCwwLDMuNi45NDdsMS4xMzgtLjYxYTEuNiwxLjYsMCwwLDEsMS41NzMuMDM4bDIuMTYsMS4zYTEuMDI1LDEuMDI1LDAsMCwwLC41NTUuMTQ2LDIuNTQ3LDIuNTQ3LDAsMCwxLDIuMTA2LDEuMTIybDEuMDU3LDEuNDczYy4wODIuMTE0LjE3LjIyNy4yNjEuMzM0bDEuMzgyLDEuNjI2YS4yMDkuMjA5LDAsMCwxLC4wNDguMTczLjI0Ni4yNDYsMCwwLDEtLjEuMTQ4bC0yLjA3NiwxLjU5NEEzLjg1MiwzLjg1MiwwLDAsMCwyMi45LDM1LjcxN2wtLjcsMi4yNjRhLjkyMS45MjEsMCwwLDEtLjE3My4zMmwtLjY3OS44MTdhNC4zNTksNC4zNTksMCwwLDAtMS4wMSwyLjM5NC41ODEuNTgxLDAsMCwxLS4zNTUuNDg0LjA0NS4wNDUsMCwwLDEtLjA0OC0uMDA4LjA4OS4wODksMCwwLDEtLjAxNy0uMDQzbC0uNjM2LTMuODIzYTMuNDcyLDMuNDcyLDAsMCwwLS42NjItMS41MjlsLTIuMzQ0LTMuMDc0YTIuMjIsMi4yMiwwLDAsMS0uMzc2LS43NThsLS43NzQtMi43OTJhMy40MzYsMy40MzYsMCwwLDAtMi40LTIuMzg2bC0uMTY5LS4wNDZhMS42NzIsMS42NzIsMCwwLDEtLjctLjM5NGwtMS40NDQtMS4zNTlhMi43NzIsMi43NzIsMCwwLDEtLjQ5NS0uNjIxLDMuNzE2LDMuNzE2LDAsMCwwLTMuNzg5LTEuOEExOS42NTUsMTkuNjU1LDAsMCwxLDExLjc4OCwxMS43OTRaTTM5LjgsMzkuOGExOS44LDE5LjgsMCwwLDEtMzMuODA4LTE0cTAtLjcwOC4wNS0xLjQwN0w2LjIsMjQuMzZhMi43MiwyLjcyLDAsMCwxLDIuODcsMS4zLDMuNzY3LDMuNzY3LDAsMCwwLC42NzIuODQ0bDEuNDQzLDEuMzU4QTIuNjcsMi42NywwLDAsMCwxMi4zLDI4LjVsLjE2OS4wNDZhMi40MzgsMi40MzgsMCwwLDEsMS43LDEuNjkzbC43NzQsMi43OTJhMy4yMTEsMy4yMTEsMCwwLDAsLjU0NCwxLjFMMTcuODM0LDM3LjJhMi40NzQsMi40NzQsMCwwLDEsLjQ3MSwxLjA4OWwuNjM3LDMuODIzYTEuMDQsMS4wNCwwLDAsMCwxLjQzMS44LDEuNTczLDEuNTczLDAsMCwwLC45Ni0xLjMxMSwzLjM2OSwzLjM2OSwwLDAsMSwuNzg0LTEuODQ4bC42NzktLjgxN2ExLjkxMywxLjkxMywwLDAsMCwuMzU5LS42NjJsLjctMi4yNjRhMi44NjMsMi44NjMsMCwwLDEsMS0xLjQzNWwyLjA3Ni0xLjU5NEExLjIzLDEuMjMsMCwwLDAsMjcuNCwzMi4yYTEuMjA3LDEuMjA3LDAsMCwwLS4yNzItLjk3NEwyNS43NDksMjkuNmMtLjA3My0uMDg2LS4xNDQtLjE3Ny0uMjEtLjI2OWwtMS4wNTctMS40NzNhMy41NDIsMy41NDIsMCwwLDAtMi45NC0xLjUzNi4wMzQuMDM0LDAsMCwxLS4wMTgsMGwtMi4xNi0xLjNhMi42LDIuNiwwLDAsMC0yLjU1NS0uMDYybC0xLjEzOC42MWExLjc0NiwxLjc0NiwwLDAsMS0yLjI5LS42bC0xLjEwNS0xLjc0NWExLjkwNiwxLjkwNiwwLDAsMSwuMDMyLTIuMDg5LDIuMjEsMi4yMSwwLDAsMSwyLjEyLS45NThsMS42NTguMjExYTEuOTgyLDEuOTgyLDAsMCwwLDEuOTc0LS45NTMsMi4xMiwyLjEyLDAsMCwxLDIuMS0xLjAzOWwuNzI1LjA5M2ExLjk3NiwxLjk3NiwwLDAsMCwxLjgwNi0uNzVsLjYzOS0uODI5YTIuNjUzLDIuNjUzLDAsMCwwLC4wNzktMy4xNDNsLTEuMzc3LTEuOTg3YTYuOTE0LDYuOTE0LDAsMCwwLTIuMTc1LTIuMDE0LDUuOSw1LjksMCwwLDEtLjU2LS4zNzNsLTEuOTk0LTEuNWExOS44NTIsMTkuODUyLDAsMCwxLDIwLjcsMi4zMTZsLS41MTcuNzIyYTI2LjIyNCwyNi4yMjQsMCwwLDAtMy4zLDQuNDcybC0uNzUyLDEuMjg1YTEuNDkxLDEuNDkxLDAsMCwwLC4xNzksMS43MTksMi4yNjEsMi4yNjEsMCwwLDAsMS40MjcuNzU2bC4zNjEuMDQ0YTMuMSwzLjEsMCwwLDEsMi41ODIsMi4xNzIsMy4wMjcsMy4wMjcsMCwwLDEtLjg5MSwzLjEzOGwtMy41NTgsMy4xNTlhMi4xMjMsMi4xMjMsMCwwLDAtLjcsMS42di44MzhhMS42NzQsMS42NzQsMCwwLDAsLjc1OSwxLjQyNkEyLjg5MSwyLjg5MSwwLDAsMSwzNC45MDYsMzMuN2wuMDc5LjgxN2ExLjQ0NCwxLjQ0NCwwLDAsMCwxLjQ1OCwxLjNoMi4wOTRhMy4xNzEsMy4xNzEsMCwwLDAsMi45Mi0xLjg4N2wuMTI2LS4yNzdhMi45MTIsMi45MTIsMCwwLDEsMi41NTQtMS43NDdsLjQ5My0uMDJoLjAxNUExOS43MTUsMTkuNzE1LDAsMCwxLDM5LjgsMzkuOFptNS4xNDctOC45MzItLjI0NC4wMjVjLS4wMzksMC0uMDc3LjAwNy0uMTE1LjAwOGwtLjQ5Mi4wMjJhMy45LDMuOSwwLDAsMC0zLjQxOSwyLjM0NWwtLjEyNi4yNjdhMi4xNzcsMi4xNzcsMCwwLDEtMi4wMSwxLjI5MkgzNi40NDNhLjQ1Ny40NTcsMCwwLDEtLjQ3My0uNDA4bC0uMDg0LS44MjdBMy44NjEsMy44NjEsMCwwLDAsMzQuMTMzLDMwLjdhLjY3NS42NzUsMCwwLDEtLjMtLjU4NnYtLjgzOWExLjEyOCwxLjEyOCwwLDAsMSwuMzY5LS44NThsMy41NjctMy4xNTlhNC4wMjEsNC4wMjEsMCwwLDAsMS4xNzktNC4xNzIsNC4wOTMsNC4wOTMsMCwwLDAtMy40MTQtMi44NzFsLS4zNjItLjA0NGExLjI2OSwxLjI2OSwwLDAsMS0uOC0uNDI0LjUuNSwwLDAsMS0uMDY2LS41NjZsLjc0OS0xLjI4MWEyNS4yMjgsMjUuMjI4LDAsMCwxLDMuMTkzLTQuMzIzLjQ5Mi40OTIsMCwwLDAsLjAzOC0uMDQ3bC40OTQtLjY5cS41MjMuNDU2LDEuMDE5Ljk1YTE5LjY3NSwxOS42NzUsMCwwLDEsNS44LDE0LDE5LjkxNSwxOS45MTUsMCwwLDEtLjY1Myw1LjA3MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ljk5MiAtNC45OTkpIiBmaWxsPSIjODIwMjYzIi8+PC9zdmc+"

/***/ }),

/***/ 9586:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4xNTQiIGhlaWdodD0iMTkuMTUiIHZpZXdCb3g9IjAgMCAxOS4xNTQgMTkuMTUiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTguODU5LDE3LjQ0NmwtNC43MjEtNC43NDFhNy41NTEsNy41NTEsMCwwLDAsMS44NzktNC45NzJBNy44ODQsNy44ODQsMCwwLDAsOC4wMDgsMCw3Ljg4NCw3Ljg4NCwwLDAsMCwwLDcuNzMzYTcuODg0LDcuODg0LDAsMCwwLDguMDA4LDcuNzMzLDguMTE4LDguMTE4LDAsMCwwLDQuNTg4LTEuNGw0Ljc1Nyw0Ljc3N2ExLjA3MSwxLjA3MSwwLDAsMCwxLjQ3Ny4wMjhBLjk4Ni45ODYsMCwwLDAsMTguODU5LDE3LjQ0NlpNOC4wMDgsMi4wMTdhNS44MjcsNS44MjcsMCwwLDEsNS45MTksNS43MTYsNS44MjcsNS44MjcsMCwwLDEtNS45MTksNS43MTZBNS44MjcsNS44MjcsMCwwLDEsMi4wODksNy43MzMsNS44MjcsNS44MjcsMCwwLDEsOC4wMDgsMi4wMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4xNTQpIHJvdGF0ZSg5MCkiLz48L3N2Zz4="

/***/ })

};
;