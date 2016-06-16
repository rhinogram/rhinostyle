import React  from 'react';

class NavTabsItem extends React.Component {
  static displayName = 'NavTabsItem';

  static propTypes = {
    className:        React.PropTypes.string,
    children:         React.PropTypes.node,
    renderTabPane:    React.PropTypes.bool,
    selectedIndex:    React.PropTypes.number,
  }

  static defaultProps = {
    selectedIndex: -1,
    renderTabPane: false,
  }

  render() {
    const { className } = this.props;

    return (
      <li className="nav-tabs__item">
        <a className="nav-tabs__item__link" data-toggle="tab">{this.props.children}</a>
      </li>
    );
  }
}

export default NavTabsItem;
