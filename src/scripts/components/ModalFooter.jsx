import React from 'react';
import cx    from 'classnames';

class ModalFooter extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
  };

  render() {
    const { className } = this.props;

    const classes = cx('modal__footer', className);

    return (
      <div>
        <div className={classes}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ModalFooter;
