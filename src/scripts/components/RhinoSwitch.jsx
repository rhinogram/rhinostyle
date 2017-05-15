import cx    from 'classnames';
import React from 'react';

class RhinoSwitch extends React.Component {
  static display = 'RhinoSwitch';

  static propTypes = {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
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
    const { className, disabled, name, label } = this.props;
    const { checked } = this.state;
    const classes = cx('rhinoswitcher', className);

    // Show label or not based on prop value
    const showLabel = label ? <label className="u-block">{label}</label> : null; // eslint-disable-line jsx-a11y/label-has-for

    return (
      <div className="form__group">
        {showLabel}
        <div className={classes}>
          <input type="checkbox" className="rhinoswitcher__input" id={name} defaultChecked={checked} disabled={disabled} onClick={this._toggleChange} />
          <label className="rhinoswitcher__label" htmlFor={name} />
        </div>
      </div>
    );
  }
}

export default RhinoSwitch;
