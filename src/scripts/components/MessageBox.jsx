import cx from 'classnames';
import React from 'react';
import Textarea from 'react-textarea-autosize';

class MessageBox extends React.Component {
  static displayName = 'RhinoMessageBox';

  static propTypes = {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onInput: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    maxHeight: React.PropTypes.string,
    initialValue: React.PropTypes.string,
    focus: React.PropTypes.bool,
    rows: React.PropTypes.number,
  };

  static defaultProps = {
    label: '',
    initialValue: '',
    name: '',
    placeholder: '',
    rows: 1,
    required: false,
    maxHeight: '20rem',
    focus: false,
  };

  state = {
    value: '',
  };

  componentDidMount() {
    if (this.props.focus && this.rhinoTextArea) {
      this.rhinoTextArea.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: nextProps.initialValue,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.focus !== this.props.focus) && this.props.focus) {
      this.rhinoTextArea.focus();
    }
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.onInput && typeof (this.props.onInput === 'function')) {
      this.props.onInput(event.target.id, event.target.value);
    }
  }

  _handleClick = (event) => {
    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick(event.target.id, event.target.value);
    }
  }

  _handleKeyPress = (event) => {
    if (this.props.onKeyPress && typeof (this.props.onKeyPress === 'function')) {
      this.props.onKeyPress(event);
    }
  }

  _getValue(props) {
    if (props) {
      if (props.valueLink) {
        return props.valueLink.value;
      }
      return props.value;
    }
    return false;
  }

  render() {
    const { required, rows, className, disabled, label, name, placeholder, maxHeight } = this.props;
    const textAreaClasses = cx('form__control', 'u-overflow-y-auto');
    const formGroupClasses = cx('form__group', className);
    const messageBoxStyle = {
      maxHeight,
    };

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label} {required ? <span className="form__asterisk">*</span> : null}</label>;
      }

      return false;
    };
    return (
      <div className={formGroupClasses}>
        {showLabel()}
        <Textarea rows={rows} placeholder={placeholder} className={textAreaClasses} style={messageBoxStyle} value={this.state.value} onKeyPress={this._handleKeyPress} onInput={this._handleChange} onClick={this._handleClick} disabled={disabled} ref={ref => (this.rhinoTextArea = ref)} />
      </div>
    );
  }

}

export default MessageBox;
