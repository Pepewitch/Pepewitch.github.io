webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentList.tsx":
/*!************************************!*\
  !*** ./components/CommentList.tsx ***!
  \************************************/
/*! exports provided: CommentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentList", function() { return CommentList; });
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar/style */ "./node_modules/antd/lib/avatar/style/index.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/comment/style */ "./node_modules/antd/lib/comment/style/index.js");
/* harmony import */ var antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/comment */ "./node_modules/antd/lib/comment/index.js");
/* harmony import */ var antd_lib_comment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_comment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/components/CommentList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  .ant-comment-inner {\n    padding-bottom: 0px;\n  }\n  .ant-comment-avatar {\n    cursor: initial;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledComment = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd_lib_comment__WEBPACK_IMPORTED_MODULE_3___default.a)(_templateObject());
var CommentList = function CommentList(_ref) {
  var comments = _ref.comments,
      user = _ref.user;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, comments.map(function (comment, index) {
    return __jsx(StyledComment // actions={actions}
    , {
      key: index,
      author: user && user.uid === comment.uid ? user.displayName : "Someone",
      avatar: __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
        size: "small",
        icon: !user || comment.uid !== user.uid ? "user" : undefined,
        src: user && comment.uid === user.uid ? user.photoURL : undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }),
      content: __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, comment.content),
      datetime: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt.toDate()).fromNow()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.ff4089a08124d276b80a.hot-update.js.map