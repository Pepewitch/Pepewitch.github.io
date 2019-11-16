webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/comment/style */ "./node_modules/antd/lib/comment/style/index.js");
/* harmony import */ var antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_comment_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/comment */ "./node_modules/antd/lib/comment/index.js");
/* harmony import */ var antd_lib_comment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_comment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tooltip/style */ "./node_modules/antd/lib/tooltip/style/index.js");
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar/style */ "./node_modules/antd/lib/avatar/style/index.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/typography/style */ "./node_modules/antd/lib/typography/style/index.js");
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Card */ "./components/Card.tsx");
/* harmony import */ var _components_CommendBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/CommendBox */ "./components/CommendBox.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Image */ "./components/Image.tsx");
/* harmony import */ var _components_ResponsiveStackGrid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/ResponsiveStackGrid */ "./components/ResponsiveStackGrid.tsx");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.ts");
/* harmony import */ var _utils_showcases__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/showcases */ "./utils/showcases.ts");










var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;












var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_9___default.a.Title,
    Paragraph = antd_lib_typography__WEBPACK_IMPORTED_MODULE_9___default.a.Paragraph;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1fcsi4p-0"
})(["padding-top:80px;padding-bottom:32px;"]);
var ShowcaseBody = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "pages__ShowcaseBody",
  componentId: "sc-1fcsi4p-1"
})(["padding:16px;"]);

var ShowcaseCard = function ShowcaseCard(_ref) {
  var showcase = _ref.showcase,
      onSizeChange = _ref.onSizeChange;
  var href = showcase.href,
      src = showcase.src,
      title = showcase.title,
      description = showcase.description;

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_12__["useAuthState"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_20__["default"].auth()),
      _useAuthState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useAuthState, 3),
      user = _useAuthState2[0],
      initialising = _useAuthState2[1],
      error = _useAuthState2[2];

  var _useDocument = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_13__["useDocument"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_20__["default"].firestore().doc("showcase/".concat(showcase.key))),
      _useDocument2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useDocument, 2),
      snapshot = _useDocument2[0],
      loading = _useDocument2[1];

  var comments = Object(react__WEBPACK_IMPORTED_MODULE_11__["useMemo"])(function () {
    if (snapshot) return snapshot.data().comments;
    return undefined;
  }, [snapshot]);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    onSizeChange();
  }, [snapshot, onSizeChange]);
  return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_15__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    href: href,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_18__["Image"], {
    src: src,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx(ShowcaseBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    href: href,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Title, {
    level: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, title)), description && __jsx(Paragraph, {
    type: "secondary",
    ellipsis: {
      rows: 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, description), comments && comments.map(function (comment) {
    return __jsx(antd_lib_comment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      // actions={actions}
      author: user ? user.displayName : "Someone",
      avatar: __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        size: "small",
        icon: !user || comment.uid !== user.uid ? "user" : undefined,
        src: user && comment.uid === user.uid ? user.photoURL : undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }),
      content: __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, comment.content),
      datetime: __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
        title: moment__WEBPACK_IMPORTED_MODULE_10___default()(comment.createdAt.toDate()).format("YYYY-MM-DD HH:mm:ss"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_10___default()(comment.createdAt.toDate()).fromNow())),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  }), __jsx(_components_CommendBox__WEBPACK_IMPORTED_MODULE_16__["CommendBox"], {
    user: user,
    showcase: showcase,
    onSubmit: function onSubmit(e) {
      if (comments) {
        _utils_firebase__WEBPACK_IMPORTED_MODULE_20__["default"].firestore().doc("showcase/".concat(showcase.key)).update({
          comment: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(comments), [{
            createdAt: new Date(),
            content: e,
            uid: user.uid
          }])
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })));
};

var Index = function Index() {
  var stackGridRef = Object(react__WEBPACK_IMPORTED_MODULE_11__["useRef"])(null);
  var onSizeChange = Object(react__WEBPACK_IMPORTED_MODULE_11__["useCallback"])(function () {
    return stackGridRef && stackGridRef.current.updateLayout();
  }, [stackGridRef]);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(_components_ResponsiveStackGrid__WEBPACK_IMPORTED_MODULE_19__["ResponsiveStackGrid"], {
    ref: stackGridRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, _utils_showcases__WEBPACK_IMPORTED_MODULE_21__["showcases"].map(function (showcase, index) {
    return __jsx(ShowcaseCard, {
      key: showcase.key,
      showcase: showcase,
      onSizeChange: onSizeChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.22f0eae2b606ecdcc732.hot-update.js.map