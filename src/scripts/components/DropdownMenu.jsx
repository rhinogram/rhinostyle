import React from 'react';
import cx from 'classnames';

class DropdownMenu extends React.Component {
  static displayName = 'RhinoDropdownMenu';

  static propTypes = {
    children:  React.PropTypes.node,
    className:  React.PropTypes.string,
    position: React.PropTypes.string,
  };

  static defaultProps = {
  };

  render() {
    const { className, position } = this.props;
    const classes = cx('dropdown__menu', className, {
      'dropdown__menu--right': position === 'right',
      'dropdown__menu--top': position === 'top',
      'dropdown__menu--wide': position === 'wide',
    });

    return (
      <ul className={classes}>
        <div className="dropdown__menu__scroll">{this.props.children}</div>
      </ul>
    );
  }
}

export default DropdownMenu;
