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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-stack-grid */ "./node_modules/react-stack-grid/lib/index.js");
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_stack_grid__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/pepe_witch/work/project/Pepewitch.github.io/components/ResponsiveStackGrid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var fadeUp = react_stack_grid__WEBPACK_IMPORTED_MODULE_8__["transitions"].fadeUp,
    fadeDown = react_stack_grid__WEBPACK_IMPORTED_MODULE_8__["transitions"].fadeDown;

var useStackGrid = function useStackGrid() {
  var stackGridRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var onSizeChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    return stackGridRef && stackGridRef.current.updateLayout();
  }, [stackGridRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var updateView = function updateView() {
      requestAnimationFrame(function () {
        // Fix stack grid resize bug by adding some delay before updateView again
        setTimeout(function () {
          onSizeChange();
        }, 20);
      });
    };

    window.addEventListener("resize", updateView);
    return function () {
      return window.removeEventListener("resize", updateView);
    };
  }, []);
  return {
    stackGridRef: stackGridRef,
    onSizeChange: onSizeChange
  };
};

var useIntervalAppear = function useIntervalAppear(items, interval) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      appearedItems = _useState[0],
      setAppearedItems = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (interval) {
      var showShowcases =
      /*#__PURE__*/
      function () {
        var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
          var appeared, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  appeared = [];
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 4;
                  _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(items);

                case 6:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 15;
                    break;
                  }

                  item = _step.value;
                  appeared.push(item);
                  setAppearedItems([].concat(appeared));
                  _context.next = 12;
                  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (res) {
                    return setTimeout(function () {
                      return res();
                    }, interval);
                  });

                case 12:
                  _iteratorNormalCompletion = true;
                  _context.next = 6;
                  break;

                case 15:
                  _context.next = 21;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context["catch"](4);
                  _didIteratorError = true;
                  _iteratorError = _context.t0;

                case 21:
                  _context.prev = 21;
                  _context.prev = 22;

                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }

                case 24:
                  _context.prev = 24;

                  if (!_didIteratorError) {
                    _context.next = 27;
                    break;
                  }

                  throw _iteratorError;

                case 27:
                  return _context.finish(24);

                case 28:
                  return _context.finish(21);

                case 29:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[4, 17, 21, 29], [22,, 24, 28]]);
        }));

        return function showShowcases() {
          return _ref.apply(this, arguments);
        };
      }();

      showShowcases();
    } else {
      setAppearedItems(items);
    }
  }, [items]);
  return appearedItems;
};

var ResponsiveStackGrid = react_sizeme__WEBPACK_IMPORTED_MODULE_7___default()()(function (_ref2) {
  var size = _ref2.size,
      children = _ref2.children,
      items = _ref2.items,
      interval = _ref2.interval,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["size", "children", "items", "interval"]);

  var width = size.width;
  var columnWidth = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    if (width < 500) return "100%";else if (width < 768) return "50%";else return 320;
  }, [width]);

  var _useStackGrid = useStackGrid(),
      stackGridRef = _useStackGrid.stackGridRef,
      onSizeChange = _useStackGrid.onSizeChange;

  var appearedItems = useIntervalAppear(items, interval);
  return __jsx("div", {
    style: {
      padding: "0 16px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(react_stack_grid__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    gridRef: function gridRef(grid) {
      return stackGridRef.current = grid;
    },
    columnWidth: columnWidth,
    gutterWidth: 24,
    gutterHeight: 24,
    appear: fadeUp.appear,
    appeared: fadeUp.appeared,
    enter: fadeUp.enter,
    entered: fadeUp.entered,
    leaved: fadeDown.leaved,
    monitorImagesLoaded: true
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), children(onSizeChange, appearedItems)));
});

/***/ })

})
//# sourceMappingURL=index.js.1b37e7aa5da700f0c5a6.hot-update.js.map