import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close, Icon } from '.';

class ModalHeader extends React.Component {
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
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const { dismissable, title, titleSub } = this.props;
    const classes = cx('modal__header');

    return (
      <div className={classes}>
        {dismissable ? (<Close onClick={this.closeModal} className="modal__header__close" />) : null}
        <div className="modal__header__title-wrapper">
          <h3 className="modal__header__title">
            {title}
          </h3>
          {titleSub && <div className="modal__header__subtitle">{titleSub}</div>}
        </div>
      </div>
    );
  }
}

ModalHeader.propTypes = {
  dismissable: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  titleSub: PropTypes.string,
};

ModalHeader.defaultProps = {
  dismissable: true,
};

export default ModalHeader;
