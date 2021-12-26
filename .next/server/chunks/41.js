exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 7041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ events_Events)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/assets/styleSheets/events.module.scss
var events_module = __webpack_require__(5395);
var events_module_default = /*#__PURE__*/__webpack_require__.n(events_module);
// EXTERNAL MODULE: external "react-infinite-scroll-component"
var external_react_infinite_scroll_component_ = __webpack_require__(4885);
var external_react_infinite_scroll_component_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroll_component_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./src/components/kits/Event.js
var Event = __webpack_require__(4136);
// EXTERNAL MODULE: ./src/utilities/transform.js
var transform = __webpack_require__(8629);
// EXTERNAL MODULE: ./src/assets/images/icons/noResultIconGreen.svg
var noResultIconGreen = __webpack_require__(7050);
var noResultIconGreen_default = /*#__PURE__*/__webpack_require__.n(noResultIconGreen);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/events/EventsList.js











const EventsList = ({
  handlePaginate
}) => {
  const events = (0,external_react_redux_.useSelector)(state => state.events.events);
  const eventsLoading = (0,external_react_redux_.useSelector)(state => state.events.eventsLoading);
  console.log('eventsLoading', eventsLoading);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (events_module_default()).eventsListContainer,
    children: eventsLoading ? /*#__PURE__*/jsx_runtime_.jsx("p", {
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
    }) : events.data.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx((external_react_infinite_scroll_component_default()), {
      dataLength: events.data.length,
      next: () => handlePaginate(parseInt(events.current_page) + 1),
      hasMore: parseInt(events.current_page) < events.last_page,
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
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (events_module_default()).eventsList,
        children: events.data.map(event =>
        /*#__PURE__*/
        // <Link href={'#'}>
        //     <a>
        jsx_runtime_.jsx(Event/* default */.Z, {
          image: "https://itica.ca" + event.banner,
          name: event.title,
          instructor: event.staff.user.name + " " + event.staff.user.family,
          price: event.price + " $",
          sessions: event.sessions.length,
          whiteBg: true
        }) //     </a>
        // </Link>
        )
      })
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (events_module_default()).noResult,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: (noResultIconGreen_default())
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No Result Found!"
      })]
    })
  });
};

/* harmony default export */ const events_EventsList = (EventsList);
// EXTERNAL MODULE: ./redux/events/index.js + 2 modules
var events = __webpack_require__(9698);
// EXTERNAL MODULE: ./src/assets/images/icons/earthAlt.svg
var earthAlt = __webpack_require__(279);
// EXTERNAL MODULE: ./src/components/kits/RhCheckbox.js
var RhCheckbox = __webpack_require__(7568);
// EXTERNAL MODULE: ./src/components/kits/RhRadioButton.js
var RhRadioButton = __webpack_require__(1005);
;// CONCATENATED MODULE: ./src/components/events/EventsSidebar.js









const EventsSidebar = ({
  packages,
  handleSelectPackage,
  selectedPackages,
  eventTypes,
  selectedEventType,
  handleSelectEventType
}) => {
  console.log('packages', packages);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (events_module_default()).eventsSidebarContainer,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (events_module_default()).eventsSidebar,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (events_module_default()).packagesContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (events_module_default()).packagesTitle,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Filters"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (events_module_default()).packagesBody,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (events_module_default()).packageItem,
            children: /*#__PURE__*/jsx_runtime_.jsx(RhRadioButton/* default */.Z, {
              label: 'All Events',
              checked: selectedEventType == 0,
              onChange: () => {
                handleSelectEventType(0);
              },
              color: 'green'
            }, 0)
          }), eventTypes.data.map(et => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (events_module_default()).packageItem,
            children: /*#__PURE__*/jsx_runtime_.jsx(RhRadioButton/* default */.Z, {
              label: et.event_type_name,
              checked: selectedEventType == et.id,
              onChange: () => {
                handleSelectEventType(et.id);
              },
              color: 'green'
            }, et.id)
          })), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (events_module_default()).bt,
            children: "Category"
          }), packages.data.map(pkg => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (events_module_default()).packageItem,
            children: /*#__PURE__*/jsx_runtime_.jsx(RhCheckbox/* default */.Z, {
              label: pkg.name,
              checked: selectedPackages.indexOf(pkg.id) != -1,
              color: 'green',
              onChange: () => {
                handleSelectPackage(pkg.id);
              }
            }, pkg.id)
          }))]
        })]
      })
    })
  });
};

/* harmony default export */ const events_EventsSidebar = (EventsSidebar);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/assets/images/icons/searchIcon.svg
var searchIcon = __webpack_require__(9586);
var searchIcon_default = /*#__PURE__*/__webpack_require__.n(searchIcon);
// EXTERNAL MODULE: ./src/assets/images/icons/searchIconGreen.svg
var searchIconGreen = __webpack_require__(3272);
var searchIconGreen_default = /*#__PURE__*/__webpack_require__.n(searchIconGreen);
;// CONCATENATED MODULE: ./src/components/events/EventsHeader.js










const EventsHeader = ({
  filter,
  handleChangeFilter,
  _handleSearch,
  q,
  setQ
}) => {
  const {
    0: openSearch,
    1: setOpenSearch
  } = (0,external_react_.useState)(false);

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
    className: (events_module_default()).eventsHeader,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (events_module_default()).eventsSort,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "View :"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        onClick: () => {
          handleChangeFilter('UPCOMING');
        },
        className: external_clsx_default()((events_module_default()).filterButton, filter == 'UPCOMING' && (events_module_default()).activeBtn),
        children: "Upcoming Events"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        onClick: () => {
          handleChangeFilter('PAST');
        },
        className: external_clsx_default()((events_module_default()).filterButton, filter == 'PAST' && (events_module_default()).activeBtn),
        children: "Past Events"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.ClickAwayListener, {
      onClickAway: handleClickAway,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()((events_module_default()).eventsSearch, openSearch && (events_module_default()).eventsSearchOpen),
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          value: q,
          onKeyPress: handleKeyPress,
          onChange: e => setQ(e.target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: handleSearch,
          className: (events_module_default()).searchIconConntainer,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: openSearch ? (searchIconGreen_default()) : (searchIcon_default())
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const events_EventsHeader = (EventsHeader);
// EXTERNAL MODULE: ./src/components/layout/Media.js
var Media = __webpack_require__(610);
;// CONCATENATED MODULE: ./src/components/events/Events.js











const Events = ({
  packages,
  eventTypes
}) => {
  const staffs = (0,external_react_redux_.useSelector)(state => state.privateLessons.staffs);
  const {
    0: selectedPackages,
    1: setSelectedPackages
  } = (0,external_react_.useState)([]);
  const {
    0: selectedEventType,
    1: setSelectedEventType
  } = (0,external_react_.useState)(1);
  const {
    0: filter,
    1: setFilter
  } = (0,external_react_.useState)();
  const {
    0: q,
    1: setQ
  } = (0,external_react_.useState)('');
  const Dispatch = (0,external_react_redux_.useDispatch)();

  const handleSelectPackage = id => {
    let index = selectedPackages.indexOf(id);

    if (index == -1) {
      setSelectedPackages([...selectedPackages, id]);
    } else {
      let tmp = selectedPackages;
      tmp.splice(index, 1);
      setSelectedPackages([...tmp]);
    }
  };

  const handleSearch = (force = false) => {
    if (force == true) {
      console.log('force');
      Dispatch((0,events/* getEventsList */.uY)(false, null, {
        q: '',
        sort: filter,
        package_ids: selectedPackages.toString()
      }, 1));
    } else {
      console.log('no force');
      handlePaginate();
    }
  };

  const handleChangeFilter = filterp => {
    if (filterp === filter) {
      setFilter(null);
    } else {
      setFilter(filterp);
    }
  };

  (0,external_react_.useEffect)(() => {
    handlePaginate();
  }, [filter, selectedPackages, selectedEventType]);

  const handlePaginate = (page = 1) => {
    Dispatch((0,events/* getEventsList */.uY)(false, null, {
      q: q,
      view: filter,
      package_ids: selectedPackages.toString(),
      event_type: selectedEventType
    }, page));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (events_module_default()).eventsMainContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx(events_EventsSidebar, {
      packages: packages,
      handleSelectPackage: handleSelectPackage,
      selectedPackages: selectedPackages,
      eventTypes: eventTypes,
      selectedEventType: selectedEventType,
      handleSelectEventType: e => setSelectedEventType(e)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (events_module_default()).staffsContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx(events_EventsHeader, {
        handleChangeFilter: handleChangeFilter,
        filter: filter,
        _handleSearch: handleSearch,
        q: q,
        setQ: setQ
      }), /*#__PURE__*/jsx_runtime_.jsx(events_EventsList, {
        handlePaginate: handlePaginate
      })]
    })]
  });
};

/* harmony default export */ const events_Events = (Events);

/***/ }),

/***/ 5395:
/***/ ((module) => {

// Exports
module.exports = {
	"eventsMainContainer": "events_eventsMainContainer__OW0vL",
	"packageItem": "events_packageItem__2g2Ve",
	"packagesContainer": "events_packagesContainer__3EB19",
	"packagesTitle": "events_packagesTitle__2cgAk",
	"packagesBody": "events_packagesBody__300vG",
	"eventsHeader": "events_eventsHeader__x7yEA",
	"eventsSort": "events_eventsSort__2ER8Q",
	"activeBtn": "events_activeBtn__1Ijwu",
	"eventsSearch": "events_eventsSearch__3o1ix",
	"searchIconConntainer": "events_searchIconConntainer__ae-5J",
	"eventsSearchOpen": "events_eventsSearchOpen__2pb-a",
	"eventsSidebar": "events_eventsSidebar__1t0WN",
	"eventsList": "events_eventsList__dF7ca",
	"noResult": "events_noResult__4alsB",
	"bt": "events_bt__3zaIg"
};


/***/ }),

/***/ 7050:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS40MDgiIGhlaWdodD0iNTUuMzk1IiB2aWV3Qm94PSIwIDAgNTUuNDA4IDU1LjM5NSI+DQogIDxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMDE2KSI+DQogICAgPGcgaWQ9IlNlYXJjaF9Mb3VwZV9RdWVzdGlvbiIgZGF0YS1uYW1lPSJTZWFyY2ggTG91cGUgUXVlc3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wMTYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE5MjQ0IiBkYXRhLW5hbWU9IlBhdGggMTkyNDQiIGQ9Ik0zMC4yMjIsNDYuOTE5YTIxLjQ5MywyMS40OTMsMCwwLDEtNy43MTcuMywxNi43NDMsMTYuNzQzLDAsMCwxLTUuMzUyLTEuNTgzQzExLjE2Nyw0Mi41MzgsNy44NDIsMzUsOCwyNy45MzlIOEEyMS42LDIxLjYsMCwwLDEsMjkuNTQ2LDYuMzRjMy42MjEsMCw3LjUyNy44NTUsOS4xOTUsMi4wNDhhMTksMTksMCwwLDEsMy44ODUsMy43NTgsMjMuNzMxLDIzLjczMSwwLDAsMSwzLjU1OCw2LjUsMjEuNzYxLDIxLjc2MSwwLDAsMS0xNS45NjIsMjguMjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjQ0NSAwLjMzNikiIGZpbGw9IiMwNGE3NzciIG9wYWNpdHk9IjAuMSIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMTk1NzEiIGRhdGEtbmFtZT0iUGF0aCAxOTU3MSIgZD0iTTU0Ljc4OSw1MS44MTEsNDUuOCw0Mi44MjdhMjYsMjYsMCwxLDAtMi45ODgsMi45ODhMNTEuOCw1NC44YTIuMTEyLDIuMTEyLDAsMSwwLDIuOTg4LTIuOTg4Wk0xMC41NTcsNDEuNGEyMS43NjgsMjEuNzY4LDAsMSwxLDE1LjQsNi4zMzQsMjEuNzY4LDIxLjc2OCwwLDAsMS0xNS40LTYuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC4wMTYpIiBmaWxsPSIjMDRhNzc3ODAiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE5NTcyIiBkYXRhLW5hbWU9IlBhdGggMTk1NzIiIGQ9Ik0zMy4wNzUsMzAuMDg4YTIuMTEyLDIuMTEyLDAsMSwxLTIuOTg4LDIuOTg4bC00LjgtNC44LTQuODE0LDQuOGEyLjExMiwyLjExMiwwLDEsMS0yLjk4OC0yLjk4OGw0LjgtNC44LTQuODE0LTQuODE0YTIuMTEyLDIuMTEyLDAsMSwxLDIuOTg4LTIuOTg4bDQuODI0LDQuOCw0LjgtNC44MTRhMi4xMTIsMi4xMTIsMCwxLDEsMi45ODgsMi45ODhsLTQuOCw0LjgxNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTM4IDAuOTIxKSIgZmlsbD0iIzA0YTc3NzgwIi8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 3272:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4xNTQiIGhlaWdodD0iMTkuMTUiIHZpZXdCb3g9IjAgMCAxOS4xNTQgMTkuMTUiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiMwNGE3Nzc7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTguODU5LDE3LjQ0NmwtNC43MjEtNC43NDFhNy41NTEsNy41NTEsMCwwLDAsMS44NzktNC45NzJBNy44ODQsNy44ODQsMCwwLDAsOC4wMDgsMCw3Ljg4NCw3Ljg4NCwwLDAsMCwwLDcuNzMzYTcuODg0LDcuODg0LDAsMCwwLDguMDA4LDcuNzMzLDguMTE4LDguMTE4LDAsMCwwLDQuNTg4LTEuNGw0Ljc1Nyw0Ljc3N2ExLjA3MSwxLjA3MSwwLDAsMCwxLjQ3Ny4wMjhBLjk4Ni45ODYsMCwwLDAsMTguODU5LDE3LjQ0NlpNOC4wMDgsMi4wMTdhNS44MjcsNS44MjcsMCwwLDEsNS45MTksNS43MTYsNS44MjcsNS44MjcsMCwwLDEtNS45MTksNS43MTZBNS44MjcsNS44MjcsMCwwLDEsMi4wODksNy43MzMsNS44MjcsNS44MjcsMCwwLDEsOC4wMDgsMi4wMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4xNTQpIHJvdGF0ZSg5MCkiLz48L3N2Zz4="

/***/ })

};
;