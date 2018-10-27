import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Chart } from '../components';
import { Live } from './components';
import BarChartExample from './examples/Bar.Chart.example.txt';
import DoughnutChartExample from './examples/Doughnut.Chart.example.txt';
import BarLineChartExample from './examples/BarLineChart.example.txt';
import AreaLineMixChartExample from './examples/AreaLineMixChart.example.txt';

const BarDocs = {
  data: 'Display an add-on on the input, as a string <code>{\n' +
    "            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n" +
    '            datasets: [\n' +
    '              {\n' +
    "                label: 'Rhinogram Bar Chart',\n" +
    "                backgroundColor: 'rgba(210,235,248,0.5)',\n" +
    "                borderColor: 'rgba(36,133,207,1)',\n" +
    '                borderWidth: 1,\n' +
    "                hoverBackgroundColor: 'rgba(255,99,132,0.4)',\n" +
    "                hoverBorderColor: 'rgba(255,99,132,1)',\n" +
    '                data: [65, 59, 80, 81, 56, 55, 40]\n' +
    '              }\n' +
    '            ]\n' +
    '          }</code>', // eslint-disable-line single-quotes
  width: 'Adjust the settings of bar width <code>600</code>', // eslint-disable-line single-quotes
  height: 'Adjust the settings of bar height <code>300</code>', // eslint-disable-line single-quotes
  type: "<code>'bar'</code>",
};
const ChartScope  = {
  React,
  ReactDOM,
  Chart,
};

const ChartApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Bar Chart</h3>
      <p className="site-text-lead">A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</p>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Bar Chart Playground</h3>

      {<Live
        code={BarChartExample}
        scope={ChartScope}
        component={Chart}
        propDescriptions={BarDocs}
      />}
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Doughnut Chart</h3>
      <p className="site-text-lead">Doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.</p>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Doughtnut Chart Playground</h3>
      {<Live
        code={DoughnutChartExample}
        scope={ChartScope}
        component={Chart}
        propDescriptions={BarDocs}
      />}
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Mix Bar-Line Chart</h3>
      <p className="site-text-lead">Mix bar-line charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.</p>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Mix Bar Line Chart Playground</h3>
      {<Live
        code={BarLineChartExample}
        scope={ChartScope}
        component={Chart}
        propDescriptions={BarDocs}
      />}
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Mix Line Chart</h3>
      <p className="site-text-lead">Mix Line charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.</p>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Mix Bar Line Chart Playground</h3>
      {<Live
        code={AreaLineMixChartExample}
        scope={ChartScope}
        component={Chart}
        propDescriptions={BarDocs}
      />}
    </section>
  </Fragment>
);

ReactDOM.render(<ChartApp />, document.getElementById('root'));
