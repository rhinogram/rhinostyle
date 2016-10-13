import React    from 'react';
import ReactDOM from 'react-dom';

import { MessageBox, Button, Checkbox, Icon, Input, Radio, RadioGroup, RhinoSwitch, Select, Textarea } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved:0 */
const inputExample = require('raw!./examples/Input.example.txt');
const inputDocs  = {
  addon:        '[Optional] - Display an add-on on the input, as a string - [left | right | both]',
  clear:        '[Optional] - Form control gets a clear value button',
  label:        '[Optional] - A label for the input',
  naked:        '[Optional] - Form control is stripped down in appearance',
  name:         '[Optional] - An id for the label and the input, use if you want clicking the label to activate the input',
  onChange:     '[Optional] - A callback function that is executed when the input value changes',
  placeholder:  '[Optional] - Any placeholder text you want in the input',
  type:         '[Optional] - As a string, what type of input you are creating - [email | password | number | search | tel] - defaults to text',
  required:     '[Optional] - Field is required and asterisk is added to label',
  initialValue: '[Optional] - Any initial value for the input',
};
const inputScope = {
  React,
  ReactDOM,
  Icon,
  Input,
};

const selectExample = require('raw!./examples/Select.example.txt');
const selectDocs  = {
  label:   '[Optional] - A label for the select',
  name:    '[Optional] - An id for the label and the select, use if you want clicking the label to activate the select',
  options: '[Required] - Array of objects that contain the values and text for the options, with an optional selected key, {value:string, text:string, selected:bool}',
  required:     '[Optional] - Field is required and asterisk is added to label',
};
const selectScope = {
  React,
  ReactDOM,
  Select,
};
const selectOpts = [
  { value: '1', text: 'Option One' },
  { value: '2', text: 'Option Two' },
  { value: '3', text: 'Option Three', selected: true },
  { value: '4', text: 'Option Four' },
];

const textareaExample = require('raw!./examples/Textarea.example.txt');
const textareaDocs  = {
  label:        '[Optional] - A label for the textarea',
  name:         '[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the textarea',
  onChange:     '[Optional] - A callback function that is executed when the textarea value changes',
  placeholder:  '[Optional] - Any placeholder text you want in the textarea',
  initialValue: '[Optional] - Any initial value for the textarea',
  required:     '[Optional] - Field is required and asterisk is added to label',
};
const textareaScope = {
  React,
  ReactDOM,
  Textarea,
};

const messageBoxExample = require('raw!./examples/MessageBox.example.txt');
const messageBoxDocs  = {
  label:         '[Optional] - A label for the textarea',
  name:          '[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the Message Box',
  placeholder:   '[Optional] - Any placeholder text you want in the textarea',
  initialValue:  '[Optional] - Any initial value for the textarea',
  maxHeight:     '[Optional] - Controls the max-height (default: 20rem)',
  required:      '[Optional] - Field is required and asterisk is added to label',
};
const messageBoxScope = {
  React,
  ReactDOM,
  MessageBox,
};

const checkboxExample = require('raw!./examples/Checkbox.example.txt');
const checkboxDocs  = {
  inline:    '[Optional] - Inline the checkboxes',
  isChecked: '[Optional] - Set initial checked state',
  name:      '[Required] - An id, and label for the checkbox',
  onClick:   '[Optional] - A function you want to trigger when the checkbox is toggled',
};
const checkboxScope = {
  React,
  ReactDOM,
  Checkbox,
};

const radioExample = require('raw!./examples/Radio.example.txt');
const radioDocs  = {
  inline:        '[Optional] - Inline the radios',
  name:          '[Optional] - The name, and the basis of the id for the radio',
  onChange:      '[Optional] - A function you which to trigger when you change the selection',
  selectedValue: '[Optional] - The radio you want selected, when used in a group',
  value:         '[Optional] - A value for the radio',
};
const radioScope = {
  React,
  ReactDOM,
  RadioGroup,
  Radio,
};

const switchExample = require('raw!./examples/RhinoSwitch.example.txt');
const switchDocs  = {
  className: '[Optional] - Any class name you would like to add to the switch',
  disabled:  '[Optional] - Disable the switch',
  isChecked: '[Optional] - Set initial on/off state',
  name:      '[Optional] - The name, and the basis of the id for the switch',
};
const switchScope = {
  React,
  ReactDOM,
  RhinoSwitch,
};

const FormApp = () =>
  <div>
    <h1 className="site-headline">Forms</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Forms</h3>
      <p className="site-text-lead">Forms are assembled using our suite of custom form components. It is important to understand that form components have a <code>form__control</code> class for consistent appearance. Form components are also wrapped in a <code>form__group</code> class which provides vertical spacing. Finally, you may use the <code>form__section</code> class to provide vertical spacing between sections of a form.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Example</h3>
      <form className="form">
        <Input name="exampleInputEmail1" label="Email Address" placeholder="Email" type="email" required />
        <Input name="exampleInputPassword1" label="Password" placeholder="Password" type="password" required />
        <Select name="exampleSelect1" label="Select" options={selectOpts} required />
        <Textarea label="Text Area" name="exampleTextarea1" placeholder="Enter some text" required />
        <MessageBox label="Message Box" placeholder="Enter some text" name="exampleMessageBoxarea1" required />
        <div className="form__group">
          <label htmlFor="" className="u-block">Checkboxes</label>
          <Checkbox inline name="exampleCheckbox1">Checkbox One</Checkbox>
          <Checkbox inline name="exampleCheckbox2">Checkbox Two</Checkbox>
          <Checkbox inline name="exampleCheckbox3">Checkbox Three</Checkbox>
        </div>
        <RadioGroup inline name="exampleRadio1" label="Radios" selectedValue="2">
          <Radio value="1">Radio One</Radio>
          <Radio value="2">Radio Two</Radio>
          <Radio value="3">Radio Three</Radio>
        </RadioGroup>
        <div className="form__group">
          <label htmlFor="" className="u-block">Switcher</label>
          <RhinoSwitch name="exampleSwitch1" />
        </div>
        <div className="u-text-right">
          <Button type="primary">Submit Form</Button>
        </div>
      </form>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Modifiers</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Inline Form</h5>
        <p className="site-copy">Add the <code>form--inline</code> modifier to <code>form</code>.</p>
        <form className="form form--inline">
          <Input name="exampleEmail2" label="Email Address" placeholder="Enter email" type="email" />
          <Input name="examplePassword2" label="Password" placeholder="Password" type="password" />
          <Button type="primary">Sign In</Button>
        </form>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Input</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Common Input</h5>
        <div className="site-copy">
          <p>Properties include <code>initialValue, label, name, placeholder, required, and type</code>.</p>
        </div>
        <Input name="exampleInputEmail31" label="Email Address" type="email" required />
        <Input name="exampleInputName31" label="First Name" placeholder="First Name" type="text" initialValue="Ian" />
        <Input name="exampleInputPassword31" label="Password" placeholder="Password" type="password" />
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Input Add-On</h5>
        <div className="site-copy">
          <p>Use the <code>addon</code> property on Inputs with add-ons. Pass the addons as renderable nodes.</p>
        </div>
        <Input addon="left" type="text" placeholder="Encrypted">
          <Icon icon="lock" />
        </Input>
        <Input addon="left" type="text" placeholder="Search">
          <Icon icon="search" />
        </Input>
        <Input addon="right" type="text">
          {/* eslint no-script-url:0 */}
          <a href="javascript:void(0)">Go For It!</a>
        </Input>
        <Input addon="both" type="text" placeholder="Lorem ipsum dolor sit">
          <span>Amount $</span>
          <span>.00</span>
        </Input>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Clear Input</h5>
        <div className="site-copy">
          <p>Use the <code>clear</code> property on Inputs to include a clear value button.</p>
        </div>
        <Input name="exampleInputText111" label="Clear Input" type="text" clear />
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Naked Input</h5>
        <div className="site-copy">
          <p>Use the <code>naked</code> property on Inputs to strip it of background, border, height, and padding.</p>
        </div>
        <Input name="exampleInputText999" placeholder="Naked Input" type="text" naked />
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Input Playground</h3>
      <Playground docClass={Input} propDescriptionMap={inputDocs} codeText={inputExample} scope={inputScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Text Area</h3>
      <Textarea label="Text Area" name="exampleTextarea2" placeholder="Enter some text" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Text Area Playground</h3>
      <Playground docClass={Textarea} propDescriptionMap={textareaDocs} codeText={textareaExample} scope={textareaScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Box </h3>
      <p className="site-copy">We are using a light-weight plugin, <a href="http://www.jacklmoore.com/autosize/" target="_blank">Jack Moore's Autosize</a>, with custom styling for the autogrow functionality.</p>
      <MessageBox label="Message Box" name="exampleMessageBoxarea2" placeholder="Enter some text" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Box Playground</h3>
      <Playground docClass={MessageBox} propDescriptionMap={messageBoxDocs} codeText={messageBoxExample} scope={messageBoxScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Checkbox</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Rhinobox</h5>
        <p className="site-copy">Our custom checkbox element is called <code>rhinobox</code>. By default, these are stacked.</p>
        <Checkbox isChecked name="exampleCheckbox11">Checkbox One</Checkbox>
        <Checkbox name="exampleCheckbox12">Checkbox Two</Checkbox>
        <Checkbox name="exampleCheckbox13">Checkbox Three</Checkbox>
      </div>
      <div>
        <h5 className="site-miniheadline">Inline Rhinobox</h5>
        <p className="site-copy">Add the <code>inline</code> modifier to create inline checkboxes.</p>
        <Checkbox inline name="exampleCheckbox21">Checkbox One</Checkbox>
        <Checkbox inline isChecked name="exampleCheckbox22">Checkbox Two</Checkbox>
        <Checkbox inline isChecked name="exampleCheckbox23">Checkbox Three</Checkbox>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Checkbox Playground</h3>
      <Playground docClass={Checkbox} propDescriptionMap={checkboxDocs} codeText={checkboxExample} scope={checkboxScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Radio</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Rhinodio</h5>
        <p className="site-copy">Our custom radio element is called <code>rhinodio</code>. By default, these are stacked.</p>
        <RadioGroup name="exampleRadio2" label="Radios" selectedValue="2">
          <Radio value="1">Radio One</Radio>
          <Radio value="2">Radio Two</Radio>
          <Radio value="3">Radio Three</Radio>
        </RadioGroup>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Inline Rhinodio</h5>
        <p className="site-copy">Add the <code>inline</code> property to create inline radios.</p>
        <RadioGroup inline name="exampleRadio3" label="Radios" selectedValue="2">
          <Radio value="1">Radio One</Radio>
          <Radio value="2">Radio Two</Radio>
          <Radio value="3">Radio Three</Radio>
        </RadioGroup>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Radio Playground</h3>
      <Playground docClass={Radio} propDescriptionMap={radioDocs} codeText={radioExample} scope={radioScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Select</h3>
      <div>
        <h5 className="site-miniheadline">Rhinoselect</h5>
        <p className="site-copy">Our custom select element is called <strong>rhinoselect</strong>.</p>
        <Select name="exampleSelect2" label="Select" options={selectOpts} />
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Select Playground</h3>
      <Playground docClass={Select} propDescriptionMap={selectDocs} codeText={selectExample} scope={selectScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Switcher</h3>
      <h5 className="site-miniheadline">Rhinoswitcher</h5>
      <p className="site-copy">Our custom switcher element is called <code>rhinoswitcher</code>. Disable the switcher using the <code>disabled</code> property.</p>
      <RhinoSwitch name="rhinoswitch2" className="u-m-r-sm" isChecked />
      <RhinoSwitch name="rhinoswitch3" isChecked disabled />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Switcher Playground</h3>
      <Playground docClass={RhinoSwitch} propDescriptionMap={switchDocs} codeText={switchExample} scope={switchScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<FormApp />, document.getElementById('js-app'));
