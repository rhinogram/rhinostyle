import React                                   from 'react';
import cx                                      from 'classnames';
import { TweenMax, Expo }                      from 'gsap';
import { CoverBody, CoverFooter, CoverHeader } from '../../components';

class CoverContainer extends React.Component {
  static displayName = 'RhinoCoverContainer';

  static propTypes = {
    body:          React.PropTypes.node.isRequired,
    footer:        React.PropTypes.node.isRequired,
    icon:          React.PropTypes.string,
    iconClassName: React.PropTypes.string,
    size:          React.PropTypes.string,
    title:         React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    size: 'sm',
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
    const { body, footer, icon, size, title, iconClassName } = this.props;
    const classes = cx('cover');

    return (
      <div className={classes}>
        <CoverHeader icon={icon} iconClassName={iconClassName} title={title} />
        <CoverBody size={size}>
          {body}
        </CoverBody>
        <CoverFooter>
          {footer}
        </CoverFooter>
      </div>
    );
  }
}

export default CoverContainer;
