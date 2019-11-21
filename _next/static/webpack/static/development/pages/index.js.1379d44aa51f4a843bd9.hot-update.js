webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Profile.tsx":
/*!********************************!*\
  !*** ./components/Profile.tsx ***!
  \********************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/typography/style */ "./node_modules/antd/lib/typography/style/index.js");
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _public_images_profile_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/profile.jpg */ "./public/images/profile.jpg");
/* harmony import */ var _public_images_profile_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_images_profile_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/const */ "./utils/const.ts");






var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/components/Profile.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default.a.Title,
    Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default.a.Text;
var ProfileContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Profile__ProfileContainer",
  componentId: "sc-1a54bj6-0"
})(["max-width:400px;width:100%;padding:0 24px;margin-left:auto;display:flex;flex-direction:row;justify-content:center;@media screen and (max-width:500px){margin:auto;flex-direction:column-reverse;align-items:center;}"]);
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Profile__ProfileImage",
  componentId: "sc-1a54bj6-1"
})(["width:60px;height:60px;border-radius:50%;overflow:hidden;object-fit:cover;object-position:center;flex-shrink:0;box-shadow:2px 2px 8px rgba(0,0,0,0.1);cursor:pointer;"]);
var ProfileContent = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Profile__ProfileContent",
  componentId: "sc-1a54bj6-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-end;margin-right:16px;@media screen and (max-width:500px){margin-top:16px;margin-right:0;align-items:center;}"]);
var StyledTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(Title).withConfig({
  displayName: "Profile__StyledTitle",
  componentId: "sc-1a54bj6-3"
})(["&.ant-typography{font-size:1em;color:", ";}"], _utils_const__WEBPACK_IMPORTED_MODULE_9__["COLOR"].PRIMARY);
var Profile = function Profile() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  return __jsx(ProfileContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(ProfileContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:skpepe134@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(StyledTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Witchayut Jongpattanasombut (Pepe)")), __jsx(Text, {
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Fullstack Developer")), __jsx(ProfileImage, {
    src: _public_images_profile_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "profile",
    onClick: function onClick() {
      return setOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Basic Modal",
    visible: open,
    onOk: function onOk() {
      return setOpen(false);
    },
    onCancel: function onCancel() {
      return setOpen(false);
    },
    footer: [__jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "submit",
      type: "primary",
      onClick: function onClick() {
        return setOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Close")],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Hello world"));
};

/***/ })

})
//# sourceMappingURL=index.js.1379d44aa51f4a843bd9.hot-update.js.map