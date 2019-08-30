"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keymirror = _interopRequireDefault(require("keymirror"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = {
  ActionTypes: (0, _keymirror.default)({
    ADD_NOTIFICATION: null,
    REMOVE_NOTIFICATION: null
  }),
  PayloadSources: (0, _keymirror.default)({
    VIEW_ACTION: null
  }),
  autodismissTime: 3000
};
var _default = constants;
exports.default = _default;