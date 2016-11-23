import React from 'react';
import onClickOutside from 'react-onclickoutside';

class DropdownWrapper extends React.Component {
  static displayName = 'RhinoDropdownWrapper';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    // disableOnClickOutside: React.PropTypes.func,
    // enableOnClickOutside: React.PropTypes.func,
    handleClick: React.PropTypes.func,
  };

  handleClickOutside = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    );
  }
}

export default onClickOutside(DropdownWrapper);
