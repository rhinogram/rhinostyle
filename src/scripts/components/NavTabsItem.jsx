import React  from 'react';
import cx     from 'classnames';

class NavTabsItem extends React.Component {
  static displayName = 'NavTabsItem';

  static propTypes = {
    active:           React.PropTypes.bool,
    className:        React.PropTypes.string,
    children:         React.PropTypes.node,
    onClick:          React.PropTypes.func,
  }

  static defaultProps = {
    active: false,
    onClick: () => {},
  }

  render() {
    const { className, active, onClick } = this.props;

    const itemClasses = cx('nav-tabs__item', className, {
      'active': active, //eslint-disable-line
    });

    const linkClasses = cx('nav-tabs__item__link', className);

    return (
      <li className={itemClasses}>
        <div className={linkClasses} onClick={onClick}>
          {this.props.children}
        </div>
      </li>
    );
  }
}

export default NavTabsItem;
