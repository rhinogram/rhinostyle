import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuScroll from './DropdownMenuScroll';

class DropdownSelectFilter extends React.Component {
  static displayName = 'RhinoDropdownSelectFilter';

  static propTypes = {
    activeKey:    React.PropTypes.number,
    children:     React.PropTypes.node,
    select:       React.PropTypes.func,
  };

  static defaultProps = {
    active:   false,
    block:    false,
    disabled: false,
    select:   () => {},
    type:     'default',
    wide:     false,
  };

  getChildren = () => {
    const results = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        results.push(React.cloneElement(child, {
          click: () => this.props.select(child.props.id),
          active: child.props.id === this.props.activeKey,
          key: child.props.id,
        }));
      }
    });

    return results;
  }

  state = {
    results: this.getChildren(),
  };

  componentWillReceiveProps(nextProps) {
    //if (nextProps.activeKey !== this.props.activeKey) {
      // this.setState({
      //   results: this.getChildren(),
      // });

      //    console.log('receiving props', this.props)
  //  }
  }

  handleFilter = (e) => {
    //const query = e.target.value;
    // const results = [];
    // const children = this.props.children;
    //
    // React.Children.forEach(children, child => {
    //   if (child.type === DropdownMenuItem) {
    //     const searchText = child.props.children;
    //
    //     if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
    //       results.push(React.cloneElement(child, {
    //         click: () => this.props.select(child.props.id),
    //         active: child.props.id === this.props.activeKey,
    //         key: child.props.id,
    //       }));
    //     }
    //   }
    // });

    const query = e.target.value;
    const results = [];
    const children = this.props.children;

  //  this.state.results.forEach((child) => {
    React.Children.forEach(children, child => {
      console.log('chillin', child);
      if (child.type === DropdownMenuItem) {
        const searchText = child.props.children;

        if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          results.push(React.cloneElement(child, {
            click: () => this.props.select(child.props.id),
            active: child.props.id === this.props.activeKey,
            key: child.props.id,
          }));
        }
      }
    });

    this.setState({
      results,
    });
  }

  render() {
    return (
      <div>
        <div className="dropdown__menu__container">
          <input type="text" className="form__control" id="exampleInputDropdown" placeholder="Filter contact" onChange={this.handleFilter} />
        </div>
        <DropdownMenuScroll>
          {this.state.results}
        </DropdownMenuScroll>
      </div>
    );
  }
}

export default DropdownSelectFilter;
