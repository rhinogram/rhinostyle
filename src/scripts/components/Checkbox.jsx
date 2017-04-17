import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Checkbox extends React.Component {
  static displayName = 'Rhinobox';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    isChecked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
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
    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick(!this.state.checked);
    }

    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { className, disabled, inline, name } = this.props;
    const { checked } = this.state;

    const classes = cx('rhinobox', className, {
      'rhinobox--inline':   inline,
      'rhinobox--disabled': disabled,
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
