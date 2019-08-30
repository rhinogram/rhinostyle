"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _IconExample = _interopRequireDefault(require("./examples/Icon.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var IconDocs = {
  bump: "Move icon up or down slightly for precise positioning <code>oneOf(['down', 'up'])</code>" // eslint-disable-line single-quotes

};
var IconScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Icon: _components.Icon,
  UtilityInlineGrid: _components.UtilityInlineGrid
}; // Add new icons here

var icons = ['analytics', 'add-circle', 'alert-triangle', 'announce', 'arrow-left', 'arrow-right', 'assign', 'attachment', 'calendar', 'camera', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'chat-group', 'chat', 'checkmark', 'clock', 'close', 'cog', 'desktop', 'dots-horizontal', 'dots-vertical', 'download', 'email', 'facebook', 'filter', 'heart', 'hipaa', 'inbox', 'info-circle', 'lock', 'log-in', 'log-out', 'minor', 'mobile', 'note', 'phone', 'question-circle', 'rotate', 'search', 'send', 'star', 'to-from', 'touchid', 'trash', 'twitter', 'unlock', 'upload', 'user-group', 'user', 'empty-state', 'contacts', 'rhinopay'];

var IconApp = function IconApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "SVG Icons"), _react.default.createElement("div", null, "Adding ", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "Icons"), " to ", _react.default.createElement("code", null, "RhinoStyle"), " requires a few simple steps in a set order. With ", _react.default.createElement("code", null, "gulp serve"), " running, add the icon file to the ", _react.default.createElement("code", null, "/src/svg"), " directory. In a new terminal window run ", _react.default.createElement("code", null, "gulp icons"), ". This will generate a new ", _react.default.createElement("code", null, "icons.json"), " file that consists of a flattened array with your newly added ", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "Icon"), ". Next, in ", _react.default.createElement("code", null, "IconApp.jsx"), " add the filename of your new ", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "Icon"), " to the icons array near the top of the file. Your icon should now be visible on the ", _react.default.createElement("code", null, "/icons"), " page.", _react.default.createElement("div", {
    className: "u-m-b u-m-t"
  }, _react.default.createElement("strong", null, "Note: "), "There are two classes available for ", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "Icons"), ": ", _react.default.createElement("code", null, "icon-stroke"), " and ", _react.default.createElement("code", null, "icon-fill"), ". These are required for stroked svg paths and filled svg paths, as they override the ", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "Icon"), "\xA0color and allow for dynamic coloring via props.")), _react.default.createElement("div", {
    className: "row"
  }, icons.map(function (value) {
    return _react.default.createElement("div", {
      key: value,
      className: "column-6@xsmall column-4@small column-3@medium"
    }, _react.default.createElement("div", {
      className: "site-swatch"
    }, _react.default.createElement("div", {
      className: "site-swatch__sample"
    }, _react.default.createElement(_components.Icon, {
      icon: value
    })), _react.default.createElement("div", {
      className: "site-swatch__text"
    }, _react.default.createElement("code", null, value))));
  }))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _IconExample.default,
    scope: IconScope,
    component: _components.Icon,
    propDescriptions: IconDocs
  })));
};

_reactDom.default.render(_react.default.createElement(IconApp, null), document.getElementById('root'));