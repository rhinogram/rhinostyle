import React from 'react';
import cx    from 'classnames';

class Checkbox extends React.Component {
  static displayName = 'Rhinobox';

  static propTypes = {
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    disabled:  React.PropTypes.bool,
    inline:    React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    name:      React.PropTypes.string.isRequired,
    onClick:   React.PropTypes.func,
  }

  static defaultProps = {
    inline:    false,
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
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { className, disabled, inline, name, onClick } = this.props;
    const { checked } = this.state;
    const classes = cx('rhinobox', className, {
      'rhinobox--inline':   inline,
      'rhinobox--disabled': disabled,
    });

    return (
      <div className={classes}>
        <input type="checkbox" disabled={disabled} id={name} checked={checked} onChange={this._toggleChecked} onClick={onClick} />
        <label htmlFor={name}>
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Checkbox;
