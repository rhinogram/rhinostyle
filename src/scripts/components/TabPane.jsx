import React  from 'react';
import cx    from 'classnames';


class TabPane extends React.Component {
  static displayName = 'TabPane';

  static propTypes = {
    active:           React.PropTypes.bool,
    activeKey:        React.PropTypes.number,
    className:        React.PropTypes.string,
    children:         React.PropTypes.node,
    renderTabPane:    React.PropTypes.bool,
    selectedIndex:    React.PropTypes.number,
  }

  static defaultProps = {
    activeKey:  1,
    active: false,
  }

  render() {
    const { className } = this.props;

    const paneClasses = cx('tabs-content__pane', className, {
      active: this.props.active, //eslint-disable-line
    });

    return (
      <div className={paneClasses}>
        {this.props.children}
      </div>
    );
  }
}
export default TabPane;
