import React                        from 'react';
import cx                           from 'classnames';
import { Close, Icon, CoverSystem } from '../components';


class CoverHeader extends React.Component {
  static displayName = 'RhinoCoverHeader';

  static propTypes = {
    icon:           React.PropTypes.string,
    iconClassName:  React.PropTypes.string,
    title:          React.PropTypes.string,
  }

  closeCover = () => {
    CoverSystem.removeCover();
  }

  render() {
    const { icon, iconClassName, title } = this.props;
    const iconClasses = cx('cover__header__title__icon', iconClassName);

    return (
      <div className="cover__header">
        <div className="cover__header__container">
          <div className="cover__header__title">
            {icon ? (<Icon icon={icon} className={iconClasses} />) : null}
            <span className="u-text-overflow">{title}</span>
          </div>
          <Close className="cover__header__close-btn" onClick={this.closeCover} />
        </div>
      </div>
    );
  }
}

export default CoverHeader;
