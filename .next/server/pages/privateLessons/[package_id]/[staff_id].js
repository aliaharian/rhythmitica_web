(() => {
var exports = {};
exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 5119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _staff_id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/components/layout/Layout.js + 2 modules
var Layout = __webpack_require__(2088);
// EXTERNAL MODULE: ./redux/store.js + 3 modules
var store = __webpack_require__(6168);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/assets/styleSheets/singleStaff.module.scss
var singleStaff_module = __webpack_require__(4937);
var singleStaff_module_default = /*#__PURE__*/__webpack_require__.n(singleStaff_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/singleStaff/SingleStaffHeader.js





const SingleStaffHeader = ({
  staffInfo
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (singleStaff_module_default()).staffHeader,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: `${"https://itica.ca"}${JSON.parse(staffInfo.staff_package_json).banner}`
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
      children: [staffInfo.staff_name, " ", staffInfo.staff_family]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: staffInfo.package_name
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
      href: "#",
      children: "Book Now"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (singleStaff_module_default()).bannerShadow
    })]
  });
};

/* harmony default export */ const singleStaff_SingleStaffHeader = (SingleStaffHeader);
;// CONCATENATED MODULE: ./src/components/singleStaff/Style.js

/* harmony default export */ const Style = ((0,core_.makeStyles)(theme => ({
  tabsContainer: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#820263',
      height: 3
    },
    '& .MuiTabs-scroller': {
      height: 70,
      [theme.breakpoints.down(1900)]: {
        height: 62
      },
      [theme.breakpoints.down(1600)]: {
        height: 54
      }
    },
    '& .MuiTabs-flexContainer': {
      height: '100%'
    },
    '& .MuiTab-root': {
      padding: '6px 17px 9px',
      minWidth: 10,
      marginRight: 28
    },
    '& .Mui-selected': {
      '& span': {
        color: '#820263'
      }
    },
    '& .MuiTab-wrapper': {
      textTransform: 'capitalize',
      fontSize: 16,
      [theme.breakpoints.down(1900)]: {
        fontSize: 14
      },
      [theme.breakpoints.down(1600)]: {
        fontSize: 12
      }
    },
    '& .MuiTab-textColorInherit': {
      opacity: 1
    }
  }
})));
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/singleStaff/SingleStaffBiography.js





const SingleStaffBiography = ({
  staffInfo,
  type = 'biography'
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (singleStaff_module_default()).staffBiography,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
      children: [staffInfo.staff_name, " ", staffInfo.staff_family, " ", type]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      dangerouslySetInnerHTML: {
        __html: type == 'artworks' ? staffInfo.staff_artworks : staffInfo.staff_biography
      }
    })]
  });
};

/* harmony default export */ const singleStaff_SingleStaffBiography = (SingleStaffBiography);
;// CONCATENATED MODULE: ./src/components/kits/YtPlayer.js



const YtPlayer = ({
  embedId
}) => /*#__PURE__*/jsx_runtime_.jsx("iframe", {
  width: "100%",
  src: `https://www.youtube.com/embed/${embedId}?autoplay=1`,
  frameBorder: "0",
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen: true,
  title: "Embedded youtube"
});

/* harmony default export */ const kits_YtPlayer = (YtPlayer);
// EXTERNAL MODULE: ./src/assets/images/icons/playIcon.svg
var playIcon = __webpack_require__(4816);
var playIcon_default = /*#__PURE__*/__webpack_require__.n(playIcon);
;// CONCATENATED MODULE: ./src/components/singleStaff/SingleStaffVideos.js









const SingleStaffVideos = ({
  staffInfo
}) => {
  const {
    0: play,
    1: setPlay
  } = (0,external_react_.useState)(false);
  const {
    0: currVideo,
    1: setCurrVideo
  } = (0,external_react_.useState)(staffInfo.staff_videos.length > 0 ? staffInfo.staff_videos[0] : null);

  const handlePlayVideo = () => {
    !play && setPlay(true);
  };

  const handleChangeVideo = e => {
    setPlay(false);
    setCurrVideo(e);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (singleStaff_module_default()).staffVideo,
    children: staffInfo.staff_videos.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (singleStaff_module_default()).videoContainer,
        onClick: handlePlayVideo,
        children: play ? /*#__PURE__*/jsx_runtime_.jsx(kits_YtPlayer, {
          embedId: currVideo.link
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (singleStaff_module_default()).videoCover,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: `${"https://itica.ca"}${currVideo.cover}`
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (singleStaff_module_default()).coverOverlay,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: (playIcon_default())
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (singleStaff_module_default()).thumbsContainer,
        children: staffInfo.staff_videos.map(video => {
          return /*#__PURE__*/jsx_runtime_.jsx("img", {
            onClick: () => handleChangeVideo(video),
            src: `${"https://itica.ca"}${video.cover}`
          });
        })
      })]
    })
  });
};

/* harmony default export */ const singleStaff_SingleStaffVideos = (SingleStaffVideos);
;// CONCATENATED MODULE: ./src/components/singleStaff/SingleStaff.js












const SingleStaff = ({
  staffInfo
}) => {
  const muiClass = Style();
  console.log(staffInfo);
  const {
    0: selectedTab,
    1: setSelectedTab
  } = (0,external_react_.useState)('biographyRef');
  const biographyRef = (0,external_react_.useRef)(null);
  const artworksRef = (0,external_react_.useRef)(null);
  const videosRef = (0,external_react_.useRef)(null);

  const handleSelectTab = (tab, val) => {
    setSelectedTab(val);

    switch (val) {
      case 'biographyRef':
        biographyRef.current.scrollIntoView({
          behavior: "smooth"
        });
        break;

      case 'artworksRef':
        artworksRef.current.scrollIntoView({
          behavior: "smooth"
        });
        break;

      case 'videosRef':
        videosRef.current.scrollIntoView({
          behavior: "smooth"
        });
        break;
    }
  };

  (0,external_react_.useEffect)(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; //   console.log('currentScrollY', currentScrollY);

      if (videosRef.current.getBoundingClientRect().top < 250) {
        setSelectedTab('videosRef');
      } else if (artworksRef.current.getBoundingClientRect().top < 150) {
        setSelectedTab('artworksRef');
      } else if (biographyRef.current.getBoundingClientRect().top < 150) {
        setSelectedTab('biographyRef');
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(singleStaff_SingleStaffHeader, {
      staffInfo: staffInfo
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (singleStaff_module_default()).staffMainBody,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (singleStaff_module_default()).tabsGrandContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_clsx_default()((singleStaff_module_default()).tabsContainer, muiClass.tabsContainer),
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Tabs, {
            value: selectedTab,
            onChange: handleSelectTab,
            textColor: "inherit",
            indicatorColor: "inherit",
            "aria-label": "blog categories",
            variant: "fullWidth",
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Tab, {
              value: 'biographyRef',
              label: 'Biography'
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Tab, {
              value: 'artworksRef',
              label: 'Artworks'
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Tab, {
              value: 'videosRef',
              label: 'Videos'
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (singleStaff_module_default()).refContainer,
        ref: biographyRef,
        children: /*#__PURE__*/jsx_runtime_.jsx(singleStaff_SingleStaffBiography, {
          staffInfo: staffInfo
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (singleStaff_module_default()).refContainer,
        ref: artworksRef,
        children: /*#__PURE__*/jsx_runtime_.jsx(singleStaff_SingleStaffBiography, {
          staffInfo: staffInfo,
          type: 'artworks'
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (singleStaff_module_default()).refContainer,
        ref: videosRef,
        children: /*#__PURE__*/jsx_runtime_.jsx(singleStaff_SingleStaffVideos, {
          staffInfo: staffInfo
        })
      })]
    })]
  });
};

/* harmony default export */ const singleStaff_SingleStaff = (SingleStaff);
;// CONCATENATED MODULE: ./pages/privateLessons/[package_id]/[staff_id].js






function staffSinglePage({
  staffInfo
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    page: 'singleStaff',
    children: /*#__PURE__*/jsx_runtime_.jsx(singleStaff_SingleStaff, {
      staffInfo: staffInfo
    })
  });
}

const getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  store,
  req,
  res,
  query
}) => {
  try {
    const staffInfo = await external_axios_default().post(`${"https://itica.ca/api"}/v1.0/staffs/${query.package_id}/${query.staff_id}/summery`, null, {
      headers: {
        site: "6e6a90a95755444cbdee6d0df6929539"
      }
    });
    return {
      props: {
        staffInfo: staffInfo.data.data
      } // will be passed to the page component as props

    };
  } catch (e) {
    console.log(e);
  }
});
/* harmony default export */ const _staff_id_ = (staffSinglePage);

/***/ }),

/***/ 4937:
/***/ ((module) => {

// Exports
module.exports = {
	"staffHeader": "singleStaff_staffHeader__1W1uS",
	"bannerShadow": "singleStaff_bannerShadow__2IKMD",
	"staffMainBody": "singleStaff_staffMainBody__3P0vG",
	"tabsGrandContainer": "singleStaff_tabsGrandContainer__3kd6m",
	"tabsContainer": "singleStaff_tabsContainer__3CkhD",
	"staffBiography": "singleStaff_staffBiography__2FuTX",
	"staffVideo": "singleStaff_staffVideo__2waFf",
	"refContainer": "singleStaff_refContainer__2pDCC",
	"thumbsContainer": "singleStaff_thumbsContainer__2J6q9",
	"videoCover": "singleStaff_videoCover__3I-Xh",
	"videoContainer": "singleStaff_videoContainer__3aebX",
	"coverOverlay": "singleStaff_coverOverlay__39n13"
};


/***/ }),

/***/ 4816:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzEiIGhlaWdodD0iMTMxIiB2aWV3Qm94PSIwIDAgMTMxIDEzMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg5NSAtMjY5MikiPjxjaXJjbGUgY3g9IjY1LjUiIGN5PSI2NS41IiByPSI2NS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OTUgMjY5MikiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPjxwYXRoIGQ9Ik0xOC42MzMsMS41MTJhMSwxLDAsMCwxLDEuNzM1LDBMMzguMTQxLDMyLjVhMSwxLDAsMCwxLS44NjcsMS41SDEuNzI2YTEsMSwwLDAsMS0uODY3LTEuNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4MCAyNzM4KSByb3RhdGUoOTApIiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 1731:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3536:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2744:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 5379:
/***/ ((module) => {

"use strict";
module.exports = require("redux-localstorage");

/***/ }),

/***/ 5694:
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,357,168], () => (__webpack_exec__(5119)));
module.exports = __webpack_exports__;

})();