import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import Icon from './Icon';

const Close = (props) => {
  const { className, onClick, ...opts } = props;
  const classes = cx('close', className);

  return (
    <Button
      reset
      className={classes}
      onClick={onClick}
      title="Close"
      {...opts}
    >
      <Icon icon="close" />
    </Button>
  );
};

Close.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Close;
