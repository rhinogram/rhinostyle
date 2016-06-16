import React  from 'react';
import cx     from 'classnames';


class NavTabs extends React.Component {
  static displayName = 'NavTabs';

  static propTypes = {
    children:         React.PropTypes.node,
    renderTabPane:    React.PropTypes.bool,
    selectedIndex:    React.PropTypes.number,
  }

  static defaultProps = {
    selectedIndex: -1,
    renderTabPane: false,
  }

  render() {
    return (
      <ul className="nav-tabs">
        {this.props.children}
      </ul>
    );
  }
}

export default NavTabs;
