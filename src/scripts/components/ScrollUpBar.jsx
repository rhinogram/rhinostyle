import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class ScrollUpBar extends Component {
  currentVerticalScroll = 0;
  previousVerticalScroll = 0;
  isScrolling = false;
  isResizingWindow = false;
  inner = undefined;

  state = {
    barStatus: 'unfixed', // One of 'fixed', 'unfixed', 'hidden'.
    translateY: 0,
    className: 'scroll-up-bar scoll-up-bar--unfixed',
    height: undefined,
  };

  /**
   * Get current height of viewport in pixels.
   * @return {Number}
   */
  getViewportHeight = () => (
    window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight
  );

  /**
   * Get current height of HTML document in pixels. Returns highest number out of various body or documentElement measurements.
   * @return {Number}
   */
  getDocumentHeight = () => {
    const { body, documentElement } = document;

    return Math.max(
      body.scrollHeight, documentElement.scrollHeight,
      body.offsetHeight, documentElement.offsetHeight,
      body.clientHeight, documentElement.clientHeight,
    );
  };

  getElementPhysicalHeight = element => Math.max(
    element.offsetHeight,
    element.clientHeight,
  );

  getElementHeight = element => Math.max(
    element.scrollHeight,
    element.offsetHeight,
    element.clientHeight,
  );

  getScrollerPhysicalHeight = () => {
    const parent = this.props.parent();

    return (parent === window || parent === document.body)
      ? this.getViewportHeight()
      : this.getElementPhysicalHeight(parent);
  };

  getScrollerHeight = () => {
    const parent = this.props.parent();

    return (parent === window || parent === document.body)
      ? this.getDocumentHeight()
      : this.getElementHeight(parent);
  };

  setRef = ref => (this.inner = ref);

  setHeightOffset = () => {
    this.setState({
      height: this.inner.offsetHeight,
    });

    this.isResizingWindow = false;
  }

  isOutOfBound = (currentVerticalScroll) => {
    const pastTop = currentVerticalScroll < 0;

    const scrollerPhysicalHeight = this.getScrollerPhysicalHeight();
    const scrollerHeight = this.getScrollerHeight();

    const pastBottom = currentVerticalScroll + scrollerPhysicalHeight > scrollerHeight;

    return pastTop || pastBottom;
  };

  handleScroll = () => {
    if (!this.isScrolling) {
      this.isScrolling = true;
      this.updateScrollUpBar();
    }
  };

  handleResize = () => {
    if (!this.isResizingWindow) {
      this.isResizingWindow = true;
      this.setHeightOffset(); // TODO: Might need to wrap this in 'window.requestAnimationFrame()'.
    }
  }

  fixBar() {
    this.setState({
      translateY: 0,
      className: 'scroll-up-bar scroll-up-bar--fixed',
      barStatus: 'fixed',
    });
  }

  hideBar() {
    this.setState({
      translateY: '-100%',
      className: 'scroll-up-bar scroll-up-bar--hidden',
      barStatus: 'hidden',
    });
  }

  unfixBar() {
    this.setState({
      translateY: '0',
      className: 'scroll-up-bar scroll-up-bar--unfixed',
      barStatus: 'unfixed',
    });
  }

  updateScrollUpBar = () => {
    this.currentVerticalScroll = this.getVerticalScroll();

    if (!this.isOutOfBound(this.currentVerticalScroll)) {
      const action = this.determineScrollBarAction();
      console.log(action);
      if (action === 'fix') {
        this.fixBar();
      } else if (action === 'hide') {
        this.hideBar();
      } else if (action === 'unfix') {
        this.unfixBar();
      }
    }

    this.previousVerticalScroll = this.currentVerticalScroll;
    this.isScrolling = false;
  };

  determineScrollBarAction = () => {
    const { height, barStatus } = this.state;
    const { fixStartHeight, isDisabled, upTolerance, downTolerance } = this.props;
    const scrollDirection = this.currentVerticalScroll >= this.previousVerticalScroll ? 'down' : 'up';
    const distanceScrolled = Math.abs(this.currentVerticalScroll - this.previousVerticalScroll);
    let nextAction;
    console.log(distanceScrolled);
    // Show/Hide functionality completely disabled.
    if (isDisabled) {
      nextAction = 'none';
    // Bar is at the top but has not yet been unfixed.
    } else if (this.currentVerticalScroll <= fixStartHeight && barStatus !== 'unfixed') {
      nextAction = 'unfix';
    // Scrolling down, bar is unfixed, but does not need to be 'hidden' yet.
    } else if (this.currentVerticalScroll <= height && scrollDirection === 'down' && barStatus === 'unfixed') {
      nextAction = 'none';
    // Scroll position past the bar and scrolling down; transition to 'hidden' if necessary.
    } else if (
      scrollDirection === 'down' &&
      ['fixed', 'unfixed'].indexOf(barStatus) >= 0 &&
      this.currentVerticalScroll > (height + fixStartHeight) && distanceScrolled > downTolerance
    ) {
      nextAction = 'hide';
    // Scrolling up, transition to "fixed".
    } else if (scrollDirection === 'up' && distanceScrolled > upTolerance && ['fixed', 'unfixed'].indexOf(barStatus) < 0) {
      nextAction = 'fix';
    // Scrolling up, and vertical offset is less than bar height. Transition to 'fixed' regardless of upTolerance.
    } else if (scrollDirection === 'up' && this.currentVerticalScroll <= height && ['fixed', 'unfixed'].indexOf(barStatus) < 0) {
      nextAction = 'fix';
    } else {
      nextAction = 'none';
    }

    return nextAction;
  }

  getVerticalScroll = () => {
    let verticalScroll;

    if (this.props.parent().pageYOffset !== undefined) {
      verticalScroll = this.props.parent().pageYOffset;
    } else if (this.props.parent().scrollTop !== undefined) {
      verticalScroll = this.props.parent().scrollTop;
    } else {
      verticalScroll = (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }

    return verticalScroll;
  };

  componentDidMount() {
    this.setHeightOffset();

    if (!this.props.isDisabled) {
      this.props.parent().addEventListener('scroll', this.handleScroll);

      if (this.props.calcHeightOnResize) {
        this.props.parent().addEventListener('resize', this.handleResize);
      }
    }
  }

  /* static getDerivedStateFromProps() {
    return null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isDisabled && !this.props.isDisabled) {
      this.unfix();
      this.props.parent().removeEventListener('scroll', this.handleScroll);
      this.props.parent().removeEventListener('resize', this.handleResize);
    } else if (!nextProps.isDisabled && this.props.isDisabled) {
      this.props.parent().addEventListener('scroll', this.handleScroll);

      if (this.props.calcHeightOnResize) {
        this.props.parent().addEventListener('resize', this.handleResize);
      }
    }
  }

  /* shouldComponentUpdate() {

  } */

  componentDidUpdate(prevProps) {
    // Measure again if children have changed.
    if (prevProps.children !== this.props.children) {
      this.setHeightOffset();
    }
  }

  componentWillUnmount() {
    this.props.parent().removeEventListener('scroll', this.handleScroll);
    this.props.parent().removeEventListener('resize', this.handleResize);

    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { isDisabled } = this.props;
    const { barStatus, translateY } = this.state;
    let { className } = this.state;

    let innerStyle = {
      position: isDisabled || barStatus === 'unfixed' ? 'relative' : 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      width: 'inherit',
      WebkitTransform: `translate3D(0, ${translateY}, 0)`,
      MsTransform: `translate3D(0, ${translateY}, 0)`,
      transform: `translate3D(0, ${translateY}, 0)`,
    };

    // Don't add css transitions until after we've done the initial
    // negative transform when transitioning from 'unfixed' to 'unpinned'.
    // If we don't do this, the header will flash into view temporarily
    // while it transitions from 0 — -100%.
    if (barStatus !== 'unfixed') {
      innerStyle = {
        ...innerStyle,
        WebkitTransition: 'all .2s ease-in-out',
        MozTransition: 'all .2s ease-in-out',
        OTransition: 'all .2s ease-in-out',
        transition: 'all .2s ease-in-out',
      };

      className += ' scroll-up-bar--scrolled';
    }

    return (
      <div className="scroll-up-bar">
        <div className="scroll-up-bar__inner" ref={this.setRef} style={innerStyle}>
          <Fragment>{this.props.children}</Fragment>
        </div>
      </div>
    );
  }
}

ScrollUpBar.propTypes = {
  // className: PropTypes.string,
  children: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool,
  parent: PropTypes.func,
  fixStartHeight: PropTypes.number,
  upTolerance: PropTypes.number,
  downTolerance: PropTypes.number,
  calcHeightOnResize: PropTypes.bool,
};

ScrollUpBar.defaultProps = {
  isDisabled: false,
  fixStartHeight: 0,
  upTolerance: 5,
  downTolerance: 0,
  calcHeightOnResize: true,
  parent: () => window,
};

export default ScrollUpBar;
