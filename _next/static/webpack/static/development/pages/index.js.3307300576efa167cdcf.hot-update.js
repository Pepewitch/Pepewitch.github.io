webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ResponsiveStackGrid.tsx":
/*!********************************************!*\
  !*** ./components/ResponsiveStackGrid.tsx ***!
  \********************************************/
/*! exports provided: ResponsiveStackGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveStackGrid", function() { return ResponsiveStackGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stack-grid */ "./node_modules/react-stack-grid/lib/index.js");
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stack_grid__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/components/ResponsiveStackGrid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var fadeUp = react_stack_grid__WEBPACK_IMPORTED_MODULE_4__["transitions"].fadeUp,
    fadeDown = react_stack_grid__WEBPACK_IMPORTED_MODULE_4__["transitions"].fadeDown;
var MonitorSizeStackGrid = react_sizeme__WEBPACK_IMPORTED_MODULE_3___default()()(function (_ref) {
  var size = _ref.size,
      ref = _ref.ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["size", "ref"]);

  var width = size.width;
  var columnWidth = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (width < 500) return "100%";else if (width < 768) return "50%";else return 350;
  }, [width]);
  return __jsx("div", {
    style: {
      padding: "0 16px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_stack_grid__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    columnWidth: columnWidth,
    gutterWidth: 16,
    gutterHeight: 16,
    appear: fadeUp.appear,
    appeared: fadeUp.appeared,
    enter: fadeUp.enter,
    entered: fadeUp.entered,
    leaved: fadeDown.leaved,
    monitorImagesLoaded: true
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
});
var ResponsiveStackGrid = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props, ref) {
  return __jsx(MonitorSizeStackGrid, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    gridRef: function gridRef(grid) {
      return ref = grid;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.3307300576efa167cdcf.hot-update.js.map