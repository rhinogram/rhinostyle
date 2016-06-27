import React      from 'react';
import cx         from 'classnames';
import { Icon }   from '../components';

class ModalHeaderTitle extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
    icon:       React.PropTypes.string,
  };

  render() {
    const { className, icon } = this.props;

    const classes = cx('modal__header__title', className);

    return (
      <h4 className={classes}>
        <Icon icon={icon} className="u-m-r-sm" />
        {this.props.children}
      </h4>
    );
  }
}

export default ModalHeaderTitle;
