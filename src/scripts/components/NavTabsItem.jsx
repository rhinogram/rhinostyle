import React  from 'react';
import cx from 'classnames';

class NavTabsItem extends React.Component {
  static displayName = 'NavTabsItem';

  static propTypes = {
    active:           React.PropTypes.bool,
    className:        React.PropTypes.string,
    children:         React.PropTypes.node,
    click:            React.PropTypes.func,
    activeKey:        React.PropTypes.number,
  }

  static defaultProps = {
    active: false,
    click: () => {},
  }

  handleClick = () => {
    // this handle click should set this.props.active to true
    // Cannot assign to read only property 'active' of object '#<Object>'
    // this.props.active = true;
    this.props.click();
    let returnVal = null;
    if (this.props.active) {
      returnVal = null;
    } else {
      returnVal = true;
    }
    return returnVal;
  }

  render() {
    const { className, activeKey } = this.props;

    const itemClasses = cx('nav-tabs__item', className, {
      active: this.props.active, //eslint-disable-line
    });

    const linkClasses = cx('nav-tabs__item__link', className);

    return (
      <li className={itemClasses} activeKey={activeKey}>
        <a className={linkClasses} onClick={this.handleClick}>
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default NavTabsItem;
