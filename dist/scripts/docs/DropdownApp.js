"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _DropdownMultiSelectAdvanced = _interopRequireDefault(require("../components/DropdownMultiSelectAdvanced"));

var _DateRangeDropdown = _interopRequireDefault(require("../components/DateRangeDropdown"));

var _DropdownExample = _interopRequireDefault(require("./examples/Dropdown.example.txt"));

var _DropdownCheckboxExample = _interopRequireDefault(require("./examples/DropdownCheckbox.example.txt"));

var _DropdownMultiSelectExample = _interopRequireDefault(require("./examples/DropdownMultiSelect.example.txt"));

var _DropdownMenuHeaderExample = _interopRequireDefault(require("./examples/DropdownMenuHeader.example.txt"));

var _DropdownMenuItemExample = _interopRequireDefault(require("./examples/DropdownMenuItem.example.txt"));

var _DropdownMenuItemWildExample = _interopRequireDefault(require("./examples/DropdownMenuItemWild.example.txt"));

var _DropdownMultiSelectAdvancedExample = _interopRequireDefault(require("./examples/DropdownMultiSelectAdvanced.example.txt"));

var _DateRangeDropdownExample = _interopRequireDefault(require("./examples/DateRangeDropdown.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DropdownDocs = {
  autoFocusInput: 'Set autofocus to false to blur the input inside the dropdown. By default its value is true giving a focus to the inputs.',
  activeKey: 'The id of the currently selected DropdownMenuItem',
  block: 'Block level',
  disableScroll: 'Disabled default dropdown menu scrolling. Does not apply when filter is used.',
  hideCaret: 'Hide Dropdown caret',
  label: 'Text in dropdown when closed',
  lockLabel: 'Do not change label text when selecting item',
  position: "Position of Dropdown <code>oneOf(['right', 'top', 'top-right'])</code>",
  // eslint-disable-line single-quotes
  size: "Size of Dropdown <code>oneOf(['small', 'large'])</code>",
  // eslint-disable-line single-quotes
  onSelect: 'Callback when a DropdownMenuItem is selected',
  type: "<code>oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-primary', 'outline-reversed', 'link', 'link-muted'])</code>",
  // eslint-disable-line single-quotes, max-len
  wide: 'Sets a min-width on dropdown menu',
  manualClose: 'Disables the default action of closing on an outside click. <code>&lt;Close /&gt;</code> must appear in <code>&lt;DropdownMenuItemWild /&gt;</code> component to close. Refer to example below.',
  // eslint-disable-line max-len
  noChangeLabel: 'Displays default label in place of currently selected label.'
};
var DropdownCheckboxDocs = {
  activeKey: 'The id of the currently selected DropdownMenuItem',
  block: 'Block level',
  disableScroll: 'Disabled default dropdown menu scrolling. Does not apply when filter is used.',
  hideCaret: 'Hide Dropdown caret',
  label: 'Text in dropdown when closed',
  lockLabel: 'Do not change label text when selecting item',
  position: "Position of Dropdown <code>oneOf(['right', 'top', 'top-right'])</code>",
  // eslint-disable-line single-quotes
  size: "Size of Dropdown <code>oneOf(['small', 'large'])</code>",
  // eslint-disable-line single-quotes
  onSelect: 'Callback when a DropdownMenuItem is selected',
  type: "<code>oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-primary', 'outline-reversed', 'link', 'link-muted', 'checkbox', 'checkbox-muted'])</code>",
  // eslint-disable-line single-quotes, max-len
  wide: 'Sets a min-width on dropdown menu',
  manualClose: 'Disables the default action of closing on an outside click. <code>&lt;Close /&gt;</code> must appear in <code>&lt;DropdownMenuItemWild /&gt;</code> component to close. Refer to example below.',
  // eslint-disable-line max-len
  isCheckbox: 'Enable the checkbox.',
  checkboxClassName: 'Classes to be applied to checkbox. <code>partially-checked</code> class can be applied.',
  isChecked: 'Current state of checkbox.',
  onChange: 'Callback when checkbox is clicked.',
  labelValueAssociated: 'Total no. of items present of the same category as the DropdownMenuItem selected.',
  showAssociatedLabel: 'Enables labelValueAssociated.'
};
var DateRangeDropdownDocs = {
  activeKey: 'The id of the currently selected DropdownMenuItem',
  startDate: 'Default selected Start date for calendar',
  endDate: 'Default selected End date for calendar',
  minDate: 'Minimum date for calendar',
  maxDate: 'Maximum date for calendar',
  position: 'Position of Dropdown',
  name: 'Name of the dropdown',
  selectDate: 'Function to set start date and end date in to start of container',
  dropdownMenuItems: 'Menu Items to be displayed as options',
  selectDateRange: 'Function to calculate start date and end date on basis of selected option',
  isCustomDate: 'Boolean value to render custom date selector'
};
var DropdownMultiSelectDocs = {
  activeKey: 'The id of the currently selected DropdownMenuItem',
  block: 'Block level',
  label: 'Text in dropdown when closed',
  position: "Position of Dropdown <code>oneOf(['right', 'top', 'top-right'])</code>",
  // eslint-disable-line single-quotes
  size: "Size of Dropdown <code>oneOf(['small', 'large'])</code>",
  // eslint-disable-line single-quotes
  onSelect: 'Callback when a DropdownMenuItem is selected',
  placeholder: 'Any placeholder text you want in the dropdown',
  wide: 'Sets a min-width on dropdown menu'
};
var DropdownMenuHeaderDocs = {
  className: 'Include additional class name(s)'
};
var DropdownMenuItemDocs = {
  avatar: 'Path to avatar image',
  blankWindow: 'Open URL in blank browser window',
  id: 'Identifies the selected item in Dropdown when you want to use as a Dropdown Select',
  label: 'Label for item',
  labelDesc: 'Description for label',
  route: '<code>react-router</code> route'
};
var DropdownMenuItemWildDocs = {
  toggleDropdown: 'Clicking will close the dropdown'
};
var DropdownScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Button: _components.Button,
  Close: _components.Close,
  Dropdown: _components.Dropdown,
  DropdownCheckbox: _components.DropdownCheckbox,
  DropdownFilter: _components.DropdownFilter,
  DropdownMenuDivider: _components.DropdownMenuDivider,
  DropdownMenuHeader: _components.DropdownMenuHeader,
  DropdownMenuItem: _components.DropdownMenuItem,
  DropdownMenuItemWild: _components.DropdownMenuItemWild,
  DropdownMenuScroll: _components.DropdownMenuScroll,
  DropdownMultiSelect: _components.DropdownMultiSelect,
  Icon: _components.Icon,
  UtilityInlineGrid: _components.UtilityInlineGrid,
  DropdownMultiSelectAdvanced: _DropdownMultiSelectAdvanced.default,
  DateRangeDropdown: _DateRangeDropdown.default
};

var DropdownApp = function DropdownApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Dropdowns"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "We have two main dropdown components: ", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "Dropdown"), " and ", _react.default.createElement("span", {
    className: "u-text-accent"
  }, "DropdownMultiSelect"), ".")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Dropdown Types"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Types are the same as the Button component with one exception - Dropdowns include an ", _react.default.createElement("code", null, "input"), " type so that they mimic form controls."), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Dropdown, {
    label: "Default"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  }), _react.default.createElement("div", {
    className: "dropdown__menu__container"
  }, _react.default.createElement(_components.Button, {
    block: true,
    type: "outline-primary",
    size: "small"
  }, "Log Out"))), _react.default.createElement(_components.Dropdown, {
    label: "Input",
    type: "input"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    label: "Primary",
    type: "primary"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    label: "Secondary",
    type: "secondary"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    label: "Outline Primary",
    type: "outline-primary"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    label: "Link",
    type: "link"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    type: "link",
    icon: "search"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    type: "default",
    icon: "search"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    type: "primary",
    icon: "lock"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    type: "secondary",
    icon: "cog"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    type: "outline-primary",
    icon: "lock"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    label: "Link with Color Utility",
    type: "link",
    className: "u-text-body"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })), _react.default.createElement(_components.Dropdown, {
    position: "center",
    avatar: {
      image: '//source.unsplash.com/category/people/200x200',
      name: 'Ben Bruning',
      type: 'member',
      size: 'small'
    }
  }, _react.default.createElement(_components.DropdownMenuItem, {
    label: "Dropdown menu after clicking on an avatar Image",
    labelDesc: "This dropdown button displays image"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Url Blank Window Item",
    labelDesc: "Click me and I will take you to a site that opens in a new browser window.",
    url: "http://www.rhinogram.com",
    blankWindow: true
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Url Item",
    labelDesc: "Click me and I will take you to a new site in the same browser window.",
    url: "http://www.rhinogram.com"
  })), _react.default.createElement(_components.Dropdown, {
    label: "Without Focus",
    type: "primary",
    autoFocusInput: false
  }, _react.default.createElement(_components.DropdownMenuItemWild, null, _react.default.createElement(_components.Input, {
    label: "First Name",
    name: "firstName"
  })), _react.default.createElement(_components.DropdownMenuItemWild, null, _react.default.createElement(_components.Input, {
    label: "Last Name",
    name: "lastName"
  }))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Dropdown Modifiers"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Dropdown Block"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "block"), " property to create 100% width, block level dropdown."), _react.default.createElement(_components.Dropdown, {
    label: "Dropdown Block",
    type: "default",
    icon: "cog",
    block: true
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  }))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Dropdown Right"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "position=\"right\""), " property."), _react.default.createElement(_components.Dropdown, {
    label: "Dropdown Right",
    type: "default",
    position: "right"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  }))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Dropdown Center"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "position=\"center\""), " property."), _react.default.createElement(_components.Dropdown, {
    label: "Dropdown Center",
    type: "default",
    position: "center"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  }))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Dropdown Top"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "position=\"top\""), " property."), _react.default.createElement(_components.Dropdown, {
    label: "Dropdown Top",
    type: "default",
    position: "top"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  }))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Dropdown Top & Right"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "position=\"top-right\""), " property."), _react.default.createElement(_components.Dropdown, {
    label: "Dropdown Top Right",
    type: "default",
    position: "top-right"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  }))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Dropdown Top & Center"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "position=\"top-center\""), " property."), _react.default.createElement(_components.Dropdown, {
    label: "Dropdown Top Center",
    type: "default",
    position: "top-center"
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  }))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Dropdown Wide"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "wide"), " property. This gives the dropdown menu a larger min-width value. Handy when you want to include an input filter."), _react.default.createElement(_components.Dropdown, {
    label: "Dropdown Wide",
    type: "default",
    wide: true
  }, _react.default.createElement(_components.DropdownMenuHeader, {
    label: "Menu Header"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Another Item"
  }), _react.default.createElement(_components.DropdownMenuItem, {
    label: "A third item"
  }), _react.default.createElement(_components.DropdownMenuDivider, null), _react.default.createElement(_components.DropdownMenuItem, {
    label: "Separated Item"
  })))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Dropdown"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Use ", _react.default.createElement("code", null, "Dropdown"), " component to create a dropdown with selectable menu items. Selected menu items are reflected in the dropdown button's text when an", _react.default.createElement("code", null, "id"), " is used in ", _react.default.createElement("code", null, "DropdownMenuItem"), ". To prevent this, use the ", _react.default.createElement("code", null, "lockLabel"), " property."), _react.default.createElement("p", {
    className: "site-copy"
  }, "Use ", _react.default.createElement("code", null, "type=\"input\""), " if you want dropdown to appear like a form input."), _react.default.createElement(_components2.Live, {
    code: _DropdownExample.default,
    scope: DropdownScope,
    component: _components.Dropdown,
    propDescriptions: DropdownDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Dropdown Checkbox"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Use ", _react.default.createElement("code", null, "Dropdown Checkbox"), " component to create a dropdown with selectable menu items and a checkbox. The main use of this component is for performing bulk actions. The checkbox is used to select multiple items at a time."), _react.default.createElement("p", {
    className: "site-copy"
  }, "Add ", _react.default.createElement("code", null, "checkboxClassName=\"partially-checked\""), " property for partial selections."), _react.default.createElement("p", {
    className: "site-copy"
  }, "The label associated to an option is enabled using ", _react.default.createElement("code", null, "showAssociatedLabel"), " in ", _react.default.createElement("code", null, "DropdownCheckbox"), ". Use ", _react.default.createElement("code", null, "type=\"checkbox\""), " if you want a checkbox to display the component as below."), _react.default.createElement(_components2.Live, {
    code: _DropdownCheckboxExample.default,
    scope: DropdownScope,
    component: _components.DropdownCheckbox,
    propDescriptions: DropdownCheckboxDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Dropdown MultiSelect"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Use ", _react.default.createElement("code", null, "DropdownMultiSelect"), " component to create a multi-select list of ", _react.default.createElement("code", null, "DropdownMenuItem(s)"), ". This dropdown and dropdown menu will always have 100% width and the appearance of a form input. Selected items are shown as \"pills\" below the dropdown."), _react.default.createElement(_components2.Live, {
    code: _DropdownMultiSelectExample.default,
    scope: DropdownScope,
    component: _components.DropdownMultiSelect,
    propDescriptions: DropdownMultiSelectDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Dropdown MultiSelect Advanced"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Use ", _react.default.createElement("code", null, "DropdownMultiSelectAdvanced"), " component to create a multi-select list of items. This dropdown and dropdown menu will always have 100% width and the appearance of a form input. Selected items are shown as \"pills\" below the dropdown. This will allow you to select multiple items, search, preview of selected items and clear all items."), _react.default.createElement(_components2.Live, {
    code: _DropdownMultiSelectAdvancedExample.default,
    scope: DropdownScope,
    component: _DropdownMultiSelectAdvanced.default,
    propDescriptions: DropdownMultiSelectDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "DropdownMenuHeader"), _react.default.createElement(_components2.Live, {
    code: _DropdownMenuHeaderExample.default,
    scope: DropdownScope,
    component: _components.DropdownMenuHeader,
    propDescriptions: DropdownMenuHeaderDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "DropdownMenuItem"), _react.default.createElement(_components2.Live, {
    code: _DropdownMenuItemExample.default,
    scope: DropdownScope,
    component: _components.DropdownMenuItem,
    propDescriptions: DropdownMenuItemDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "DropdownMenuItemWild"), _react.default.createElement(_components2.Live, {
    code: _DropdownMenuItemWildExample.default,
    scope: DropdownScope,
    component: _components.DropdownMenuItemWild,
    propDescriptions: DropdownMenuItemWildDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Date Range Dropdoen"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Use ", _react.default.createElement("code", null, "DateRangeDropdown"), " component to create custom date range selector. This dropdown and dropdown menu will always have 100% width and the appearance of a form input. Selected items are shown as \"pills\" below the dropdown. This will allow you to select date range on basis of selected option to fetch data within a date range"), _react.default.createElement(_components2.Live, {
    code: _DateRangeDropdownExample.default,
    scope: DropdownScope,
    component: _DateRangeDropdown.default,
    propDescriptions: DateRangeDropdownDocs
  })));
};

_reactDom.default.render(_react.default.createElement(DropdownApp, null), document.getElementById('root'));