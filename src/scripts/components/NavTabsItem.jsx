import React  from 'react';
import cx     from 'classnames';

class NavTabsItem extends React.Component {
  static displayName = 'NavTabsItem';

  static propTypes = {
    active:           React.PropTypes.bool,
    className:        React.PropTypes.string,
    children:         React.PropTypes.node,
    click:            React.PropTypes.func,
  }

  static defaultProps = {
    active: false,
    click: () => {},
  }

  render() {
    const { className, active, click } = this.props;

    const itemClasses = cx('nav-tabs__item', className, {
      'active': active, //eslint-disable-line
    });

    const linkClasses = cx('nav-tabs__item__link', className);

    return (
      <li className={itemClasses}>
        <a className={linkClasses} onClick={click}>
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default NavTabsItem;
