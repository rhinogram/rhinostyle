import React      from 'react';
import cx         from 'classnames';
import { Icon }   from '../components';

class ModalHeaderTitle extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
    icon:       React.PropTypes.string,
    title:      React.PropTypes.string,
  };

  containsIcon = () => {
    let returnVal = null;
    if (this.props.icon) {
      returnVal = <Icon icon={this.props.icon} className="u-m-r-sm" />;
    }
    return returnVal;
  }

  render() {
    const { className, title } = this.props;

    const classes = cx('modal__header__title', className);

    return (
      <h4 className={classes}>
        {this.containsIcon()}
        {this.props.title}
      </h4>
    );
  }
}

export default ModalHeaderTitle;
