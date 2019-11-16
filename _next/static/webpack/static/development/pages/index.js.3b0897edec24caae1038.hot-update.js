webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/antd/lib/divider/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/divider/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Divider = function Divider(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        _props$type = props.type,
        type = _props$type === void 0 ? 'horizontal' : _props$type,
        _props$orientation = props.orientation,
        orientation = _props$orientation === void 0 ? 'center' : _props$orientation,
        className = props.className,
        children = props.children,
        dashed = props.dashed,
        restProps = __rest(props, ["prefixCls", "type", "orientation", "className", "children", "dashed"]);

    var prefixCls = getPrefixCls('divider', customizePrefixCls);
    var orientationPrefix = orientation.length > 0 ? "-".concat(orientation) : orientation;
    var classString = (0, _classnames["default"])(className, prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-with-text").concat(orientationPrefix), children), _defineProperty(_classNames, "".concat(prefixCls, "-dashed"), !!dashed), _classNames));
    return React.createElement("div", _extends({
      className: classString
    }, restProps, {
      role: "separator"
    }), children && React.createElement("span", {
      className: "".concat(prefixCls, "-inner-text")
    }, children));
  });
};

var _default = Divider;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/divider/style/index.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/divider/style/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/divider/style/index.less");
//# sourceMappingURL=index.js.map


/***/ }),

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
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/divider/style */ "./node_modules/antd/lib/divider/style/index.js");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography/style */ "./node_modules/antd/lib/typography/style/index.js");
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Card */ "./components/Card.tsx");
/* harmony import */ var _components_CommendBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/CommendBox */ "./components/CommendBox.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Image */ "./components/Image.tsx");
/* harmony import */ var _components_ResponsiveStackGrid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/ResponsiveStackGrid */ "./components/ResponsiveStackGrid.tsx");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.ts");
/* harmony import */ var _utils_showcases__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/showcases */ "./utils/showcases.ts");












var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;












var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_11___default.a.Title,
    Paragraph = antd_lib_typography__WEBPACK_IMPORTED_MODULE_11___default.a.Paragraph;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1fcsi4p-0"
})(["padding-top:80px;padding-bottom:32px;"]);
var ShowcaseBody = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
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

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_14__["useAuthState"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_22__["default"].auth()),
      _useAuthState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_useAuthState, 3),
      user = _useAuthState2[0],
      initialising = _useAuthState2[1],
      error = _useAuthState2[2];

  var _useDocument = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_15__["useDocument"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_22__["default"].firestore().doc("showcase/".concat(showcase.key))),
      _useDocument2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_useDocument, 2),
      snapshot = _useDocument2[0],
      loading = _useDocument2[1];

  var comments = Object(react__WEBPACK_IMPORTED_MODULE_13__["useMemo"])(function () {
    if (snapshot) return snapshot.data().comments;
    return undefined;
  }, [snapshot]);
  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    onSizeChange();
  }, [snapshot, onSizeChange]);
  return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_17__["Card"], {
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
  }, __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_20__["Image"], {
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
  }, description), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), comments && comments.map(function (comment) {
    return __jsx(antd_lib_comment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      // actions={actions}
      author: user ? user.displayName : "Someone",
      avatar: __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        size: "small",
        icon: !user || comment.uid !== user.uid ? "user" : undefined,
        src: user && comment.uid === user.uid ? user.photoURL : undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }),
      content: __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, comment.content),
      datetime: __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
        title: moment__WEBPACK_IMPORTED_MODULE_12___default()(comment.createdAt.toDate()).format("YYYY-MM-DD HH:mm:ss"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_12___default()(comment.createdAt.toDate()).fromNow())),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    });
  }), __jsx(_components_CommendBox__WEBPACK_IMPORTED_MODULE_18__["CommendBox"], {
    user: user,
    showcase: showcase,
    onSubmit: function onSubmit(e) {
      if (comments) {
        _utils_firebase__WEBPACK_IMPORTED_MODULE_22__["default"].firestore().doc("showcase/".concat(showcase.key)).update({
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
      lineNumber: 85
    },
    __self: this
  })));
};

var Index = function Index() {
  var stackGridRef = Object(react__WEBPACK_IMPORTED_MODULE_13__["useRef"])(null);
  var onSizeChange = Object(react__WEBPACK_IMPORTED_MODULE_13__["useCallback"])(function () {
    return stackGridRef && console.log(stackGridRef.current);
  }, [stackGridRef]);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_19__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx(_components_ResponsiveStackGrid__WEBPACK_IMPORTED_MODULE_21__["ResponsiveStackGrid"], {
    ref: stackGridRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, _utils_showcases__WEBPACK_IMPORTED_MODULE_23__["showcases"].map(function (showcase, index) {
    return __jsx(ShowcaseCard, {
      key: showcase.key,
      showcase: showcase,
      onSizeChange: onSizeChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3b0897edec24caae1038.hot-update.js.map