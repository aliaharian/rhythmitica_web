"use strict";
(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 4716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_layout_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2088);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6168);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_events_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7041);
/* harmony import */ var _redux_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9698);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function EventsPage({
  packages,
  eventTypes
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_src_components_layout_Layout__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    page: 'events',
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_src_components_events_Events__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      packages: packages,
      eventTypes: eventTypes
    })
  });
}

const getServerSideProps = _redux_store__WEBPACK_IMPORTED_MODULE_1__/* .wrapper.getServerSideProps */ .Y.getServerSideProps(store => async ({
  req,
  res
}) => {
  try {
    const staffs = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"https://itica.ca/api"}/v1.0/workshops/search?max=10&page=1`, {
      headers: {
        site: "6e6a90a95755444cbdee6d0df6929539"
      }
    });
    store.dispatch((0,_redux_events__WEBPACK_IMPORTED_MODULE_4__/* .getEventsList */ .uY)(true, staffs.data));
    const packages = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"https://itica.ca/api"}/v1.0/packages?brief=true`, {
      headers: {
        site: "6e6a90a95755444cbdee6d0df6929539"
      }
    });
    const eventTypes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"https://itica.ca/api"}/v1.0/eventTypes`, {
      headers: {
        site: "6e6a90a95755444cbdee6d0df6929539"
      }
    });
    return {
      props: {
        packages: packages.data,
        eventTypes: eventTypes.data
      } // will be passed to the page component as props

    };
  } catch (e) {
    console.log(e);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsPage);

/***/ }),

/***/ 1731:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4885:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 5379:
/***/ ((module) => {

module.exports = require("redux-localstorage");

/***/ }),

/***/ 5694:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,357,168,610,861,136,5,41], () => (__webpack_exec__(4716)));
module.exports = __webpack_exports__;

})();