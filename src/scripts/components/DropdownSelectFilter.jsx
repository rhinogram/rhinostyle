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
    activeKey: this.props.activeKey,
    items: this.props.children,
  };

  componentWillReceiveProps() {
    console.log('filter recieving props', this.props)
    this.setState({
      items: this.getChildren(),
    });

    this.filterInput.value = '';
  }

  componentWillMount() {
    console.log('filter mounting', this.props)
    this.setState({
      items: this.getChildren(),
    });

  //  this.filterInput.value = '';
  }

  componentDidUpdate() {
    console.log('filter component did update');
  }

  getChildren = () => {
    const items = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        const click = () => {
          console.log('child', child, this.props)
          if (this.props.select && typeof(this.props.select === 'function')) {
            this.props.updateActiveKey(child.props.id, child.props.icon);
            this.props.select(child.props.id, child.props.icon);
          } else {
            this.props.updateActiveKey(child.props.id, child.props.icon);
          }

          this.props.handleToggle();
        };

        items.push(React.cloneElement(child, {
          click,
          active: child.props.id === this.props.activeKey,
          key: child.props.id,
        }));
      }
    });

    return items;
  }

  handleFilter = (e) => {
    const query = e.target.value;
    const items = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        const searchText = child.props.label;

        if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          const click = () => {
            if (this.props.select && typeof(this.props.select === 'function')) {
              this.props.updateActiveKey(child.props.id, child.props.icon);
              this.props.select(child.props.id, child.props.icon);
            } else {
              this.props.updateActiveKey(child.props.id, child.props.icon);
            }

            this.props.handleToggle();
          };

          items.push(React.cloneElement(child, {
            click,
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

  // updateActiveKey = (index) => {
  //   this.setState({
  //     activeKey: index,
  //   });
  // }

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
