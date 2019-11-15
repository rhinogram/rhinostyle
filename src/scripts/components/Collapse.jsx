import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Collapse = (props) => {
  const { isOpen, className, children } = props;

  const classes = cx('collapse', className, {
    'collapse--open': isOpen,
    'collapse--closed': !isOpen,
  });

  return (
    <div className={classes}>
      {isOpen && (
        <div className="collapse__children-wrapper">
          {children}
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Collapse.defaultProps = {
  isOpen: true,
};

export default Collapse;
