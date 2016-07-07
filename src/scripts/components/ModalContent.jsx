import React from 'react';
import cx    from 'classnames';

class ModalContent extends React.Component {
  static displayName = 'RhinoModalContent';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
  };

  render() {
    const { className } = this.props;

    const classes = cx('modal__content', className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default ModalContent;
