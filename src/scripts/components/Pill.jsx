import React from 'react';
import classNames from 'classnames';

class Pill extends React.Component {
  static displayName = 'RhinoPill';

  static propTypes = {
    classes: React.PropTypes.string,
    click: React.PropTypes.func,
    label: React.PropTypes.string,
  };

  static defaultProps = {
    click: () => {},
  };

  render() {
    const { classes, click, label, ...props } = this.props;
    const cx = classNames('pill', 'pill--default', classes);

    return (
      /* eslint no-script-url:0 */
      <a href="javascript:void(0)" className={cx} onClick={click} {...props}>{label}<span className="pill__close">&times;</span></a>
    );
  }
}

export default Pill;
