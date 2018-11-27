
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import { Icon } from '.';
import Tooltip from './Tooltip';

class Chart extends React.Component {
  state = {
    hasChartData: false,
  };

  legendCallback = (chart) => {
    if (chart && chart.data) {
      return '';
    }
    const { labels, datasets } = chart.data;
    const [dataset] = datasets;
    const { data, backgroundColor } = dataset;
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

  componentDidMount() {
    const { data } = this.props;
    if (typeof data === 'undefined' || data === null || Object.keys(data).length === 0 || data.datasets.length === 0) {
      this.setState({ hasChartData: true });
    }
    this.forceUpdate();
  }

  renderChart = (Options) => {
    const { type } = Options;
    if (type.toLowerCase() === 'bar') {
      return (<Bar {...Options} />);
    } else if (type.toLowerCase() === 'line') {
      return (<Line {...Options} />);
    }
    /* eslint-disable no-param-reassign */
    Options.options.legendCallback = this.legendCallback;
    return (
      <div className="row">
        <div className="column-8@medium column-12@xsmall">
          <Doughnut ref={(ref) => { this.chartInstance = ref && ref.chartInstance; }} {...Options} />
        </div>
        <div className="column-4@medium column-12@xsmall chart-doughnut__info">
          {this.chartInstance && ReactHtmlParser(this.chartInstance.generateLegend())}
        </div>
      </div>
    );
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
    const { ...Options } = this.props;
    return (
      <div className="chart">
        <div className="chart__header u-flex">
          <div className="header__title">
            {Options.title}
            {Options.info && (
              <Tooltip content={Options.info}>
                <Icon className="header__icon--info" icon="info-circle" />
              </Tooltip>
            )}
          </div>
          {!this.state.hasChartData && Options.header && Options.header.text && (
            <div className={`header__subtitle ${Options.header.color}`}>
              {Options.header.text}
              {Options.subHeader && (
                <span className="subtitle--muted">
                  {Options.subHeader}
                </span>
              )}
            </div>
          )}
        </div>
        {this.state.hasChartData ? this.renderNoData() : this.renderChart(Options)}
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
