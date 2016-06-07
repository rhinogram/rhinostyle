import React from 'react';
import classNames from 'classnames';

class Label extends React.Component {
  static displayName = 'RhinoLabel';

  static propTypes = {
    classes: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { classes, label, type, ...props } = this.props;

    const cx = classNames('label', classes, {
      'label--default':   type === 'default',
      'label--primary':   type === 'primary',
      'label--secondary': type === 'secondary',
      'label--accent':    type === 'accent'
    });

    return (
      <span className={cx}>{label}</span>
    );
  }
}

export default Label;
