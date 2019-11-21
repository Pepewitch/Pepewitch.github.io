webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.tsx");
/* harmony import */ var _components_ResponsiveStackGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResponsiveStackGrid */ "./components/ResponsiveStackGrid.tsx");
/* harmony import */ var _components_ShowcaseCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ShowcaseCard */ "./components/ShowcaseCard.tsx");
/* harmony import */ var _utils_showcases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/showcases */ "./utils/showcases.ts");
var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1fcsi4p-0"
})(["padding-top:88px;padding-bottom:100px;"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Footer",
  componentId: "sc-1fcsi4p-1"
})(["position:fixed;bottom:0;width:100%;padding:0 24px;background:#f8f8f8;border-top:1px solid #eee;z-index:10;"]);

var Index = function Index() {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_ResponsiveStackGrid__WEBPACK_IMPORTED_MODULE_4__["ResponsiveStackGrid"], {
    items: _utils_showcases__WEBPACK_IMPORTED_MODULE_6__["showcases"],
    interval: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, function (onSizeChange, appearedShowcases) {
    return appearedShowcases.map(function (showcase) {
      return __jsx(_components_ShowcaseCard__WEBPACK_IMPORTED_MODULE_5__["ShowcaseCard"], {
        key: showcase.key,
        showcase: showcase,
        onSizeChange: onSizeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      });
    });
  }), __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_3__["Profile"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d5e1725d9ca7b316b823.hot-update.js.map