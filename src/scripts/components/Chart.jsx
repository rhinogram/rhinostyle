
import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Icon } from '../components';
import Tooltip from './Tooltip';


function renderBar(opts) {
  return (
    <div className="chart-wrapper">
      <div className="chart-header u-flex">
        <div className="chart-title">
          {opts.title}
          <Tooltip content={opts.info}>
            <Icon className="info-icon" icon="info-circle" />
          </Tooltip>
        </div>
        <div className={`chart-subtitle u-flex u-flex-align-items-baseline ${opts.header.color}`}>
          {opts.header.text}
          <div className="subtitle-info">
            {opts.subHeader.text}
          </div>
        </div>
      </div>
      <Bar {...opts} />
    </div>
  );
}

function renderLine(opts) {
  return (
    <div className="chart-wrapper">
      <div className="chart-header u-flex">
        <div className="chart-title">
          {opts.title}
          <Tooltip content={opts.info}>
            <Icon className="info-icon" icon="info-circle" />
          </Tooltip>
        </div>
        <div className={`chart-subtitle u-flex u-flex-align-items-baseline ${opts.header.color}`}>
          {opts.header.text}
          <div className="subtitle-info">
            {opts.subHeader.text}
          </div>
        </div>
      </div>
      <Line {...opts} />
    </div>
  );
}

function renderDoughnut(opts) {
  return (
    <div className="chart-wrapper">
      <div className="chart-header u-flex">
        <div className="chart-title">
          {opts.title}
          <Tooltip content={opts.info}>
            <Icon className="info-icon" icon="info-circle" />
          </Tooltip>
        </div>
        <div className={`chart-subtitle u-flex u-flex-align-items-baseline ${opts.header.color}`}>
          {opts.header.text}
          <div className="subtitle-info">
            {opts.subHeader.text}
          </div>
        </div>
      </div>
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
  title: PropTypes.string,
  header: PropTypes.object,
  subHeader: PropTypes.object,
  info: PropTypes.string,
};

export default Chart;
