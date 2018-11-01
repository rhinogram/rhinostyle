
import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import { Icon } from '../components';
import Tooltip from './Tooltip';

const renderChart = (opts) => {
  switch (opts.type.toLowerCase()) {
    case 'bar':
      return (<Bar {...opts} />);
    case 'doughnut':
      return (<Doughnut {...opts} />);
    case 'line':
      return (<Line {...opts} />);
    default:
      return (<Bar {...opts} />);
  }
};

const Chart = (props) => {
  const { ...opts } = props;
  return (
    <div className="chart">
      <div className="chart__header u-flex">
        <div className="header__title">
          {opts.title}
          {opts.info && (
            <Tooltip content={opts.info}>
              <Icon className="header__icon--info" icon="info-circle" />
            </Tooltip>
          )}
        </div>
        {opts.header && opts.header.text && (
          <div className={`header__subtitle ${opts.header.color}`}>
            {opts.header.text}
            {opts.subHeader && (
              <span className="subtitle--muted">
                {opts.subHeader}
              </span>
            )}
          </div>
        )}
      </div>
      {renderChart(opts)}
    </div>
  );
};


Chart.propTypes = {
  data: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string.isRequired,
  legend: PropTypes.object,
  options: PropTypes.object,
  title: PropTypes.string.isRequired,
  header: PropTypes.object,
  subHeader: PropTypes.string,
  info: PropTypes.string,
};

export default Chart;
