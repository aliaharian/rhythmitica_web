(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/components/layout/Layout.js + 2 modules
var Layout = __webpack_require__(2088);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./src/assets/styleSheets/homepage.module.scss
var homepage_module = __webpack_require__(9546);
var homepage_module_default = /*#__PURE__*/__webpack_require__.n(homepage_module);
// EXTERNAL MODULE: ./src/assets/images/slider/slide1.jpg
var slide1 = __webpack_require__(4467);
var slide1_default = /*#__PURE__*/__webpack_require__.n(slide1);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/homepage/HomeSlider.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (homepage_module_default()).sliderContainer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (homepage_module_default()).slideItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (slide1_default())
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (homepage_module_default()).slideItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (slide1_default())
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (homepage_module_default()).slideItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (slide1_default())
        })
      })]
    }))
  });
};

/* harmony default export */ const homepage_HomeSlider = (HomeSlider);
// EXTERNAL MODULE: ./src/assets/images/groupLessonBanner.jpg
var groupLessonBanner = __webpack_require__(3896);
var groupLessonBanner_default = /*#__PURE__*/__webpack_require__.n(groupLessonBanner);
// EXTERNAL MODULE: ./src/assets/images/PrivateLessonBanner.jpg
var PrivateLessonBanner = __webpack_require__(1487);
var PrivateLessonBanner_default = /*#__PURE__*/__webpack_require__.n(PrivateLessonBanner);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/homepage/HomeIntro.js








const HomeIntro = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (homepage_module_default()).IntroGrandContainer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (homepage_module_default()).IntroContainer,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (groupLessonBanner_default())
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: '/events',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Group Lessons"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (PrivateLessonBanner_default())
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: '/privateLessons',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Private Lessons"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const homepage_HomeIntro = (HomeIntro);
// EXTERNAL MODULE: ./src/assets/images/icons/laptop.svg
var laptop = __webpack_require__(9718);
var laptop_default = /*#__PURE__*/__webpack_require__.n(laptop);
// EXTERNAL MODULE: ./src/assets/images/icons/earth.svg
var earth = __webpack_require__(3058);
var earth_default = /*#__PURE__*/__webpack_require__.n(earth);
// EXTERNAL MODULE: ./src/assets/images/icons/person.svg
var person = __webpack_require__(8882);
var person_default = /*#__PURE__*/__webpack_require__.n(person);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/homepage/HomeWhyRhythimtica.js










const HomeWhyRhythimtica = () => {
  const handleGotoGlobe = () => {
    window.open(`/globe`, '_self');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (homepage_module_default()).whyContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: external_clsx_default()((homepage_module_default()).sectionTitle, (homepage_module_default()).whyTitle),
      children: "Why Rhythmitica"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (homepage_module_default()).whyItemsContainer,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (homepage_module_default()).whyItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (homepage_module_default()).whyIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (laptop_default())
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Unique Platform"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "We have developed an accessible online platform since 2015."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (homepage_module_default()).whyItem,
        onClick: handleGotoGlobe,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_clsx_default()((homepage_module_default()).whyIcon, (homepage_module_default()).animateBorderIcon, (homepage_module_default()).pointer),
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (earth_default())
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Explore the World Music"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Learn the Ethnic Music with the Professional Instructors around the world."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (homepage_module_default()).whyItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (homepage_module_default()).whyIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (person_default())
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Trusted by Musicians "
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "We bridge cultural chasms to bring diverse people and cultures together."
        })]
      })]
    })]
  });
};

/* harmony default export */ const homepage_HomeWhyRhythimtica = (HomeWhyRhythimtica);
// EXTERNAL MODULE: ./src/components/kits/Instructor.js
var Instructor = __webpack_require__(9807);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./src/utilities/transform.js
var transform = __webpack_require__(8629);
;// CONCATENATED MODULE: ./src/components/homepage/HomeInstructors.js










const HomeInstructors = ({
  categories
}) => {
  console.log('categories', categories);
  const {
    0: selectedCat,
    1: setSelectedCat
  } = (0,external_react_.useState)(0);
  const theme = (0,core_.useTheme)();
  const md = (0,core_.useMediaQuery)(theme.breakpoints.down(1300));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (homepage_module_default()).instructorsContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: external_clsx_default()((homepage_module_default()).sectionTitle, (homepage_module_default()).instructorsTitle),
      children: "Highly Skilled Instructors"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (homepage_module_default()).categoriesContainer,
      children: categories.map((cat, index) => /*#__PURE__*/jsx_runtime_.jsx("p", {
        onClick: () => setSelectedCat(index),
        className: index == selectedCat && (homepage_module_default()).activeCat,
        children: cat.name
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (homepage_module_default()).staffListContainer,
      children: categories[selectedCat].packages.map(pack => {
        let resArr = [];
        let i = 0;
        pack.staff_packages.filter(function (item) {
          var i = resArr.findIndex(x => x.staff_id == item.staff_id);

          if (i <= -1) {
            resArr.push(item);
          }

          return null;
        });
        return resArr.map(staff => {
          let json = JSON.parse(staff.staff_user.json); // let langArray = [];
          // if (json.LanguagesSpoken) {
          //     let parsed = json.LanguagesSpoken.replace(/[-_,&/]/g, ' ')
          //     let arr = parsed.split(' ')
          //     arr.map((a, index) => {
          //         if (a != '') {
          //             langArray.push(a.substring(0, 2));
          //         }
          //     })
          // }

          if (i < 5) {
            i++;
            return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `privateLessons/${staff.staff_id}/${staff.package_id}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(Instructor/* default */.Z, {
                  image: "https://itica.ca" + staff.staff_user.user.avatar,
                  name: staff.staff_user.user.name,
                  family: staff.staff_user.user.family,
                  instrument: pack.name,
                  languages: transform/* default.staffLangs */.Z.staffLangs(staff.staff_user.json)
                })
              })
            });
          }
        });
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/privateLessons",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: external_clsx_default()((homepage_module_default()).moreBtn, (homepage_module_default()).moreStaffBtn),
        title: "all staffs",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
      })
    })]
  });
};

/* harmony default export */ const homepage_HomeInstructors = (HomeInstructors);
// EXTERNAL MODULE: ./redux/store.js + 3 modules
var store = __webpack_require__(6168);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/components/kits/Event.js
var Event = __webpack_require__(4136);
;// CONCATENATED MODULE: ./src/components/homepage/HomeRecentEvents.js








const HomeRecentEvents = ({
  events
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (homepage_module_default()).eventsContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: external_clsx_default()((homepage_module_default()).sectionTitle, (homepage_module_default()).eventsTitle),
      children: "Recent Events"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (homepage_module_default()).eventListContainer,
      children: events.slice(0, 3).map(event => {
        return /*#__PURE__*/jsx_runtime_.jsx(Event/* default */.Z, {
          image: "https://itica.ca" + event.banner,
          name: event.title,
          instructor: event.staff.user.name + " " + event.staff.user.family,
          price: event.price + " $",
          sessions: event.sessions.length,
          sm: true
        });
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/events",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: external_clsx_default()((homepage_module_default()).moreBtn, (homepage_module_default()).moreEventBtn),
        title: "all events",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
      })
    })]
  });
};

/* harmony default export */ const homepage_HomeRecentEvents = (HomeRecentEvents);
// EXTERNAL MODULE: ./src/components/kits/Post.js + 1 modules
var Post = __webpack_require__(3268);
;// CONCATENATED MODULE: ./src/components/homepage/HomeRecentPosts.js








const HomeRecentPosts = ({
  posts
}) => {
  console.log('posts', posts);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (homepage_module_default()).postsContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: external_clsx_default()((homepage_module_default()).sectionTitle, (homepage_module_default()).postsTitle),
      children: "Recent Posts"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (homepage_module_default()).postListContainer,
      children: posts.slice(0, 3).map(post => {
        return /*#__PURE__*/jsx_runtime_.jsx(Post/* default */.Z, {
          image: "https://itica.ca" + post.banner,
          name: post.title,
          brief: post.brief,
          date: post.created_at
        });
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/blog",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: external_clsx_default()((homepage_module_default()).moreBtn, (homepage_module_default()).morePostBtn),
        title: "all posts",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
      })
    })]
  });
};

/* harmony default export */ const homepage_HomeRecentPosts = (HomeRecentPosts);
// EXTERNAL MODULE: ./src/assets/styleSheets/kits/adItem.module.scss
var adItem_module = __webpack_require__(9959);
var adItem_module_default = /*#__PURE__*/__webpack_require__.n(adItem_module);
;// CONCATENATED MODULE: ./src/components/kits/AdItem.js





const AdItem = ({
  image,
  color
}) => {
  const useStyles = (0,core_.makeStyles)(theme => ({
    adContainer: {
      border: '1px solid #c2c1ba !important',
      '&:hover': {
        border: `1px solid ${color} !important`
      }
    }
  }));
  const style = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_clsx_default()((adItem_module_default()).adContainer, style.adContainer),
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: image
    })
  });
};

/* harmony default export */ const kits_AdItem = (AdItem);
// EXTERNAL MODULE: ./src/assets/images/icons/discord.svg
var discord = __webpack_require__(6832);
var discord_default = /*#__PURE__*/__webpack_require__.n(discord);
;// CONCATENATED MODULE: ./src/components/homepage/HomeAds.js









const HomeAds = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (homepage_module_default()).homeAdsContainer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (homepage_module_default()).homeAdItemsContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx(kits_AdItem, {
        image: (discord_default()),
        color: '#5C6BC0'
      }), /*#__PURE__*/jsx_runtime_.jsx(kits_AdItem, {
        image: (discord_default()),
        color: '#5C6BC0'
      }), /*#__PURE__*/jsx_runtime_.jsx(kits_AdItem, {
        image: (discord_default()),
        color: '#5C6BC0'
      }), /*#__PURE__*/jsx_runtime_.jsx(kits_AdItem, {
        image: (discord_default()),
        color: '#5C6BC0'
      }), /*#__PURE__*/jsx_runtime_.jsx(kits_AdItem, {
        image: (discord_default()),
        color: '#5C6BC0'
      }), /*#__PURE__*/jsx_runtime_.jsx(kits_AdItem, {
        image: (discord_default()),
        color: '#5C6BC0'
      })]
    })
  });
};

/* harmony default export */ const homepage_HomeAds = (HomeAds);
// EXTERNAL MODULE: ./src/components/layout/Media.js
var Media = __webpack_require__(610);
;// CONCATENATED MODULE: ./pages/index.js














function MyApp({
  categories,
  events,
  posts
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    page: 'home',
    children: [/*#__PURE__*/jsx_runtime_.jsx(homepage_HomeSlider, {}), /*#__PURE__*/jsx_runtime_.jsx(homepage_HomeIntro, {}), /*#__PURE__*/jsx_runtime_.jsx(homepage_HomeWhyRhythimtica, {}), /*#__PURE__*/jsx_runtime_.jsx(homepage_HomeInstructors, {
      categories: categories
    }), /*#__PURE__*/jsx_runtime_.jsx(homepage_HomeRecentEvents, {
      events: events
    }), /*#__PURE__*/jsx_runtime_.jsx(homepage_HomeRecentPosts, {
      posts: posts
    }), /*#__PURE__*/jsx_runtime_.jsx(homepage_HomeAds, {})]
  });
}

const getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  req,
  res
}) => {
  const categories = await external_axios_default().get(`${"https://itica.ca/api"}/v1.0/tags`, {
    headers: {
      site: "6e6a90a95755444cbdee6d0df6929539"
    }
  });
  const events = await external_axios_default().get(`${"https://itica.ca/api"}/v1.0/workshops?group_class=none`, {
    headers: {
      site: "6e6a90a95755444cbdee6d0df6929539"
    }
  });
  const posts = await external_axios_default().get(`${"https://itica.ca/api"}/v1.0/blog/posts?length=3`, {
    headers: {
      site: "6e6a90a95755444cbdee6d0df6929539"
    }
  });
  console.log('cat', categories.data);
  return {
    props: {
      categories: categories.data.data,
      events: events.data.data,
      posts: posts.data.data
    } // will be passed to the page component as props

  };
});
/* harmony default export */ const pages = (MyApp);

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

/***/ 9546:
/***/ ((module) => {

// Exports
module.exports = {
	"sliderContainer": "homepage_sliderContainer__3FRY7",
	"slideItem": "homepage_slideItem__1DlSw",
	"IntroGrandContainer": "homepage_IntroGrandContainer__3MOmB",
	"moreBtn": "homepage_moreBtn__3E_C-",
	"IntroContainer": "homepage_IntroContainer__2Da8S",
	"whyContainer": "homepage_whyContainer__3OYAS",
	"sectionTitle": "homepage_sectionTitle__3-KRu",
	"whyTitle": "homepage_whyTitle__3ew3x",
	"whyItemsContainer": "homepage_whyItemsContainer__3WMBQ",
	"whyIcon": "homepage_whyIcon__3Uj0y",
	"animateBorderIcon": "homepage_animateBorderIcon__2WkUi",
	"spin": "homepage_spin__19BxG",
	"instructorsContainer": "homepage_instructorsContainer__370Ts",
	"instructorsTitle": "homepage_instructorsTitle__2dTi1",
	"categoriesContainer": "homepage_categoriesContainer__35kJB",
	"activeCat": "homepage_activeCat__1RbNK",
	"staffListContainer": "homepage_staffListContainer__1kTHC",
	"moreStaffBtn": "homepage_moreStaffBtn__1oaAO",
	"eventsContainer": "homepage_eventsContainer__1CTaY",
	"eventsTitle": "homepage_eventsTitle__3iBH_",
	"moreEventBtn": "homepage_moreEventBtn__3bs1P",
	"eventListContainer": "homepage_eventListContainer__2YdKb",
	"postsContainer": "homepage_postsContainer__2-Wrh",
	"postsTitle": "homepage_postsTitle__3jIaD",
	"morePostBtn": "homepage_morePostBtn__2RWSb",
	"postListContainer": "homepage_postListContainer__rSHzp",
	"homeAdsContainer": "homepage_homeAdsContainer__P9dHw",
	"homeAdItemsContainer": "homepage_homeAdItemsContainer__9uRqh",
	"pointer": "homepage_pointer__TxKDG"
};


/***/ }),

/***/ 9959:
/***/ ((module) => {

// Exports
module.exports = {
	"adContainer": "adItem_adContainer__2UWU8"
};


/***/ }),

/***/ 1487:
/***/ ((module) => {

module.exports = "/_next/static/images/PrivateLessonBanner-d05b55cfa632675539dfb22aadaf9a1c.jpg";

/***/ }),

/***/ 3896:
/***/ ((module) => {

module.exports = "/_next/static/images/groupLessonBanner-4588a3359eadc4474752c0fc21d21adb.jpg";

/***/ }),

/***/ 6832:
/***/ ((module) => {

module.exports = "/_next/static/images/discord-873e76801bddf998d6ddba50c43405c1.svg";

/***/ }),

/***/ 3058:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Mi45NTYiIGhlaWdodD0iNjIuOTU1IiB2aWV3Qm94PSIwIDAgNjIuOTU2IDYyLjk1NSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggZD0iTTAsMEg2Mi45NTZWNjIuOTU1SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTI4LjIwNiwyQTI2LjIzMSwyNi4yMzEsMCwxLDAsNTQuNDY0LDI4LjIzMSwyNi4yMTksMjYuMjE5LDAsMCwwLDI4LjIwNiwyWk00Ni4zODQsMTcuNzM5SDM4LjY0NkE0MS4wNDksNDEuMDQ5LDAsMCwwLDM1LjAyNiw4LjQsMjEuMDYzLDIxLjA2MywwLDAsMSw0Ni4zODQsMTcuNzM5Wk0yOC4yMzIsNy4zNTFhMzYuOTUxLDM2Ljk1MSwwLDAsMSw1LjAxLDEwLjM4OEgyMy4yMjJBMzYuOTUxLDM2Ljk1MSwwLDAsMSwyOC4yMzIsNy4zNTFaTTcuOTI4LDMzLjQ3OGEyMS42MTksMjEuNjE5LDAsMCwxLS42ODItNS4yNDYsMjEuNjE5LDIxLjYxOSwwLDAsMSwuNjgyLTUuMjQ2aDguODY2YTQzLjMyMSw0My4zMjEsMCwwLDAtLjM2Nyw1LjI0Niw0My4zMjEsNDMuMzIxLDAsMCwwLC4zNjcsNS4yNDZabTIuMTUxLDUuMjQ2aDcuNzM4YTQxLjA0OSw0MS4wNDksMCwwLDAsMy42Miw5LjMzOCwyMC45NTEsMjAuOTUxLDAsMCwxLTExLjM1OC05LjMzOFptNy43MzgtMjAuOTg1SDEwLjA3OUEyMC45NTEsMjAuOTUxLDAsMCwxLDIxLjQzOCw4LjQsNDEuMDQ5LDQxLjA0OSwwLDAsMCwxNy44MTgsMTcuNzM5Wk0yOC4yMzIsNDkuMTExYTM2Ljk1MSwzNi45NTEsMCwwLDEtNS4wMS0xMC4zODhIMzMuMjQyQTM2Ljk1MSwzNi45NTEsMCwwLDEsMjguMjMyLDQ5LjExMVpNMzQuMzcsMzMuNDc4SDIyLjA5NGEzOC41OTIsMzguNTkyLDAsMCwxLS40Mi01LjI0NiwzOC4yNTcsMzguMjU3LDAsMCwxLC40Mi01LjI0NkgzNC4zN2EzOC4yNTgsMzguMjU4LDAsMCwxLC40Miw1LjI0NkEzOC41OTMsMzguNTkzLDAsMCwxLDM0LjM3LDMzLjQ3OFptLjY1NiwxNC41ODVhNDEuMDQ5LDQxLjA0OSwwLDAsMCwzLjYyLTkuMzM4aDcuNzM4QTIxLjA2MywyMS4wNjMsMCwwLDEsMzUuMDI2LDQ4LjA2MlptNC42NDMtMTQuNTg1YTQzLjMyLDQzLjMyLDAsMCwwLC4zNjctNS4yNDYsNDMuMzIsNDMuMzIsMCwwLDAtLjM2Ny01LjI0Nmg4Ljg2NmEyMS42MTksMjEuNjE5LDAsMCwxLC42ODIsNS4yNDYsMjEuNjE5LDIxLjYxOSwwLDAsMS0uNjgyLDUuMjQ2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4yNDYgMy4yNDYpIiBmaWxsPSIjODIwMjYzIi8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 9718:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Mi45NTYiIGhlaWdodD0iNjIuMzY4IiB2aWV3Qm94PSIwIDAgNjIuOTU2IDYyLjM2OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOTUgMCkiPjxyZWN0IHdpZHRoPSI2Mi4zNjkiIGhlaWdodD0iNjIuMzY4IiBmaWxsPSJub25lIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAuMTQpIj48cGF0aCBkPSJNNTIuNDY0LDQwLjcyNGE1LjI2Miw1LjI2MiwwLDAsMCw1LjI0Ni01LjI0NlY5LjI0NkE1LjI2Miw1LjI2MiwwLDAsMCw1Mi40NjQsNEgxMC40OTNBNS4yNjIsNS4yNjIsMCwwLDAsNS4yNDYsOS4yNDZWMzUuNDc4YTUuMjYyLDUuMjYyLDAsMCwwLDUuMjQ2LDUuMjQ2SDBWNDUuOTdINjIuOTU2VjQwLjcyNFpNMTAuNDkzLDkuMjQ2SDUyLjQ2NFYzNS40NzhIMTAuNDkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNCkiIGZpbGw9IiM4MjAyNjMiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 8882:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Mi45NTYiIGhlaWdodD0iNjIuOTU1IiB2aWV3Qm94PSIwIDAgNjIuOTU2IDYyLjk1NSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggZD0iTTAsMEg2Mi45NTZWNjIuOTU1SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTI4LjIzMiwyQTI2LjIzMSwyNi4yMzEsMCwxLDAsNTQuNDY0LDI4LjIzMSwyNi4yNDEsMjYuMjQxLDAsMCwwLDI4LjIzMiwyWk0xNS4zLDQ0LjdjMS4xMjgtMi4zNjEsOC00LjY2OSwxMi45MzItNC42NjlTNDAuMDYyLDQyLjM0NCw0MS4xNjQsNDQuN2EyMC43OSwyMC43OSwwLDAsMS0yNS44NjUsMFptMjkuNjE2LTMuOGMtMy43NTEtNC41NjQtMTIuODU0LTYuMTEyLTE2LjY4My02LjExMlMxNS4zLDM2LjMzNywxMS41NDgsNDAuOWEyMC45ODYsMjAuOTg2LDAsMSwxLDMzLjM2NywwWk0yOC4yMzIsMTIuNDkzYTkuMTgxLDkuMTgxLDAsMSwwLDkuMTgxLDkuMTgxQTkuMTU4LDkuMTU4LDAsMCwwLDI4LjIzMiwxMi40OTNabTAsMTMuMTE2YTMuOTM1LDMuOTM1LDAsMSwxLDMuOTM1LTMuOTM1QTMuOTI5LDMuOTI5LDAsMCwxLDI4LjIzMiwyNS42MDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjI0NiAzLjI0NikiIGZpbGw9IiM4MjAyNjMiLz48L2c+PC9zdmc+"

/***/ }),

/***/ 4467:
/***/ ((module) => {

module.exports = "/_next/static/images/slide1-a2cdbb0983cea441f0cd50bde3b8243d.jpg";

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,357,168,610,136,807,268], () => (__webpack_exec__(5686)));
module.exports = __webpack_exports__;

})();