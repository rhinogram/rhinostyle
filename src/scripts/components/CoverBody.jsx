import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const CoverBody = (props) => {
  const { children, className, contentMiddle, size } = props;

  const containerClasses = cx('cover__body__container', className, {
    'cover__body__container--small': !size || size === 'small',
    'cover__body__container--medium': size === 'medium',
    'cover__body__container--large': size === 'large',
  });

  const bodyClasses = cx('cover__body', {
    'cover__body--content-middle': contentMiddle,
  });

  return (
    <div className={bodyClasses}>
      <div className={containerClasses}>{children}</div>
    </div>
  );
};

CoverBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  contentMiddle: PropTypes.bool,
  size: PropTypes.string,
};

export default CoverBody;
