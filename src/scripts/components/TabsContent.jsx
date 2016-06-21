import React  from 'react';
import cx    from 'classnames';
import TabPane from './TabPane';

class TabsContent extends React.Component {
  static displayName = 'TabsContent';

  static propTypes = {
    active:          React.PropTypes.bool,
    activeKey:       React.PropTypes.number,
    children:        React.PropTypes.node,
    className:       React.PropTypes.string,
    setActiveKey:    React.PropTypes.func,
  }

  static defaultProps = {
    active:     false,
    activeKey:  1,
  };

  getChildren = () => {
    // getChildren should set active props on child elements
    // by default we want to set active = true on the content tab whose
    // activeKey matches the activeKey of a selected tab
    let returnChild = null;
    const children = this.props.children;
    return React.Children.map(children, child => {
      if (child.type === TabPane) {
        if (this.props.activeKey === child.props.activeKey) {
          returnChild = React.cloneElement(child, {
            // this click event is irrelevant -
            // clicks should only be handled on the Tabs themselves
            click: () => this.props.setActiveKey(child.props.activeKey),
            active: true,
          });
        } else {
          returnChild = React.cloneElement(child, {});
        }
      } else {
        returnChild = child;
      }
      return returnChild;
    });
  }

  render() {
    const { className } = this.props;

    const contentClasses = cx('tabs-content', className, {
      active: this.props.active, //eslint-disable-line
    });

    return (
      <div className={contentClasses}>{this.props.children}</div>
    );
  }
}

export default TabsContent;
