import React    from 'react';
import cx       from 'classnames';
import { Icon } from '../components';

const BucketHeader = (props) => {
  const { className, icon, iconClassName, title } = props;
  const classes = cx('bucket__header', className);
  const iconClasses = cx('u-m-r-sm', iconClassName);

  return (
    <div className={classes}>
      <div className="bucket__header__title">
        {icon ? (<Icon icon={icon} className={iconClasses} />) : null}
        {title ? (<span>{title}</span>) : null}
      </div>
      {props.children}
    </div>
  );
};

BucketHeader.displayName = 'RhinoBucketHeader';

BucketHeader.propTypes = {
  children:      React.PropTypes.node,
  className:     React.PropTypes.string,
  icon:          React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  title:         React.PropTypes.string,
};

export default BucketHeader;
