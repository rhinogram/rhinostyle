import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';

const ReactTableFixedColumns = withFixedColumns(ReactTable);
const SmartTable = (props) => {
  const { striped, highlight, sortable, sticky, ...opts } = props;
  const classes = cx('', {
    '-highlight': highlight,
    '-striped': striped,
    '-sorting': sortable,
    '-sticky': sticky,
  });
  return (
    <ReactTableFixedColumns
      className={classes}
      {...opts}
    />
  );
};
SmartTable.propTypes = {
  showPagination: PropTypes.bool,
  data: PropTypes.array.isRequired,
  columns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  minRows: PropTypes.number,
  sortable: PropTypes.bool,
  sticky: PropTypes.bool,
  expanded: PropTypes.object,
  highlight: PropTypes.bool,
  striped: PropTypes.bool,
  SubComponent: PropTypes.func,

};
export default SmartTable;
