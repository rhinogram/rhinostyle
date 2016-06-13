import React from 'react';
import cx from 'classnames';

class DropdownMenu extends React.Component {
  static displayName = 'RhinoDropdownMenu';

  static propTypes = {
    children:  React.PropTypes.node,
    className:  React.PropTypes.string,
    position: React.PropTypes.string,
    wide: React.PropTypes.bool,
  };

  static defaultProps = {
    wide: false,
  };

  render() {
    const { className, position, wide } = this.props;
    const classes = cx('dropdown__menu', className, {
      'dropdown__menu--right': position === 'right',
      'dropdown__menu--top': position === 'top',
      'dropdown__menu--top dropdown__menu--right': position === 'top-right',
      'dropdown__menu--wide': wide,
    });

    return (
      <ul className={classes}>
        <div className="dropdown__menu__scroll">{this.props.children}</div>
      </ul>
    );
  }
}

export default DropdownMenu;
