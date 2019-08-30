"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _AvatarExample = _interopRequireDefault(require("./examples/Avatar.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var AvatarDocs = {
  image: 'Source to image',
  name: 'Used for fallback initials',
  size: "<code>oneOf(['small', 'default', 'large', 'xlarge'])</code>",
  // eslint-disable-line single-quotes
  type: "<code>oneOf(['default', 'member'])</code>" // eslint-disable-line single-quotes

};
var AvatarScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Avatar: _components.Avatar,
  Icon: _components.Icon,
  UtilityInlineGrid: _components.UtilityInlineGrid
};

var AvatarApp = function AvatarApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Avatar Types"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Default Avatar"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "type=\"default\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Avatar, {
    image: "//source.unsplash.com/category/people/200x200",
    name: "Ben Bruning"
  }), _react.default.createElement(_components.Avatar, {
    name: "Ben Bruning"
  }), _react.default.createElement(_components.Avatar, null))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Member Avatar"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "type=\"member\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Avatar, {
    image: "//source.unsplash.com/category/people/200x200",
    name: "Ben Bruning",
    type: "member"
  }), _react.default.createElement(_components.Avatar, {
    name: "Ben Bruning",
    type: "member"
  }), _react.default.createElement(_components.Avatar, {
    type: "member"
  })))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Avatar Sizes"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Large Avatar"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "size=\"large\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Avatar, {
    image: "//bit.ly/1UfJ6KF",
    name: "Craig Anthony",
    size: "large",
    type: "member"
  }), _react.default.createElement(_components.Avatar, {
    name: "Craig Anthony",
    size: "large",
    type: "member"
  }), _react.default.createElement(_components.Avatar, {
    type: "member",
    size: "large"
  }))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "XLarge Avatar"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "size=\"xlarge\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Avatar, {
    image: "//bit.ly/1UfJ6KF",
    name: "Craig Anthony",
    size: "xlarge",
    type: "member"
  }), _react.default.createElement(_components.Avatar, {
    name: "Craig Anthony",
    size: "xlarge",
    type: "member"
  }), _react.default.createElement(_components.Avatar, {
    type: "member",
    size: "xlarge"
  }))), _react.default.createElement("div", null, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Small Avatar"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "size=\"small\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Avatar, {
    image: "//bit.ly/1UfJ6KF",
    name: "Craig Anthony",
    size: "small",
    type: "member"
  }), _react.default.createElement(_components.Avatar, {
    name: "Craig Anthony",
    size: "small",
    type: "member"
  }), _react.default.createElement(_components.Avatar, {
    type: "member",
    size: "small"
  })))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _AvatarExample.default,
    scope: AvatarScope,
    component: _components.Avatar,
    propDescriptions: AvatarDocs
  })));
};

_reactDom.default.render(_react.default.createElement(AvatarApp, null), document.getElementById('root'));