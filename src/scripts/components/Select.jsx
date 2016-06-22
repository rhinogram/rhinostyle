import React from 'react';
import cx    from 'classnames';

class Select extends React.Component {
  static displayName = 'RhinoSelect';

  static propTypes = {
    label:   React.PropTypes.string,
    name:    React.PropTypes.string,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({ value: React.PropTypes.string.isRequired, text: React.PropTypes.string.isRequired, selected: React.PropTypes.bool })).isRequired,
  };

  static defaultProps = {
    label:   '',
    name:    '',
  };

  state = {
    selected: '',
  }

  componentWillMount() {
    this.props.options.forEach((option) => {
      if (option.selected) {
        this.setState({
          selected: option.value,
        });
      }
    });
  }

  _onChange = (event) => {
    this.setState({
      selected: event.target.value,
    });
  }

  render() {
    const { label, name, options } = this.props;
    const classes = cx('rhinoselect__select', 'form__control', 'form__control--chevron');

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label}</label>;
      }

      return false;
    };

    const renderOpts = (option) => <option key={option.value} value={option.value}>{option.text}</option>;

    return (
      <div className="form__group">
        {showLabel()}
        <div className="rhinoselect">
          <select className={classes} id={name} value={this.state.selected} onChange={this._onChange}>
            {options.map(renderOpts)}
          </select>
        </div>
      </div>
    );
  }
}

export default Select;
