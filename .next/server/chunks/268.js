exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 3268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ kits_Post)
});

// EXTERNAL MODULE: ./src/assets/styleSheets/kits/post.module.scss
var post_module = __webpack_require__(2393);
var post_module_default = /*#__PURE__*/__webpack_require__.n(post_module);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/utilities/dateTime.js


const convertLaravelTime = input => {
  console.log('in', input);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var t = input.split(/[- :TZ]/); // Apply each element to the Date function

  var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5])),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      tMon = months[month - 1];
  return {
    day,
    month: tMon,
    year
  };
};

/* harmony default export */ const dateTime = ({
  convertLaravelTime
});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/kits/Post.js







const useStyles = (0,core_.makeStyles)({
  overlay: {
    bottom: props => props.tit - props.ov + 1
  }
});

const Post = ({
  image,
  name,
  brief,
  date,
  sm,
  unsplashMode
}) => {
  var _titleRef$current, _overlayRef$current, _briefRef$current, _briefRef$current2;

  let datep = dateTime.convertLaravelTime(date);
  let overlayRef = (0,external_react_.useRef)();
  let briefRef = (0,external_react_.useRef)();
  let titleRef = (0,external_react_.useRef)();
  const {
    0: props,
    1: setProps
  } = (0,external_react_.useState)({
    ov: 0,
    tit: 0
  });
  const muiClass = useStyles(props);
  console.log('titleRef?.current?.clientHeight', titleRef === null || titleRef === void 0 ? void 0 : (_titleRef$current = titleRef.current) === null || _titleRef$current === void 0 ? void 0 : _titleRef$current.clientHeight);
  console.log('overlayRef?.current?.clientHeight', overlayRef === null || overlayRef === void 0 ? void 0 : (_overlayRef$current = overlayRef.current) === null || _overlayRef$current === void 0 ? void 0 : _overlayRef$current.clientHeight);
  console.log('briefRef?.current?.clientHeight', briefRef === null || briefRef === void 0 ? void 0 : (_briefRef$current = briefRef.current) === null || _briefRef$current === void 0 ? void 0 : _briefRef$current.clientHeight);
  (0,external_react_.useEffect)(() => {
    var _overlayRef$current2, _titleRef$current2;

    setProps({
      ov: (_overlayRef$current2 = overlayRef.current) === null || _overlayRef$current2 === void 0 ? void 0 : _overlayRef$current2.clientHeight,
      tit: titleRef === null || titleRef === void 0 ? void 0 : (_titleRef$current2 = titleRef.current) === null || _titleRef$current2 === void 0 ? void 0 : _titleRef$current2.clientHeight
    });
    setTimeout(() => {
      var _overlayRef$current3, _overlayRef$current4, _titleRef$current3;

      console.log('overlayRef?.current?.clientHeight', overlayRef === null || overlayRef === void 0 ? void 0 : (_overlayRef$current3 = overlayRef.current) === null || _overlayRef$current3 === void 0 ? void 0 : _overlayRef$current3.clientHeight);
      setProps({
        ov: (_overlayRef$current4 = overlayRef.current) === null || _overlayRef$current4 === void 0 ? void 0 : _overlayRef$current4.clientHeight,
        tit: titleRef === null || titleRef === void 0 ? void 0 : (_titleRef$current3 = titleRef.current) === null || _titleRef$current3 === void 0 ? void 0 : _titleRef$current3.clientHeight
      });
    }, 1000);
  }, [overlayRef, titleRef, briefRef === null || briefRef === void 0 ? void 0 : (_briefRef$current2 = briefRef.current) === null || _briefRef$current2 === void 0 ? void 0 : _briefRef$current2.clientHeight]); // useEffect(() => {
  //     setProps({ ov: overlayRef.current?.clientHeight, tit: titleRef?.current?.clientHeight })
  // }, [])

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_clsx_default()((post_module_default()).postContainer, sm && (post_module_default()).postContainerSm, unsplashMode && (post_module_default()).postUnsplashMode, muiClass.postContainer),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (post_module_default()).imageContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: image
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      ref: overlayRef,
      className: external_clsx_default()((post_module_default()).overlay, muiClass.overlay),
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        ref: titleRef,
        children: name
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (post_module_default()).divider
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: briefRef,
        className: (post_module_default()).brief,
        dangerouslySetInnerHTML: {
          __html: brief
        }
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (post_module_default()).actionsContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: `${datep.day} ${datep.month} ${datep.year}`
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
          children: "Read More"
        })]
      })]
    })]
  });
};

/* harmony default export */ const kits_Post = (Post);

/***/ }),

/***/ 2393:
/***/ ((module) => {

// Exports
module.exports = {
	"postContainer": "post_postContainer__JUsAy",
	"overlay": "post_overlay__t0dsj",
	"postUnsplashMode": "post_postUnsplashMode__2_Kc6",
	"postContainerSm": "post_postContainerSm__QDFfF",
	"imageContainer": "post_imageContainer__vjOuH",
	"brief": "post_brief__27w5G",
	"actionsContainer": "post_actionsContainer__294eM"
};


/***/ })

};
;