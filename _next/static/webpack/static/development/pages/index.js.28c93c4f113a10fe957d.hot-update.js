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
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar/style */ "./node_modules/antd/lib/avatar/style/index.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/comment/style */ "./node_modules/antd/lib/comment/style/index.js");
/* harmony import */ var antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/comment */ "./node_modules/antd/lib/comment/index.js");
/* harmony import */ var antd_lib_comment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_comment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_es_modal_style_confirm_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/modal/style/confirm.less */ "./node_modules/antd/es/modal/style/confirm.less");
/* harmony import */ var antd_es_modal_style_confirm_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_es_modal_style_confirm_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");









var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/components/CommentList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;




var StyledComment = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])(antd_lib_comment__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({
  displayName: "CommentList__StyledComment",
  componentId: "sc-136lyql-0"
})([".ant-comment-inner{padding-bottom:0px;}.ant-comment-avatar{cursor:initial;}.delete-button{display:none;position:absolute;top:0;right:0;}.ant-comment-content:hover{.delete-button{display:block;}}"]);
var StyledAvatar = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default.a).withConfig({
  displayName: "CommentList__StyledAvatar",
  componentId: "sc-136lyql-1"
})(["img{width:100%;height:auto;object-fit:cover;object-position:center;}"]);

var DeleteButton = function DeleteButton(props) {
  return __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    className: "delete-button",
    shape: "circle",
    size: "small",
    icon: "close",
    type: "link"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

var CommentList = function CommentList(_ref) {
  var comments = _ref.comments,
      user = _ref.user,
      onDelete = _ref.onDelete;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, comments.map(function (comment, index) {
    return __jsx(StyledComment // actions={actions}
    , {
      key: index,
      author: user && user.uid === comment.uid ? user.displayName : "Someone",
      avatar: __jsx(StyledAvatar, {
        size: "small",
        icon: !user || comment.uid !== user.uid ? "user" : undefined,
        src: user && comment.uid === user.uid ? user.photoURL : undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }),
      content: __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, comment.content, user && user.uid === comment.uid && __jsx(DeleteButton, {
        onClick: function onClick() {
          antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a.confirm({
            title: "Delete this comment?",
            onOk: function onOk() {
              return onDelete(comment);
            }
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })),
      datetime: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_10___default()(comment.createdAt.toDate()).fromNow()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    });
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.28c93c4f113a10fe957d.hot-update.js.map