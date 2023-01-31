import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormLabel from './FormLabel';
import { UtilitySystem } from '../UtilitySystem';

class RhinoSwitch extends React.Component {
  state = {
    checked: this.props.isChecked,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isChecked !== this.props.isChecked) {
      this.setState({
        checked: this.props.isChecked,
      });
    }
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  toggleChecked = () => {
    if (this.props.onClick) {
      this.props.onClick(!this.state.checked);
    }

    if (this.props.onChange) {
      this.props.onChange(this.props.name, !this.state.checked);
    }

    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { className, disabled, name, label, isBetaLabeled, dataFeatureTag } = this.props;
    const { checked } = this.state;
    const classes = cx('rhinoswitcher', className);

    return (
      <div className="form__group rhinoswitcher__form-group">
        <div className={classes} data-cypress={dataFeatureTag} data-feature-tag={dataFeatureTag}>
          <input type="checkbox" className="rhinoswitcher__input" name={name} id={this.id} checked={checked} disabled={disabled} onChange={this.toggleChecked} />
          <label // eslint-disable-line jsx-a11y/label-has-for
            className="rhinoswitcher__label"
            htmlFor={this.id}
          />
        </div>
        <FormLabel className="rhinoswitcher__text" id={this.id}>
          {label}
          {isBetaLabeled && (
            <span className="title-adjacent-beta-label">BETA</span>
          )}
        </FormLabel>
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
  isBetaLabeled: PropTypes.bool,
  dataFeatureTag: PropTypes.string,
};

RhinoSwitch.defaultProps = {
  isChecked: false,
  onClick() {
    return true;
  },
};

export default RhinoSwitch;
