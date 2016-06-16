import React  from 'react';
import cx    from 'classnames';

class TabsContent extends React.Component {
  static displayName = 'TabsContent';

  static propTypes = {
    className:        React.PropTypes.string,
    children:         React.PropTypes.node,
    renderTabPane:    React.PropTypes.bool,
    selectedIndex:    React.PropTypes.number,
    active:           React.PropTypes.bool,
  }

  static defaultProps = {
    selectedIndex: -1,
    renderTabPane: false,
    active: true,
  }

  render() {
    const { className, active } = this.props;

    const classes = cx('tabs-content__pane', className, {
      'active': active,
    });


    return (
      <div className={classes}>{this.props.children}</div>
    );
  }
}

export default TabsContent;
