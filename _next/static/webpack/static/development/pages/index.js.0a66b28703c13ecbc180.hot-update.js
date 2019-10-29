webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TestChain.tsx":
/*!**********************************!*\
  !*** ./components/TestChain.tsx ***!
  \**********************************/
/*! exports provided: TestChain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestChain", function() { return TestChain; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/components/TestChain.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html,\n  body,\n  #__next {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    user-select: none;\n    background: lightblue;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject());
var Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div).withConfig({
  displayName: "TestChain__Container",
  componentId: "ifxw8-0"
})(["position:relative;display:grid;grid-template-columns:repeat(4,minmax(100px,1fr));grid-gap:25px;padding:25px;background:white;border-radius:50%;cursor:pointer;box-shadow:0px 10px 10px -5px rgba(0,0,0,0.05);will-change:width,height,border-radius;"]);
var Item = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div).withConfig({
  displayName: "TestChain__Item",
  componentId: "ifxw8-1"
})(["width:100%;height:100%;background:white;border-radius:5px;will-change:transform,opacity;"]);
var data = [{
  name: "Rare Wind",
  description: "#a8edea → #fed6e3",
  css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  height: 200
}, {
  name: "Saint Petersburg",
  description: "#f5f7fa → #c3cfe2",
  css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  height: 400
}, {
  name: "Deep Blue",
  description: "#e0c3fc → #8ec5fc",
  css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  height: 400
}, {
  name: "Ripe Malinka",
  description: "#f093fb → #f5576c",
  css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  height: 400
}, {
  name: "Perfect White",
  description: "#fdfbfb → #ebedee",
  css: "linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)",
  height: 400
}, {
  name: "Near Moon",
  description: "#5ee7df → #b490ca",
  css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
  height: 400
}, {
  name: "Wild Apple",
  description: "#d299c2 → #fef9d7",
  css: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
  height: 200
}, {
  name: "Ladoga Bottom",
  description: "#ebc0fd → #d9ded8",
  css: "linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)",
  height: 400
}, {
  name: "Sunny Morning",
  description: "#f6d365 → #fda085",
  css: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  height: 200
}, {
  name: "Lemon Gate",
  description: "#96fbc4 → #f9f586",
  css: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
  height: 400
}, {
  name: "Salt Mountain",
  description: " #FFFEFF → #D7FFFE",
  css: "linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)",
  height: 200
}, {
  name: "New York",
  description: " #fff1eb → #ace0f9",
  css: "linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)",
  height: 400
}, {
  name: "Soft Grass",
  description: " #c1dfc4 → #deecdd",
  css: "linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)",
  height: 400
}, {
  name: "Japan Blush",
  description: " #ddd6f3 → #faaca8",
  css: "linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)",
  height: 200
}];
var TestChain = function TestChain() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      open = _useState[0],
      set = _useState[1];

  var springRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    ref: springRef,
    config: react_spring__WEBPACK_IMPORTED_MODULE_4__["config"].stiff,
    from: {
      size: "20%",
      background: "hotpink",
      radius: "5px"
    },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
      radius: open ? "50%" : "5px"
    }
  }),
      size = _useSpring.size,
      radius = _useSpring.radius,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, ["size", "radius"]);

  var transRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useTransition"])(open ? data : [], function (item) {
    return item.name;
  }, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: {
      opacity: 0,
      transform: "scale(0)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)"
    },
    leave: {
      opacity: 0,
      transform: "scale(0)"
    }
  }); // This will orchestrate the two animations above, comment the last arg and it creates a sequence

  Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useChain"])(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(Global, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), __jsx(Container, {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      width: size,
      height: size,
      borderRadius: radius
    }),
    onClick: function onClick() {
      return set(function (open) {
        return !open;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, transitions.map(function (_ref) {
    var item = _ref.item,
        key = _ref.key,
        props = _ref.props;
    return __jsx(Item, {
      key: key,
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        background: item.css
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    });
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.0a66b28703c13ecbc180.hot-update.js.map