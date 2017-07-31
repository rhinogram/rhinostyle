import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class RhinoSwitch extends React.Component {
  static display = 'RhinoSwitch';

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    isChecked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    isChecked: false,
    name: `rhinodioswitcher-${Math.floor(Math.random() * 1000000)}`,
    onClick() {
      return true;
    },
  };

  state = {
    checked: this.props.isChecked,
  };

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

    if (this.props.onChange && typeof (this.props.onChange === 'function')) {
      this.props.onChange(this.props.name, !this.state.checked);
    }

    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { className, disabled, name, label } = this.props;
    const { checked } = this.state;
    const classes = cx('rhinoswitcher', className);

    // Show label or not based on prop value
    const showLabel = label ? <label className="u-block">{label}</label> : null; // eslint-disable-line jsx-a11y/label-has-for

    return (
      <div className="form__group">
        {showLabel}
        <div className={classes}>
          <input type="checkbox" className="rhinoswitcher__input" id={name} checked={checked} disabled={disabled} onChange={this._toggleChecked} />
          <label className="rhinoswitcher__label" htmlFor={name} />
        </div>
      </div>
    );
  }
}

export default RhinoSwitch;
