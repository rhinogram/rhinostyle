import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Table = (props) => {
  const { className, bordered, condensed, hover, striped } = props;
  const classes = cx('table', className, {
    'table--bordered': bordered,
    'table--condensed': condensed,
    'table--hover': hover,
    'table--striped': striped,
  });

  return (
    <div className="responsive-table">
      <table className={classes}>
        {props.children}
      </table>
    </div>
  );
};

Table.displayName = 'RhinoTable';

Table.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  condensed: PropTypes.bool,
  hover: PropTypes.bool,
  striped: PropTypes.bool,
};

export default Table;
