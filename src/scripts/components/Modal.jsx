import cx                      from 'classnames';
import React                   from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Modal = (props) => {
  const { className, size } = props;
  const modalClasses     = cx('modal', className);
  const containerClasses = cx('modal__container', {
    'modal__container--sm': size === 'sm',
    'modal__container--lg': size === 'lg',
  });

  let returnVal = null;

  if (props.isOpen) {
    returnVal = (
      <ReactCSSTransitionGroup transitionName={props.transitionName} transitionEnterTimeout={10000} transitionLeaveTimeout={10000}>
        <div className={modalClasses} style={{ display: 'block' }}>
          <div className={containerClasses}>
            {props.children}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  } else {
    returnVal = <ReactCSSTransitionGroup transitionName={props.transitionName} transitionEnterTimeout={10000} transitionLeaveTimeout={10000} />;
  }

  return returnVal;
};

Modal.displayName = 'RhinoModal';

Modal.propTypes = {
  children:       React.PropTypes.node,
  className:      React.PropTypes.string,
  isOpen:         React.PropTypes.bool,
  size:           React.PropTypes.string,
  transitionName: React.PropTypes.node,
};

Modal.defaultProps = {
  type:   'default',
  isOpen: false,
};

export default Modal;
