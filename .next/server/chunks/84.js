"use strict";
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_globe_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8695);
/* harmony import */ var react_globe_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_globe_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // import ReactGlobe from 'react-globe';
// const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);



const MAP_CENTER = {
  lat: 35.45,
  lng: 50.81,
  altitude: 2
};

const GlobeComponent = ({
  globeData
}) => {
  const globeEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(globeData || []);
  console.log('data', data);
  console.log('globeData', globeData);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (globeData) {
      setData([...globeData]);
      globeEl.current.pointOfView(MAP_CENTER, 4000);
    }
  }, [globeData]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_globe_gl__WEBPACK_IMPORTED_MODULE_1___default()), {
      ref: globeEl,
      globeImageUrl: "//unpkg.com/three-globe/example/img/earth-day.jpg" // backgroundImageUrl="//unpkg.com/browse/three-globe@2.21.3/example/img/night-sky.png"
      ,
      showGraticules: true,
      labelsData: data,
      labelText: "label",
      labelColor: () => 'yellow',
      pointsData: data // pointLabel="label"
      ,
      labelSize: 1.7,
      pointRadius: 1,
      pointAltitude: 0.02,
      pointColor: () => 'orangered' // pointLabel={d => `
      //   <div><b>${d.label}</b></div>
      // `}
      ,
      onPointClick: d => window.open(`/privateLessons?packages=${d.packages.toString()}`, '_self')
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobeComponent);

/***/ })

};
;