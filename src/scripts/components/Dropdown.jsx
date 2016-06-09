import React from 'react';
import cx from 'classnames';
import Icon from './Icon';
import onClickOutside from 'react-onclickoutside';

class Dropdown extends React.Component {
  static displayName = 'RhinoDropdown';

  static propTypes = {
    block:     React.PropTypes.bool,
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    disabled:  React.PropTypes.bool,
    icon:      React.PropTypes.string,
    label:     React.PropTypes.string,
    outline:   React.PropTypes.bool,
    size:      React.PropTypes.oneOf(['small', 'normal', 'large']),
    type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'accent', 'link']),
  };

  static defaultProps = {
    block:    false,
    disabled: false,
    outline:  false,
    size:     'normal',
    type:     'default',
  };

  state = {
    isOpen: false,
  };

  _handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { block, className, disabled, icon, label, outline, size, type } = this.props;

    const classes = cx('btn', 'dropdown__toggle', className, {
      'btn--default':   (type === 'default' && !outline),
      'btn--primary':   (type === 'primary' && !outline),
      'btn--secondary': (type === 'secondary' && !outline),
      'btn--accent':    (type === 'accent' && !outline),
      'btn--link':      (type === 'link' && !outline),
      'btn--default-outline':   (type === 'default' && outline),
      'btn--primary-outline':   (type === 'primary' && outline),
      'btn--secondary-outline': (type === 'secondary' && outline),
      'btn--accent-outline':    (type === 'accent' && outline),
      'btn--sm': size === 'small',
      'btn--lg': size === 'large',
      'btn--block': block,
      'btn--icon': (icon && !label),
      'disabled': disabled, //eslint-disable-line
    });

    const dropdownClasses = cx('dropdown', {
      open:  this.state.isOpen,
    });

    return (
      <div className={dropdownClasses}>
        <div onClick={this._handleToggle} className={classes} type="button">
          {icon ? <Icon icon={icon} /> : null}<span className="u-text-overflow">{label}</span><svg className="dropdown__toggle__icon"><use xlinkHref="#icon-chevron-down" /></svg>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
