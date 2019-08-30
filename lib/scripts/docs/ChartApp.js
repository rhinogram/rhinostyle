"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _BarChartExample = _interopRequireDefault(require("./examples/Bar.Chart.example.txt"));

var _DoughnutChartExample = _interopRequireDefault(require("./examples/Doughnut.Chart.example.txt"));

var _BarLineChartExample = _interopRequireDefault(require("./examples/BarLineChart.example.txt"));

var _AreaLineMixChartExample = _interopRequireDefault(require("./examples/AreaLineMixChart.example.txt"));

var _Label = _interopRequireDefault(require("../components/Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var BarDocs = {
  data: "<code>{\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [\n      {\n       label: 'Rhinogram Bar Chart',\n       backgroundColor: 'rgba(210,235,248,0.5)',\n       borderColor: 'rgba(36,133,207,1)',\n       borderWidth: 1,\n       hoverBackgroundColor: 'rgba(255,99,132,0.4),\n       hoverBorderColor: 'rgba(255,99,132,1),\n       data: [65, 59, 80, 81, 56, 55, 40],\n      }\n    ]\n  }</code>",
  // eslint-disable-line single-quotes
  width: 'Adjust the settings of bar width <code>600</code>',
  // eslint-disable-line single-quotes
  height: 'Adjust the settings of bar height <code>300</code>',
  // eslint-disable-line single-quotes
  type: '<code>\'bar\'</code>',
  legend: "<code>{\n  position: 'right'\n }</code>",
  options: "<code>{\n}</code>",
  title: 'Total Messages',
  header: "<code>{\n    text: '535',\n    color: 'primary' | 'default' | 'accent' | 'danger' | 'secondary',\n  }</code>",
  subHeader: '(250 avg.)',
  info: 'Some tooltip information'
};
var MixLineDocs = {
  data: "<code>{\n     labels: [\"Red\", \"Blue\", \"Yellow\", \"Green\", \"Purple\", \"Orange\"],\n     datasets: [\n     {\n       label: '# of Votes',\n       data: [12, 19, 3, 5, 2, 3],\n       borderWidth: 1,\n       fill: false,\n     },\n     {\n       label: '# of Points',\n       data: [7, 11, 5, 8, 3, 7],\n       borderWidth: 1\n       }\n     ]\n    }</code>",
  // eslint-disable-line single-quotes
  width: 'Adjust the settings of bar width <code>600</code>',
  // eslint-disable-line single-quotes
  height: 'Adjust the settings of bar height <code>300</code>',
  // eslint-disable-line single-quotes
  type: '<code>"line"</code>',
  legend: "<code>{\n    position: 'right'\n  }</code>",
  options: "<code>{\n  scales: {\n    yAxes: [{\n    ticks: {\n      reverse: false\n    }\n   }]\n  }\n}</code>",
  title: 'Total Time',
  header: "<code>{\n    text: '535',\n    color: 'secondary',\n  }</code>",
  subHeader: '(250 avg.)',
  info: 'Some tooltip information'
};
var MixBarDocs = {
  data: "<code>{\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n  datasets: [{\n      label: 'Sales',\n      type:'line',\n      data: [51, 65, 40, 49, 60, 37, 40],\n      fill: false,\n      borderColor: '#EC932F',\n      backgroundColor: '#EC932F',\n      pointBorderColor: '#EC932F',\n      pointBackgroundColor: '#EC932F',\n      pointHoverBackgroundColor: '#EC932F',\n      pointHoverBorderColor: '#EC932F',\n    },{\n      type: 'bar',\n      label: 'Visitor',\n      data: [200, 185, 590, 621, 250, 400, 95],\n      fill: false,\n      backgroundColor: '#71B37C',\n      borderColor: '#71B37C',\n      hoverBackgroundColor: '#71B37C',\n      hoverBorderColor: '#71B37C',\n    }]\n}</code>",
  // eslint-disable-line single-quotes
  width: 'Adjust the settings of bar width <code>600</code>',
  // eslint-disable-line single-quotes
  height: 'Adjust the settings of bar height <code>300</code>',
  // eslint-disable-line single-quotes
  type: '<code>"bar"</code>',
  legend: "<code>{\n  position: 'right'\n}</code>",
  options: "<code>{\n}</code>",
  title: 'Total Count',
  header: "<code>{\n    text: '450',\n    color: 'primary' | 'default' | 'accent' | 'danger' | 'secondary',\n  }</code>",
  subHeader: '(250 Avg.)',
  info: 'Some tooltip information'
};
var DoughnutDocs = {
  data: "<code>\n  {\n    labels: [],\n    datasets: [{\n      data: [],\n      cutoutPercentage: 70,\n      backgroundColor: ['#1918ff', '#36A2EB', '#ff2b0e'],\n      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],\n    }],\n  }",
  width: 300,
  height: 300,
  type: '<code>"doughnut"</code>',
  options: "<code>{\n  cutoutPercentage: 80,\n}</code>",
  legend: "<code>{\n  position: 'right',\n}</code>",
  title: 'Total Fruits',
  header: "<code>{\n    text: '450',\n    color: 'primary' | 'default' | 'accent' | 'danger' | 'secondary',\n  }</code>",
  subHeader: '(50% healthy.)',
  info: 'Some tooltip information'
};
var ChartScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Chart: _components.Chart
};

var ChartApp = function ChartApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Charts ", _react.default.createElement(_Label.default, {
    className: "u-m-l-small",
    type: "accent",
    label: "third party"
  })), _react.default.createElement("p", {
    className: "site-copy"
  }, "We are using", _react.default.createElement("a", {
    href: "https://www.chartjs.org/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " Chart.js"), ". We have wrapped it within our own to provide sensible defaults for our application. Refer to that repos documentation about everything else available, but be aware we only include a subset of styles to meet our needs, instead of including and overriding the entire stylesheet provided.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Bar Chart"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Bar Chart Playground"), _react.default.createElement(_components2.Live, {
    code: _BarChartExample.default,
    scope: ChartScope,
    component: _components.Chart,
    propDescriptions: BarDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Doughnut Chart"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "Doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Doughtnut Chart Playground"), _react.default.createElement(_components2.Live, {
    code: _DoughnutChartExample.default,
    scope: ChartScope,
    component: _components.Chart,
    propDescriptions: DoughnutDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Mix Bar-Line Chart"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "Mix bar-line charts are probably the most commonly used charts.  It is sometimes used to show trend data, and the comparison of multiple data sets side by side.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Mix Bar Line Chart Playground"), _react.default.createElement(_components2.Live, {
    code: _BarLineChartExample.default,
    scope: ChartScope,
    component: _components.Chart,
    propDescriptions: MixBarDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Mix Line Chart"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "Mix Line charts are probably the most commonly used charts.  It is sometimes used to show trend data, and the comparison of multiple data sets side by side.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Mix Line Chart Playground"), _react.default.createElement(_components2.Live, {
    code: _AreaLineMixChartExample.default,
    scope: ChartScope,
    component: _components.Chart,
    propDescriptions: MixLineDocs
  })));
};

_reactDom.default.render(_react.default.createElement(ChartApp, null), document.getElementById('root'));