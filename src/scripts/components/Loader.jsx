import React from 'react';
import classNames from 'classnames';

class Loader extends React.Component {
  static displayName = 'RhinoLoader';

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

    const cx = classNames('label', classes, {
      'label--default':   type==='default',
      'label--primary':   type==='primary',
      'label--secondary': type==='secondary',
      'label--accent':    type==='accent'
    });

//     <div class="loader-pulse loader-pulse--default">
//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
//     </div>
//     &nbsp;&nbsp;&nbsp;
//     <div class="loader-pulse loader-pulse--accent">
//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
//     </div>
//     &nbsp;&nbsp;&nbsp;
//     <div class="loader-pulse loader-pulse--secondary">
//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
//     </div>
//
//   </div>
//
// </section>
//
//
// <section class="site-section">
//   <h3 class="site-subheadline">Loader Line</h3>
//
//   <div class="u-m-b-md">
//
//     <div class="loader-line loader-line--default">
//       <span class="loader-line__line"></span><span class="loader-line__line"></span>
//     </div>

    return (
      <span className={cx}>{label}</span>
    );
  }
}

export default Loader;
