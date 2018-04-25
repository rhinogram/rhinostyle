import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Avatar, Icon } from '../components';

const BucketHeader = (props) => {
  const { avatar, className, icon, iconClassName, title } = props;
  const classes = cx('bucket__header', className);
  const iconClasses = cx('bucket__header__title__icon', iconClassName);

  return (
    <div className={classes}>
      <div className="bucket__header__title">
        {avatar ? (<Avatar size="small" name={props.avatar.name} type={props.avatar.type} image={props.avatar.image} className="bucket__header__title__avatar" />) : null}
        {icon ? (<Icon icon={icon} className={iconClasses} />) : null}
        {title && title}
      </div>
      {props.children}
    </div>
  );
};

BucketHeader.displayName = 'RhinoBucketHeader';

BucketHeader.propTypes = {
  avatar: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['default', 'member']),
  }),
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  title: PropTypes.string,
};

export default BucketHeader;
