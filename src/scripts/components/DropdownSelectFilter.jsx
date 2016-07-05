import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuScroll from './DropdownMenuScroll';

class DropdownSelectFilter extends React.Component {
  static displayName = 'RhinoDropdownSelectFilter';

  static propTypes = {
    activeKey:       React.PropTypes.number,
    children:        React.PropTypes.node,
    icon:            React.PropTypes.string,
    handleToggle:    React.PropTypes.func,
    placeholder:     React.PropTypes.string,
    select:          React.PropTypes.func,
    updateActiveKey: React.PropTypes.func,
  };

  static defaultProps = {
    select:   () => {},
  };

  state = {
    items: this.props.children,
  };

  componentWillReceiveProps() {
    this.setState({
      items: this.getChildren(),
    });

    this.filterInput.value = '';
  }

  getChildren = () => {
    const items = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        items.push(React.cloneElement(child, {
          onClick: () => this.itemClick(child.props.id, child.props.icon),
          active: child.props.id === this.props.activeKey,
          key: child.props.id,
        }));
      }
    });

    return items;
  }

  itemClick = (id, icon) => {
    if (this.props.select && typeof(this.props.select === 'function')) {
      this.props.updateActiveKey(id, icon);
      this.props.select(id, icon);
    } else {
      this.props.updateActiveKey(id, icon);
    }

    this.props.handleToggle();
  }

  handleFilter = (e) => {
    const query = e.target.value;
    const items = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        const searchText = child.props.label;

        if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          items.push(React.cloneElement(child, {
            onClick: () => this.itemClick(child.props.id, child.props.icon),
            active: child.props.id === this.props.activeKey,
            key: child.props.id,
          }));
        }
      } else {
        items.push(child);
      }
    });

    this.setState({
      items,
    });
  }

  render() {
    const { placeholder } = this.props;
    const items = this.state.items;

    return (
      <div>
        <div className="dropdown__menu__container">
          {/* eslint no-return-assign:0 */}
          <input type="text" className="form__control" ref={(ref) => this.filterInput = ref} placeholder={placeholder} onChange={this.handleFilter} />
        </div>
        <DropdownMenuScroll>
          {items}
        </DropdownMenuScroll>
      </div>
    );
  }
}

export default DropdownSelectFilter;
