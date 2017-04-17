import React from 'react';

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
  children: React.PropTypes.node,
};

export default CoverFooter;
