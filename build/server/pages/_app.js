"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js + 2 modules
var CssBaseline = __webpack_require__(6928);
// EXTERNAL MODULE: ./redux/store.js + 3 modules
var store = __webpack_require__(6168);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: ./src/theme/theme.js
var theme = __webpack_require__(7824);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createTheme.js + 21 modules
var createTheme = __webpack_require__(1003);
;// CONCATENATED MODULE: ./src/theme/globalStyles.js

const globalStyles = () => {
  const theme = (0,createTheme/* default */.Z)({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    }
  });
  return {
    "@global": {
      body: {
        fontFamily: "nirmala",
        fontSize: "14px",
        backgroundColor: "#fff",
        color: "#291720",
        lineHeight: 2.14,
        "&::--webkit-scrollbar": {
          width: "6px",
          backgroundColor: "#F5F5F5"
        }
      },
      input: {
        '&:-internal-autofill-selected ': {
          backgroundColor: '#fff!important',
          webkitBoxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white !important',
          boxShadow: ' inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white !important'
        }
      },
      ".Mui-disabled": {
        backgroundColor: '#fff!important',
        border: '1px solid rgba(0, 0, 0, 0.12)!important'
      },
      '.MuiSnackbarContent-root': {
        color: '#fff!important'
      },
      ".MuiExpansionPanelSummary-expandIcon.Mui-expanded": {
        "& svg": {
          backgroundColor: "#1641FF"
        }
      },
      ".MuiExpansionPanel-root.Mui-expanded": {
        margin: "3px 0 !important"
      },
      ".MuiAutocomplete-popupIndicator": {
        marginLeft: "9px !important"
      },
      "#errorToast": {
        width: 'min-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
          marginBottom: 20
        },
        '& .MuiPaper-root': {
          width: 'max-content',
          minWidth: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 400,
          maxWidth: 288,
          padding: '6px 38px',
          '& .MuiSnackbarContent-message': {
            padding: '6px 0',
            width: 'max-content',
            '& span': {
              display: 'block',
              width: '100%',
              textAlign: 'center',
              fontSize: 11
            }
          }
        }
      },
      "#infoToast": {
        width: 'min-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
          marginBottom: 20
        },
        '& .MuiPaper-root': {
          width: 'max-content',
          minWidth: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 400,
          maxWidth: 288,
          padding: '11px 38px',
          backgroundColor: '#0c0b31cc',
          '& .MuiSnackbarContent-message': {
            padding: '6px 0',
            width: 'max-content',
            '& span': {
              display: 'block',
              width: '100%',
              textAlign: 'center',
              fontSize: 13 // color:'#0c0b31'

            }
          }
        }
      },
      "MuiAvatar-colorDefault": {
        backgroundColor: "#ffa352"
      },
      ".MuiMenu-list": {
        "& option": {
          margin: 10,
          cursor: "pointer"
        }
      },
      ".MuiPaper-root": {
        color: "#0c0b31cc"
      }
    }
  };
};
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "notistack"
const external_notistack_namespaceObject = require("notistack");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 //nprogress module

 //styles of nprogress
// import 'swiper/swiper.scss'; //styles of swiper

 // requires a loader






router_default().events.on("routeChangeStart", () => external_nprogress_default().start());
router_default().events.on("routeChangeComplete", () => external_nprogress_default().done());
router_default().events.on("routeChangeError", () => external_nprogress_default().done()); // axios.defaults.withCredentials = true;

function MyApp(props) {
  const {
    Component,
    pageProps,
    store,
    classes
  } = props; // React.useEffect(() => {
  //     // Remove the server-side injected CSS.
  //     const jssStyles = document.querySelector("#jss-server-side");
  //     if (jssStyles) {
  //         jssStyles.parentElement.removeChild(jssStyles);
  //     }
  // }, []);

  (external_axios_default()).defaults.baseURL = "https://itica.ca/api";
  (external_axios_default()).defaults.headers.post["Content-Type"] = "application/json";
  (external_axios_default()).defaults.headers.common.site = "6e6a90a95755444cbdee6d0df6929539";
  return /*#__PURE__*/jsx_runtime_.jsx(external_notistack_namespaceObject.SnackbarProvider, {
    maxSnack: 3,
    classes: {
      root: classes.snackbar
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "rhythmitica"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: [/*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
      })]
    })
  });
}

const styles = theme => globalStyles(theme); // MyApp.getInitialProps = async ({ ctx }) => {
// console.log(ctx)
// const { user } = ctx.store.getState();
// if (ctx.req) {
//     try {
//         const res = await fetch(`${BASE_URL}/user/profile`, {
//             withCredentials: true,
//             headers: { cookie: ctx.req.headers.cookie },
//         });
//         const data = await res.json();
//         const res2 = await fetch(`${BASE_URL}/user/view?chatUserId=${data.chatUserId || 0}&teacher=true&groupOwner=true`, {
//             withCredentials: true,
//             headers: { cookie: ctx.req.headers.cookie },
//         });
//         const data2 = await res2.json();
//         ctx.store.dispatch({ type: LOAD_SUCCESS, payload: { user: data, userDetail: data2 } });
//         // ctx.store.dispatch(getContactDetail(data2));
//     } catch (err) {
//         console.log(err);
//     }
// }
// };


/* harmony default export */ const _app = (store/* wrapper.withRedux */.Y.withRedux((0,styles_.withStyles)(styles)(MyApp)));

/***/ }),

/***/ 7824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);

 // Create a theme instance.

const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
  shadows: ["none"],
  typography: {
    fontFamily: ["nirmala", "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(",")
  },
  font: {
    regular: 'nirmala',
    bold: 'nirmalaB',
    latin: 'nirmalaS'
  },
  palette: {
    primary: {
      main: "#291720"
    },
    secondary: {
      main: "#820263"
    },
    error: {
      main: '#d90368'
    },
    background: {
      default: "#fff"
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ 4047:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [3,928,168], () => (__webpack_exec__(9969)));
module.exports = __webpack_exports__;

})();