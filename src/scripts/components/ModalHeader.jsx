import React      from 'react';
import ReactDOM   from 'react-dom';
import cx         from 'classnames';
import { Icon }   from '../components';


class ModalHeader extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:       React.PropTypes.node,
    className:      React.PropTypes.string,
    dismissable:    React.PropTypes.bool,
    isDismissable:  React.PropTypes.func,
    icon:           React.PropTypes.string,
    title:          React.PropTypes.string,
    dismiss:        React.PropTypes.func,
  };

  static defaultProps = {
    dismissable: true,
  }

  isDismissable = () => {
    let returnVal = null;
    if (this.props.dismissable) {
      returnVal = <button onClick={this.closeModal} type="button" className="modal__header__close" aria-label="Close"><Icon className="u-m-r-sm" icon="close" /></button>;
    }
    return returnVal;
  }

  containsIcon = () => {
    let returnVal = null;
    if (this.props.icon) {
      returnVal = <Icon icon={this.props.icon} className="u-m-r-sm" />;
    }
    return returnVal;
  }

  closeModal = () => {
    ReactDOM.render(<div></div>, document.getElementById('js-modal-container'));
  };

  render() {
    const { className } = this.props;

    const headerClasses =   cx('modal__header', className);
    const titleClasses =    cx('modal__header__title', className);


    return (
      <div className={headerClasses}>
        {this.isDismissable()}
        <h4 className={titleClasses}>
          {this.containsIcon()}
          <span className="u-text-overflow">
            {this.props.title}
          </span>
        </h4>
      </div>
    );
  }
}

export default ModalHeader;
