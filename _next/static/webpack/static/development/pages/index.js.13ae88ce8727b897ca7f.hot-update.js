webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommendBox.tsx":
/*!***********************************!*\
  !*** ./components/CommendBox.tsx ***!
  \***********************************/
/*! exports provided: CommendBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommendBox", function() { return CommendBox; });
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar/style */ "./node_modules/antd/lib/avatar/style/index.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/components/CommendBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var CommendInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a).withConfig({
  displayName: "CommendBox__CommendInput",
  componentId: "sc-612gzp-0"
})([".ant-input{border-radius:9999px;}.ant-input-prefix{left:4px;}"]);
var StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "CommendBox__StyledForm",
  componentId: "sc-612gzp-1"
})([".ant-form-item{margin-bottom:0;}"]);
var CommendBox = antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.create({
  name: "commend"
})(function (_ref) {
  var user = _ref.user,
      onSubmit = _ref.onSubmit,
      form = _ref.form;
  var getFieldDecorator = form.getFieldDecorator;
  var formOnSubmit = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function (e) {
    e.preventDefault();
    var value = form.getFieldValue("commend");

    if (value) {
      onSubmit(value);
    }

    form.resetFields();
  }, [form, onSubmit]);
  return __jsx(StyledForm, {
    onSubmit: formOnSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, getFieldDecorator("commend")(__jsx(CommendInput, {
    placeholder: user ? "Commend as ".concat(user.displayName) : "Sign in to commend",
    disabled: !user,
    autoComplete: "off",
    name: "commend",
    prefix: __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      size: 24
    }, {
      src: user ? user.photoURL : undefined,
      icon: !user ? "user" : undefined
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.13ae88ce8727b897ca7f.hot-update.js.map