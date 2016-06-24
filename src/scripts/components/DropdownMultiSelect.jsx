import React from 'react';
import cx from 'classnames';
import onClickOutside from 'react-onclickoutside';
import DropdownMenuItem from './DropdownMenuItem';
import Pill from './Pill';

class DropdownMultiSelect extends React.Component {
  static displayName = 'RhinoDropdownMultiSelect';

  static propTypes = {
    activeKeys:   React.PropTypes.arrayOf(React.PropTypes.number),
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    disabled:     React.PropTypes.bool,
    label:        React.PropTypes.string,
    placeholder:  React.PropTypes.string,
    position:     React.PropTypes.string,
    select:       React.PropTypes.func,
  };

  static defaultProps = {
    activeKeys:   [],
    disabled:     false,
    placeholder:  'Click or type to select more ...',
    type:         'default',
  };

  state = {
    isOpen: false,
    activeKeys: [],
    results: this.props.children,
  };

  componentWillMount() {
    console.log('receive props');
    this.setState({
      results: this.getChildren(),
    });
    //this.filterInput.value = '';
  }

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, child => {
      if (child.type === DropdownMenuItem) {
        returnChild = React.cloneElement(child, {
          click: () => this.props.select(this.state.activeKeys.push(child.props.id)),
          active: this.props.activeKeys.indexOf(child.props.id) > -1,
        });
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleFilter = (e) => {
    const query = e.target.value;
    const results = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        const searchText = child.props.label;

        if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          results.push(React.cloneElement(child, {
            click: () => this.props.select(child.props.id),
            active: this.props.activeKeys.indexOf(child.props.id) > -1,
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

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  handleRemovePill = (id) => {
//    console.log('removing', id);
    const index = this.state.activeKeys.indexOf(id);
    const items = this.state.activeKeys.splice(index, 1);
    console.log('activekeys', this.state.activeKeys, items);
    this.setState({
      activeKeys: items,
    });
  }

  render() {
    console.log(this.state.activeKeys)
    const { disabled, placeholder, position } = this.props;

    const dropdownClasses = cx('dropdown', 'dropdown--multiselect', {
      open:  this.state.isOpen,
    });

    const dropdownToggleClasses = cx('dropdown__input', 'form__control', 'form__control--chevron', {
      'disabled': disabled, //eslint-disable-line
    });

    const dropdownMenuClasses = cx('dropdown__menu', {
      'dropdown__menu--right': position === 'right',
      'dropdown__menu--top': position === 'top',
      'dropdown__menu--top dropdown__menu--right': position === 'top-right',
    });

    const renderPill = (pill) => {
    //  console.log('rendering', pill)
      return (
        <Pill label="Ben" onClick={() => this.handleRemovePill(pill)} />
      );
    };

    return (
      <span>
        <div className={dropdownClasses}>
          <input onClick={this.handleToggle} type="text" className={dropdownToggleClasses} placeholder={placeholder} onChange={this.handleFilter} />
          <ul className={dropdownMenuClasses}>
            {this.state.results}
          </ul>
        </div>
        <div>
          {this.state.activeKeys.map(renderPill)}
        </div>
      </span>
    );
  }
}

const DropdownMultiSelectDocs = DropdownMultiSelect;
export { DropdownMultiSelectDocs };

export default onClickOutside(DropdownMultiSelect);
