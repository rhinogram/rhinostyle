"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _ButtonExample = _interopRequireDefault(require("./examples/Button.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ButtonDocs = {
  iconOnly: 'Icon with no text or avatar',
  avatarOnly: 'Avatar without text or icon',
  route: '<code>react-router</code> route',
  size: "<code>oneOf(['small', 'large'])</code>",
  // eslint-disable-line single-quotes
  title: 'Represents advisory information on hover',
  type: "<code>oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-primary', 'outline-reversed', 'link', 'link-muted'])</code>",
  // eslint-disable-line single-quotes, max-len
  loading: 'Specify a loading-state for the button to denote a background-action is in-progress',
  reset: 'Removes any/all formatting attached to a button to inherit the surrounding text. Overrides type, block, and iconOnly props to avoid conflicts'
};
var ButtonScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Button: _components.Button,
  Icon: _components.Icon,
  Avatar: _components.Avatar,
  UtilityInlineGrid: _components.UtilityInlineGrid
};

var ButtonApp = function ButtonApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Button Types"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "type=\"default | primary | secondary | accent | input | outline-primary | link | link-muted | danger\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, null, "Default"), _react.default.createElement(_components.Button, {
    type: "primary"
  }, "Primary"), _react.default.createElement(_components.Button, {
    type: "secondary"
  }, "Secondary"), _react.default.createElement(_components.Button, {
    type: "accent"
  }, "Accent"), _react.default.createElement(_components.Button, {
    type: "input"
  }, "Input"), _react.default.createElement(_components.Button, {
    type: "outline-primary"
  }, "Outline Primary"), _react.default.createElement(_components.Button, {
    type: "link"
  }, "Link"), _react.default.createElement(_components.Button, {
    type: "link-muted"
  }, "Link Muted"), _react.default.createElement(_components.Button, {
    type: "danger"
  }, "Danger")), _react.default.createElement("p", {
    className: "site-copy u-m-t"
  }, _react.default.createElement("code", null, "type=\"outline-reversed\"")), _react.default.createElement("div", {
    className: "u-p-a u-bg-primary"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    type: "outline-reversed"
  }, "Outline Reversed")))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Button Sizes"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Large Button"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "size=\"large\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    size: "large"
  }, "Large"), _react.default.createElement(_components.Button, {
    size: "large"
  }, _react.default.createElement(_components.Icon, {
    icon: "cog"
  }), "\xA0Large"), _react.default.createElement(_components.Button, {
    size: "large",
    iconOnly: true
  }, _react.default.createElement(_components.Icon, {
    icon: "cog"
  })))), _react.default.createElement("div", null, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Small Button"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "size=\"small\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    size: "small"
  }, "Small"), _react.default.createElement(_components.Button, {
    size: "small"
  }, _react.default.createElement(_components.Icon, {
    icon: "cog"
  }), "\xA0Small"), _react.default.createElement(_components.Button, {
    size: "small",
    iconOnly: true
  }, _react.default.createElement(_components.Icon, {
    icon: "cog"
  }))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Button Modifiers"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Block Buttons"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Include ", _react.default.createElement("code", null, "block"), " property to create a block level button."), _react.default.createElement(_components.Button, {
    block: true
  }, "Block Button")), _react.default.createElement("div", null, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Icon-Only Buttons"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Include ", _react.default.createElement("code", null, "iconOnly"), " property when creating a button with an icon but no text. This modifier adjusts the padding to give a more square appearance."), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    iconOnly: true
  }, _react.default.createElement(_components.Icon, {
    icon: "chat"
  })), _react.default.createElement(_components.Button, {
    type: "primary",
    iconOnly: true
  }, _react.default.createElement(_components.Icon, {
    icon: "email"
  })), _react.default.createElement(_components.Button, {
    type: "secondary",
    iconOnly: true
  }, _react.default.createElement(_components.Icon, {
    icon: "cog"
  })), _react.default.createElement(_components.Button, {
    type: "outline-primary",
    iconOnly: true
  }, _react.default.createElement(_components.Icon, {
    icon: "star"
  }))), _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Avatar-Only Buttons"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Include ", _react.default.createElement("code", null, "avatarOnly"), " property when creating a button with an avatar and without any text or icon. This modifier adjusts the height and the width to give a circular appearance to the button."), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    avatarOnly: true
  }, _react.default.createElement(_components.Avatar, {
    name: "Ben Bruning",
    size: "small",
    type: "member"
  })), _react.default.createElement(_components.Button, {
    avatarOnly: true
  }, _react.default.createElement(_components.Avatar, {
    name: "Ben Bruning",
    size: "large",
    type: "member"
  })), _react.default.createElement(_components.Button, {
    avatarOnly: true
  }, _react.default.createElement(_components.Avatar, {
    name: "Ben Bruning",
    size: "xlarge",
    type: "member"
  }))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Button States"), _react.default.createElement("div", {
    className: "u-m-b"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, null, "Default"), _react.default.createElement(_components.Button, {
    active: true
  }, "Default Active"), _react.default.createElement(_components.Button, {
    disabled: true
  }, "Default Disabled"))), _react.default.createElement("div", {
    className: "u-m-b"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    type: "primary"
  }, "Primary"), _react.default.createElement(_components.Button, {
    type: "primary",
    active: true
  }, "Primary Active"), _react.default.createElement(_components.Button, {
    type: "primary",
    disabled: true
  }, "Primary Disabled"))), _react.default.createElement("div", {
    className: "u-m-b"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    type: "secondary"
  }, "Secondary"), _react.default.createElement(_components.Button, {
    type: "secondary",
    active: true
  }, "Secondary Active"), _react.default.createElement(_components.Button, {
    type: "secondary",
    disabled: true
  }, "Secondary Disabled"))), _react.default.createElement("div", {
    className: "u-m-b"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    type: "outline-primary"
  }, "Outline Primary"), _react.default.createElement(_components.Button, {
    type: "outline-primary",
    active: true
  }, "Outline Primary Active"), _react.default.createElement(_components.Button, {
    type: "outline-primary",
    disabled: true
  }, "Outline Primary Disabled")))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Button Badges"), _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Badges Inside of Buttons"), _react.default.createElement("p", null, "Include a span with ", _react.default.createElement("code", null, "button__badge"), " class."), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, null, "Default \xA0", _react.default.createElement("span", {
    className: "button__badge"
  }, "12")), _react.default.createElement(_components.Button, {
    type: "primary"
  }, "Primary \xA0", _react.default.createElement("span", {
    className: "button__badge"
  }, "12")), _react.default.createElement(_components.Button, {
    type: "secondary"
  }, "Secondary \xA0", _react.default.createElement("span", {
    className: "button__badge"
  }, "2")), _react.default.createElement(_components.Button, {
    type: "outline-primary"
  }, "Outline Primary \xA0", _react.default.createElement("span", {
    className: "button__badge"
  }, "12")), _react.default.createElement(_components.Button, {
    type: "link"
  }, "Link \xA0", _react.default.createElement("span", {
    className: "button__badge"
  }, "12")), _react.default.createElement(_components.Button, {
    type: "danger"
  }, "Danger \xA0", _react.default.createElement("span", {
    className: "button__badge"
  }, "12")))), _react.default.createElement("div", {
    className: "u-p-a u-bg-primary"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Button, {
    type: "outline-reversed"
  }, "Outline Reversed \xA0", _react.default.createElement("span", {
    className: "button__badge"
  }, "12"))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Button Ellipsis"), _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Long Text Inside of Buttons"), _react.default.createElement("p", null, "Wrap long button text in ", _react.default.createElement("code", null, "u-text-overflow"), " utility class in order to allow ellipsis."), _react.default.createElement("div", {
    className: "u-m-b"
  }, _react.default.createElement(_components.Button, {
    className: "u-m-b-small"
  }, _react.default.createElement("span", {
    className: "u-text-overflow"
  }, "Button With Really Long Name")), _react.default.createElement("br", null), _react.default.createElement(_components.Button, null, _react.default.createElement(_components.Icon, {
    icon: "lock"
  }), "\xA0", _react.default.createElement("span", {
    className: "u-text-overflow"
  }, "Button With Really Long Name and Icon")))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _ButtonExample.default,
    scope: ButtonScope,
    component: _components.Button,
    propDescriptions: ButtonDocs
  })));
};

_reactDom.default.render(_react.default.createElement(ButtonApp, null), document.getElementById('root'));