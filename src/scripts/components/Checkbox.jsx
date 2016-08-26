import React from 'react';
import cx    from 'classnames';

class Checkbox extends React.Component {
  static displayName = 'Rhinobox';

  static propTypes = {
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
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

  _toggleChecked = () => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { className, inline, name, onClick } = this.props;
    const { checked } = this.state;
    const classes = cx('rhinobox', className, {
      'rhinobox--inline': inline,
    });

    return (
      <div className={classes}>
        <input type="checkbox" id={name} checked={checked} onChange={this._toggleChecked} onClick={onClick} />
        <label htmlFor={name}>
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Checkbox;
