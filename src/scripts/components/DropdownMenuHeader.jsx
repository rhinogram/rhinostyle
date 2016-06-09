import React from 'react';
import cx    from 'classnames';

class DropdownMenuHeader extends React.Component {
  static displayName = 'RhinoDropdownMenuHeader';

  static propTypes = {
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
  };

  static defaultProps = {
  };

  render() {
    const { className } = this.props;
    const classes = cx('dropdown__menu__header', className);

    return (
      <li className={classes}>{this.props.children}</li>
    );
  }
}

export default DropdownMenuHeader;
