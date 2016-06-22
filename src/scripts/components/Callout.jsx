import React from 'react';
import cx    from 'classnames';

class Callout extends React.Component {
  static displayName: 'RhinoCallout';

  static propTypes = {
    body: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    heading: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['danger', 'default', 'info']),
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { body, className, heading, type } = this.props;
    const classes = cx('callout', className, {
      'callout--danger':  type === 'danger',
      'callout--default': type === 'default',
      'callout--info':    type === 'info',
    });

    return (
      <div className={classes}>
        <div className="callout__heading">{heading}</div>
        <div className="callout__body">{body}</div>
      </div>
    );
  }
}

export default Callout;
