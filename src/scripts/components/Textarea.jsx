import React from 'react';
import cx    from 'classnames';

class Textarea extends React.Component {
  static displayName = 'RhinoTextarea';

  static propTypes = {
    className:    React.PropTypes.string,
    label:        React.PropTypes.string,
    name:         React.PropTypes.string,
    placeholder:  React.PropTypes.string,
    required:     React.PropTypes.bool,
    initialValue: React.PropTypes.string,
    rows:         React.PropTypes.number,
  };

  static defaultProps = {
    label:       '',
    name:        '',
    placeholder: '',
    required:    false,
    rows:        3,
  };

  state = {
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue });
    }
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { className, label, name, placeholder, required, rows } = this.props;
    const textAreaClasses = cx('form__control');
    const formGroupClasses = cx('form__group', className);

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label} {required ? <span className="form__asterisk">*</span> : null}</label>;
      }

      return false;
    };

    return (
      <div className={formGroupClasses}>
        {showLabel()}
        <textarea className={textAreaClasses} rows={rows} placeholder={placeholder} value={this.state.value} onChange={this._handleChange}></textarea>
      </div>
    );
  }
}

export default Textarea;
