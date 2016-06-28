import React from 'react';
import cx    from 'classnames';

class ModalHeader extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
    dismissable: React.PropTypes.bool,
    isDismissable: React.PropTypes.func,
  };

  static defaultProps = {
    dismissable: true,
  }

  isDismissable = () => {
    let returnVal = null;
    if (this.props.dismissable) {
      returnVal = <button type="button" className="modal__header__close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>;
    }
    return returnVal;
  }

  render() {
    const { className } = this.props;

    const classes = cx('modal__header', className);

    return (
      <div>
        <div className={classes}>
          {this.isDismissable()}
          <span className="u-text-overflow">{this.props.children}</span>
        </div>
      </div>
    );
  }
}

export default ModalHeader;
