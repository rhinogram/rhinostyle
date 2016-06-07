import React from 'react';
import cx    from 'classnames';

class Callout extends React.Component {
  static displayName: 'RhinoCallout';

  static propTypes = {
    body: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    head: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['danger', 'default', 'info']),
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { body, className, head, type } = this.props;
    const classes = cx('callout', {
      'callout--danger':  type === 'danger',
      'callout--default': type === 'default',
      'callout--info':    type === 'info',
    }, className);

    return (
      <div className={classes}>
        <div className="callout__heading">{head}</div>
        <div className="callout__body">{body}</div>
      </div>
    );
  }
}

export default Callout;
