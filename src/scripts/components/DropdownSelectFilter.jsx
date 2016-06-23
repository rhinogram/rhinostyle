import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuScroll from './DropdownMenuScroll';

class DropdownSelectFilter extends React.Component {
  static displayName = 'RhinoDropdownSelectFilter';

  static propTypes = {
    activeKey:    React.PropTypes.number,
    children:     React.PropTypes.node,
    icon:         React.PropTypes.string,
    placeholder:  React.PropTypes.string,
    select:       React.PropTypes.func,
  };

  static defaultProps = {
    select:   () => {},
  };

  state = {
    results: this.props.children,
  };

  componentWillReceiveProps() {
    this.setState({
      results: this.getChildren(),
    });

    this.filterInput.value = '';
  }

  getChildren = () => {
    const results = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        results.push(React.cloneElement(child, {
          click: () => this.props.select(child.props.id, child.props.icon),
          active: child.props.id === this.props.activeKey,
          key: child.props.id,
        }));
      }
    });

    return results;
  }

  handleFilter = (e) => {
    const query = e.target.value;
    const results = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        const searchText = child.props.label;

        if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          results.push(React.cloneElement(child, {
            click: () => this.props.select(child.props.id, child.props.icon),
            active: child.props.id === this.props.activeKey,
            key: child.props.id,
          }));
        }
      } else {
        results.push(child);
      }
    });

    this.setState({
      results,
    });
  }

  render() {
    const { placeholder } = this.props;

    return (
      <div>
        <div className="dropdown__menu__container">
          {/* eslint no-return-assign:0 */}
          <input type="text" className="form__control" ref={(ref) => this.filterInput = ref} placeholder={placeholder} onChange={this.handleFilter} />
        </div>
        <DropdownMenuScroll>
          {this.state.results}
        </DropdownMenuScroll>
      </div>
    );
  }
}

export default DropdownSelectFilter;
