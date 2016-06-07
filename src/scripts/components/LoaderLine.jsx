import React from 'react';
import cx    from 'classnames';

class Loaderline extends React.Component {
  static displayName = 'RhinoLoaderline';

  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className, type, ...props } = this.props;

    const classes = cx('loader-line', className, {
      'loader-line--default': type === 'default',
    });

    return (
      <div className={classes}>
        <span className="loader-line__line"></span><span className="loader-line__line"></span>
      </div>
    );
  }
}

export default Loaderline;
