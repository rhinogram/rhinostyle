import React              from 'react';
import cx                 from 'classnames';
import { TweenMax, Expo } from 'gsap';

class CoverContainer extends React.Component {
  static displayName = 'RhinoCoverContainer';

  static propTypes = {
    children:      React.PropTypes.node,
  };

  componentDidMount() {
    TweenMax.set('.cover', {
      display: 'flex',
      opacity: 0,
      scale: 0.9
    });

    TweenMax.to('.cover', 0.35, {
      scale: 1,
      opacity: 1,
      ease: Expo.easeInOut
    });
  }

  render() {
    const { children } = this.props;
    const classes = cx('covers');

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default CoverContainer;
