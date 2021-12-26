(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 5197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/components/layout/Layout.js + 2 modules
var Layout = __webpack_require__(2088);
// EXTERNAL MODULE: ./redux/store.js + 3 modules
var store = __webpack_require__(6168);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/components/events/Events.js + 3 modules
var Events = __webpack_require__(7041);
// EXTERNAL MODULE: ./redux/events/index.js + 2 modules
var events = __webpack_require__(9698);
// EXTERNAL MODULE: ./redux/posts/index.js + 2 modules
var redux_posts = __webpack_require__(3631);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/assets/styleSheets/blog.module.scss
var blog_module = __webpack_require__(5546);
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/assets/images/icons/searchIcon.svg
var searchIcon = __webpack_require__(9586);
var searchIcon_default = /*#__PURE__*/__webpack_require__.n(searchIcon);
// EXTERNAL MODULE: ./src/assets/images/icons/searchIconPink.svg
var searchIconPink = __webpack_require__(7194);
var searchIconPink_default = /*#__PURE__*/__webpack_require__.n(searchIconPink);
;// CONCATENATED MODULE: ./src/components/blog/Style.js

/* harmony default export */ const Style = ((0,core_.makeStyles)(theme => ({
  blogHeader: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#d90368',
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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/blog/BlogHeader.js











const BlogHeader = ({
  categories,
  selectedCategory,
  handleSelectCategory,
  _handleSearch,
  q,
  setQ
}) => {
  const {
    0: openSearch,
    1: setOpenSearch
  } = (0,external_react_.useState)(false);
  const muiClass = Style();

  const handleSearch = () => {
    if (!openSearch) {
      setOpenSearch(true);
    } else {
      _handleSearch();
    }
  };

  const handleClickAway = () => {
    if (q === '') {
      setOpenSearch(false);
    }
  };

  const handleKeyPress = e => {
    var code = e.keyCode || e.which;

    if (code == 13) {
      _handleSearch();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_clsx_default()((blog_module_default()).blogHeader, muiClass.blogHeader),
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Tabs, {
      value: selectedCategory,
      onChange: handleSelectCategory,
      textColor: "inherit",
      indicatorColor: "inherit",
      "aria-label": "blog categories",
      variant: "fullWidth",
      children: categories.map(cat => /*#__PURE__*/jsx_runtime_.jsx(core_.Tab, {
        value: cat.id,
        label: cat.title
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.ClickAwayListener, {
      onClickAway: handleClickAway,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()((blog_module_default()).blogSearch, openSearch && (blog_module_default()).blogSearchOpen),
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          value: q,
          onKeyPress: handleKeyPress,
          onChange: e => setQ(e.target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: handleSearch,
          className: (blog_module_default()).searchIconConntainer,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: openSearch ? (searchIconPink_default()) : (searchIcon_default())
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const blog_BlogHeader = (BlogHeader);
// EXTERNAL MODULE: external "react-infinite-scroll-component"
var external_react_infinite_scroll_component_ = __webpack_require__(4885);
var external_react_infinite_scroll_component_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroll_component_);
// EXTERNAL MODULE: ./src/components/kits/Post.js + 1 modules
var Post = __webpack_require__(3268);
// EXTERNAL MODULE: ./src/utilities/transform.js
var transform = __webpack_require__(8629);
// EXTERNAL MODULE: ./src/assets/images/icons/noResultIconPink.svg
var noResultIconPink = __webpack_require__(7377);
var noResultIconPink_default = /*#__PURE__*/__webpack_require__.n(noResultIconPink);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/blog/PostsList.js












const PostsList = ({
  handlePaginate
}) => {
  const posts = (0,external_react_redux_.useSelector)(state => state.posts.posts);
  const postsLoading = (0,external_react_redux_.useSelector)(state => state.posts.postsLoading);
  const {
    0: renderedPost,
    1: setRenderedPost
  } = (0,external_react_.useState)();
  console.log('posts', posts);
  console.log('renderedPost', renderedPost);
  (0,external_react_.useEffect)(() => {
    let tmp1 = [];
    let tmp2 = [];
    let tmp3 = [];
    posts.data.map((post, index) => {
      if ((index + 1) % 3 == 1) {
        tmp1.push(post);
      }

      if ((index + 1) % 3 == 2) {
        tmp2.push(post);
      }

      if ((index + 1) % 3 == 0) {
        tmp3.push(post);
      }
    });
    setRenderedPost([tmp1, tmp2, tmp3]);
  }, [posts.data]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (blog_module_default()).postsListContainer,
    children: postsLoading || !renderedPost ? /*#__PURE__*/jsx_runtime_.jsx("p", {
      style: {
        textAlign: "center",
        marginTop: 53
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.CircularProgress, {
        color: "primary",
        style: {
          width: 20,
          height: 20
        }
      })
    }) : renderedPost[0].length > 0 ? /*#__PURE__*/jsx_runtime_.jsx((external_react_infinite_scroll_component_default()), {
      dataLength: posts.data.length,
      next: () => handlePaginate(parseInt(posts.current_page) + 1),
      hasMore: parseInt(posts.current_page) < posts.last_page,
      loader: /*#__PURE__*/jsx_runtime_.jsx("p", {
        style: {
          textAlign: "center",
          marginTop: 53
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.CircularProgress, {
          color: "primary",
          style: {
            width: 20,
            height: 20
          }
        })
      }),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blog_module_default()).postsList,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (blog_module_default()).postsListRow,
          children: renderedPost[0].map((post, index) =>
          /*#__PURE__*/
          // <Link href={'#'}>
          //     <a>
          jsx_runtime_.jsx(Post/* default */.Z, {
            image: "https://itica.ca" + post.banner,
            name: post.title,
            brief: post.brief,
            date: post.created_at,
            unsplashMode: true,
            sm: index % 2 == 0
          }) //     </a>
          // </Link>
          )
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (blog_module_default()).postsListRow,
          children: renderedPost[1].map((post, index) =>
          /*#__PURE__*/
          // <Link href={'#'}>
          //     <a>
          jsx_runtime_.jsx(Post/* default */.Z, {
            image: "https://itica.ca" + post.banner,
            name: post.title,
            brief: post.brief,
            date: post.created_at,
            unsplashMode: true,
            sm: index % 2 != 0
          }) //     </a>
          // </Link>
          )
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (blog_module_default()).postsListRow,
          children: renderedPost[2].map((post, index) =>
          /*#__PURE__*/
          // <Link href={'#'}>
          //     <a>
          jsx_runtime_.jsx(Post/* default */.Z, {
            image: "https://itica.ca" + post.banner,
            name: post.title,
            brief: post.brief,
            date: post.created_at,
            unsplashMode: true,
            sm: index % 2 == 0
          }) //     </a>
          // </Link>
          )
        })]
      })
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (blog_module_default()).noResult,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: (noResultIconPink_default())
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No Result Found!"
      })]
    })
  });
};

/* harmony default export */ const blog_PostsList = (PostsList);
;// CONCATENATED MODULE: ./src/components/blog/Blog.js









const Blog = ({
  categories
}) => {
  const posts = (0,external_react_redux_.useSelector)(state => state.posts.posts);
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = (0,external_react_.useState)(categories[0].id);
  const {
    0: q,
    1: setQ
  } = (0,external_react_.useState)('');
  const Dispatch = (0,external_react_redux_.useDispatch)();

  const handleSelectCategory = (e, value) => {
    console.log('id', value);
    setSelectedCategory(value);
  };

  const handleSearch = (force = false) => {
    if (force == true) {
      Dispatch((0,redux_posts/* getPostsList */.Bu)(false, null, {
        q: '',
        cat_id: selectedCategory
      }, 1));
    } else {
      handlePaginate();
    }
  };

  (0,external_react_.useEffect)(() => {
    handlePaginate();
  }, [selectedCategory]);

  const handlePaginate = (page = 1) => {
    Dispatch((0,redux_posts/* getPostsList */.Bu)(false, null, {
      q: q,
      cat_id: selectedCategory
    }, page));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (blog_module_default()).blogMainContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx(blog_BlogHeader, {
      handleSelectCategory: handleSelectCategory,
      categories: categories,
      selectedCategory: selectedCategory,
      _handleSearch: handleSearch,
      q: q,
      setQ: setQ
    }), /*#__PURE__*/jsx_runtime_.jsx(blog_PostsList, {
      handlePaginate: handlePaginate
    })]
  });
};

/* harmony default export */ const blog_Blog = (Blog);
;// CONCATENATED MODULE: ./pages/blog.js









function BlogPage({
  categories
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    page: 'blog',
    children: /*#__PURE__*/jsx_runtime_.jsx(blog_Blog, {
      categories: categories
    })
  });
}

const getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  req,
  res
}) => {
  try {
    const categories = await external_axios_default().get(`${"https://itica.ca/api"}/v1.0/blog/cats`, {
      headers: {
        site: "6e6a90a95755444cbdee6d0df6929539"
      }
    });
    const posts = await external_axios_default().get(`${"https://itica.ca/api"}/v1.0/blog/search/--?page=1&max=10&cat_id=${categories.data[0].id}`, {
      headers: {
        site: "6e6a90a95755444cbdee6d0df6929539"
      }
    }); // console.log('postsssspostsssspostsssspostsssspostssss',posts)

    store.dispatch((0,redux_posts/* getPostsList */.Bu)(true, posts.data));
    return {
      props: {
        categories: categories.data
      } // will be passed to the page component as props

    };
  } catch (e) {
    console.log(e);
  }
});
/* harmony default export */ const blog = (BlogPage);

/***/ }),

/***/ 5546:
/***/ ((module) => {

// Exports
module.exports = {
	"blogMainContainer": "blog_blogMainContainer__3CbGK",
	"blogHeader": "blog_blogHeader__1RGu2",
	"blogSearch": "blog_blogSearch__1hOZa",
	"searchIconConntainer": "blog_searchIconConntainer__2yMA6",
	"blogSearchOpen": "blog_blogSearchOpen__1P_6t",
	"postsListContainer": "blog_postsListContainer__1zPwG",
	"postsList": "blog_postsList__BG3Iw",
	"postsListRow": "blog_postsListRow__3YX0P",
	"noResult": "blog_noResult__384ty",
	"bt": "blog_bt__2Itj_"
};


/***/ }),

/***/ 7377:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS40MDgiIGhlaWdodD0iNTUuMzk1IiB2aWV3Qm94PSIwIDAgNTUuNDA4IDU1LjM5NSI+DQogIDxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMDE2KSI+DQogICAgPGcgaWQ9IlNlYXJjaF9Mb3VwZV9RdWVzdGlvbiIgZGF0YS1uYW1lPSJTZWFyY2ggTG91cGUgUXVlc3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wMTYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE5MjQ0IiBkYXRhLW5hbWU9IlBhdGggMTkyNDQiIGQ9Ik0zMC4yMjIsNDYuOTE5YTIxLjQ5MywyMS40OTMsMCwwLDEtNy43MTcuMywxNi43NDMsMTYuNzQzLDAsMCwxLTUuMzUyLTEuNTgzQzExLjE2Nyw0Mi41MzgsNy44NDIsMzUsOCwyNy45MzlIOEEyMS42LDIxLjYsMCwwLDEsMjkuNTQ2LDYuMzRjMy42MjEsMCw3LjUyNy44NTUsOS4xOTUsMi4wNDhhMTksMTksMCwwLDEsMy44ODUsMy43NTgsMjMuNzMxLDIzLjczMSwwLDAsMSwzLjU1OCw2LjUsMjEuNzYxLDIxLjc2MSwwLDAsMS0xNS45NjIsMjguMjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjQ0NSAwLjMzNikiIGZpbGw9IiNkOTAzNjgiIG9wYWNpdHk9IjAuMSIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMTk1NzEiIGRhdGEtbmFtZT0iUGF0aCAxOTU3MSIgZD0iTTU0Ljc4OSw1MS44MTEsNDUuOCw0Mi44MjdhMjYsMjYsMCwxLDAtMi45ODgsMi45ODhMNTEuOCw1NC44YTIuMTEyLDIuMTEyLDAsMSwwLDIuOTg4LTIuOTg4Wk0xMC41NTcsNDEuNGEyMS43NjgsMjEuNzY4LDAsMSwxLDE1LjQsNi4zMzQsMjEuNzY4LDIxLjc2OCwwLDAsMS0xNS40LTYuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC4wMTYpIiBmaWxsPSIjZDkwMzY4ODAiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE5NTcyIiBkYXRhLW5hbWU9IlBhdGggMTk1NzIiIGQ9Ik0zMy4wNzUsMzAuMDg4YTIuMTEyLDIuMTEyLDAsMSwxLTIuOTg4LDIuOTg4bC00LjgtNC44LTQuODE0LDQuOGEyLjExMiwyLjExMiwwLDEsMS0yLjk4OC0yLjk4OGw0LjgtNC44LTQuODE0LTQuODE0YTIuMTEyLDIuMTEyLDAsMSwxLDIuOTg4LTIuOTg4bDQuODI0LDQuOCw0LjgtNC44MTRhMi4xMTIsMi4xMTIsMCwxLDEsMi45ODgsMi45ODhsLTQuOCw0LjgxNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTM4IDAuOTIxKSIgZmlsbD0iI2Q5MDM2ODgwIi8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 7194:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4xNTQiIGhlaWdodD0iMTkuMTUiIHZpZXdCb3g9IjAgMCAxOS4xNTQgMTkuMTUiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNkOTAzNjg7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTguODU5LDE3LjQ0NmwtNC43MjEtNC43NDFhNy41NTEsNy41NTEsMCwwLDAsMS44NzktNC45NzJBNy44ODQsNy44ODQsMCwwLDAsOC4wMDgsMCw3Ljg4NCw3Ljg4NCwwLDAsMCwwLDcuNzMzYTcuODg0LDcuODg0LDAsMCwwLDguMDA4LDcuNzMzLDguMTE4LDguMTE4LDAsMCwwLDQuNTg4LTEuNGw0Ljc1Nyw0Ljc3N2ExLjA3MSwxLjA3MSwwLDAsMCwxLjQ3Ny4wMjhBLjk4Ni45ODYsMCwwLDAsMTguODU5LDE3LjQ0NlpNOC4wMDgsMi4wMTdhNS44MjcsNS44MjcsMCwwLDEsNS45MTksNS43MTYsNS44MjcsNS44MjcsMCwwLDEtNS45MTksNS43MTZBNS44MjcsNS44MjcsMCwwLDEsMi4wODksNy43MzMsNS44MjcsNS44MjcsMCwwLDEsOC4wMDgsMi4wMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4xNTQpIHJvdGF0ZSg5MCkiLz48L3N2Zz4="

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

/***/ 4885:
/***/ ((module) => {

"use strict";
module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,357,168,610,861,136,5,41,268], () => (__webpack_exec__(5197)));
module.exports = __webpack_exports__;

})();