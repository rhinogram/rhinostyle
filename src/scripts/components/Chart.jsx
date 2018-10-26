
import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Doughnut } from 'react-chartjs-2';


function renderBar(opts) {
  return (
    <div className="box">
      <Bar {...opts} />
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
    default:
      return renderBar(opts);
  }
};


Chart.propTypes = {
  data: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  legend: PropTypes.object,
  options: PropTypes.object,
};

export default Chart;
