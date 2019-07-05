import PropTypes from 'prop-types';
import React from 'react';
import {
  Icon,
} from '.';

class SmartTableHeader extends React.Component {
  state = {
    sortKey: this.props.sortKey,
    activeCaretClassName: 'u-text-body',
    headers: this.props.headers,
  };

  headerHandler = (headerClicked) => {
    const { headers } = this.state;
    const oldDirection = this.state.headers[headerClicked].direction;
    const lastActiveHeader = Object.keys(headers).find(header => (headers[header].default === true));

    Object.keys(headers).forEach((key) => {
      headers[key].direction = -1;
      headers[key].default = false;
    });

    headers[headerClicked].default = true;
    if (lastActiveHeader === headerClicked) {
      headers[headerClicked].direction = oldDirection * -1;
    } else {
      headers[headerClicked].direction = 1;
    }
    return headers;
  };

  customHeaderSort = (sortKey) => {
    const headers = this.headerHandler(sortKey);
    this.setState({ sortKey, headers });
  }

  render() {
    const { sortKey, activeCaretClassName, headers } = this.state;
    const caretUpClass = headers[sortKey].default && headers[sortKey].direction === 1 ? activeCaretClassName : ''; // ascending
    const caretDownClass = headers[sortKey].default && headers[sortKey].direction === -1 ? activeCaretClassName : ''; // descending

    return (
      <div className="u-flex u-p-a-small" onClick={() => this.customHeaderSort(sortKey)}>
        {this.props.headerName}
        <span className="u-flex u-flex-direction-column">
          <Icon icon="caret-up" className={caretUpClass} />
          <Icon icon="caret-down" className={caretDownClass} />
        </span>
      </div>
    );
  }
}

SmartTableHeader.propTypes = {
  headerName: PropTypes.string,
  sortKey: PropTypes.string,
  headers: PropTypes.object,
};

export default SmartTableHeader;
