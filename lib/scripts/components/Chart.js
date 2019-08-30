"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _reactChartjs = require("react-chartjs-2");

var _ = require(".");

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Chart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Chart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasChartData: false
    });

    _defineProperty(_assertThisInitialized(_this), "legendCallback", function (chart) {
      var _chart$data = chart.data,
          labels = _chart$data.labels,
          datasets = _chart$data.datasets;

      var _datasets = _slicedToArray(datasets, 1),
          dataset = _datasets[0];

      var data = dataset.data,
          backgroundColor = dataset.backgroundColor;
      var text = [];
      text.push('<ul>');

      for (var i = 0; i < labels.length; i++) {
        text.push('<li>');
        text.push("<div style=\"border-color: ".concat(backgroundColor[i], "\"><span class=\"list-title\" /> <span>").concat(labels[i], "</span><span>").concat(data[i], "</span></div>"));
        text.push('</li>');
      }

      text.push('</ul>');
      return text.join('');
    });

    _defineProperty(_assertThisInitialized(_this), "renderChart", function (properties) {
      var type = properties.type;

      if (type.toLowerCase() === 'bar') {
        return _react.default.createElement(_reactChartjs.Bar, properties);
      } else if (type.toLowerCase() === 'line') {
        return _react.default.createElement(_reactChartjs.Line, properties);
      }
      /* eslint-disable no-param-reassign */


      properties.options.legendCallback = _this.legendCallback;
      return _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "column-8@medium column-12@xsmall"
      }, _react.default.createElement(_reactChartjs.Doughnut, _extends({
        ref: function ref(_ref) {
          _this.chartInstance = _ref && _ref.chartInstance;
        }
      }, properties))), _react.default.createElement("div", {
        className: "column-4@medium column-12@xsmall chart-doughnut__info"
      }, _this.chartInstance && (0, _reactHtmlParser.default)(_this.chartInstance.generateLegend())));
    });

    _defineProperty(_assertThisInitialized(_this), "renderNoData", function () {
      return _react.default.createElement("div", {
        className: "chart__without-data"
      }, "Sorry! There's nothing to show.", _react.default.createElement("p", null, "Once data is available for this section, it will appear here."));
    });

    return _this;
  }

  _createClass(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;

      if (typeof data === 'undefined' || data === null || Object.keys(data).length === 0 || data.datasets.length === 0) {
        this.setState({
          hasChartData: true
        });
      }

      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var ChartProperties = _extends({}, this.props);

      return _react.default.createElement("div", {
        className: "chart"
      }, _react.default.createElement("div", {
        className: "chart__header"
      }, _react.default.createElement("div", {
        className: "header__title"
      }, ChartProperties.title, ChartProperties.info && _react.default.createElement(_Tooltip.default, {
        content: ChartProperties.info
      }, _react.default.createElement(_.Icon, {
        className: "header__icon--info",
        icon: "info-circle"
      }))), !this.state.hasChartData && ChartProperties.header && ChartProperties.header.text && _react.default.createElement("div", {
        className: "header__subtitle ".concat(ChartProperties.header.color)
      }, ChartProperties.header.text, ChartProperties.subHeader && _react.default.createElement("span", {
        className: "subtitle--muted"
      }, ChartProperties.subHeader))), this.state.hasChartData ? this.renderNoData() : this.renderChart(ChartProperties));
    }
  }]);

  return Chart;
}(_react.default.Component);

Chart.propTypes = {
  data: _propTypes.default.object,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  type: _propTypes.default.string.isRequired,
  legend: _propTypes.default.object,
  options: _propTypes.default.object,
  title: _propTypes.default.string.isRequired,
  header: _propTypes.default.object,
  subHeader: _propTypes.default.string,
  info: _propTypes.default.string
};
var _default = Chart;
exports.default = _default;