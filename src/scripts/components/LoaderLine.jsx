import React from 'react';
import classNames from 'classnames';

class Loaderline extends React.Component {
  static displayName = 'RhinoLoaderline';

  static propTypes = {
    classes: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string
  };

  static defaultProps = {
    type: 'default'
  };

  render() {
    const { classes, label, type, ...props } = this.props;

    const cx = classNames('loader-line', classes, {
      'loader-line--default':   type==='default'
    });

    return (
      <div className={cx}>
        <span className="loader-line__line"></span><span className="loader-line__line"></span>
      </div>
    );
  }
}

export default Loaderline;
