import React from 'react';
import cx    from 'classnames';

class RhinoSwitch extends React.Component {
  static display = 'RhinoSwitch';

  static propTypes = {
    className: React.PropTypes.string,
    disabled:  React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    name:      React.PropTypes.string.isRequired,
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
      'rhinoswitcher--disabled': disabled,
    });

    return (
      <div className={classes}>
        <input type="checkbox" className="rhinoswitcher__input" id={name} defaultChecked={checked} onClick={this._toggleChange} />
        <label className="rhinoswitcher__label" htmlFor={name}>
          <div className="rhinoswitcher__inner">
            <div className="rhinoswitcher__on">
              <svg className="rhinoswitcher__icon icon icon-checkmark">
                <use xlinkHref="#icon-checkmark" />
              </svg>
            </div>
            <div className="rhinoswitcher__off">
              <svg className="rhinoswitcher__icon icon icon-close">
                <use xlinkHref="#icon-close" />
              </svg>
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default RhinoSwitch;
