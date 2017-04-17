import React from 'react';
import PropTypes from 'prop-types';

const CoverFooter = (props) => {
  const { children } = props;

  return (
    <div className="cover__footer">
      <div className="cover__footer__container">
        {children}
      </div>
    </div>
  );
};

CoverFooter.displayName = 'RhinoCoverFooter';

CoverFooter.propTypes = {
  children: PropTypes.node,
};

export default CoverFooter;
