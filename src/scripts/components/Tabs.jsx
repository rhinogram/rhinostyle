import React from 'react';

class Tabs extends React.Component {
  static displayName = 'Tabs';

  static propTypes = {
    children:         React.PropTypes.node,
  }


  render() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Tabs;
