import React from 'react';
import cx from 'classnames';
import onClickOutside from 'react-onclickoutside';

class DropdownMultiSelect extends React.Component {
  static displayName = 'RhinoDropdownMultiSelect';

  static propTypes = {
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    disabled:     React.PropTypes.bool,
    placeholder:  React.PropTypes.string,
    position:     React.PropTypes.string,
  };

  static defaultProps = {
    disabled:     false,
    placeholder:  'Click or type to select more ...',
    type:         'default',
  };

  state = {
    isOpen: false,
  };

  _handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  render() {
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

    return (
      <div className={dropdownClasses}>
        <input onClick={this._handleToggle} type="text" className={dropdownToggleClasses} placeholder={placeholder} />
        <ul className={dropdownMenuClasses}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const DropdownMultiSelectDocs = DropdownMultiSelect;
export { DropdownMultiSelectDocs };

export default onClickOutside(DropdownMultiSelect);
