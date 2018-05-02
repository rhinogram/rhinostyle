import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, Icon } from '../components';

const Close = (props) => {
  const { className, onClick, ...opts } = props;
  const classes = cx('close', className);

  return (
    <Button reset className={classes} onClick={onClick} {...opts} aria-label="Close">
      <Icon icon="close" />
    </Button>
  );
};

Close.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Close;
