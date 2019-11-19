import PropTypes from 'prop-types';
import React from 'react';

class Collapse extends React.Component {
  state = {
    collapseContainerHeight: '0px',
    isTransitioning: false,
  };

  componentDidMount() {
    const { isOpen } = this.props;

    this.setState({ collapseContainerHeight: isOpen ? this.collapseContainerRef.current.scrollHeight : '0px' });
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.props;

    if (isOpen !== prevProps.isOpen) {
      if (prevState.isTransitioning) {
        this.handleTransitionCancelled();
      }

      this.setState({ isTransitioning: true }, () => { // eslint-disable-line react/no-did-update-set-state
        this.handleTransitionStart();
        this.setState({ collapseContainerHeight: isOpen ? this.collapseContainerRef.current.scrollHeight : '0px' });
      });
    }
  }

  collapseContainerRef = React.createRef();

  // There is no synthetic event available for a transition start.
  // We have to simulated it by triggering an event when the user changes the 'isOpen' prop.
  handleTransitionStart = () => {
    if (this.props.onTransitionStart) {
      this.props.onTransitionStart();
    }
  };

  handleTransitionEnd = (event) => {
    if (this.props.onTransitionEnd) {
      this.props.onTransitionEnd(event);
    }
    this.setState({ isTransitioning: false });
  };

  // Fires when a Collapse is toggled mid-transition, since it means the 'transitionEnd' event will never fire.
  handleTransitionCancelled = () => {
    if (this.props.onTransitionCancelled) {
      this.props.onTransitionCancelled();
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div
        className={`collapse__container ${this.props.className}`}
        ref={this.collapseContainerRef}
        onTransitionEnd={this.handleTransitionEnd}
        style={{ height: this.state.collapseContainerHeight }}
      >
        {children}
      </div>
    );
  }
}

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onTransitionStart: PropTypes.func,
  onTransitionEnd: PropTypes.func,
  onTransitionCancelled: PropTypes.func,
};

export default Collapse;
