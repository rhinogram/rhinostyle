"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactTable = _interopRequireDefault(require("react-table"));

var _reactTableHocFixedColumns = _interopRequireDefault(require("react-table-hoc-fixed-columns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReactTableFixedColumns = (0, _reactTableHocFixedColumns.default)(_reactTable.default);

var SmartTable = function SmartTable(props) {
  var striped = props.striped,
      highlight = props.highlight,
      sortable = props.sortable,
      sticky = props.sticky,
      opts = _objectWithoutProperties(props, ["striped", "highlight", "sortable", "sticky"]);

  var classes = (0, _classnames.default)('', {
    '-highlight': highlight,
    '-striped': striped,
    '-sorting': sortable,
    '-sticky': sticky
  });
  return _react.default.createElement(ReactTableFixedColumns, _extends({
    className: classes
  }, opts));
};

SmartTable.propTypes = {
  showPagination: _propTypes.default.bool,
  data: _propTypes.default.array.isRequired,
  columns: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]).isRequired,
  minRows: _propTypes.default.number,
  sortable: _propTypes.default.bool,
  sticky: _propTypes.default.bool,
  expanded: _propTypes.default.object,
  highlight: _propTypes.default.bool,
  striped: _propTypes.default.bool,
  SubComponent: _propTypes.default.func
};
var _default = SmartTable;
exports.default = _default;