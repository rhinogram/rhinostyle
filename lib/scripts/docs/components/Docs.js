"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _components = require("../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypesArray = [{
  key: 'array',
  test: _propTypes.default.array,
  isRequired: _propTypes.default.array.isRequired
}, {
  key: 'boolean',
  test: _propTypes.default.bool,
  isRequired: _propTypes.default.bool.isRequired
}, {
  key: 'function',
  test: _propTypes.default.func,
  isRequired: _propTypes.default.func.isRequired
}, {
  key: 'number',
  test: _propTypes.default.number,
  isRequired: _propTypes.default.number.isRequired
}, {
  key: 'object',
  test: _propTypes.default.object,
  isRequired: _propTypes.default.array.isRequired
}, {
  key: 'string',
  test: _propTypes.default.string,
  isRequired: _propTypes.default.string.isRequired
}, {
  key: 'node',
  test: _propTypes.default.node,
  isRequired: _propTypes.default.node.isRequired
}, {
  key: 'element',
  test: _propTypes.default.element,
  isRequired: _propTypes.default.element.isRequired
}];

var getReactPropType = function getReactPropType(propTypeFunc) {
  var name = 'custom';
  var isRequired = false;
  propTypesArray.some(function (propType) {
    if (propTypeFunc === propType.test) {
      name = propType.key;
      return true;
    }

    if (propTypeFunc === propType.isRequired) {
      name = propType.key;
      isRequired = true;
      return true;
    }

    return false;
  });
  return {
    name: name,
    isRequired: isRequired
  };
};

var Docs = function Docs(props) {
  var propTypes = [];
  var component = props.component,
      propDescriptions = props.propDescriptions; // If no component was specified; ignore

  if (!component) return null;
  Object.keys(component.propTypes).map(function (propName) {
    return (// eslint-disable-line react/forbid-foreign-prop-types
      propTypes.push({
        propName: propName,
        type: getReactPropType(component.propTypes[propName]),
        // eslint-disable-line react/forbid-foreign-prop-types
        description: (0, _reactHtmlParser.default)(propDescriptions[propName]) || '',
        default: component.defaultProps && component.defaultProps[propName] && (typeof component.defaultProps[propName] !== 'function' ? component.defaultProps[propName].toString() : null) // eslint-disable-line max-len

      })
    );
  });
  return _react.default.createElement("table", {
    className: "table rdocs-table"
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Prop"), _react.default.createElement("th", null, "Type"), _react.default.createElement("th", null, "Description"), _react.default.createElement("th", null, "Default"))), _react.default.createElement("tbody", null, propTypes.map(function (propObj) {
    return _react.default.createElement("tr", {
      key: propObj.propName
    }, _react.default.createElement("td", {
      className: "u-textNoBreak"
    }, _react.default.createElement("code", null, propObj.propName), " ", propObj.type.isRequired && _react.default.createElement(_components.Label, {
      type: "danger",
      label: "Required"
    })), _react.default.createElement("td", {
      className: "u-textNoBreak"
    }, _react.default.createElement("code", null, propObj.type.name)), _react.default.createElement("td", null, propObj.description), _react.default.createElement("td", null, propObj.default ? _react.default.createElement("code", null, propObj.default) : ''));
  })));
};

Docs.propTypes = {
  component: _propTypes.default.func,
  propDescriptions: _propTypes.default.object
};
Docs.defaultProps = {
  propDescriptions: {}
};
var _default = Docs;
exports.default = _default;