import React  from 'react';

class TabPane extends React.Component {
  static displayName = 'TabPane';

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
      <div className="tabs-content__pane active">{this.props.children}</div>
    );
  }
}

export default TabPane;
