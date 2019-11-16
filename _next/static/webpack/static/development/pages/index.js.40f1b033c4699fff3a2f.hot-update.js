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
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/typography/style */ "./node_modules/antd/lib/typography/style/index.js");
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Card */ "./components/Card.tsx");
/* harmony import */ var _components_CommendBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CommendBox */ "./components/CommendBox.tsx");
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CommentList */ "./components/CommentList.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Image */ "./components/Image.tsx");
/* harmony import */ var _components_ResponsiveStackGrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ResponsiveStackGrid */ "./components/ResponsiveStackGrid.tsx");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.ts");
/* harmony import */ var _utils_showcases__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/showcases */ "./utils/showcases.ts");






var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;












var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default.a.Title,
    Paragraph = antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default.a.Paragraph;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1fcsi4p-0"
})(["padding-top:80px;padding-bottom:32px;"]);
var ShowcaseBody = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
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

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__["useAuthState"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_16__["default"].auth()),
      _useAuthState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useAuthState, 3),
      user = _useAuthState2[0],
      initialising = _useAuthState2[1],
      error = _useAuthState2[2];

  var _useDocument = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__["useDocument"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_16__["default"].firestore().doc("showcase/".concat(showcase.key))),
      _useDocument2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useDocument, 2),
      snapshot = _useDocument2[0],
      loading = _useDocument2[1];

  var comments = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    if (snapshot && snapshot.data()) return snapshot.data().comments;
    return undefined;
  }, [snapshot]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (onSizeChange) onSizeChange();
  }, [comments, onSizeChange]);
  return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_10__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("a", {
    href: href,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_14__["Image"], {
    src: src,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx(ShowcaseBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("a", {
    href: href,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(Title, {
    level: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, title)), description && __jsx(Paragraph, {
    type: "secondary",
    ellipsis: {
      rows: 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, description), loading && __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "loading",
    style: {
      fontSize: 24,
      color: "#ff577d"
    },
    spin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), comments && __jsx(_components_CommentList__WEBPACK_IMPORTED_MODULE_12__["CommentList"], {
    comments: comments,
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_CommendBox__WEBPACK_IMPORTED_MODULE_11__["CommendBox"], {
    user: user,
    showcase: showcase,
    onSubmit: function onSubmit(e) {
      if (comments) {
        _utils_firebase__WEBPACK_IMPORTED_MODULE_16__["default"].firestore().doc("showcase/".concat(showcase.key)).update({
          comments: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(comments), [{
            createdAt: new Date(),
            content: e,
            uid: user.uid
          }])
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })));
};

var Index = function Index() {
  var stackGridRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var onSizeChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    return stackGridRef && stackGridRef.current.updateLayout();
  }, [stackGridRef]);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_13__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(_components_ResponsiveStackGrid__WEBPACK_IMPORTED_MODULE_15__["ResponsiveStackGrid"], {
    gridRef: stackGridRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, _utils_showcases__WEBPACK_IMPORTED_MODULE_17__["showcases"].map(function (showcase) {
    return __jsx(ShowcaseCard, {
      key: showcase.key,
      showcase: showcase,
      onSizeChange: onSizeChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.40f1b033c4699fff3a2f.hot-update.js.map