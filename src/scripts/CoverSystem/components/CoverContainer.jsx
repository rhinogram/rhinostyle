import React  from 'react';
import cx     from 'classnames';
import TweenMax from 'gsap';


import { CoverBody, CoverSystem, CoverFooter, CoverHeader, Cover, Close } from '../../components';

class CoverContainer extends React.Component {
  static displayName = 'RhinoCoverContainer';

  static propTypes = {
    body:         React.PropTypes.node,
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    footer:       React.PropTypes.node,
    icon:         React.PropTypes.string,
    cover:        React.PropTypes.object,
    size:         React.PropTypes.string,
    title:        React.PropTypes.string,
  };

  state = {
    isOpen: false,
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

    this.openCover();
  }

  openCover = () => {
    this.setState({ isOpen: true });
  }

  closeCover = () => {
    CoverSystem.removeCover();
  }

  render() {
    const { body, footer, icon, title } = this.props.cover;

    const classes = cx('cover');

    /*
    .cover__body__container--sm {
  max-width: @screen-sm-min;
}

.cover__body__container--md {
  max-width: @screen-md-min;
}

.cover__body__container--lg {
  max-width: @screen-lg-min;
} */

    return (
      <div className={classes}>
        <div className="cover__header">
          <div className="cover__header__container">
            <div className="cover__header__title">
              {/* icon here className="cover__header__title__icon" */}
              <span className="u-text-overflow">Edit Jason Cole</span>
            </div>
            <Close className="cover__header__close-btn" onClick={this.closeCover} />
          </div>
        </div>
        <div className="cover__body">
          <div className="cover__body__container">
          </div>
        </div>
        <div className="cover__footer">
          <div className="cover__footer__container">
            Footer
          </div>
        </div>
      {/*  <Cover isOpen={this.state.isOpen}>
          <CoverHeader title={title} icon={icon} />
          <CoverBody>
            {body}
          </CoverBody>
          <CoverFooter>
            {footer}
          </CoverFooter>
        </Cover>*/}
      </div>
    );
  }
}

export default CoverContainer;
