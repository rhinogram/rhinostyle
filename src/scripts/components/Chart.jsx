
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import { Icon } from '.';
import Tooltip from './Tooltip';

class Chart extends React.Component {
  state = {
    isChartData: false,
  };

  legendCallback = function(chart) {  // eslint-disable-line
    const { labels } = chart.data;
    const { data } = chart.data.datasets[0];
    const { backgroundColor } = chart.data.datasets[0];
    const text = [];
    text.push('<ul>');
    for (let i = 0; i < labels.length; i++) {
      text.push('<li>');
      text.push(`<div style="border-color: ${backgroundColor[i]}"><span class="list-title" /> <span>${labels[i]}</span><span>${data[i]}</span></div>`);
      text.push('</li>');
    }
    text.push('</ul>');
    return text.join('');
  };

  componentWillMount() {
    const { ...opts } = this.props;
    if (typeof opts.data === 'undefined' || opts.data === null || Object.keys(opts.data).length === 0 || Object.keys(opts.data.datasets[0].data).length === 0) {
      this.setState({ isChartData: true });
    }
  }

  componentDidMount() {
    this.forceUpdate();
  }

  renderChart = (opts) => {
    switch (opts.type.toLowerCase()) {
      case 'bar':
        return (<Bar {...opts} />);
      case 'doughnut':
        opts.options.legendCallback = this.legendCallback; // eslint-disable-line
        return (
          <div className="row">
            <div className="column-8@medium column-12@xsmall">
              <Doughnut ref={(ref) => { this.chartInstance = ref && ref.chartInstance; }} {...opts} />
            </div>
            <div className="column-4@medium column-12@xsmall chart-doughnut__info">
              {this.chartInstance && ReactHtmlParser(this.chartInstance.generateLegend())}
            </div>
          </div>
        );
      case 'line':
        return (<Line {...opts} />);
      default:
        return (<Bar {...opts} />);
    }
  };

  renderNoData = () => (
    <div className="chart__without-data">
      Sorry! There&apos;s nothing to show.
      <p>
        Once data is available for this section, it will appear here.
      </p>
    </div>
  );

  render() {
    const { ...opts } = this.props;
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
          {!this.state.isChartData && opts.header && opts.header.text && (
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
        {this.state.isChartData ? this.renderNoData() : this.renderChart(opts)}
      </div>
    );
  }
}

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
