import cx    from 'classnames';
import React from 'react';

import { UtilitySystem } from '../components';

class Checkbox extends React.Component {
  static displayName = 'Rhinobox';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
  }

  static defaultProps = {
    isChecked: false,
    onClick() {
      return true;
    },
  }

  state = {
    checked: this.props.isChecked,
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isChecked !== this.props.isChecked) {
      this.setState({
        checked: newProps.isChecked,
      });
    }
  }

  _toggleChecked = () => {
    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick(!this.state.checked);
    }

    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { className, disabled, name } = this.props;
    const { checked } = this.state;

    const classes = cx('rhinobox', className, {
      [UtilitySystem.config.classes.disabled]: disabled,
    });

    return (
      <div className={classes}>
        <input type="checkbox" disabled={disabled} id={name} checked={checked} onChange={this._toggleChecked} />
        <label htmlFor={name}>
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Checkbox;
