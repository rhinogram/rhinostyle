import React      from 'react';
import classNames from 'classnames';

class Callout extends React.Component {
  static displayName: 'RhinoCallout';

  static propTypes = {
    body: React.PropTypes.string.isRequired,
    head: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['danger', 'default', 'info'])
  };

  static defaultProps = {
    type: 'default'
  };

  render() {
    const { body, head, type } = this.props;
    const cx = classNames('callout', {
      'callout--danger':  type==='danger',
      'callout--default': type==='default',
      'callout--info':    type==='info'
    });

    return (
      <div className={cx}>
        <div className="callout__heading">{head}</div>
        <div className="callout__body">{body}</div>
      </div>
    );
  }
}

export default Callout;
