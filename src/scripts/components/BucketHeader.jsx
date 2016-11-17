import React    from 'react';
import cx       from 'classnames';
import Avatar   from './Avatar';
import Icon     from './Icon';

const BucketHeader = (props) => {
  const { avatar, className, icon, iconClassName, title } = props;
  const classes = cx('bucket__header', className);
  const iconClasses = cx('bucket__header__title__icon', iconClassName);

  return (
    <div className={classes}>
      <div className="bucket__header__title">
        {avatar ? (<Avatar size="small" name={props.avatar.name} type={props.avatar.type} image={props.avatar.image} className="bucket__header__title__avatar" />) : null}
        {icon ? (<Icon icon={icon} className={iconClasses} />) : null}
        {title ? (<span>{title}</span>) : null}
      </div>
      {props.children}
    </div>
  );
};

BucketHeader.displayName = 'RhinoBucketHeader';

BucketHeader.propTypes = {
  avatar:        React.PropTypes.shape({
    image:        React.PropTypes.string,
    name:         React.PropTypes.string,
    type:         React.PropTypes.oneOf(['default', 'member']),
  }),
  children:      React.PropTypes.node,
  className:     React.PropTypes.string,
  icon:          React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  title:         React.PropTypes.string,
};

export default BucketHeader;
