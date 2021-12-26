(() => {
var exports = {};
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 2513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ book),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/components/layout/Layout.js + 2 modules
var Layout = __webpack_require__(2088);
// EXTERNAL MODULE: ./redux/store.js + 3 modules
var store = __webpack_require__(6168);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/assets/styleSheets/booking.module.scss
var booking_module = __webpack_require__(2778);
var booking_module_default = /*#__PURE__*/__webpack_require__.n(booking_module);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/Stack"
const Stack_namespaceObject = require("@mui/material/Stack");
;// CONCATENATED MODULE: external "@mui/material/Stepper"
const Stepper_namespaceObject = require("@mui/material/Stepper");
var Stepper_default = /*#__PURE__*/__webpack_require__.n(Stepper_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Step"
const Step_namespaceObject = require("@mui/material/Step");
var Step_default = /*#__PURE__*/__webpack_require__.n(Step_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/StepLabel"
const StepLabel_namespaceObject = require("@mui/material/StepLabel");
var StepLabel_default = /*#__PURE__*/__webpack_require__.n(StepLabel_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/StepConnector"
const StepConnector_namespaceObject = require("@mui/material/StepConnector");
var StepConnector_default = /*#__PURE__*/__webpack_require__.n(StepConnector_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/booking/StepperComponent.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ColorlibConnector = (0,styles_namespaceObject.styled)((StepConnector_default()))(({
  theme
}) => ({
  [`&.${StepConnector_namespaceObject.stepConnectorClasses.alternativeLabel}`]: {
    top: 9,
    left: 'calc(-50% + 9px)',
    right: 'calc(50% + 9px)'
  },
  [`&.${StepConnector_namespaceObject.stepConnectorClasses.active}`]: {
    [`& .${StepConnector_namespaceObject.stepConnectorClasses.line}`]: {
      backgroundColor: '#fff'
    }
  },
  [`&.${StepConnector_namespaceObject.stepConnectorClasses.completed}`]: {
    [`& .${StepConnector_namespaceObject.stepConnectorClasses.line}`]: {
      backgroundColor: '#fff'
    }
  },
  [`& .${StepConnector_namespaceObject.stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: 'rgba(234, 232, 217, 0.46)',
    borderRadius: 1
  }
}));
const ColorlibStepIconRoot = (0,styles_namespaceObject.styled)('div')(({
  theme,
  ownerState
}) => _objectSpread(_objectSpread({
  backgroundColor: '#bf86aa',
  zIndex: 1,
  color: '#fff',
  width: 20,
  height: 20,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center'
}, ownerState.active && {
  backgroundColor: '#fff'
}), ownerState.completed && {
  backgroundColor: '#fff'
}));

function ColorlibStepIcon(props) {
  const {
    active,
    completed,
    className
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(ColorlibStepIconRoot, {
    ownerState: {
      completed,
      active
    },
    className: className
  });
}

const steps = ['Details', 'Date & Time', 'Book'];
function StepperComponent({
  step
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((Stepper_default()), {
    alternativeLabel: true,
    activeStep: step,
    connector: /*#__PURE__*/jsx_runtime_.jsx(ColorlibConnector, {}),
    children: steps.map(label => /*#__PURE__*/jsx_runtime_.jsx((Step_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx((StepLabel_default()), {
        className: (booking_module_default()).stepperLabel,
        StepIconComponent: ColorlibStepIcon,
        children: label
      })
    }, label))
  });
}
// EXTERNAL MODULE: ./src/components/kits/Instructor.js
var Instructor = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/components/kits/RhRadioButton.js
var RhRadioButton = __webpack_require__(1005);
// EXTERNAL MODULE: ./src/assets/images/icons/durationIcon.svg
var durationIcon = __webpack_require__(949);
var durationIcon_default = /*#__PURE__*/__webpack_require__.n(durationIcon);
// EXTERNAL MODULE: ./src/assets/images/icons/listIcon.svg
var listIcon = __webpack_require__(5810);
var listIcon_default = /*#__PURE__*/__webpack_require__.n(listIcon);
// EXTERNAL MODULE: ./src/assets/images/icons/updateIcon.svg
var updateIcon = __webpack_require__(2718);
var updateIcon_default = /*#__PURE__*/__webpack_require__.n(updateIcon);
// EXTERNAL MODULE: ./src/assets/images/icons/priceIcon.svg
var priceIcon = __webpack_require__(4111);
var priceIcon_default = /*#__PURE__*/__webpack_require__.n(priceIcon);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: ./src/assets/images/icons/grayCheckIcon.svg
var grayCheckIcon = __webpack_require__(1121);
var grayCheckIcon_default = /*#__PURE__*/__webpack_require__.n(grayCheckIcon);
// EXTERNAL MODULE: ./src/assets/images/icons/purpleCheckIcon.svg
var purpleCheckIcon = __webpack_require__(3510);
var purpleCheckIcon_default = /*#__PURE__*/__webpack_require__.n(purpleCheckIcon);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3308);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
;// CONCATENATED MODULE: ./src/components/booking/steps/BookingSummery.js
function BookingSummery_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function BookingSummery_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BookingSummery_ownKeys(Object(source), true).forEach(function (key) { BookingSummery_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BookingSummery_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BookingSummery_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const BookingSummery = ({
  packageInfo,
  bookingData,
  setBookingData,
  sessions
}) => {
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (0,external_notistack_.useSnackbar)();
  const {
    0: couponCode,
    1: setCouponCode
  } = (0,external_react_.useState)('');
  const {
    0: showTrial,
    1: setShowTrial
  } = (0,external_react_.useState)(false);
  console.log('bookingData', bookingData);
  (0,external_react_.useEffect)(() => {
    if (packageInfo) {
      setBookingData(BookingSummery_objectSpread(BookingSummery_objectSpread({}, bookingData), {}, {
        selectedDuration: packageInfo.durations[0],
        selectedSession: sessions[0],
        selectedType: packageInfo.durations[0].types[0]
      }));
      handleCheckshowTrial();
    }
  }, []);

  const handleChangeDuration = duration => {
    setBookingData(BookingSummery_objectSpread(BookingSummery_objectSpread({}, bookingData), {}, {
      selectedDuration: duration,
      selectedSession: sessions[0],
      selectedType: duration.types[0]
    }));
  };

  const handleChangeSession = session => {
    setBookingData(BookingSummery_objectSpread(BookingSummery_objectSpread({}, bookingData), {}, {
      selectedSession: session
    }));
  };

  const handleChangeType = type => {
    setBookingData(BookingSummery_objectSpread(BookingSummery_objectSpread({}, bookingData), {}, {
      selectedType: type
    }));
  };

  const renderOffText = () => {
    if (bookingData.appliedCoupon) {
      return `${parseInt(bookingData.appliedCoupon.code.percentage)}% off discount code`;
    } else if (bookingData.selectedSession.off > 0 && bookingData.selectedType.type == 'weekly') {
      return `${bookingData.selectedSession.off}% off for ${bookingData.selectedSession.count} sessions`;
    } else {
      return `...`;
    }
  };

  const handleChangeCouponCode = e => {
    setCouponCode(e.target.value);
  };

  const handleCheckshowTrial = async () => {
    try {
      const response = await external_axios_default().get(`v1.0/staffs/${packageInfo.package.id}/${packageInfo.staff.id}/booking/checkShowTrial`);
      setShowTrial(true);
    } catch (e) {// enqueueSnackbar('something went wrong!', {
      //     variant: 'error'
      // })
    }
  };

  const handleSubmitCoupon = async () => {
    let isAuth = localStorage.getItem("isAuth");

    if (bookingData.appliedCoupon) {
      setBookingData(BookingSummery_objectSpread(BookingSummery_objectSpread({}, bookingData), {}, {
        appliedCoupon: null
      }));
      setCouponCode('');
    } else {
      if (!isAuth) {
        enqueueSnackbar('Log in to use your coupon', {
          variant: 'error'
        });
      } else {
        const key = enqueueSnackbar('please wait...', {
          variant: 'info'
        });

        try {
          const response = await external_axios_default().post('admin/mc/coupons/check', {
            code: couponCode,
            place_type: 'PACKAGE',
            place_id: packageInfo.package.id
          });
          setBookingData(BookingSummery_objectSpread(BookingSummery_objectSpread({}, bookingData), {}, {
            appliedCoupon: response.data.data
          }));
          closeSnackbar(key);
          enqueueSnackbar('your coupon has been applied!', {
            variant: 'success'
          });
        } catch (e) {
          closeSnackbar(key);
          enqueueSnackbar('your coupon code is wrong!', {
            variant: 'error'
          });
        }
      }
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: bookingData.selectedDuration && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (booking_module_default()).bookingSummeryContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Instructor/* default */.Z, {
        image: "https://itica.ca" + packageInfo.staff.avatar,
        name: packageInfo.staff.name,
        family: packageInfo.staff.family,
        instrument: packageInfo.package.name,
        disableLangs: true,
        imageBorder: '#820263'
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (booking_module_default()).summeryItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (booking_module_default()).summeryIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (durationIcon_default())
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (booking_module_default()).summeryTitle,
          children: "Duration"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_clsx_default()((booking_module_default()).summeryBody, (booking_module_default()).dFlexCenter, (booking_module_default()).pl30),
          children: packageInfo.durations.map((duration, index) => {
            if (duration.trial && showTrial || duration.gift && showTrial || !duration.gift && !duration.trial) {
              return /*#__PURE__*/jsx_runtime_.jsx(RhRadioButton/* default */.Z, {
                label: duration.trial ? `trial(${duration.duration} min)` : duration.gift ? `gift(${duration.duration} min)` : `${duration.duration} minutes`,
                checked: duration.id == bookingData.selectedDuration.id,
                onChange: () => {
                  handleChangeDuration(duration);
                },
                style: index < packageInfo.durations.length - 1 ? {
                  marginBottom: 28
                } : {},
                xl: true
              }, duration.id + 'duration');
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (booking_module_default()).summeryItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (booking_module_default()).summeryIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (listIcon_default())
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (booking_module_default()).summeryTitle,
          children: "Session"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_clsx_default()((booking_module_default()).summeryBody, (booking_module_default()).dFlexCenter, (booking_module_default()).pl30),
          children: (bookingData.selectedDuration.gift || bookingData.selectedDuration.trial ? sessions.slice(0, 1) : sessions).map((session, index) => /*#__PURE__*/jsx_runtime_.jsx(RhRadioButton/* default */.Z, {
            label: `${session.count} ${session.count > 1 ? ' sessions' : 'session'}`,
            checked: bookingData.selectedSession.count === session.count,
            onChange: () => {
              handleChangeSession(session);
            },
            style: index < sessions.length - 1 ? {
              marginBottom: 28
            } : {},
            xl: true
          }, session.count + 'session'))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (booking_module_default()).summeryItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (booking_module_default()).summeryIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (updateIcon_default())
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (booking_module_default()).summeryTitle,
          children: "Type"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_clsx_default()((booking_module_default()).summeryBody, (booking_module_default()).dFlexCenter, (booking_module_default()).pl30),
          children: (bookingData.selectedSession.count == 1 ? bookingData.selectedDuration.types.slice(0, 1) : bookingData.selectedDuration.types).map((type, index) => {
            var _bookingData$selected;

            return /*#__PURE__*/jsx_runtime_.jsx(RhRadioButton/* default */.Z, {
              label: `${type.type}`,
              checked: ((_bookingData$selected = bookingData.selectedType) === null || _bookingData$selected === void 0 ? void 0 : _bookingData$selected.id) == type.id,
              onChange: () => {
                handleChangeType(type);
              },
              style: index < bookingData.selectedDuration.types.length - 1 ? {
                marginBottom: 28
              } : {},
              xl: true
            }, type.id + 'type');
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (booking_module_default()).summeryItem,
        style: {
          paddingBottom: 32
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (booking_module_default()).summeryIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (priceIcon_default())
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (booking_module_default()).summeryTitle,
          children: "Price"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (booking_module_default()).offStat,
          children: renderOffText()
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (booking_module_default()).showOffSection,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (booking_module_default()).offPriceContainer,
            children: [(bookingData.appliedCoupon || bookingData.selectedSession.off > 0 && bookingData.selectedType.type == 'weekly') && /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (booking_module_default()).textLineThrough,
              children: bookingData.selectedDuration.price * bookingData.selectedSession.count
            }), bookingData.appliedCoupon || bookingData.selectedSession.off > 0 && bookingData.selectedType.type == 'weekly' ? /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (booking_module_default()).textMainPrice,
              children: bookingData.appliedCoupon ? Math.floor((100 - bookingData.appliedCoupon.code.percentage) * bookingData.selectedDuration.price * bookingData.selectedSession.count / 100) : Math.floor((100 - bookingData.selectedSession.off) * bookingData.selectedDuration.price * bookingData.selectedSession.count / 100)
            }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (booking_module_default()).textMainPrice,
              children: bookingData.selectedDuration.price * bookingData.selectedSession.count
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "$"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (booking_module_default()).couponApplySection,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            className: bookingData.appliedCoupon && (booking_module_default()).disabledInput,
            disabled: bookingData.appliedCoupon,
            value: couponCode,
            onChange: handleChangeCouponCode,
            placeholder: `Coupon`
          }), /*#__PURE__*/jsx_runtime_.jsx(material_namespaceObject.Button, {
            onClick: handleSubmitCoupon,
            className: external_clsx_default()((booking_module_default()).submitCouponButton, couponCode == '' && (booking_module_default()).submitCouponDisabled),
            children: bookingData.appliedCoupon ? /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
              style: {
                fontSize: 20
              }
            }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: couponCode == '' ? (grayCheckIcon_default()) : (purpleCheckIcon_default())
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const steps_BookingSummery = (BookingSummery);
;// CONCATENATED MODULE: ./src/components/booking/steps/BookingCalendar.js



















const BookingCalendar = ({
  packageInfo,
  bookingData,
  setBookingData,
  timesData,
  setTimesData
}) => {
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (0,external_notistack_.useSnackbar)();
  (0,external_react_.useEffect)(() => {
    if (packageInfo, bookingData.selectedDuration) {
      handleFetchTimes();
    }
  }, []);

  const handleFetchTimes = async () => {
    try {
      const response = await external_axios_default().post(`v1.0/staffs/${packageInfo.package.id}/${packageInfo.staff.id}/checkTimes/preview`, {
        sessionsCount: bookingData.selectedSession.count // sessionsType:
        // timezone:

      });
    } catch (e) {// enqueueSnackbar('something went wrong!', {
      //     variant: 'error'
      // })
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: timesData ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (booking_module_default()).bookingTimesContainer
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (booking_module_default()).bookingTimesContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_namespaceObject.Skeleton, {
        variant: "rectangular",
        className: (booking_module_default()).bookingTimesSkeleton
      }), /*#__PURE__*/jsx_runtime_.jsx(material_namespaceObject.Skeleton, {
        variant: "rectangular",
        className: (booking_module_default()).bookingTimesSkeleton
      }), /*#__PURE__*/jsx_runtime_.jsx(material_namespaceObject.Skeleton, {
        variant: "rectangular",
        className: (booking_module_default()).bookingTimesSkeleton
      })]
    })
  });
};

/* harmony default export */ const steps_BookingCalendar = (BookingCalendar);
// EXTERNAL MODULE: ./src/assets/images/icons/arrowNext.svg
var arrowNext = __webpack_require__(1672);
var arrowNext_default = /*#__PURE__*/__webpack_require__.n(arrowNext);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
;// CONCATENATED MODULE: ./src/components/booking/Booking.js










const sessions = [{
  count: 1,
  off: 0
}, {
  count: 4,
  off: 0
}, {
  count: 8,
  off: 5
}, {
  count: 12,
  off: 10
}];

const Booking = ({
  packageInfo
}) => {
  const {
    0: step,
    1: setStep
  } = (0,external_react_.useState)(0);
  const {
    0: bookingData,
    1: setBookingData
  } = (0,external_react_.useState)({
    selectedDuration: null
  });
  const {
    0: timesData,
    1: setTimesData
  } = (0,external_react_.useState)();
  const {
    0: disabledNext,
    1: setDisabledNext
  } = (0,external_react_.useState)(false);

  const renderStep = step => {
    switch (step) {
      case 0:
        return /*#__PURE__*/jsx_runtime_.jsx(steps_BookingSummery, {
          packageInfo: packageInfo,
          bookingData: bookingData,
          setBookingData: setBookingData,
          sessions: sessions
        });

      case 1:
        return /*#__PURE__*/jsx_runtime_.jsx(steps_BookingCalendar, {
          packageInfo: packageInfo,
          bookingData: bookingData,
          setBookingData: setBookingData,
          timesData: timesData,
          setTimesData: setTimesData,
          setDisabledNext: setDisabledNext
        });
    }
  };

  const handleStep = () => {
    switch (step) {
      case 0:
        setTimesData(null);
        setDisabledNext(true);
        break;
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    switch (step) {
      case 1:
        setDisabledNext(false);
        break;
    }

    setStep(step - 1);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (booking_module_default()).topColor
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (booking_module_default()).bookingGrandContainer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (booking_module_default()).bookingContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (booking_module_default()).stepperContainer,
          children: /*#__PURE__*/jsx_runtime_.jsx(StepperComponent, {
            step: step
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (booking_module_default()).bookingFormContainer,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (booking_module_default()).bookingFormBody,
            children: renderStep(step)
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (booking_module_default()).bookingFormFooter,
            children: [step < 2 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Button, {
              onClick: handleStep,
              disabled: disabledNext,
              className: (booking_module_default()).bookingNextBtn,
              children: ["Next", /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: (arrowNext_default())
              })]
            }), step > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Button, {
              onClick: handleBack,
              className: (booking_module_default()).bookingBackBtn,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: (arrowNext_default())
              }), "Back"]
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const booking_Booking = (Booking);
;// CONCATENATED MODULE: ./pages/privateLessons/[package_id]/[staff_id]/book.js






function bookingPage({
  packageInfo
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    page: 'booking',
    children: /*#__PURE__*/jsx_runtime_.jsx(booking_Booking, {
      packageInfo: packageInfo
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
    const packageInfo = await external_axios_default().post(`${"https://itica.ca/api"}/v1.0/staffs/${query.package_id}/${query.staff_id}/booking/summery`, null, {
      headers: {
        site: "6e6a90a95755444cbdee6d0df6929539"
      }
    });
    return {
      props: {
        packageInfo: packageInfo.data.data
      } // will be passed to the page component as props

    };
  } catch (e) {
    console.log(e);
  }
});
/* harmony default export */ const book = (bookingPage);

/***/ }),

/***/ 2778:
/***/ ((module) => {

// Exports
module.exports = {
	"topColor": "booking_topColor__3LMDk",
	"bookingGrandContainer": "booking_bookingGrandContainer__2UjIB",
	"bookingContainer": "booking_bookingContainer__15gz2",
	"stepperContainer": "booking_stepperContainer__GC70T",
	"stepperLabel": "booking_stepperLabel__2UhXe",
	"bookingFormContainer": "booking_bookingFormContainer__1iIji",
	"bookingFormBody": "booking_bookingFormBody__1FJ5H",
	"bookingFormFooter": "booking_bookingFormFooter__19VL4",
	"bookingSummeryContainer": "booking_bookingSummeryContainer__2aUdW",
	"summeryItem": "booking_summeryItem__2ChaC",
	"summeryIcon": "booking_summeryIcon__1KEXm",
	"summeryTitle": "booking_summeryTitle__2i4oP",
	"dFlexCenter": "booking_dFlexCenter__2D0IY",
	"pl30": "booking_pl30__1fnv4",
	"offStat": "booking_offStat__1-H_-",
	"showOffSection": "booking_showOffSection__2VqFi",
	"offPriceContainer": "booking_offPriceContainer__1LXCG",
	"textLineThrough": "booking_textLineThrough__EscB1",
	"textMainPrice": "booking_textMainPrice__AcA0W",
	"couponApplySection": "booking_couponApplySection__1qtIk",
	"submitCouponButton": "booking_submitCouponButton__3t6wC",
	"submitCouponDisabled": "booking_submitCouponDisabled__1_woZ",
	"disabledInput": "booking_disabledInput__1KfO4",
	"bookingNextBtn": "booking_bookingNextBtn__1rR2h",
	"bookingBackBtn": "booking_bookingBackBtn__2-KtC",
	"bookingTimesContainer": "booking_bookingTimesContainer__2uQBn",
	"bookingTimesSkeleton": "booking_bookingTimesSkeleton__3Sk_S"
};


/***/ }),

/***/ 1672:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy4xMzUiIGhlaWdodD0iMTEuODg0IiB2aWV3Qm94PSIwIDAgMTcuMTM1IDExLjg4NCI+CiAgPGcgaWQ9Ikdyb3VwXzM1IiBkYXRhLW5hbWU9Ikdyb3VwIDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU4Ny44NjMgLTkwMC4wNTgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzMwIiBkYXRhLW5hbWU9IlBhdGggMzAiIGQ9Ik0xMDguMjcsNS40NzgsMTAyLjk4Mi4xOWEuNjUxLjY1MSwwLDAsMC0uOTE5LDBsLS4zODkuMzg5YS42NTEuNjUxLDAsMCwwLDAsLjkxOWw0LjQ0MSw0LjQ0MS00LjQ0Niw0LjQ0NmEuNjUyLjY1MiwwLDAsMCwwLC45MmwuMzg5LjM4OWEuNjUxLjY1MSwwLDAsMCwuOTE5LDBMMTA4LjI3LDYuNGEuNjU2LjY1NiwwLDAsMCwwLS45MjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDk2LjUzOSA5MDAuMDU4KSIgZmlsbD0iIzgyMDI2MyIvPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NTEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDU1MSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIiIHJ4PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTg3Ljg2MyA5MDUpIiBmaWxsPSIjODIwMjYzIi8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ 949:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MS4wNTMiIGhlaWdodD0iNDEuMDUzIiB2aWV3Qm94PSIwIDAgNDEuMDUzIDQxLjA1MyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggZD0iTTAsMEg0MS4wNTNWNDEuMDUzSDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTI2LjM1OCwxMS44NDNhMTAuMjE5LDEwLjIxOSwwLDAsMC03LjI1My0zLjAxMVYxOS4xbC03LjI1Myw3LjI1M0ExMC4yNTcsMTAuMjU3LDAsMSwwLDI2LjM1OCwxMS44NDNaTTE5LjEwNSwxLjk5QTE3LjEwNSwxNy4xMDUsMCwxLDAsMzYuMjExLDE5LjEsMTcuMTEyLDE3LjExMiwwLDAsMCwxOS4xMDUsMS45OVptMCwzMC43OUExMy42ODQsMTMuNjg0LDAsMSwxLDMyLjc5LDE5LjEsMTMuNjgxLDEzLjY4MSwwLDAsMSwxOS4xMDUsMzIuNzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjQyMSAxLjQxNCkiIGZpbGw9IiM4MjAyNjMiLz48L2c+PC9zdmc+"

/***/ }),

/***/ 1121:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MjciIGhlaWdodD0iOS45IiB2aWV3Qm94PSIwIDAgMTIuNzI3IDkuOSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1ODEuNjM3IC03NDguODczKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU4MS42MzcgNzU0LjUzKSByb3RhdGUoLTQ1KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSJyZ2JhKDQxLDIzLDMyLDAuNCkiIHN0cm9rZS13aWR0aD0iMSI+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iNiIgcng9IjEiIHN0cm9rZT0ibm9uZSIvPjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiByeD0iMC41IiBmaWxsPSJub25lIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1OTIuOTQ5IDc0OC44NzMpIHJvdGF0ZSg0NSkiIGZpbGw9IiNmZmYiIHN0cm9rZT0icmdiYSg0MSwyMywzMiwwLjQpIiBzdHJva2Utd2lkdGg9IjEiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEyIiByeD0iMSIgc3Ryb2tlPSJub25lIi8+PHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjExIiByeD0iMC41IiBmaWxsPSJub25lIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ 5810:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MS4wMTkiIGhlaWdodD0iNDEuMDE5IiB2aWV3Qm94PSIwIDAgNDEuMDE5IDQxLjAxOSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAwMSkiPjxwYXRoIGQ9Ik0wLDBINDEuMDE5VjQxLjAxOUgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC4wMDEpIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIsMjcuMjU1SDUuNXYuODk0SDMuNzUxdjEuNzg5SDUuNXYuODk0SDJ2MS43ODlINy4yNTNWMjUuNDY2SDJabTEuNzUxLTE2LjFINS41VjRIMlY1Ljc4OUgzLjc1MVpNMiwxNi41MjJINS4xNTJMMiwyMC4yNzh2MS42MUg3LjI1M1YyMC4xSDQuMWwzLjE1Mi0zLjc1N3YtMS42MUgyWk0xMC43NTUsNS43ODlWOS4zNjZIMzUuMjdWNS43ODlabTAsMjUuMDQ0SDM1LjI3VjI3LjI1NUgxMC43NTVabTAtMTAuNzMzSDM1LjI3VjE2LjUyMkgxMC43NTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjA5OSAyLjE5OCkiIGZpbGw9IiM4MjAyNjMiLz48L2c+PC9zdmc+"

/***/ }),

/***/ 4111:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDQyIDQxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMjY2KSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjE2NSkiPjxyZWN0IHdpZHRoPSI0MiIgaGVpZ2h0PSI0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC40MzEpIiBmaWxsPSJub25lIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNDQ5IDMuMTEzKSI+PHBhdGggZD0iTTE5LjI0MywyQTE3LjI0MywxNy4yNDMsMCwxLDAsMzYuNDg2LDE5LjI0MywxNy4yNDksMTcuMjQ5LDAsMCwwLDE5LjI0MywyWm0wLDMxLjAzN0ExMy43OTQsMTMuNzk0LDAsMSwxLDMzLjAzNywxOS4yNDMsMTMuODEzLDEzLjgxMywwLDAsMSwxOS4yNDMsMzMuMDM3Wm0xLjUzNS0xNS4zNDZjLTMuMDY5LTEuMDE3LTQuNTUyLTEuNjU1LTQuNTUyLTMuMjc2LDAtMS43NTksMS45MTQtMi40LDMuMTIxLTIuNGEzLjMzMiwzLjMzMiwwLDAsMSwzLjI3NiwyLjMxMWwyLjcyNC0xLjE1NUE1LjkwNiw1LjkwNiwwLDAsMCwyMC43Niw5LjMyOFY3LjE3M0gxNy43NDNWOS4zNDVhNS4zMTgsNS4zMTgsMCwwLDAtNC41MTgsNS4xYzAsMy45MTQsMy44OCw1LjAxOCw1Ljc3Niw1LjcwNywyLjcyNC45NjYsMy45MzEsMS44NDUsMy45MzEsMy41LDAsMS45NDgtMS44MTEsMi43NzYtMy40MTQsMi43NzYtMy4xMzgsMC00LjAzNS0zLjIyNC00LjEzOC0zLjZsLTIuODYyLDEuMTU1YTYuOTYsNi45NiwwLDAsMCw1LjIwNyw1LjF2Mi4yMjRoMy4wMThWMjkuMTc1Yy45LS4xNTUsNS4yMDctMS4wMTcsNS4yMDctNS41NTJDMjUuOTY4LDIxLjIyNiwyNC45MTYsMTkuMTIyLDIwLjc3OCwxNy42OTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMikiIGZpbGw9IiM4MjAyNjMiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 3510:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MjciIGhlaWdodD0iOS45IiB2aWV3Qm94PSIwIDAgMTIuNzI3IDkuOSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1ODEuNjM3IC03NDguODczKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU4MS42MzcgNzU0LjUzKSByb3RhdGUoLTQ1KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjODIwMjYzIiBzdHJva2Utd2lkdGg9IjEiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjYiIHJ4PSIxIiBzdHJva2U9Im5vbmUiLz48cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjEiIGhlaWdodD0iNSIgcng9IjAuNSIgZmlsbD0ibm9uZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTkyLjk0OSA3NDguODczKSByb3RhdGUoNDUpIiBmaWxsPSIjZmZmIiBzdHJva2U9IiM4MjAyNjMiIHN0cm9rZS13aWR0aD0iMSI+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMTIiIHJ4PSIxIiBzdHJva2U9Im5vbmUiLz48cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjEiIGhlaWdodD0iMTEiIHJ4PSIwLjUiIGZpbGw9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 2718:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDQxIDQxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40ODQgMC40MzEpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjQzMSkiPjxyZWN0IHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40ODQpIiBmaWxsPSJub25lIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM0IDUuMTI3KSI+PHBhdGggZD0iTTMzLjc5MywxNS4xODFoLTExLjZsNC42ODgtNC44MjRhMTIuMDQyLDEyLjA0MiwwLDAsMC0xNi45LS4xNzEsMTEuNzYyLDExLjc2MiwwLDAsMCwwLDE2Ljc0OCwxMi4wMDksMTIuMDA5LDAsMCwwLDE2LjksMCwxMS4xNDIsMTEuMTQyLDAsMCwwLDMuNDktOC4zNjZoMy40MjJhMTUuOTgsMTUuOTgsMCwwLDEtNC41MTYsMTAuNzYxLDE1LjQ4OSwxNS40ODksMCwwLDEtMjEuNzYxLDBBMTUuMTIzLDE1LjEyMywwLDAsMSw3LjQ4MSw3LjgwN2ExNS4zNzUsMTUuMzc1LDAsMCwxLDIxLjY0MSwwTDMzLjc5MywzWk0xOS4yNTEsMTEuNTU0djcuMjcxbDUuOTg4LDMuNTU4LTEuMjMyLDIuMDctNy4zMjItNC4zNDVWMTEuNTU0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMDAxIC0zKSIgZmlsbD0iIzgyMDI2MyIvPjwvZz48L2c+PC9zdmc+"

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

/***/ 3308:
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,357,168,807,5], () => (__webpack_exec__(2513)));
module.exports = __webpack_exports__;

})();