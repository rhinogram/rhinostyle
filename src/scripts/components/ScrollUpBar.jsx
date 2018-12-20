import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollUpBar extends Component {
  currentVerticalScroll = 0;
  previousVerticalScroll = 0;
  isScrolling = false;
  isResizingWindow = false;

  state = {
    barCondition: 'unfixed',
    translateY: 0,
    className: 'scroll-up-bar scoll-up-bar--unfixed'
  };

  setRef = ref => (this.inner = ref);

  componentDidMount() {

  }

  getDerivedStateFromProps() {

  }

  shouldComponentUpdate() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    return <h1>Hello World!</h1>
  }
}

ScrollUpBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.isRequired,
  disable: PropTypes.bool,

};

ScrollUpBar.defaultProps = {
  disable: false
};

export default ScrollUpBar;