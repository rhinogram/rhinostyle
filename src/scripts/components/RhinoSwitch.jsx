import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FormLabel, UtilitySystem } from '../components';

class RhinoSwitch extends React.Component {
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

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

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

    return (
      <div className="form__group rhinoswitcher__form-group">
        <div className={classes}>
          <input type="checkbox" className="rhinoswitcher__input" name={name} id={this.id} checked={checked} disabled={disabled} onChange={this._toggleChecked} />
          <label // eslint-disable-line jsx-a11y/label-has-for
            className="rhinoswitcher__label"
            htmlFor={this.id}
          />
        </div>
        <FormLabel className="rhinoswitcher__text" label={label} id={this.id} />
      </div>
    );
  }
}

RhinoSwitch.display = 'RhinoSwitch';

RhinoSwitch.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

RhinoSwitch.defaultProps = {
  isChecked: false,
  onClick() {
    return true;
  },
};

export default RhinoSwitch;
