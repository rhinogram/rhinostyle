import PropTypes from 'prop-types';
import React from 'react';
import {
  Icon,
} from '.';

class SmartTableHeader extends React.Component {
  state = {
    sortKey: this.props.sortKey,
    headers: this.props.headers,
  };
  static activeCaretClassName = 'u-text-body';

  headerHandler = (selectedHeader) => {
    const { headers } = this.state;
    const currentDirection = this.state.headers[selectedHeader].direction;
    const lastActiveHeader = Object.keys(headers).find(header => (headers[header].default === true));

    Object.keys(headers).forEach((key) => {
      headers[key].direction = -1;
      headers[key].default = false;
    });

    headers[selectedHeader].default = true;
    if (lastActiveHeader === selectedHeader) {
      headers[selectedHeader].direction = currentDirection * -1;
    } else {
      headers[selectedHeader].direction = 1;
    }
    return headers;
  };

  customHeaderSort = (sortKey) => {
    const headers = this.headerHandler(sortKey);
    this.setState({ sortKey, headers });
  }

  render() {
    const { sortKey, headers } = this.state;
    const { activeCaretClassName } = SmartTableHeader;
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
  headerName: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  headers: PropTypes.object.isRequired,
};

export default SmartTableHeader;
