import React from 'react';
import cx from 'classnames';

class DropdownMenu extends React.Component {
  static displayName = 'RhinoDropdownMenu';

  static propTypes = {
    children:  React.PropTypes.node,
    className:  React.PropTypes.string,
  };

  static defaultProps = {
  };

  render() {
    const { className } = this.props;
    const classes = cx('dropdown__menu', className);

    return (
      <ul className={classes}>{this.props.children}</ul>
    );
  }
}

export default DropdownMenu;
