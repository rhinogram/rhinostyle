import PropTypes from 'prop-types';
import React from 'react';

import { DropdownMenuItem, DropdownMenuItemWild, DropdownMenuScroll } from '../components';

class DropdownFilter extends React.Component {
  static displayName = 'RhinoDropdownFilter';

  static propTypes = {
    activeKey: PropTypes.number,
    children: PropTypes.node,
    handleToggle: PropTypes.func,
    placeholder: PropTypes.string,
    onSelect: PropTypes.func,
    updateActiveKey: PropTypes.func,
  };

  static defaultProps = {
    onSelect: () => {},
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
    const children = this.props.children;
    let returnChild = null;

    return React.Children.map(children, (child) => {
      if (child.type === DropdownMenuItem) {
        returnChild = React.cloneElement(child, {
          onClick: () => this.itemClick(child),
          active: this.props.activeKey && (child.props.id === this.props.activeKey),
          key: child.props.id,
        });
      } else if (child.type === DropdownMenuItemWild) {
        returnChild = React.cloneElement(child, {
          handleToggle: this.props.handleToggle,
        });
      } else {
        returnChild = child;
      }
      return returnChild;
    });
  }

  itemClick2 = () => {
    this.props.handleToggle();
  }

  itemClick = (child) => {
    const id = child.props.id;
    const icon = child.props.icon;
    const onClick = child.props.onClick;

    if (id) {
      if (this.props.onSelect && typeof (this.props.onSelect === 'function')) {
        this.props.updateActiveKey(id, icon);
        this.props.onSelect(id, icon);
      } else {
        this.props.updateActiveKey(id, icon);
      }
    }

    if (onClick && typeof (onClick === 'function')) {
      onClick();
    }

    this.props.handleToggle();
  }

  handleFilter = (e) => {
    const query = e.target.value;
    const items = [];
    const children = this.props.children;

    React.Children.forEach(children, (child) => {
      if (child.type === DropdownMenuItem) {
        const searchText = child.props.label;

        if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          items.push(React.cloneElement(child, {
            onClick: () => this.itemClick(child),
            active: this.props.activeKey && (child.props.id === this.props.activeKey),
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
          <input type="text" className="form__control" ref={ref => (this.filterInput = ref)} placeholder={placeholder} onChange={this.handleFilter} />
        </div>
        <DropdownMenuScroll>
          {items}
        </DropdownMenuScroll>
      </div>
    );
  }
}

export default DropdownFilter;
