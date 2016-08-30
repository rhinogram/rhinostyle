import React from 'react';
import cx    from 'classnames';
import autosize from 'autosize';

class MessageBox extends React.Component {
  static displayName = 'RhinoMessageBox';

  static propTypes = {
    className:     React.PropTypes.string,
    label:         React.PropTypes.string,
    name:          React.PropTypes.string,
    placeholder:   React.PropTypes.string,
    required:      React.PropTypes.bool,
    maxHeight:     React.PropTypes.string,
    initialValue:  React.PropTypes.string,
    rows:          React.PropTypes.number,
  };

  static defaultProps = {
    label:         '',
    name:          '',
    placeholder:   '',
    rows:          1,
    required:      false,
    maxHeight:     'none',
  };

  state = {
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue });
    }
  }

  componentDidMount() {
    autosize(this.refs.textarea);
    if (this.onResize) {
      this.refs.textarea.addEventListener('autosize:resized', this.onResize);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this._getValue(nextProps) !== this._getValue(this.props)) {
      this.dispatchEvent('autosize:update', true);
    }
  }

  componentWillUnmount() {
    if (this.onResize) {
      this.refs.textarea.removeEventListener('autosize:resized');
    }
    this.dispatchEvent('autosize:destroy');
  }


  dispatchEvent(EVENT_TYPE, defer) {
    const event = document.createEvent('Event');
    event.initEvent(EVENT_TYPE, true, false);
    const dispatch = () => this.refs.textarea.dispatchEvent(event);
    if (defer) {
      setTimeout(dispatch);
    } else {
      dispatch();
    }
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });
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
    const { required, rows, className, label, name, placeholder, maxHeight } = this.props;
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
        <textarea rows={rows} placeholder={placeholder} className={textAreaClasses} maxHeight={maxHeight} style={messageBoxStyle} value={this.state.value} onChange={this._handleChange} ref="textarea"></textarea>
      </div>
    );
  }

}

export default MessageBox;
