import React from 'react';
import cx    from 'classnames';

class Pill extends React.Component {
  static displayName = 'RhinoPill';

  static propTypes = {
    className: React.PropTypes.string,
    onClick:   React.PropTypes.func,
    label:     React.PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
  };

  render() {
    const { className, onClick, label, ...props } = this.props;
    const classes = cx('pill', 'pill--default', className);

    return (
      /* eslint no-script-url:0 */
      <a href="javascript:void(0)" className={classes} onClick={onClick} {...props}>{label}<span className="pill__close">&times;</span></a>
    );
  }
}

export default Pill;
