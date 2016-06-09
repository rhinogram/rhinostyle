import React from 'react';
import cx    from 'classnames';

class DropdownMenuItem extends React.Component {
  static displayName = 'RhinoDropdownMenuItem';

  static propTypes = {
    children:  React.PropTypes.node,
    click: React.PropTypes.func,
    className: React.PropTypes.string,
  };

  static defaultProps = {
    click: () => {},
  };

  render() {
    const { className, click } = this.props;
    const classes = cx('dropdown__menu__item', className);

    return (
      <li className={classes}><a href="javascript:void(0)" onClick={click}>{this.props.children}</a></li> /* eslint no-script-url:0 */
    );
  }
}

export default DropdownMenuItem;
