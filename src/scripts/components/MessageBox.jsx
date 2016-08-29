import React from 'react';
import cx    from 'classnames';
import autosize from 'autosize';

class MessageBox extends React.Component {
  static displayName = 'RhinoMessageBox';

  static propTypes = {
    children:      React.PropTypes.node,
    className:     React.PropTypes.string,
    label:         React.PropTypes.string,
    name:          React.PropTypes.string,
    placeholder:   React.PropTypes.string,
    rows:          React.PropTypes.number,
    required:      React.PropTypes.bool,
    initialValue:  React.PropTypes.string,
    onResize:      React.PropTypes.func.isRequired,
    maxHeight: React.PropTypes.node,
  };

  static defaultProps = {
    label:         '',
    name:          '',
    placeholder:   '',
    rows:          1,
    required:      false,
    maxHeight: 'none',
  };

  state = {
    value: '',
  };


  componentDidMount() {
    autosize(this.refs.textarea);
    if (this.props.onResize) {
      this.refs.textarea.addEventListener('autosize:resized', this.props.onResize);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this._getValue(nextProps) !== this._getValue(this.props)) {
      this.dispatchEvent('autosize:update', true);
    }
  }

  componentWillUnmount() {
    if (this.props.onResize) {
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
    const { required, className, label, name, placeholder, maxHeight } = this.props;
    const textAreaClasses = cx('form__control');
    const formGroupClasses = cx('form__group', className);
    const messageBoxStyle = {
      whiteSpace: 'normal',
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
        <textarea placeholder={placeholder} className={textAreaClasses} maxHeight={maxHeight} style={messageBoxStyle} {...this.props} ref="textarea">{this.props.children}</textarea>
      </div>
    );
  }

}

export default MessageBox;
