"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _BucketExample = _interopRequireDefault(require("./examples/Bucket.example.txt"));

var _BucketHeaderExample = _interopRequireDefault(require("./examples/BucketHeader.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var BucketDocs = {
  type: "<code>oneOf(['default'])</code>" // eslint-disable-line single-quotes

};
var BucketScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Bucket: _components.Bucket,
  BucketBody: _components.BucketBody,
  BucketHeader: _components.BucketHeader,
  Icon: _components.Icon,
  Table: _components.Table
};
var BucketHeaderDocs = {};
var BucketHeaderScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  BucketHeader: _components.BucketHeader,
  Icon: _components.Icon
};

var BucketApp = function BucketApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Buckets"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "Buckets are used to contain and separate portions of content. Buckets are most often constructed using", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "BucketHeader"), " and", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "BucketBody"), " child components.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Bucket"), _react.default.createElement(_components.Bucket, null, _react.default.createElement(_components.BucketHeader, {
    title: "Bucket"
  }), _react.default.createElement(_components.BucketBody, null, "Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros."))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Bucket Playground"), _react.default.createElement(_components2.Live, {
    code: _BucketExample.default,
    scope: BucketScope,
    component: _components.Bucket,
    propDescriptions: BucketDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Bucket Header Playground"), _react.default.createElement(_components2.Live, {
    code: _BucketHeaderExample.default,
    scope: BucketHeaderScope,
    component: _components.BucketHeader,
    propDescriptions: BucketHeaderDocs
  })));
};

_reactDom.default.render(_react.default.createElement(BucketApp, null), document.getElementById('root'));