import React  from 'react';
import cx     from 'classnames';

class TabContentPane extends React.Component {
  static displayName = 'TabContentPane';

  static propTypes = {
    active:           React.PropTypes.bool,
    className:        React.PropTypes.string,
    children:         React.PropTypes.node,
  }

  static defaultProps = {
    active: false,
  }

  render() {
    const { className, active } = this.props;

    const paneClasses = cx('tabs-content__pane', className, {
      'active': active, //eslint-disable-line
    });

    return (
      <div className={paneClasses}>
        {this.props.children}
      </div>
    );
  }
}
export default TabContentPane;
