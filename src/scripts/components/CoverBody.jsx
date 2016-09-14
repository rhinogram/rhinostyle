import React from 'react';
import cx    from 'classnames';

const CoverBody = (props) => {
  const { children, size } = props;

  const containerClasses = cx('cover__body__container', {
    'cover__body__container--sm': size === 'sm',
    'cover__body__container--md': size === 'md',
    'cover__body__container--lg': size === 'lg',
  });

  return (
    <div className="cover__body"><div className={containerClasses}>{children}</div></div>
  )
};

CoverBody.displayName = 'RhinoCoverBody';

CoverBody.propTypes = {
  children:   React.PropTypes.node,
  size:       React.PropTypes.string,
};

export default CoverBody;
