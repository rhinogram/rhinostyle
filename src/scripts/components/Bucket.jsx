import React from 'react';
import cx    from 'classnames';

class Bucket extends React.Component {
  static displayName = 'RhinoBucket';

  static propTypes = {
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    size:      React.PropTypes.oneOf(['small']),
    type:      React.PropTypes.oneOf(['default', 'warm']),
  };

  static defaultProps = {
    type:     'default',
  };

  render() {
    const { className, size, type } = this.props;
    const classes = cx('bucket', type, className, {
      'bucket--warm':   type === 'warm',
      'bucket--sm':     size === 'small',
    });

    return (
      <div className={classes}>
        <div className="bucket__body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Bucket;
