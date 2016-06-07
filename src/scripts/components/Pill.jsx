import React from 'react';
import cx    from 'classnames';

class Pill extends React.Component {
  static displayName = 'RhinoPill';

  static propTypes = {
    className: React.PropTypes.string,
    click: React.PropTypes.func,
    label: React.PropTypes.string,
  };

  static defaultProps = {
    click: () => {},
  };

  render() {
    const { className, click, label, ...props } = this.props;
    const classes = cx('pill', 'pill--default', className);

    return (
      /* eslint no-script-url:0 */
      <a href="javascript:void(0)" className={classes} onClick={click} {...props}>{label}<span className="pill__close">&times;</span></a>
    );
  }
}

export default Pill;
