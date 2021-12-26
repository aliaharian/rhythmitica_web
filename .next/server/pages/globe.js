"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 8054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ globe),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/components/layout/Layout.js + 2 modules
var Layout = __webpack_require__(2088);
// EXTERNAL MODULE: ./redux/store.js + 3 modules
var store = __webpack_require__(6168);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/earthGlobe/EarthGlobe.js




const GlobeComponent = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 84).then(__webpack_require__.bind(__webpack_require__, 7084)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7084)],
    modules: ["../src/components/earthGlobe/EarthGlobe.js -> " + './GlobeComponent']
  }
});

const EarthGlobe = ({
  globeData
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(GlobeComponent, {
      globeData: globeData
    })
  });
};

/* harmony default export */ const earthGlobe_EarthGlobe = (EarthGlobe);
;// CONCATENATED MODULE: ./pages/globe.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function GlobePage({
  globeData
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    page: 'globe',
    children: /*#__PURE__*/jsx_runtime_.jsx(earthGlobe_EarthGlobe, {
      globeData: globeData
    })
  });
}

const getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  req,
  res
}) => {
  try {
    var _globeData$data, _globeData$data$data;

    const globeData = await external_axios_default().get(`${"https://itica.ca/api"}/v1.0/countries/globeData`, {
      headers: {
        site: "6e6a90a95755444cbdee6d0df6929539"
      }
    });
    let arr = [];
    let item;
    globeData === null || globeData === void 0 ? void 0 : (_globeData$data = globeData.data) === null || _globeData$data === void 0 ? void 0 : (_globeData$data$data = _globeData$data.data) === null || _globeData$data$data === void 0 ? void 0 : _globeData$data$data.map(d => {
      item = {
        lat: d.pointData.lat,
        lng: d.pointData.long,
        label: d.pointData.country_name,
        packages: d.packages
      };
      arr.push(_objectSpread({}, item));
    });
    return {
      props: {
        globeData: arr
      } // will be passed to the page component as props

    };
  } catch (e) {
    console.log(e);
  }
});
/* harmony default export */ const globe = (GlobePage);

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

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 8695:
/***/ ((module) => {

module.exports = require("react-globe.gl");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,152,357,168], () => (__webpack_exec__(8054)));
module.exports = __webpack_exports__;

})();