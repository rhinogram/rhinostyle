import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close, Icon } from '../components';

class ModalHeader extends React.Component {
  static displayName = 'RhinoModalHeader';

  static propTypes = {
    dismissable: PropTypes.bool,
    icon: PropTypes.string,
    iconClassName: PropTypes.string,
    onClose: PropTypes.func,
    title: PropTypes.string,
  }

  static defaultProps = {
    dismissable: true,
    onClose: () => {},
  }

  isDismissable = () => {
    let returnVal = null;
    if (this.props.dismissable) {
      returnVal = <button onClick={this.handleCloseClick} type="button" className="modal__header__close" aria-label="Close"><Icon icon="close" /></button>;
    }
    return returnVal;
  }

  handleCloseClick = () => {
    this.closeModal();
  }

  closeModal = () => {
    if (this.props.onClose && typeof (this.props.onClose === 'function')) {
      this.props.onClose();
    }
  }

  render() {
    const { dismissable, icon, iconClassName, title } = this.props;
    const classes = cx('modal__header');
    const iconClasses = cx('modal__header__title__icon', iconClassName);

    return (
      <div className={classes}>
        <h4 className="modal__header__title">
          {icon ? (<Icon icon={icon} className={iconClasses} />) : null}
          <span className="u-text-overflow">
            {title}
          </span>
        </h4>
        {dismissable ? (<Close onClick={this.closeModal} className="modal__header__close" />) : null}
      </div>
    );
  }
}

export default ModalHeader;
