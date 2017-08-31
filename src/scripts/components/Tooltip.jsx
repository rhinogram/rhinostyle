import PropTypes from 'prop-types';
import React from 'react';

class Tooltip extends React.Component {
  componentDidMount() {
    console.log(this.tooltip);
  }

  renderChildren = () => {
    const { children } = this.props;

    const onMouseOver = () => {
      // show tooltip
    };

    const onMouseLeave = () => {
      // hide tooltip
    };

    const returnChild = React.cloneElement(React.Children.only(children), {
      onMouseOver,
      onMouseLeave,
      ref: (node) => {
        // Keep your own reference
        this.tooltip = node;
      },
    });

    return returnChild;
  };

  render() {
    return React.Children.only(this.renderChildren());
  }
}

Tooltip.displayName = 'RhinoTooltip';

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  position: 'top',
};

export default Tooltip;
