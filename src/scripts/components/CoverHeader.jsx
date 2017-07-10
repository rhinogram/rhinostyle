import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close, Icon } from '../components';

class CoverHeader extends React.Component {
  static displayName = 'RhinoCoverHeader';

  static propTypes = {
    icon: PropTypes.string,
    iconClassName: PropTypes.string,
    onClose: PropTypes.func,
    title: PropTypes.string,
  }

  static defaultProps = {
    onClose: () => {},
  }

  handleCloseClick = () => {
    this.closeCover();
  }

  closeCover = () => {
    if (this.props.onClose && typeof (this.props.onClose === 'function')) {
      this.props.onClose();
    }
  }

  render() {
    const { icon, iconClassName, title } = this.props;
    const iconClasses = cx('cover__header__title__icon', iconClassName);

    return (
      <div className="cover__header">
        <div className="cover__header__container">
          <h4 className="cover__header__title">
            {icon ? (<Icon icon={icon} className={iconClasses} />) : null}
            <span className="u-text-overflow">{title}</span>
          </h4>
          <Close className="cover__header__close-button" onClick={this.handleCloseClick} />
        </div>
      </div>
    );
  }
}

export default CoverHeader;
