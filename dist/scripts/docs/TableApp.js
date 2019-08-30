"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _TableExample = _interopRequireDefault(require("./examples/Table.example.txt"));

var _SmartTableExample = _interopRequireDefault(require("./examples/SmartTable.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var TableDocs = {};
var TableScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Button: _components.Button,
  Table: _components.Table,
  SmartTable: _components.SmartTable,
  Icon: _components.Icon
};
var SmartTableDocs = {
  showPagination: 'Enable the pagination option',
  data: 'Array of objects to be displayed in table',
  columns: 'Headers and Columns to be displayed in table',
  minRows: 'Number of miniminum rows to be displayed',
  sortable: 'Enable the sorting',
  expanded: 'Rows to be expanded',
  highlight: 'Highlight row on mouse over',
  striped: 'Show table rows in striped manner',
  sticky: 'Apply css for sticky column',
  SubComponent: 'Show details on expanding the row'
};

var LabelApp = function LabelApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Table Types"), _react.default.createElement("div", {
    className: "site-example-tables"
  }, _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("p", {
    className: "site-copy"
  }, "Our basic table. Does not require any additional properties.")), _react.default.createElement(_components.Table, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "#"), _react.default.createElement("th", null, "First Name"), _react.default.createElement("th", null, "Last Name"), _react.default.createElement("th", null, "Username"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "1"), _react.default.createElement("td", null, "Ben"), _react.default.createElement("td", null, "Bruning"), _react.default.createElement("td", null, "@bruning")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "2"), _react.default.createElement("td", null, "Blake"), _react.default.createElement("td", null, "Guilloud"), _react.default.createElement("td", null, "@guilloud")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", null, "Foster"), _react.default.createElement("td", null, "@foster")))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Table Modifiers"), _react.default.createElement("div", {
    className: "site-example-tables"
  }, _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Bordered Table"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "bordered"), " property to create a bordered table.")), _react.default.createElement(_components.Table, {
    bordered: true
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "#"), _react.default.createElement("th", null, "First Name"), _react.default.createElement("th", null, "Last Name"), _react.default.createElement("th", null, "Username"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "1"), _react.default.createElement("td", null, "Ben"), _react.default.createElement("td", null, "Bruning"), _react.default.createElement("td", null, "@bruning")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "2"), _react.default.createElement("td", null, "Blake"), _react.default.createElement("td", null, "Guilloud"), _react.default.createElement("td", null, "@guilloud")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", null, "Foster"), _react.default.createElement("td", null, "@foster")))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Condensed Table"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "condensed"), " property to create a table with condensed spacing.")), _react.default.createElement(_components.Table, {
    condensed: true
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "#"), _react.default.createElement("th", null, "First Name"), _react.default.createElement("th", null, "Last Name"), _react.default.createElement("th", null, "Username"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "1"), _react.default.createElement("td", null, "Ben"), _react.default.createElement("td", null, "Bruning"), _react.default.createElement("td", null, "@bruning")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "2"), _react.default.createElement("td", null, "Blake"), _react.default.createElement("td", null, "Guilloud"), _react.default.createElement("td", null, "@guilloud")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", null, "Foster"), _react.default.createElement("td", null, "@foster")))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Hover Table"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "hover"), " property to create a table with hover state.")), _react.default.createElement(_components.Table, {
    hover: true
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "#"), _react.default.createElement("th", null, "First Name"), _react.default.createElement("th", null, "Last Name"), _react.default.createElement("th", null, "Username"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "1"), _react.default.createElement("td", null, "Ben"), _react.default.createElement("td", null, "Bruning"), _react.default.createElement("td", null, "@bruning")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "2"), _react.default.createElement("td", null, "Blake"), _react.default.createElement("td", null, "Guilloud"), _react.default.createElement("td", null, "@guilloud")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", null, "Foster"), _react.default.createElement("td", null, "@foster")))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Striped Table"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "striped"), " property to create a striped table.")), _react.default.createElement(_components.Table, {
    striped: true
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "#"), _react.default.createElement("th", null, "First Name"), _react.default.createElement("th", null, "Last Name"), _react.default.createElement("th", null, "Username"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "1"), _react.default.createElement("td", null, "Ben"), _react.default.createElement("td", null, "Bruning"), _react.default.createElement("td", null, "@bruning")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "2"), _react.default.createElement("td", null, "Blake"), _react.default.createElement("td", null, "Guilloud"), _react.default.createElement("td", null, "@guilloud")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", null, "Foster"), _react.default.createElement("td", null, "@foster")))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Table Row & Table Data Modifiers"), _react.default.createElement("div", {
    className: "site-example-tables"
  }, _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Table Data"), _react.default.createElement("p", {
    className: "site-copy"
  }, "To change the background color, add", _react.default.createElement("code", null, ".table__data--active | .table__data--danger | .table__data--success | .table__data--warning"), "className to the ", _react.default.createElement("code", null, "<td>"), " element.")), _react.default.createElement(_components.Table, null, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "table__data--active"
  }, "1"), _react.default.createElement("td", null, "Ben"), _react.default.createElement("td", null, "Bruning"), _react.default.createElement("td", null, "@bruning")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "2"), _react.default.createElement("td", {
    className: "table__data--danger"
  }, "Blake"), _react.default.createElement("td", null, "Guilloud"), _react.default.createElement("td", null, "@guilloud")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", {
    className: "table__data--success"
  }, "Foster"), _react.default.createElement("td", null, "@foster")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "4"), _react.default.createElement("td", null, "Craig"), _react.default.createElement("td", null, "Anthony"), _react.default.createElement("td", {
    className: "table__data--warning"
  }, "@anthony")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "5"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", null, "Foster"), _react.default.createElement("td", null, "@foster")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "6"), _react.default.createElement("td", null, "Paul"), _react.default.createElement("td", null, "Griffin"), _react.default.createElement("td", null, "@griffin")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "7"), _react.default.createElement("td", null, "Terry"), _react.default.createElement("td", null, "Kennair"), _react.default.createElement("td", null, "@kennair")))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Table Row"), _react.default.createElement("p", {
    className: "site-copy"
  }, "To change the background color, add", _react.default.createElement("code", null, ".table__row--active | .table__row--danger | .table__row--success | .table__row--warning"), "className to the ", _react.default.createElement("code", null, "<tr>"), " element.")), _react.default.createElement(_components.Table, null, _react.default.createElement("tbody", null, _react.default.createElement("tr", {
    className: "table__row--active"
  }, _react.default.createElement("td", null, "1"), _react.default.createElement("td", null, "Ben"), _react.default.createElement("td", null, "Bruning"), _react.default.createElement("td", null, "@bruning")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "2"), _react.default.createElement("td", null, "Blake"), _react.default.createElement("td", null, "Guilloud"), _react.default.createElement("td", null, "@guilloud")), _react.default.createElement("tr", {
    className: "table__row--danger"
  }, _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", null, "Foster"), _react.default.createElement("td", null, "@foster")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "4"), _react.default.createElement("td", null, "Craig"), _react.default.createElement("td", null, "Anthony"), _react.default.createElement("td", null, "@anthony")), _react.default.createElement("tr", {
    className: "table__row--success"
  }, _react.default.createElement("td", null, "5"), _react.default.createElement("td", null, "Keaton"), _react.default.createElement("td", null, "Foster"), _react.default.createElement("td", null, "@foster")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "6"), _react.default.createElement("td", null, "Paul"), _react.default.createElement("td", null, "Griffin"), _react.default.createElement("td", null, "@griffin")), _react.default.createElement("tr", {
    className: "table__row--warning"
  }, _react.default.createElement("td", null, "7"), _react.default.createElement("td", null, "Terry"), _react.default.createElement("td", null, "Kennair"), _react.default.createElement("td", null, "@kennair")))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("p", {
    className: "site-copy"
  }, "To change the vertical alignment add ", _react.default.createElement("code", null, ".table__row--valign-middle"), "className to the ", _react.default.createElement("code", null, "<tr>"), "element. By default, table rows and data are vertically aligned to the top.")), _react.default.createElement(_components.Table, null, _react.default.createElement("tbody", null, _react.default.createElement("tr", {
    className: "table__row--valign-middle"
  }, _react.default.createElement("td", null, "1"), _react.default.createElement("td", null, "Ben"), _react.default.createElement("td", null, "Bruning"), _react.default.createElement("td", null, _react.default.createElement(_components.Button, null, "Delete"))), _react.default.createElement("tr", {
    className: "table__row--valign-middle"
  }, _react.default.createElement("td", null, "2"), _react.default.createElement("td", null, "Blake"), _react.default.createElement("td", null, "Guilloud"), _react.default.createElement("td", null, _react.default.createElement(_components.Button, null, "Delete"))))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _TableExample.default,
    scope: TableScope,
    component: _components.Table,
    propDescriptions: TableDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "React Table"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Column Casing"), _react.default.createElement("p", {
    className: "site-copy"
  }, "To change the casing, add ", _react.default.createElement("code", null, "column--lowercase | column--capitalize | column--uppercase "), "className to the column/s. By default, there is no casing on the columns.")), _react.default.createElement(_components2.Live, {
    code: _SmartTableExample.default,
    scope: TableScope,
    component: _components.SmartTable,
    propDescriptions: SmartTableDocs
  })));
};

_reactDom.default.render(_react.default.createElement(LabelApp, null), document.getElementById('root'));