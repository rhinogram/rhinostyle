"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _InputExample = _interopRequireDefault(require("./examples/Input.example.txt"));

var _SelectExample = _interopRequireDefault(require("./examples/Select.example.txt"));

var _TextareaExample = _interopRequireDefault(require("./examples/Textarea.example.txt"));

var _MessageBoxExample = _interopRequireDefault(require("./examples/MessageBox.example.txt"));

var _CheckboxExample = _interopRequireDefault(require("./examples/Checkbox.example.txt"));

var _RadioExample = _interopRequireDefault(require("./examples/Radio.example.txt"));

var _SlidingRadioExample = _interopRequireDefault(require("./examples/SlidingRadio.example.txt"));

var _RhinoSwitchExample = _interopRequireDefault(require("./examples/RhinoSwitch.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var InputDocs = {
  addon: "Display an add-on on the input, as a string <code>oneOf(['left', 'right', 'both'])</code>",
  // eslint-disable-line single-quotes
  autoCapitalize: 'Adjust the capitalization settings of an input ' + // eslint-disable-line single-quotes
  "<code>oneOf(['none', 'sentences', 'words', 'characters'])</code>",
  // eslint-disable-line single-quotes
  autoComplete: "Adjust the completion settings on an input <code>oneOf(['off', 'on'])</code>",
  // eslint-disable-line single-quotes
  clear: 'Form control gets a clear value button',
  customHTMLAttributes: "Any additional attributes you want to pass down to the <code>< input ></code> selector.\n    <br><br>These should be contained in an object, with each item in the object formatted as <code>'data-test': 'my input'</code>\n    <br><br><strong>NOTE:</strong> Only traditional custom attributes such as 'data-' or  'aria-' attributes will be rendered to the DOM",
  customInputClasses: 'Add any custom classes directly to the <code>< input ></code> element of the component',
  disabled: 'Disable the input',
  format: 'Accepts object with custom formatting/mask operations',
  initialValue: 'Any initial value for the input',
  label: 'A label for the input',
  naked: 'Form control is stripped down in appearance',
  name: 'A name attribute for the input',
  onChange: 'A callback function that is executed when the input value changes',
  placeholder: 'Any placeholder text you want in the input',
  required: 'Field is required and asterisk is added to label',
  size: 'Impacts size of input - [large]',
  type: 'As a string, what type of input you are creating - ' + // eslint-disable-line single-quotes
  "<code>oneOf(['email', 'password', 'number', 'search', 'tel'])</code>" // eslint-disable-line single-quotes

};
var InputScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Icon: _components.Icon,
  Input: _components.Input
};
var SelectDocs = {
  label: 'A label for the select',
  name: 'An id for the label and the select, use if you want clicking the label to activate the select',
  options: 'Array of objects that contain the values and text for the options, with an optional selected key, { id: number|string, value: string }',
  disabled: 'Disable the select',
  required: 'Field is required and asterisk is added to label',
  onSelect: 'Function that returns the name of the Select and the value that was selected',
  selected: 'String that pre-selects an option'
};
var SelectScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Select: _components.Select
};
var selectOpts = [{
  id: 0,
  value: '--'
}, {
  id: 1,
  value: 'Option One'
}, {
  id: 2,
  value: 'Option Two'
}, {
  id: 3,
  value: 'Option Three'
}, {
  id: 4,
  value: 'Option Four'
}];
var TextareaDocs = {
  abbrMaxCharacters: 'Abbreviated max character count - only the count is displayed',
  initialValue: 'Any initial value for the textarea',
  label: 'A label for the textarea',
  maxCharacters: 'Set a maximum character limit in order to display character count',
  naked: 'Form control is stripped down in appearance',
  name: 'A name attribute for the textarea',
  disabled: 'Disable the textarea',
  onChange: 'A callback function that is executed when the textarea value changes',
  placeholder: 'Any placeholder text you want in the textarea'
};
var TextareaScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Textarea: _components.Textarea
};
var MessageBoxDocs = {
  label: 'A label for the textarea',
  disabled: 'Disable the textarea',
  naked: 'Form control is stripped down in appearance',
  name: 'A name attribute for the message box',
  placeholder: 'Any placeholder text you want in the textarea',
  initialValue: 'Any initial value for the textarea',
  maxHeight: 'Controls the max-height (default: 20rem)'
};
var MessageBoxScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  MessageBox: _components.MessageBox
};
var CheckboxDocs = {
  isChecked: 'Set initial checked state',
  disabled: 'Disable the checkbox',
  name: 'An id, and label for the checkbox',
  onClick: 'A function you want to trigger when the checkbox is toggled',
  onChange: 'A function that returns the name and value of the checkbox',
  children: '(Currently) only for use when <code>&lt;CheckboxGroup /&gt;</code> has blockGroup prop; shows content based on select state of option'
};
var CheckboxScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Checkbox: _components.Checkbox,
  CheckboxGroup: _components.CheckboxGroup,
  UtilityInlineGrid: _components.UtilityInlineGrid,
  UtilityList: _components.UtilityList,
  UtilityListItem: _components.UtilityListItem
};
var RadioDocs = {
  label: 'Text visible to user next to radio button',
  disabled: 'Disable the radio button',
  name: 'A name attribute for the radio. Automatically passed down from <code>&lt;RadioGroup /&gt;</code>',
  inline: 'Wrap radio button group in <code>&lt;UtilityInlineGrid&gt;</code> component',
  onChange: 'A function you which to trigger when you change the selection',
  selectedValue: 'The radio you want selected, when used in a group',
  value: 'A value for the radio',
  children: '(Currently) only for use when <code>&lt;RadioGroup /&gt;</code> has blockGroup prop; shows content based on select state of option'
};
var RadioScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  RadioGroup: _components.RadioGroup,
  Radio: _components.Radio,
  UtilityList: _components.UtilityList,
  UtilityListItem: _components.UtilityListItem
};
var SlidingRadioDocs = {
  label: 'Text visible to user above component',
  disabled: 'Disable the component',
  options: 'An array of objects consisting of <code>name, value, and type</code>.&nbsp;' + 'The <code>type</code> value is string identifyer for color class selections - <code>oneOf(["warning", "danger", "secondary"])</code>',
  onChange: 'A function you which to trigger when you change the selection',
  selectedValue: 'The sliding radio you want selected',
  className: 'Class to be applied to the individual sliding radios',
  name: 'A name attribute for the component'
};
var SlidingRadioScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  SlidingRadio: _components.SlidingRadio,
  UtilitySystem: _components.UtilitySystem,
  FormLabel: _components.FormLabel
};
var RhinoSwitchDocs = {
  disabled: 'Disable the switch',
  isChecked: 'Set initial on/off state',
  label: 'A label for the switch',
  name: 'A name attribute for the switch',
  onChange: 'A function that returns the name and value of the switch',
  onClick: 'A function that returns the value of the switch'
};
var RhinoSwitchScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  RhinoSwitch: _components.RhinoSwitch
};

var FormApp = function FormApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Forms"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "Forms are assembled using our suite of custom form components. It is important to understand that form components have a ", _react.default.createElement("code", null, "form__control"), " class for consistent appearance. Form components are also wrapped in a ", _react.default.createElement("code", null, "form__group"), " class which provides vertical spacing. Finally, you may use the ", _react.default.createElement("code", null, "form__section"), " class to provide vertical spacing between sections of a form.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Form Example"), _react.default.createElement("form", {
    className: "form"
  }, _react.default.createElement(_components.Input, {
    name: "exampleInputEmail1",
    label: "Email Address",
    placeholder: "Email",
    type: "email",
    required: true
  }), _react.default.createElement(_components.Input, {
    name: "exampleInputPassword1",
    label: "Password",
    placeholder: "Password",
    type: "password",
    required: true
  }), _react.default.createElement(_components.Select, {
    name: "exampleSelect1",
    label: "Select",
    options: selectOpts,
    required: true
  }), _react.default.createElement(_components.Textarea, {
    label: "Text Area",
    name: "exampleTextarea1",
    placeholder: "Enter some text",
    required: true
  }), _react.default.createElement(_components.MessageBox, {
    label: "Message Box",
    placeholder: "Enter some text",
    name: "exampleMessageBoxarea1",
    required: true
  }), _react.default.createElement(_components.CheckboxGroup, {
    label: "Checkboxes"
  }, _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox1",
    label: "Checkbox One"
  }), _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox2",
    label: "Checkbox Two"
  }), _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox3",
    label: "Checkbox Three"
  })), _react.default.createElement(_components.RadioGroup, {
    inline: true,
    name: "exampleRadio1",
    label: "Radios",
    selectedValue: "2"
  }, _react.default.createElement(_components.Radio, {
    value: "1",
    label: "Radio One"
  }), _react.default.createElement(_components.Radio, {
    value: "2",
    label: "Radio Two"
  }), _react.default.createElement(_components.Radio, {
    value: "3",
    label: "Radio Three"
  })), _react.default.createElement(_components.RhinoSwitch, {
    label: "Switcher",
    name: "exampleSwitch1"
  }), _react.default.createElement("div", {
    className: "u-m-t",
    style: {
      width: '30rem'
    }
  }, _react.default.createElement(_components.SlidingRadio, {
    selectedValue: "2",
    label: "Sliding Radios",
    name: "exampleSlidingRadio1",
    options: [{
      label: 'Denied',
      value: '1',
      type: 'danger'
    }, {
      label: 'Unknown',
      value: '2',
      type: 'warning'
    }, {
      label: 'Granted',
      value: '3',
      type: 'secondary'
    }]
  })), _react.default.createElement("div", {
    className: "form__group u-text-right"
  }, _react.default.createElement(_components.Button, {
    type: "primary"
  }, "Submit Form")))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Input"), _react.default.createElement("p", {
    className: "site-copy"
  }, "We are using the ", _react.default.createElement("a", {
    href: "http://nosir.github.io/cleave.js/"
  }, "cleave"), " package to enhance inputs with formatting/masking ability."), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Common Input"), _react.default.createElement(_components.Input, {
    name: "exampleInputEmail31",
    label: "Email Address",
    type: "email",
    required: true
  }), _react.default.createElement(_components.Input, {
    name: "exampleInputName31",
    label: "First Name",
    placeholder: "First Name",
    type: "text",
    initialValue: "Craig"
  }), _react.default.createElement(_components.Input, {
    name: "exampleInputPassword31",
    label: "Password",
    placeholder: "Password",
    type: "password"
  })), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Input Add-On"), _react.default.createElement("div", {
    className: "site-copy"
  }, _react.default.createElement("p", null, "Use the ", _react.default.createElement("code", null, "addon"), " property on Inputs with add-ons. Pass the addons as renderable nodes.")), _react.default.createElement(_components.Input, {
    name: "example34534534453",
    addon: "left",
    type: "text",
    placeholder: "Encrypted"
  }, _react.default.createElement(_components.Icon, {
    icon: "lock"
  })), _react.default.createElement(_components.Input, {
    name: "example234232",
    addon: "left",
    type: "text",
    placeholder: "Search"
  }, _react.default.createElement(_components.Icon, {
    icon: "search"
  })), _react.default.createElement(_components.Input, {
    name: "example2342323",
    addon: "right",
    type: "text"
  }, _react.default.createElement(_components.Button, {
    reset: true,
    className: "u-text-primary"
  }, "Go For It!")), _react.default.createElement(_components.Input, {
    name: "example235436345",
    addon: "both",
    type: "text",
    placeholder: "Lorem ipsum dolor sit"
  }, _react.default.createElement("span", null, "Amount $"), _react.default.createElement("span", null, ".00"))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Clear Input"), _react.default.createElement("div", {
    className: "site-copy"
  }, _react.default.createElement("p", null, "Use the ", _react.default.createElement("code", null, "clear"), " property on Inputs to include a clear value button.")), _react.default.createElement(_components.Input, {
    name: "exampleInputText111",
    label: "Clear Input",
    type: "text",
    clear: true
  })), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Naked Input"), _react.default.createElement("div", {
    className: "site-copy"
  }, _react.default.createElement("p", null, "Use the ", _react.default.createElement("code", null, "naked"), " property on Inputs to strip it of background, border, height, and padding.")), _react.default.createElement(_components.Input, {
    name: "exampleInputText999",
    placeholder: "Naked Input",
    type: "text",
    naked: true
  })), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Large Input"), _react.default.createElement("div", {
    className: "site-copy"
  }, _react.default.createElement("p", null, "Use the ", _react.default.createElement("code", null, "size"), " property on Inputs increase its size.")), _react.default.createElement(_components.Input, {
    addon: "left",
    size: "large",
    name: "exampleInputText999",
    placeholder: "Large Input",
    type: "text"
  }, _react.default.createElement(_components.Icon, {
    icon: "search"
  }))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Input Masking"), _react.default.createElement("div", {
    className: "site-copy"
  }, _react.default.createElement("p", null, "Use ", _react.default.createElement("code", null, "format"), " property alongside options from", _react.default.createElement("a", {
    href: "https://github.com/nosir/cleave.js"
  }, "Cleave.js"), " to mask inputs for easier masking/validation. ", _react.default.createElement("em", null, "Date example below."))), _react.default.createElement(_components.Input, {
    format: {
      date: true,
      datePattern: ['m', 'd', 'Y']
    },
    explanationMessage: "Format MM/DD/YYYY",
    name: "exampleInputText9999",
    placeholder: "Enter a date",
    type: "text"
  }))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Input Playground"), _react.default.createElement(_components2.Live, {
    code: _InputExample.default,
    scope: InputScope,
    component: _components.Input,
    propDescriptions: InputDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Text Area"), _react.default.createElement(_components.Textarea, {
    label: "Text Area",
    name: "exampleTextarea2",
    placeholder: "Enter some text"
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Text Area Playground"), _react.default.createElement(_components2.Live, {
    code: _TextareaExample.default,
    scope: TextareaScope,
    component: _components.Textarea,
    propDescriptions: TextareaDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Message Box "), _react.default.createElement("p", {
    className: "site-copy"
  }, "We are using the", _react.default.createElement("a", {
    href: "https://github.com/andreypopp/react-textarea-autosize",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "react-textarea-autosize"), "package, with custom styling for the autogrow functionality."), _react.default.createElement(_components.MessageBox, {
    label: "Message Box",
    name: "exampleMessageBoxarea2",
    placeholder: "Enter some text"
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Message Box Playground"), _react.default.createElement(_components2.Live, {
    code: _MessageBoxExample.default,
    scope: MessageBoxScope,
    component: _components.MessageBox,
    propDescriptions: MessageBoxDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Checkbox"), _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Rhinobox"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Our custom checkbox element is called ", _react.default.createElement("code", null, "rhinobox"), ". By default, these are stacked."), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Note:"), " Regardless of the amount, always wrap checkboxes in the", _react.default.createElement("code", null, "<CheckboxGroup>"), " component for proper spacing and the availability of the ", _react.default.createElement("code", null, "label"), "property."), _react.default.createElement(_components.CheckboxGroup, null, _react.default.createElement(_components.Checkbox, {
    isChecked: true,
    name: "exampleCheckbox11",
    label: "Checkbox One"
  }), _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox12",
    label: "Checkbox Two"
  }), _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox13",
    label: "Checkbox Three"
  })), _react.default.createElement("div", {
    className: "u-m-t-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Inline"), _react.default.createElement("p", {
    className: "site-copy"
  }, "To place checkboxes inline that wrap with automagic spacing, you can add the", _react.default.createElement("code", null, "inline"), " property to the ", _react.default.createElement("code", null, "<CheckboxGroup>"), " component."), _react.default.createElement(_components.CheckboxGroup, {
    inline: true
  }, _react.default.createElement(_components.Checkbox, {
    isChecked: true,
    name: "exampleCheckbox17",
    label: "Checkbox One"
  }), _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox18",
    label: "Checkbox Two"
  }), _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox19",
    label: "Checkbox Three"
  }))), _react.default.createElement("div", {
    className: "u-m-t-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Block Group"), _react.default.createElement("p", {
    className: "site-copy"
  }, "To place checkboxes inside a contained block, you can add the ", _react.default.createElement("code", null, "blockGroup"), "property to the ", _react.default.createElement("code", null, "<CheckboxGroup>"), " component."), _react.default.createElement(_components.CheckboxGroup, {
    blockGroup: true,
    label: "Checkboxes (block group)"
  }, _react.default.createElement(_components.Checkbox, {
    isChecked: true,
    name: "exampleCheckbox97",
    label: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: "form__block-group__label"
    }, "Checkbox 1"), _react.default.createElement("span", {
      className: "form__block-group__desc"
    }, "This is a test description"))
  }), _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox98",
    label: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: "form__block-group__label"
    }, "Checkbox 1"), _react.default.createElement("span", {
      className: "form__block-group__desc"
    }, "This is a test description"))
  }), _react.default.createElement(_components.Checkbox, {
    name: "exampleCheckbox99",
    label: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: "form__block-group__label"
    }, "Checkbox 1"), _react.default.createElement("span", {
      className: "form__block-group__desc"
    }, "This is a test description"))
  }, "I only show up when Checkbox 3 is selected!")))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Checkbox Playground"), _react.default.createElement(_components2.Live, {
    code: _CheckboxExample.default,
    scope: CheckboxScope,
    component: _components.Checkbox,
    propDescriptions: CheckboxDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Radio"), _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Rhinodio"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Our custom radio element is called ", _react.default.createElement("code", null, "rhinodio"), ". By default, these are stacked."), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Note:"), " Regardless of the amount, always wrap radio options in the", _react.default.createElement("code", null, "<RadioGroup>"), " component for proper spacing, ", _react.default.createElement("code", null, "name"), " attribute, and the availability of the ", _react.default.createElement("code", null, "label"), " property."), _react.default.createElement(_components.RadioGroup, {
    name: "exampleRadio2",
    selectedValue: "2"
  }, _react.default.createElement(_components.Radio, {
    value: "1",
    label: "Radio One"
  }), _react.default.createElement(_components.Radio, {
    value: "2",
    label: "Radio Two"
  }), _react.default.createElement(_components.Radio, {
    value: "3",
    label: "Radio Three"
  })), _react.default.createElement("div", {
    className: "u-m-t-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Inline"), _react.default.createElement("p", {
    className: "site-copy"
  }, "To place radios inline that wrap with automagic spacing, you can add the", _react.default.createElement("code", null, "inline"), " property to the ", _react.default.createElement("code", null, "<RadioGroup>"), " component."), _react.default.createElement(_components.RadioGroup, {
    inline: true,
    name: "exampleRadio4",
    selectedValue: "2"
  }, _react.default.createElement(_components.Radio, {
    value: "1",
    label: "Radio One"
  }), _react.default.createElement(_components.Radio, {
    value: "2",
    label: "Radio Two"
  }), _react.default.createElement(_components.Radio, {
    value: "3",
    label: "Radio Three"
  }))), _react.default.createElement("div", {
    className: "u-m-t-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Block Group"), _react.default.createElement("p", {
    className: "site-copy"
  }, "To place radios inside a contained block, you can add the", _react.default.createElement("code", null, "blockGroup"), " property to the", _react.default.createElement("code", null, "<RadioGroup>"), " component."), _react.default.createElement(_components.RadioGroup, {
    name: "asdlkaksl0932902093-2903",
    blockGroup: true,
    label: "Radios (block group)",
    selectedValue: "3"
  }, _react.default.createElement(_components.Radio, {
    value: "1",
    label: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: "form__block-group__label"
    }, "Radio 1"), _react.default.createElement("span", {
      className: "form__block-group__desc"
    }, "This is a test description"))
  }), _react.default.createElement(_components.Radio, {
    value: "2",
    label: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: "form__block-group__label"
    }, "Radio 2"), _react.default.createElement("span", {
      className: "form__block-group__desc"
    }, "This is a test description"))
  }), _react.default.createElement(_components.Radio, {
    value: "3",
    label: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: "form__block-group__label"
    }, "Radio 3"), _react.default.createElement("span", {
      className: "form__block-group__desc"
    }, "This is a test description"))
  }, "I only show up when Radio 3 is selected!")))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Radio Playground"), _react.default.createElement(_components2.Live, {
    code: _RadioExample.default,
    scope: RadioScope,
    component: _components.Radio,
    propDescriptions: RadioDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Select"), _react.default.createElement("div", null, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Rhinoselect"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Our custom select element is called ", _react.default.createElement("strong", null, "rhinoselect"), "."), _react.default.createElement(_components.Select, {
    name: "exampleSelect2",
    label: "Select",
    options: selectOpts
  }))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Select Playground"), _react.default.createElement(_components2.Live, {
    code: _SelectExample.default,
    scope: SelectScope,
    component: _components.Select,
    propDescriptions: SelectDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Switcher"), _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Rhinoswitcher"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Our custom switcher element is called ", _react.default.createElement("code", null, "rhinoswitcher"), ". Disable the switcher using the ", _react.default.createElement("code", null, "disabled"), " property."), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.RhinoSwitch, {
    name: "rhinoswitch2",
    isChecked: true
  }), _react.default.createElement(_components.RhinoSwitch, {
    name: "rhinoswitch3",
    isChecked: true,
    disabled: true
  }))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Switcher Playground"), _react.default.createElement(_components2.Live, {
    code: _RhinoSwitchExample.default,
    scope: RhinoSwitchScope,
    component: _components.RhinoSwitch,
    propDescriptions: RhinoSwitchDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Sliding Radio"), _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Rhinoslidingradio"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Our custom radio element is called ", _react.default.createElement("code", null, "rhinoslidingradio"), "."), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Note:"), " The ", _react.default.createElement("code", null, "SlidingRadio"), " component is automatically set to full width. To limit it's size, wrap the component in a ", _react.default.createElement("code", null, "div"), " tag (or similar HTML tag) with a set width."), _react.default.createElement("div", {
    className: "u-m-t",
    style: {
      width: '30rem'
    }
  }, _react.default.createElement(_components.SlidingRadio, {
    selectedValue: "2",
    name: "exampleSlidingRadio3",
    options: [{
      label: 'Denied',
      value: '1',
      type: 'danger'
    }, {
      label: 'Unknown',
      value: '2',
      type: 'warning'
    }, {
      label: 'Granted',
      value: '3',
      type: 'secondary'
    }]
  }))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Sliding Radio Playground"), _react.default.createElement(_components2.Live, {
    code: _SlidingRadioExample.default,
    scope: SlidingRadioScope,
    component: _components.SlidingRadio,
    propDescriptions: SlidingRadioDocs
  })));
};

_reactDom.default.render(_react.default.createElement(FormApp, null), document.getElementById('root'));