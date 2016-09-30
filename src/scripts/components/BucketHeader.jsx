import React    from 'react';
import cx       from 'classnames';
import Avatar   from './Avatar';
import Icon     from './Icon';

function customValidator(props, propName, componentName) {
  if (props.icon && props.avatar) {
    return new Error(`Only one of \`avatar\` or \`icon\` can be supplied to \`${componentName}\`.`);
  } else if (props[propName]) {
    if (typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${props[propName]}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected \`string\`.`);
    }
  }
  return null;
}

const BucketHeader = (props) => {
  const { avatar, className, icon, iconClassName, title } = props;
  const classes = cx('bucket__header', className);
  const iconClasses = cx('bucket__header__title__icon', iconClassName);

  return (
    <div className={classes}>
      {avatar ? (<Avatar size="small" type="member" image={avatar} className="bucket__header__avatar" />) : null}
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
  avatar:        customValidator,
  children:      React.PropTypes.node,
  className:     React.PropTypes.string,
  icon:          React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  title:         React.PropTypes.string,
};

export default BucketHeader;
