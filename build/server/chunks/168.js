"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

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


;// CONCATENATED MODULE: ./redux/Reducers.js


/* harmony default export */ const Reducers = ((0,external_redux_.combineReducers)({
  privateLessons: Reducer
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