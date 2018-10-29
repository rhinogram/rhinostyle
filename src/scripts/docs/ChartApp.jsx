import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Chart } from '../components';
import { Live } from './components';
import BarChartExample from './examples/Bar.Chart.example.txt';
import DoughnutChartExample from './examples/Doughnut.Chart.example.txt';
import BarLineChartExample from './examples/BarLineChart.example.txt';
import AreaLineMixChartExample from './examples/AreaLineMixChart.example.txt';
import Label from '../components/Label';

const BarDocs = {
  data: `<code>{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
       label: 'Rhinogram Bar Chart',
       backgroundColor: 'rgba(210,235,248,0.5)',
       borderColor: 'rgba(36,133,207,1)',
       borderWidth: 1,
       hoverBackgroundColor: 'rgba(255,99,132,0.4),
       hoverBorderColor: 'rgba(255,99,132,1),
       data: [65, 59, 80, 81, 56, 55, 40],
      }
    ]
  }</code>`, // eslint-disable-line single-quotes
  width: 'Adjust the settings of bar width <code>600</code>', // eslint-disable-line single-quotes
  height: 'Adjust the settings of bar height <code>300</code>', // eslint-disable-line single-quotes
  type: '<code>\'bar\'</code>',
  legend: `<code>{
  position: 'right'
 }</code>`,
  options: `<code>{
}</code>`,
};

const MixLineDocs = {
  data: `<code>{
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [
     {
       label: '# of Votes',
       data: [12, 19, 3, 5, 2, 3],
       borderWidth: 1,
       fill: false,
     },
     {
       label: '# of Points',
       data: [7, 11, 5, 8, 3, 7],
       borderWidth: 1
       }
     ]
    }</code>`, // eslint-disable-line single-quotes
  width: 'Adjust the settings of bar width <code>600</code>', // eslint-disable-line single-quotes
  height: 'Adjust the settings of bar height <code>300</code>', // eslint-disable-line single-quotes
  type: '<code>"line"</code>',
  legend: `<code>{
    position: 'right'
  }</code>`,
  options: `<code>{
  scales: {
    yAxes: [{
    ticks: {
      reverse: false
    }
   }]
  }
}</code>`,
};

const MixBarDocs = {
  data: `<code>{
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      label: 'Sales',
      type:'line',
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
    },{
      type: 'bar',
      label: 'Visitor',
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: '#71B37C',
      borderColor: '#71B37C',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C',
    }]
}</code>`, // eslint-disable-line single-quotes
  width: 'Adjust the settings of bar width <code>600</code>', // eslint-disable-line single-quotes
  height: 'Adjust the settings of bar height <code>300</code>', // eslint-disable-line single-quotes
  type: '<code>"bar"</code>',
  legend: `<code>{
  position: 'right'
}</code>`,
  options: `<code>{
}</code>`,
};

const DoughnutDocs = {
  data: `<code>
  {
    labels: [],
    datasets: [{
      data: [],
      cutoutPercentage: 70,
      backgroundColor: ['#1918ff', '#36A2EB', '#ff2b0e'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  }`,
  width: 300,
  height: 300,
  type: '<code>"doughnut"</code>',
  options: `<code>{
  cutoutPercentage: 80,
}</code>`,
  legend: `<code>{
  position: 'right',
}</code>`,
};

const ChartScope = {
  React,
  ReactDOM,
  Chart,
};

const ChartApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Charts <Label className="u-m-l-small" type="accent" label="third party" /></h3>
      <p className="site-copy">We are using
        <a
          href="https://www.chartjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >Chart.js
        </a>. We have wrapped it within our own
        to provide sensible defaults for our application. Refer to that repos documentation about everything else
        available, but be aware we only include a subset of styles to meet our needs, instead of including and
        overriding the entire stylesheet provided.
      </p>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Bar Chart</h3>
      <p className="site-text-lead">A bar chart provides a way of showing data values represented as vertical bars. It
        is sometimes used to show trend data, and the comparison of multiple data sets side by side.
      </p>
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
      <p className="site-text-lead">Doughnut charts are probably the most commonly used charts. They are divided into
        segments, the arc of each segment shows the proportional value of each piece of data.
      </p>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Doughtnut Chart Playground</h3>
      {<Live
        code={DoughnutChartExample}
        scope={ChartScope}
        component={Chart}
        propDescriptions={DoughnutDocs}
      />}
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Mix Bar-Line Chart</h3>
      <p className="site-text-lead">Mix bar-line charts are probably the most commonly used charts.  It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</p>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Mix Bar Line Chart Playground</h3>
      {<Live
        code={BarLineChartExample}
        scope={ChartScope}
        component={Chart}
        propDescriptions={MixBarDocs}
      />}
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Mix Line Chart</h3>
      <p className="site-text-lead">Mix Line charts are probably the most commonly used charts.  It is sometimes used to show trend data, and the comparison of multiple data sets side by side..</p>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Mix Line Chart Playground</h3>
      {<Live
        code={AreaLineMixChartExample}
        scope={ChartScope}
        component={Chart}
        propDescriptions={MixLineDocs}
      />}
    </section>
  </Fragment>
);

ReactDOM.render(<ChartApp />, document.getElementById('root'));
