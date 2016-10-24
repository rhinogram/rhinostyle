import React from 'react';
import cx from 'classnames';

class DropdownMenuItemWild extends React.Component {
  static displayName = 'RhinoDropdownMenuItemWild';

  static propTypes = {
    children:        React.PropTypes.node,
    className:       React.PropTypes.string,
    handleToggle:    React.PropTypes.func,
    toggleDropdown:  React.PropTypes.bool,
  };

  static defaultProps = {
    handleToggle:    () => {},
    toggleDropdown:  false,
  };

  handleClick = () => {
    if (this.props.toggleDropdown) {
      this.props.handleToggle();
    }
  }

  render() {
    const { children, className } = this.props;
    const classes = cx('dropdown__menu__container', className);

    return (
      <div className={classes} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default DropdownMenuItemWild;
