import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactTable from 'react-table';

const SmartTable = (props) => {
  const { striped, highlight, sortable, ...opts } = props;
  const classes = cx('', {
    '-highlight': highlight,
    '-striped': striped,
    '-sorting': sortable,
  });
  return (
    <div className="autoscroll">
      <ReactTable
        className={classes}
        {...opts}
      />
    </div>
  );
};
SmartTable.propTypes = {
  showPagination: PropTypes.bool,
  data: PropTypes.array.isRequired,
  columns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  minRows: PropTypes.number,
  sortable: PropTypes.bool,
  expanded: PropTypes.object,
  highlight: PropTypes.bool,
  striped: PropTypes.bool,
  SubComponent: PropTypes.func,

};
export default SmartTable;
