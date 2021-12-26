"use strict";
exports.id = 928;
exports.ids = [928];
exports.modules = {

/***/ 6928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ CssBaseline_CssBaseline)
});

// UNUSED EXPORTS: body, html, styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4229);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createTheme.js + 21 modules
var createTheme = __webpack_require__(1003);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js

var defaultTheme = (0,createTheme/* default */.Z)();
/* harmony default export */ const styles_defaultTheme = (defaultTheme);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js




function withStyles(stylesOrCreator, options) {
  return (0,styles_.withStyles)(stylesOrCreator, (0,esm_extends/* default */.Z)({
    defaultTheme: styles_defaultTheme
  }, options));
}

/* harmony default export */ const styles_withStyles = (withStyles);
// EXTERNAL MODULE: external "@material-ui/utils"
var utils_ = __webpack_require__(2958);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js





var html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
var body = function body(theme) {
  return (0,esm_extends/* default */.Z)({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    '@media print': {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var styles = function styles(theme) {
  return {
    '@global': {
      html: html,
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: theme.typography.fontWeightBold
      },
      body: (0,esm_extends/* default */.Z)({
        margin: 0
      }, body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      classes = props.classes;
  /* eslint-enable no-unused-vars */

  return /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, children);
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ const CssBaseline_CssBaseline = (styles_withStyles(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline));

/***/ })

};
;