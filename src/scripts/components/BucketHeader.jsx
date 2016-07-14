import React    from 'react';
import cx       from 'classnames';
import { Icon } from '../components';

const BucketHeader = (props) => {
  const { className, icon, title } = props;
  const classes = cx('bucket__header', className);

  return (
    <div className={classes}>
      <div className="bucket__header__title">
        {icon ? (<Icon icon={icon} className="u-m-r-sm" />) : null}
        {title ? (<span>{title}</span>) : null}
      </div>
      {props.children}
    </div>
  );
};

BucketHeader.displayName = 'RhinoBucketHeader';

BucketHeader.propTypes = {
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
  icon:      React.PropTypes.string,
  title:     React.PropTypes.string,
};

export default BucketHeader;
