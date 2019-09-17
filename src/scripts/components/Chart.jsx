
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import { Icon } from '.';
import Tooltip from './Tooltip';

class Chart extends React.Component {
  legendCallback = (chart) => {
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

  renderChart = (properties) => {
    const { type } = properties;
    if (type.toLowerCase() === 'bar') {
      return (<Bar {...properties} />);
    } else if (type.toLowerCase() === 'line') {
      return (<Line {...properties} />);
    }
    /* eslint-disable no-param-reassign */
    properties.options.legendCallback = this.legendCallback;
    return (
      <div className="row">
        <div className="column-8@medium column-12@xsmall">
          <Doughnut ref={(ref) => { this.chartInstance = ref && ref.chartInstance; }} {...properties} />
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

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    const hasData = this.props.data && Object.keys(this.props.data).length && this.props.data.datasets && this.props.data.datasets.length;
    return (
      <div className="chart">
        <div className="chart__header">
          <div className="header__title">
            {this.props.title}
            {this.props.info && (
              <Tooltip content={this.props.info}>
                <Icon className="header__icon--info" icon="info-circle" />
              </Tooltip>
            )}
          </div>
          {hasData && this.props.header && this.props.header.text && (
            <div className={`header__subtitle ${this.props.header.color}`}>
              {this.props.header.text}
              {this.props.subHeader && (
                <span className="subtitle--muted">
                  {this.props.subHeader}
                </span>
              )}
            </div>
          )}
        </div>
        {hasData ? this.renderChart(this.props) : this.renderNoData()}
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
