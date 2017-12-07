import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { MessageBox, Button, Checkbox, CheckboxGroup, Icon, Input, Radio, RadioGroup, RhinoSwitch, Select, Textarea, UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';
import inputExample from './examples/Input.example.txt';
import selectExample from './examples/Select.example.txt';
import textareaExample from './examples/Textarea.example.txt';
import messageBoxExample from './examples/MessageBox.example.txt';
import checkboxExample from './examples/Checkbox.example.txt';
import radioExample from './examples/Radio.example.txt';
import switchExample from './examples/RhinoSwitch.example.txt';

const inputDocs  = {
  addon:              '[Optional] - Display an add-on on the input, as a string - [left | right | both]',
  autoCapitalize:     '[Optional] - Adjust the capitalization settings of an input - [none | sentences | words | characters]',
  autoComplete:       '[Optional] - Adjust the completion settings on an input - [off | on]',
  clear:              '[Optional] - Form control gets a clear value button',
  disabled:  '[Optional] - Disable the input',
  explanationMessage: '[Optional] - Explanation message to help user',
  initialValue:       '[Optional] - Any initial value for the input',
  label:              '[Optional] - A label for the input',
  naked:              '[Optional] - Form control is stripped down in appearance',
  name:               '[Optional] - An id for the label and the input, use if you want clicking the label to activate the input',
  onChange:           '[Optional] - A callback function that is executed when the input value changes',
  placeholder:        '[Optional] - Any placeholder text you want in the input',
  required:           '[Optional] - Field is required and asterisk is added to label',
  size: '[Optional] - Impacts size of input - [large]',
  type:               '[Optional] - As a string, what type of input you are creating - [email | password | number | search | tel] - defaults to text',
  validationMessage:  '[Optional] - Validation message for errors',
};
const inputScope = {
  React,
  ReactDOM,
  Icon,
  Input,
};

const selectDocs  = {
  label:   '[Optional] - A label for the select',
  name:    '[Optional] - An id for the label and the select, use if you want clicking the label to activate the select',
  options: '[Required] - Array of objects that contain the values and text for the options, with an optional selected key, { id: number, value: string }',
  disabled:  '[Optional] - Disable the select',
  required: '[Optional] - Field is required and asterisk is added to label',
  onSelect: '[Optional] - Function that returns the name of the Select and the value that was selected',
  selected: '[Optional] - String that pre-selects an option',
};
const selectScope = {
  React,
  ReactDOM,
  Select,
};
const selectOpts = [
  { id: 0, value: '--' },
  { id: 1, value: 'Option One' },
  { id: 2, value: 'Option Two' },
  { id: 3, value: 'Option Three' },
  { id: 4, value: 'Option Four' },
];

const textareaDocs  = {
  abbrMaxCharacters:  '[Optional] - Abbreviated max character count - only the count is displayed',
  explanationMessage: '[Optional] - Explanation message to help user',
  initialValue:       '[Optional] - Any initial value for the textarea',
  label:              '[Optional] - A label for the textarea',
  maxCharacters:      '[Optional] - Set a maximum character limit in order to display character count',
  naked:              '[Optional] - Form control is stripped down in appearance',
  name:               '[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the textarea',
  disabled:  '[Optional] - Disable the textarea',
  onChange:           '[Optional] - A callback function that is executed when the textarea value changes',
  placeholder:        '[Optional] - Any placeholder text you want in the textarea',
  required:           '[Optional] - Field is required and asterisk is added to label',
  validationMessage:  '[Optional] - Validation message for errors',
};
const textareaScope = {
  React,
  ReactDOM,
  Textarea,
};

const messageBoxDocs  = {
  label:         '[Optional] - A label for the textarea',
  disabled:  '[Optional] - Disable the textarea',
  naked:              '[Optional] - Form control is stripped down in appearance',
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

const checkboxDocs  = {
  isChecked: '[Optional] - Set initial checked state',
  disabled: '[Optional] - Disable the checkbox',
  name: '[Required] - An id, and label for the checkbox',
  onClick: '[Optional] - A function you want to trigger when the checkbox is toggled',
  onChange: '[Optional] - A function that returns the name and value of the checkbox',
  children: '[Optional] - (Currently) only for use when <CheckboxGroup /> has blockGroup prop; shows content based on select state of option',
};
const checkboxScope = {
  Fragment,
  React,
  ReactDOM,
  Checkbox,
  CheckboxGroup,
  UtilityInlineGrid,
  UtilityList,
  UtilityListItem,
};

const radioDocs  = {
  name:          '[Optional] - The name, and the basis of the id for the radio',
  label: '[Optional] - Text visible to user next to radio button',
  disabled:  '[Optional] - Disable the radio button',
  inline: '[Optional] - Wrap radio button group in <code>&lt;UtilityInlineGrid&gt;</code> component',
  onChange:      '[Optional] - A function you which to trigger when you change the selection',
  selectedValue: '[Optional] - The radio you want selected, when used in a group',
  value:         '[Optional] - A value for the radio',
  children: '[Optional] - (Currently) only for use when <RadioGroup /> has blockGroup prop; shows content based on select state of option',
};
const radioScope = {
  Fragment,
  React,
  ReactDOM,
  RadioGroup,
  Radio,
  UtilityList,
  UtilityListItem,
};

const switchDocs  = {
  className: '[Optional] - Any class name you would like to add to the switch',
  disabled: '[Optional] - Disable the switch',
  isChecked: '[Optional] - Set initial on/off state',
  label: '[Optional] - A label for the switch',
  name: '[Optional] - The name, and the basis of the id for the switch',
  onChange: '[Optional] - A function that returns the name and value of the switch',
  onClick: '[Optional] - A function that returns the value of the switch',
};
const switchScope = {
  React,
  ReactDOM,
  RhinoSwitch,
};

const FormApp = () =>
  (<div>
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
        <CheckboxGroup label="Checkboxes">
          <Checkbox name="exampleCheckbox1" label="Checkbox One" />
          <Checkbox name="exampleCheckbox2" label="Checkbox Two" />
          <Checkbox name="exampleCheckbox3" label="Checkbox Three" />
        </CheckboxGroup>
        <RadioGroup inline name="exampleRadio1" label="Radios" selectedValue="2">
          <Radio value="1" label="Radio One" />
          <Radio value="2" label="Radio Two" />
          <Radio value="3" label="Radio Three" />
        </RadioGroup>
        <RhinoSwitch label="Switcher" name="exampleSwitch1" />
        <div className="form__group u-text-right">
          <Button type="primary">Submit Form</Button>
        </div>
      </form>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Input</h3>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Common Input</h5>
        <Input name="exampleInputEmail31" label="Email Address" type="email" required />
        <Input name="exampleInputName31" label="First Name" placeholder="First Name" type="text" initialValue="Craig" />
        <Input name="exampleInputPassword31" label="Password" placeholder="Password" type="password" />
      </div>
      <div className="u-m-b-large">
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
          <Button reset className="u-text-primary">Go For It!</Button>
        </Input>
        <Input addon="both" type="text" placeholder="Lorem ipsum dolor sit">
          <span>Amount $</span>
          <span>.00</span>
        </Input>
      </div>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Clear Input</h5>
        <div className="site-copy">
          <p>Use the <code>clear</code> property on Inputs to include a clear value button.</p>
        </div>
        <Input name="exampleInputText111" label="Clear Input" type="text" clear />
      </div>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Naked Input</h5>
        <div className="site-copy">
          <p>Use the <code>naked</code> property on Inputs to strip it of background, border, height, and padding.</p>
        </div>
        <Input name="exampleInputText999" placeholder="Naked Input" type="text" naked />
      </div>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Large Input</h5>
        <div className="site-copy">
          <p>Use the <code>size</code> property on Inputs increase its size.</p>
        </div>
        <Input addon="left" size="large" name="exampleInputText999" placeholder="Large Input" type="text">
          <Icon icon="search" />
        </Input>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Input Playground</h3>
      <Playground theme="default" docClass={Input} propDescriptionMap={inputDocs} codeText={inputExample} scope={inputScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Text Area</h3>
      <Textarea label="Text Area" name="exampleTextarea2" placeholder="Enter some text" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Text Area Playground</h3>
      <Playground theme="default" docClass={Textarea} propDescriptionMap={textareaDocs} codeText={textareaExample} scope={textareaScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Box </h3>
      <p className="site-copy">We are using the <a href="https://github.com/andreypopp/react-textarea-autosize" target="_blank" rel="noopener noreferrer">react-textarea-autosize</a> package, with custom styling for the autogrow functionality.</p>
      <MessageBox label="Message Box" name="exampleMessageBoxarea2" placeholder="Enter some text" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Box Playground</h3>
      <Playground theme="default" docClass={MessageBox} propDescriptionMap={messageBoxDocs} codeText={messageBoxExample} scope={messageBoxScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Checkbox</h3>
      <h5 className="site-miniheadline">Rhinobox</h5>
      <p className="site-copy">Our custom checkbox element is called <code>rhinobox</code>. By default, these are stacked.</p>
      <p><strong>Note:</strong> Regardless of the amount, always wrap checkboxes in the <code>&lt;CheckboxGroup&gt;</code> component for proper spacing and the availability of the <code>label</code> property.</p>
      <CheckboxGroup>
        <Checkbox isChecked name="exampleCheckbox11" label="Checkbox One" />
        <Checkbox name="exampleCheckbox12" label="Checkbox Two" />
        <Checkbox name="exampleCheckbox13" label="Checkbox Three" />
      </CheckboxGroup>

      <div className="u-m-t-large">
        <h5 className="site-miniheadline">Inline</h5>
        <p className="site-copy">To place checkboxes inline that wrap with automagic spacing, you can add the <code>inline</code> property to the <code>&lt;CheckboxGroup&gt;</code> component.</p>
        <CheckboxGroup inline>
          <Checkbox isChecked name="exampleCheckbox17" label="Checkbox One" />
          <Checkbox name="exampleCheckbox18" label="Checkbox Two" />
          <Checkbox name="exampleCheckbox19" label="Checkbox Three" />
        </CheckboxGroup>
      </div>

      <div className="u-m-t-large">
        <h5 className="site-miniheadline">Block Group</h5>
        <p className="site-copy">To place checkboxes inside a contained block, you can add the <code>blockGroup</code> property to the <code>&lt;CheckboxGroup&gt;</code> component.</p>
        <CheckboxGroup blockGroup label="Checkboxes (block group)">
          <Checkbox
            isChecked
            name="exampleCheckbox97"
            label={
              <Fragment>
                <span className="form__block-group__label">Checkbox 1</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
            }
          />
          <Checkbox
            name="exampleCheckbox98"
            label={
              <Fragment>
                <span className="form__block-group__label">Checkbox 1</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
            }
          />
          <Checkbox
            name="exampleCheckbox99"
            label={
              <Fragment>
                <span className="form__block-group__label">Checkbox 1</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
            }
          >
            I only show up when Checkbox 3 is selected!
          </Checkbox>
        </CheckboxGroup>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Checkbox Playground</h3>
      <Playground theme="default" docClass={Checkbox} propDescriptionMap={checkboxDocs} codeText={checkboxExample} scope={checkboxScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Radio</h3>
      <h5 className="site-miniheadline">Rhinodio</h5>
      <p className="site-copy">Our custom radio element is called <code>rhinodio</code>. By default, these are stacked.</p>
      <p><strong>Note:</strong> Regardless of the amount, always wrap radio options in the <code>&lt;RadioGroup&gt;</code> component for proper spacing, <code>name</code> attribute, and the availability of the <code>label</code> property.</p>
      <RadioGroup name="exampleRadio2" selectedValue="2">
        <Radio value="1" label="Radio One" />
        <Radio value="2" label="Radio Two" />
        <Radio value="3" label="Radio Three" />
      </RadioGroup>

      <div className="u-m-t-large">
        <h5 className="site-miniheadline">Inline</h5>
        <p className="site-copy">To place radios inline that wrap with automagic spacing, you can add the <code>inline</code> property to the <code>&lt;RadioGroup&gt;</code> component.</p>
        <RadioGroup inline name="exampleRadio4" selectedValue="2">
          <Radio value="1" label="Radio One" />
          <Radio value="2" label="Radio Two" />
          <Radio value="3" label="Radio Three" />
        </RadioGroup>
      </div>

      <div className="u-m-t-large">
        <h5 className="site-miniheadline">Block Group</h5>
        <p className="site-copy">To place radios inside a contained block, you can add the <code>blockGroup</code> property to the <code>&lt;RadioGroup&gt;</code> component.</p>
        <RadioGroup blockGroup label="Radios (block group)" selectedValue="3">
          <Radio
            value="1"
            label={
              <Fragment>
                <span className="form__block-group__label">Radio 1</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
            }
          />
          <Radio
            value="2"
            label={
              <Fragment>
                <span className="form__block-group__label">Radio 2</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
            }
          />
          <Radio
            value="3"
            label={
              <Fragment>
                <span className="form__block-group__label">Radio 3</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
            }
          >
            I only show up when Radio 3 is selected!
          </Radio>
        </RadioGroup>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Radio Playground</h3>
      <Playground theme="default" docClass={Radio} propDescriptionMap={radioDocs} codeText={radioExample} scope={radioScope} noRender={false} />
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
      <Playground theme="default" docClass={Select} propDescriptionMap={selectDocs} codeText={selectExample} scope={selectScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Switcher</h3>
      <h5 className="site-miniheadline">Rhinoswitcher</h5>
      <p className="site-copy">Our custom switcher element is called <code>rhinoswitcher</code>. Disable the switcher using the <code>disabled</code> property.</p>
      <UtilityInlineGrid>
        <RhinoSwitch name="rhinoswitch2" isChecked />
        <RhinoSwitch name="rhinoswitch3" isChecked disabled />
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Switcher Playground</h3>
      <Playground theme="default" docClass={RhinoSwitch} propDescriptionMap={switchDocs} codeText={switchExample} scope={switchScope} noRender={false} />
    </section>
  </div>);

ReactDOM.render(<FormApp />, document.getElementById('js-app'));
