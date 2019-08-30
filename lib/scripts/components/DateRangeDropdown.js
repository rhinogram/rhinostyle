"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateRangeDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateRangeDropdown, _React$Component);

  function DateRangeDropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateRangeDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateRangeDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isApplyEnabled: false,
      startDate: (0, _moment.default)(_this.props.startDate),
      endDate: (0, _moment.default)(_this.props.endDate),
      minDate: (0, _moment.default)(_this.props.minDate),
      maxDate: (0, _moment.default)(_this.props.maxDate),
      dropdownMenuItems: _this.props.dropdownMenuItems || []
    });

    _defineProperty(_assertThisInitialized(_this), "handleDropdownClick", function () {
      if (_this.props.isCustomDate) {
        var startInputValue = _this.startDatePickerInput.datePickerInput.input.element.value;
        var endInputValue = _this.endDatePickerInput.datePickerInput.input.element.value;
        var _this$props = _this.props,
            startDate = _this$props.startDate,
            endDate = _this$props.endDate; // This condition is for applying custom date range selection

        if (_this.state.isApplyEnabled || endInputValue !== (0, _moment.default)(endDate).format('MM/DD/YYYY') || startInputValue !== (0, _moment.default)(startDate).format('MM/DD/YYYY')) {
          _this.endDatePickerInput.datePickerInput.input.element.value = (0, _moment.default)(_this.props.endDate).format('MM/DD/YYYY');
          _this.startDatePickerInput.datePickerInput.input.element.value = (0, _moment.default)(_this.props.startDate).format('MM/DD/YYYY');

          _this.setState({
            isApplyEnabled: false,
            startDate: _this.props.startDate,
            endDate: _this.props.endDate
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (date) {
      var _this$props2 = _this.props,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate;
      var from = (0, _moment.default)(date);
      var to = (0, _moment.default)(_this.state.endDate);

      if (!(date && date.isValid())) {
        from = (0, _moment.default)(_this.state.startDate);
      }

      if (from.isBefore((0, _moment.default)(minDate)) || from.isAfter((0, _moment.default)(maxDate))) {
        from = to.clone();
      }

      if (from.isAfter(to)) {
        to = from.clone();
      }

      _this.setState({
        isApplyEnabled: true,
        startDate: from,
        endDate: to
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (date) {
      var _this$props3 = _this.props,
          minDate = _this$props3.minDate,
          maxDate = _this$props3.maxDate;
      var from = (0, _moment.default)(_this.state.startDate);
      var to = (0, _moment.default)(date);
      var endDate = to.format('YYYY-MM-DD');

      if (!(date && date.isValid())) {
        to = (0, _moment.default)(_this.state.endDate);
      }

      if (to.isBefore((0, _moment.default)(minDate)) || (0, _moment.default)(endDate).isAfter(maxDate.format('YYYY-MM-DD'))) {
        to = from.clone();
      }

      if (from.isAfter(to)) {
        from = to.clone();
      }

      _this.setState({
        isApplyEnabled: true,
        startDate: from,
        endDate: to
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (duration, activeKey) {
      var _this$props$selectDat = _this.props.selectDateRange(duration, activeKey),
          startDate = _this$props$selectDat.startDate,
          endDate = _this$props$selectDat.endDate;

      _this.setState({
        startDate: (0, _moment.default)(startDate),
        endDate: (0, _moment.default)(endDate)
      });

      _this.props.selectDate({
        startDate: (0, _moment.default)(startDate),
        endDate: (0, _moment.default)(endDate),
        activeKey: activeKey
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyDates", function () {
      var totalLabels = _this.props.dropdownMenuItems.length;

      _this.setState({
        isApplyEnabled: false
      });

      if (_this.dropdown && _this.dropdown.dropdown) {
        _this.dropdown.dropdown.componentNode.timeline.reverse();
      }

      _this.props.selectDate({
        startDate: _this.state.startDate,
        endDate: _this.state.endDate,
        activeKey: totalLabels
      });
    });

    return _this;
  }

  _createClass(DateRangeDropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isApplyEnabled: false,
        startDate: (0, _moment.default)(this.props.startDate),
        endDate: (0, _moment.default)(this.props.endDate)
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.endDate !== this.state.endDate) {
        this.endDatePickerInput.datePickerInput.input.setRawValue(this.state.endDate.format('MM/DD/YYYY'));
      }

      if (prevState.startDate !== this.state.startDate) {
        this.startDatePickerInput.datePickerInput.input.setRawValue(this.state.startDate.format('MM/DD/YYYY'));
      }
    }
  }, {
    key: "getLabel",
    value: function getLabel(activeKey) {
      var dropdownMenuItems = this.state.dropdownMenuItems;
      return "".concat(dropdownMenuItems[activeKey - 1] && dropdownMenuItems[activeKey - 1].label || '', " \n    (").concat((0, _moment.default)(this.props.startDate).format('MMM DD, YYYY'), " - ").concat((0, _moment.default)(this.props.endDate).format('MMM DD, YYYY'), ")");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          name = _this$props4.name,
          _this$props4$position = _this$props4.position,
          position = _this$props4$position === void 0 ? 'center' : _this$props4$position,
          isCustomDate = _this$props4.isCustomDate,
          activeKey = _this$props4.activeKey;
      var _this$state = this.state,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate,
          dropdownMenuItems = _this$state.dropdownMenuItems,
          minDate = _this$state.minDate,
          maxDate = _this$state.maxDate;
      return _react.default.createElement("div", {
        className: "daterange__dropdown"
      }, _react.default.createElement(_.Dropdown, {
        label: this.getLabel(activeKey),
        lockLabel: true,
        onClick: this.handleDropdownClick,
        activeKey: activeKey,
        position: position,
        name: name,
        blur: true,
        hideCaret: true,
        wide: true,
        autoFocusInput: false,
        ref: function ref(dropdown) {
          return _this2.dropdown = dropdown;
        }
      }, dropdownMenuItems.map(function (menuItem, index) {
        return index !== dropdownMenuItems.length - 1 && _react.default.createElement(_.DropdownMenuItem, {
          key: menuItem.label,
          id: menuItem.id,
          label: menuItem.label,
          onClick: function onClick() {
            return _this2.handleChange(menuItem.duration, menuItem.id);
          }
        });
      }), isCustomDate && _react.default.createElement(_react.Fragment, null, _react.default.createElement(_.DropdownMenuDivider, null), _react.default.createElement(_.DropdownMenuItemWild, {
        id: 5
      }, _react.default.createElement("div", {
        className: "date-range__label"
      }, "Custom Range"), _react.default.createElement("div", {
        className: "row date-range__buttons"
      }, _react.default.createElement("div", {
        className: "column-6@small"
      }, _react.default.createElement(_.Date, {
        name: "startDate",
        selected: startDate,
        onChange: this.handleStartDateChange,
        placeholderText: "Click to select Start Date",
        shouldCloseOnSelect: true,
        explanationMessage: "",
        minDate: minDate,
        maxDate: maxDate,
        label: "From:",
        onBlur: function onBlur(event) {
          return _this2.handleStartDateChange((0, _moment.default)(event.target.value, 'MM/DD/YYYY'));
        },
        ref: function ref(inputRef) {
          return _this2.startDatePickerInput = inputRef;
        }
      })), _react.default.createElement("div", {
        className: "column-6@small"
      }, _react.default.createElement(_.Date, {
        name: "endDate",
        selected: endDate,
        onChange: this.handleEndDateChange,
        placeholderText: "Click to select End Date",
        shouldCloseOnSelect: true,
        explanationMessage: "",
        minDate: startDate,
        maxDate: maxDate,
        label: "To:",
        onBlur: function onBlur(event) {
          return _this2.handleEndDateChange((0, _moment.default)(event.target.value, 'MM/DD/YYYY'));
        },
        ref: function ref(inputRef) {
          return _this2.endDatePickerInput = inputRef;
        }
      }))), this.state.isApplyEnabled && _react.default.createElement("div", {
        className: "menu__divider"
      }, _react.default.createElement(_.ResourceRight, null, _react.default.createElement(_.Button, {
        type: "primary",
        size: "small",
        onClick: this.applyDates
      }, "Apply")))))));
    }
  }]);

  return DateRangeDropdown;
}(_react.default.Component);

DateRangeDropdown.propTypes = {
  position: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  activeKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  selectDate: _propTypes.default.func,
  startDate: _propTypes.default.object,
  endDate: _propTypes.default.object,
  minDate: _propTypes.default.object,
  maxDate: _propTypes.default.object,
  dropdownMenuItems: _propTypes.default.array.isRequired,
  selectDateRange: _propTypes.default.func.isRequired,
  isCustomDate: _propTypes.default.bool
};
var _default = DateRangeDropdown;
exports.default = _default;