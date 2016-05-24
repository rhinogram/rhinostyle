import React from 'react';
import classNames from 'classnames';

const Pill = React.createClass({
  displayName: 'RhinoPill',

  propTypes: {
    classes:  React.PropTypes.string,
    click:    React.PropTypes.func,
    label:    React.PropTypes.string
  },

  getDefaultProps() {
    return {
      click:  () => {}
    };
  },

  render() {
    const { classes, click, label, ...props } = this.props;
    const cx = classNames('pill', 'pill--default', classes);

    return (
      <a href="#" className={cx} onClick={click} {...props}>{label}<span className="pill__close">&times;</span></a>);
  }
});

export default Pill;
