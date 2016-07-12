import React from 'react';
import cx    from 'classnames';

const Table = (props) => {
  const { className, bordered, condensed, hover, striped } = props;
  const classes = cx('table', className, {
    'table--bordered':  bordered,
    'table--condensed': condensed,
    'table--hover':     hover,
    'table--striped':   striped,
  });

  return (
    <table className={classes}>
      {props.children}
    </table>
  );
};

Table.displayName = 'RhinoTable';

Table.propTypes = {
  bordered:  React.PropTypes.bool,
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
  condensed: React.PropTypes.bool,
  hover:     React.PropTypes.bool,
  striped:   React.PropTypes.bool,
};

Table.defaultProps = {
  bordered:  false,
  condensed: false,
  hover:     false,
  striped:   false,
};

export default Table;
