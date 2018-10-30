
import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Icon } from '../components';


function renderBar(opts) {
  return (
    <div className="chart-wrapper">
      <div className="chart-header u-flex">
        <div className="chart-title">
          {opts.header.text}
          <Icon className="info-icon" icon="info-circle" />
        </div>
        <div className={`chart-subtitle u-flex u-flex-align-items-baseline ${opts.header.color}`}>
        Avg. 50mins
          <div className="subtitle-info">
            (2 avg.)
          </div>
        </div>
      </div>
      <Bar {...opts} />
    </div>
  );
}

function renderLine(opts) {
  return (
    <div className="box">
      <Line {...opts} />
    </div>
  );
}

function renderDoughnut(opts) {
  return (
    <div className="box">
      <Doughnut {...opts} />
    </div>
  );
}
const Chart = (props) => {
  const { ...opts } = props;
  switch (opts.type.toLowerCase()) {
    case 'bar':
      return renderBar(opts);
    case 'doughnut':
      return renderDoughnut(opts);
    case 'line':
      return renderLine(opts);
    default:
      return renderBar(opts);
  }
};


Chart.propTypes = {
  data: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string.isRequired,
  legend: PropTypes.object,
  options: PropTypes.object,
};

export default Chart;
