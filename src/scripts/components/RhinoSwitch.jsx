import cx    from 'classnames';
import React from 'react';

import { UtilitySystem } from '../components';

class RhinoSwitch extends React.Component {
  static display = 'RhinoSwitch';

  static propTypes = {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: `rhinodioswitcher-${Math.floor(Math.random() * 1000000)}`,
  };

  state = {
    checked: this.props.isChecked,
  };

  _toggleChecked = () => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { className, disabled, name } = this.props;
    const { checked } = this.state;
    const classes = cx('rhinoswitcher', className, {
      [UtilitySystem.config.classes.disabled]: disabled,
    });

    return (
      <div className={classes}>
        <input type="checkbox" className="rhinoswitcher__input" id={name} defaultChecked={checked} onClick={this._toggleChange} />
        <label className="rhinoswitcher__label" htmlFor={name} />
      </div>
    );
  }
}

export default RhinoSwitch;
