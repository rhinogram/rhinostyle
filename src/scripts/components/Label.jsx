import React from 'react';
import cx    from 'classnames';

class Label extends React.Component {
  static displayName = 'RhinoLabel';

  static propTypes = {
    className:  React.PropTypes.string,
    label:      React.PropTypes.string,
    type:       React.PropTypes.string,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className, label, type } = this.props;

    const classes = cx('label', className, {
      'label--default':   type === 'default',
      'label--primary':   type === 'primary',
      'label--secondary': type === 'secondary',
      'label--accent':    type === 'accent',
    });

    return (
      <span className={classes}>{label}</span>
    );
  }
}

export default Label;
