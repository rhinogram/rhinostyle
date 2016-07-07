import React from 'react';
import cx    from 'classnames';

class ModalBody extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
  };

  render() {
    const { className } = this.props;

    const classes = cx('modal__body', className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default ModalBody;
