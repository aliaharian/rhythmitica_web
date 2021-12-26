"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* reexport */ Reducer),
  "uY": () => (/* reexport */ getEventsList)
});

// UNUSED EXPORTS: GET_EVENTS_LIST, GET_EVENTS_LIST_LOADING

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./redux/events/Actions.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const GET_EVENTS_LIST = "getEventList";
const GET_EVENTS_LIST_LOADING = "getEventListLoading";
const getEventsList = (isServer, payload, filter, page = 1, max = 10) => async dispatch => {
  try {
    if (isServer) {
      dispatch({
        type: GET_EVENTS_LIST,
        payload: _objectSpread(_objectSpread({}, payload), {}, {
          isServer
        })
      });
      return;
    }

    if (page == 1) {
      dispatch({
        type: GET_EVENTS_LIST_LOADING,
        payload: true
      });
    }

    let filterParam = ``;
    if (filter.q) filterParam += `&q=${filter.q}`;
    if (filter.view) filterParam += `&view=${filter.view}`;
    if (filter.package_ids) filterParam += `&package_ids=${filter.package_ids}`;
    if (filter.event_type && filter.event_type != 0) filterParam += `&event_type=${filter.event_type}`;
    const response = await external_axios_default().get(`/v1.0/workshops/search?page=${page}&max=${max}${filterParam}`);
    dispatch({
      type: GET_EVENTS_LIST,
      payload: _objectSpread(_objectSpread({}, response.data), {}, {
        isServer
      })
    });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};
;// CONCATENATED MODULE: ./redux/events/Reducer.js
function Reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Reducer_ownKeys(Object(source), true).forEach(function (key) { Reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  events: null,
  eventsLoading: false
};
/* harmony default export */ const Reducer = ((state = defaultState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case GET_EVENTS_LIST:
      return Reducer_objectSpread(Reducer_objectSpread({}, state), {}, {
        events: payload.isServer || payload.current_page == 1 ? Reducer_objectSpread({}, payload) : {
          data: [...state.events.data, ...payload.data],
          per_page: payload.per_page,
          current_page: payload.current_page,
          from: payload.from,
          to: payload.to,
          total: payload.total,
          last_page: payload.last_page
        },
        eventsLoading: false
      });

    case GET_EVENTS_LIST_LOADING:
      console.log('hello');
      return Reducer_objectSpread(Reducer_objectSpread({}, state), {}, {
        eventsLoading: true
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./redux/events/index.js



/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* reexport */ Reducer),
  "Bu": () => (/* reexport */ getPostsList)
});

// UNUSED EXPORTS: GET_POSTS_LIST, GET_POSTS_LIST_LOADING

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./redux/posts/Actions.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const GET_POSTS_LIST = "getPostsList";
const GET_POSTS_LIST_LOADING = "getPostsListLoading";
const getPostsList = (isServer, payload, filter, page = 1, max = 10) => async dispatch => {
  try {
    if (isServer) {
      dispatch({
        type: GET_POSTS_LIST,
        payload: _objectSpread(_objectSpread({}, payload), {}, {
          isServer
        })
      });
      return;
    }

    if (page == 1) {
      dispatch({
        type: GET_POSTS_LIST_LOADING,
        payload: true
      });
    }

    let filterParam = ``;
    let searchQ = '--';
    if (filter.q) searchQ = `${filter.q}`;
    if (filter.cat_id) filterParam += `&cat_id=${filter.cat_id}`;
    const response = await external_axios_default().get(`/v1.0/blog/search/${searchQ}?page=${page}&max=${max}${filterParam}`);
    dispatch({
      type: GET_POSTS_LIST,
      payload: _objectSpread(_objectSpread({}, response.data), {}, {
        isServer
      })
    });
  } catch (e) {// dispatch(errorSnackbar(e));
  }
};
;// CONCATENATED MODULE: ./redux/posts/Reducer.js
function Reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Reducer_ownKeys(Object(source), true).forEach(function (key) { Reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  posts: null,
  postsLoading: false
};
/* harmony default export */ const Reducer = ((state = defaultState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case GET_POSTS_LIST:
      return Reducer_objectSpread(Reducer_objectSpread({}, state), {}, {
        posts: payload.isServer || payload.current_page == 1 ? Reducer_objectSpread({}, payload) : {
          data: [...state.posts.data, ...payload.data],
          per_page: payload.per_page,
          current_page: payload.current_page,
          from: payload.from,
          to: payload.to,
          total: payload.total,
          last_page: payload.last_page
        },
        postsLoading: false
      });

    case GET_POSTS_LIST_LOADING:
      return Reducer_objectSpread(Reducer_objectSpread({}, state), {}, {
        postsLoading: true
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./redux/posts/index.js



/***/ }),

/***/ 2856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JF": () => (/* binding */ GET_STAFF_LIST),
/* harmony export */   "om": () => (/* binding */ GET_STAFF_LIST_LOADING),
/* harmony export */   "d1": () => (/* binding */ getStaffList)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const GET_STAFF_LIST = "getStaffList";
const GET_STAFF_LIST_LOADING = "getStaffListLoading";
const getStaffList = (isServer, payload, filter, page = 0, max = 10) => async dispatch => {
  try {
    if (isServer) {
      dispatch({
        type: GET_STAFF_LIST,
        payload: _objectSpread(_objectSpread({}, payload), {}, {
          isServer
        })
      });
      return;
    }

    if (page == 0) {
      dispatch({
        type: GET_STAFF_LIST_LOADING,
        payload: true
      });
    }

    let filterParam = ``;
    console.log('filter', filter);
    if (filter.q) filterParam += `&q=${filter.q}`;
    if (filter.sort) filterParam += `&sort=${filter.sort}`;
    if (filter.package_ids) filterParam += `&package_ids=${filter.package_ids}`;
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/v1.0/tags/search?page=${page}&max=${max}${filterParam}`);
    dispatch({
      type: GET_STAFF_LIST,
      payload: _objectSpread(_objectSpread({}, response.data), {}, {
        isServer
      })
    });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

/***/ }),

/***/ 6168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(7561);
// EXTERNAL MODULE: ./redux/privateLessons/Actions.js
var Actions = __webpack_require__(2856);
;// CONCATENATED MODULE: ./redux/privateLessons/Reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  staffs: null,
  staffsLoading: false
};
/* harmony default export */ const Reducer = ((state = defaultState, action) => {
  const {
    type,
    payload
  } = action; // data: [{package_id: 84, package_name: "santoor", category_id: 25, category_name: "Persian Music",…},…]
  // max: "10"
  // message: "Fetched successfully."
  // page: "1"
  // page_items: 10
  // total_items: 25
  // total_pages: 3

  switch (type) {
    case Actions/* GET_STAFF_LIST */.JF:
      return _objectSpread(_objectSpread({}, state), {}, {
        staffs: payload.isServer || payload.page == 0 ? _objectSpread({}, payload) : {
          data: [...state.staffs.data, ...payload.data],
          max: payload.max,
          message: payload.message,
          page: payload.page,
          page_items: payload.page_items,
          total_items: payload.total_items,
          total_pages: payload.total_pages
        },
        staffsLoading: false
      });

    case Actions/* GET_STAFF_LIST_LOADING */.om:
      return _objectSpread(_objectSpread({}, state), {}, {
        staffsLoading: true
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./redux/privateLessons/index.js


// EXTERNAL MODULE: ./redux/events/index.js + 2 modules
var events = __webpack_require__(9698);
// EXTERNAL MODULE: ./redux/posts/index.js + 2 modules
var posts = __webpack_require__(3631);
;// CONCATENATED MODULE: ./redux/Reducers.js




/* harmony default export */ const Reducers = ((0,external_redux_.combineReducers)({
  privateLessons: Reducer,
  events: events/* default */.ZP,
  posts: posts/* default */.ZP
}));
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(2744);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(5694);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
// EXTERNAL MODULE: external "redux-localstorage"
var external_redux_localstorage_ = __webpack_require__(5379);
;// CONCATENATED MODULE: ./redux/store.js
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const middlewares = [(external_redux_thunk_default())];
const composeEnhancers =  false ? 0 : external_redux_.compose;
const enhancer =  false ? 0 : composeEnhancers((0,external_redux_.applyMiddleware)(...middlewares));

const reducer = (state, action) => {
  if (action.type === external_next_redux_wrapper_.HYDRATE) {
    const nextState = store_objectSpread(store_objectSpread({}, state), action.payload);

    return nextState;
  } else {
    return Reducers(state, action);
  }
}; // export default createStore(rootReducer, enhancer);


const initStore = () => {
  return (0,external_redux_.createStore)(reducer, enhancer);
};

const wrapper = (0,external_next_redux_wrapper_.createWrapper)(initStore);

/***/ })

};
;