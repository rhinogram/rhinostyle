import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import {
  MessageBox,
  Button,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Icon,
  Input,
  Radio,
  RadioGroup,
  RhinoSwitch,
  Select,
  SlidingRadio,
  Textarea,
  UtilityInlineGrid,
  UtilityList,
  UtilityListItem,
  UtilitySystem,
} from '../components';
import { Live } from './components';
import InputExample from './examples/Input.example.txt';
import SelectExample from './examples/Select.example.txt';
import TextareaExample from './examples/Textarea.example.txt';
import MessageBoxExample from './examples/MessageBox.example.txt';
import CheckboxExample from './examples/Checkbox.example.txt';
import RadioExample from './examples/Radio.example.txt';
import SlidingRadioExample from './examples/SlidingRadio.example.txt';
import RhinoSwitchExample from './examples/RhinoSwitch.example.txt';

const InputDocs = {
  addon: "Display an add-on on the input, as a string <code>oneOf(['left', 'right', 'both'])</code>", // eslint-disable-line single-quotes
  autoCapitalize: 'Adjust the capitalization settings of an input ' + // eslint-disable-line single-quotes
    "<code>oneOf(['none', 'sentences', 'words', 'characters'])</code>", // eslint-disable-line single-quotes
  autoComplete: "Adjust the completion settings on an input <code>oneOf(['off', 'on'])</code>", // eslint-disable-line single-quotes
  clear: 'Form control gets a clear value button',
  customHTMLAttributes: `Any additional attributes you want to pass down to the <code>< input ></code> selector.
    <br><br>These should be contained in an object, with each item in the object formatted as <code>'data-test': 'my input'</code>
    <br><br><strong>NOTE:</strong> Only traditional custom attributes such as 'data-' or  'aria-' attributes will be rendered to the DOM`,
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
    "<code>oneOf(['email', 'password', 'number', 'search', 'tel'])</code>", // eslint-disable-line single-quotes
};
const InputScope = {
  React,
  ReactDOM,
  Icon,
  Input,
};

const SelectDocs = {
  label: 'A label for the select',
  name: 'An id for the label and the select, use if you want clicking the label to activate the select',
  options: 'Array of objects that contain the values and text for the options, with an optional selected key, { id: number|string, value: string }',
  disabled: 'Disable the select',
  required: 'Field is required and asterisk is added to label',
  onSelect: 'Function that returns the name of the Select and the value that was selected',
  selected: 'String that pre-selects an option',
};
const SelectScope = {
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

const TextareaDocs = {
  abbrMaxCharacters: 'Abbreviated max character count - only the count is displayed',
  initialValue: 'Any initial value for the textarea',
  label: 'A label for the textarea',
  maxCharacters: 'Set a maximum character limit in order to display character count',
  naked: 'Form control is stripped down in appearance',
  name: 'A name attribute for the textarea',
  disabled: 'Disable the textarea',
  onChange: 'A callback function that is executed when the textarea value changes',
  placeholder: 'Any placeholder text you want in the textarea',
};
const TextareaScope = {
  React,
  ReactDOM,
  Textarea,
};

const MessageBoxDocs = {
  label: 'A label for the textarea',
  disabled: 'Disable the textarea',
  naked: 'Form control is stripped down in appearance',
  name: 'A name attribute for the message box',
  placeholder: 'Any placeholder text you want in the textarea',
  initialValue: 'Any initial value for the textarea',
  maxHeight: 'Controls the max-height (default: 20rem)',
};
const MessageBoxScope = {
  React,
  ReactDOM,
  MessageBox,
};

const CheckboxDocs = {
  isChecked: 'Set initial checked state',
  disabled: 'Disable the checkbox',
  name: 'An id, and label for the checkbox',
  onClick: 'A function you want to trigger when the checkbox is toggled',
  onChange: 'A function that returns the name and value of the checkbox',
  children: '(Currently) only for use when <code>&lt;CheckboxGroup /&gt;</code> has blockGroup prop; shows content based on select state of option',
};
const CheckboxScope = {
  React,
  ReactDOM,
  Checkbox,
  CheckboxGroup,
  UtilityInlineGrid,
  UtilityList,
  UtilityListItem,
};

const RadioDocs = {
  label: 'Text visible to user next to radio button',
  disabled: 'Disable the radio button',
  name: 'A name attribute for the radio. Automatically passed down from <code>&lt;RadioGroup /&gt;</code>',
  inline: 'Wrap radio button group in <code>&lt;UtilityInlineGrid&gt;</code> component',
  onChange: 'A function you which to trigger when you change the selection',
  selectedValue: 'The radio you want selected, when used in a group',
  value: 'A value for the radio',
  children: '(Currently) only for use when <code>&lt;RadioGroup /&gt;</code> has blockGroup prop; shows content based on select state of option',
};
const RadioScope = {
  React,
  ReactDOM,
  RadioGroup,
  Radio,
  UtilityList,
  UtilityListItem,
};

const SlidingRadioDocs = {
  label: 'Text visible to user above component',
  disabled: 'Disable the component',
  options: 'An array of objects consisting of <code>name, value, and type</code>.&nbsp;'
    + 'The <code>type</code> value is string identifyer for color class selections - <code>oneOf(["warning", "danger", "secondary"])</code>',
  onChange: 'A function you which to trigger when you change the selection',
  selectedValue: 'The sliding radio you want selected',
  className: 'Class to be applied to the individual sliding radios',
  name: 'A name attribute for the component',
};
const SlidingRadioScope = {
  React,
  ReactDOM,
  SlidingRadio,
  UtilitySystem,
  FormLabel,
};

const RhinoSwitchDocs = {
  disabled: 'Disable the switch',
  isChecked: 'Set initial on/off state',
  label: 'A label for the switch',
  name: 'A name attribute for the switch',
  onChange: 'A function that returns the name and value of the switch',
  onClick: 'A function that returns the value of the switch',
};
const RhinoSwitchScope = {
  React,
  ReactDOM,
  RhinoSwitch,
};

const FormApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Forms</h3>
      <p className="site-text-lead">Forms are assembled using our suite of custom form components. It is important to
        understand that form components have a <code>form__control</code> class for consistent appearance. Form
        components are also wrapped in a <code>form__group</code> class which provides vertical spacing. Finally,
        you may use the <code>form__section</code> class to provide vertical spacing between sections of a form.
      </p>
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
        <div className="u-m-t" style={{ width: '30rem' }}>
          <SlidingRadio
            selectedValue="2"
            label="Sliding Radios"
            name="exampleSlidingRadio1"
            options={[
              { label: 'Denied', value: '1', type: 'danger' },
              { label: 'Unknown', value: '2', type: 'warning' },
              { label: 'Granted', value: '3', type: 'secondary' },
            ]}
          />
        </div>
        <div className="form__group u-text-right">
          <Button type="primary">Submit Form</Button>
        </div>
      </form>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Input</h3>
      <p className="site-copy">We are using the <a href="http://nosir.github.io/cleave.js/">cleave</a> package to
        enhance inputs with formatting/masking ability.
      </p>
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
        <Input name="example34534534453" addon="left" type="text" placeholder="Encrypted">
          <Icon icon="lock" />
        </Input>
        <Input name="example234232" addon="left" type="text" placeholder="Search">
          <Icon icon="search" />
        </Input>
        <Input name="example2342323" addon="right" type="text">
          <Button reset className="u-text-primary">Go For It!</Button>
        </Input>
        <Input name="example235436345" addon="both" type="text" placeholder="Lorem ipsum dolor sit">
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

      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Input Masking</h5>
        <div className="site-copy">
          <p>Use <code>format</code> property alongside options from
            <a href="https://github.com/nosir/cleave.js">
            Cleave.js
            </a> to mask inputs for easier masking/validation. <em>Date example below.</em>
          </p>
        </div>
        <Input
          format={{ date: true, datePattern: ['m', 'd', 'Y'] }}
          explanationMessage="Format MM/DD/YYYY"
          name="exampleInputText9999"
          placeholder="Enter a date"
          type="text"
        />
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Input Playground</h3>

      <Live
        code={InputExample}
        scope={InputScope}
        component={Input}
        propDescriptions={InputDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Text Area</h3>
      <Textarea label="Text Area" name="exampleTextarea2" placeholder="Enter some text" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Text Area Playground</h3>

      <Live
        code={TextareaExample}
        scope={TextareaScope}
        component={Textarea}
        propDescriptions={TextareaDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Box </h3>
      <p className="site-copy">We are using the
        <a
          href="https://github.com/andreypopp/react-textarea-autosize"
          target="_blank"
          rel="noopener noreferrer"
        >react-textarea-autosize
        </a>
        package, with custom styling for the autogrow functionality.
      </p>
      <MessageBox label="Message Box" name="exampleMessageBoxarea2" placeholder="Enter some text" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Box Playground</h3>

      <Live
        code={MessageBoxExample}
        scope={MessageBoxScope}
        component={MessageBox}
        propDescriptions={MessageBoxDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Checkbox</h3>
      <h5 className="site-miniheadline">Rhinobox</h5>
      <p className="site-copy">Our custom checkbox element is called <code>rhinobox</code>. By default, these are stacked.</p>
      <p>
        <strong>Note:</strong> Regardless of the amount, always wrap checkboxes in the
        <code>&lt;CheckboxGroup&gt;</code> component for proper spacing and the availability of the <code>label</code>
        property.
      </p>
      <CheckboxGroup>
        <Checkbox isChecked name="exampleCheckbox11" label="Checkbox One" />
        <Checkbox name="exampleCheckbox12" label="Checkbox Two" />
        <Checkbox name="exampleCheckbox13" label="Checkbox Three" />
      </CheckboxGroup>

      <div className="u-m-t-large">
        <h5 className="site-miniheadline">Inline</h5>
        <p className="site-copy">To place checkboxes inline that wrap with automagic spacing, you can add the
          <code>inline</code> property to the <code>&lt;CheckboxGroup&gt;</code> component.
        </p>
        <CheckboxGroup inline>
          <Checkbox isChecked name="exampleCheckbox17" label="Checkbox One" />
          <Checkbox name="exampleCheckbox18" label="Checkbox Two" />
          <Checkbox name="exampleCheckbox19" label="Checkbox Three" />
        </CheckboxGroup>
      </div>

      <div className="u-m-t-large">
        <h5 className="site-miniheadline">Block Group</h5>
        <p className="site-copy">To place checkboxes inside a contained block, you can add the <code>blockGroup</code>
          property to the <code>&lt;CheckboxGroup&gt;</code> component.
        </p>
        <CheckboxGroup blockGroup label="Checkboxes (block group)">
          <Checkbox
            isChecked
            name="exampleCheckbox97"
            label={(
              <Fragment>
                <span className="form__block-group__label">Checkbox 1</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
)}
          />
          <Checkbox
            name="exampleCheckbox98"
            label={(
              <Fragment>
                <span className="form__block-group__label">Checkbox 1</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
)}
          />
          <Checkbox
            name="exampleCheckbox99"
            label={(
              <Fragment>
                <span className="form__block-group__label">Checkbox 1</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
)}
          >
            I only show up when Checkbox 3 is selected!
          </Checkbox>
        </CheckboxGroup>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Checkbox Playground</h3>

      <Live
        code={CheckboxExample}
        scope={CheckboxScope}
        component={Checkbox}
        propDescriptions={CheckboxDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Radio</h3>
      <h5 className="site-miniheadline">Rhinodio</h5>
      <p className="site-copy">Our custom radio element is called <code>rhinodio</code>. By default, these are stacked.</p>
      <p><strong>Note:</strong> Regardless of the amount, always wrap radio options in the
        <code>&lt;RadioGroup&gt;</code> component for proper spacing, <code>name</code> attribute, and the availability
        of the <code>label</code> property.
      </p>
      <RadioGroup name="exampleRadio2" selectedValue="2">
        <Radio value="1" label="Radio One" />
        <Radio value="2" label="Radio Two" />
        <Radio value="3" label="Radio Three" />
      </RadioGroup>

      <div className="u-m-t-large">
        <h5 className="site-miniheadline">Inline</h5>
        <p className="site-copy">To place radios inline that wrap with automagic spacing, you can add the
          <code>inline</code> property to the <code>&lt;RadioGroup&gt;</code> component.
        </p>
        <RadioGroup inline name="exampleRadio4" selectedValue="2">
          <Radio value="1" label="Radio One" />
          <Radio value="2" label="Radio Two" />
          <Radio value="3" label="Radio Three" />
        </RadioGroup>
      </div>

      <div className="u-m-t-large">
        <h5 className="site-miniheadline">Block Group</h5>
        <p className="site-copy">To place radios inside a contained block, you can add the
          <code>blockGroup</code> property to the
          <code>&lt;RadioGroup&gt;</code> component.
        </p>
        <RadioGroup name="asdlkaksl0932902093-2903" blockGroup label="Radios (block group)" selectedValue="3">
          <Radio
            value="1"
            label={(
              <Fragment>
                <span className="form__block-group__label">Radio 1</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
)}
          />
          <Radio
            value="2"
            label={(
              <Fragment>
                <span className="form__block-group__label">Radio 2</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
)}
          />
          <Radio
            value="3"
            label={(
              <Fragment>
                <span className="form__block-group__label">Radio 3</span>
                <span className="form__block-group__desc">This is a test description</span>
              </Fragment>
)}
          >
            I only show up when Radio 3 is selected!
          </Radio>
        </RadioGroup>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Radio Playground</h3>

      <Live
        code={RadioExample}
        scope={RadioScope}
        component={Radio}
        propDescriptions={RadioDocs}
      />
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

      <Live
        code={SelectExample}
        scope={SelectScope}
        component={Select}
        propDescriptions={SelectDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Switcher</h3>
      <h5 className="site-miniheadline">Rhinoswitcher</h5>
      <p className="site-copy">Our custom switcher element is called <code>rhinoswitcher</code>. Disable the switcher
        using the <code>disabled</code> property.
      </p>
      <UtilityInlineGrid>
        <RhinoSwitch name="rhinoswitch2" isChecked />
        <RhinoSwitch name="rhinoswitch3" isChecked disabled />
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Switcher Playground</h3>

      <Live
        code={RhinoSwitchExample}
        scope={RhinoSwitchScope}
        component={RhinoSwitch}
        propDescriptions={RhinoSwitchDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Sliding Radio</h3>
      <h5 className="site-miniheadline">Rhinoslidingradio</h5>
      <p className="site-copy">Our custom radio element is called <code>rhinoslidingradio</code>.</p>
      <p><strong>Note:</strong> The <code>SlidingRadio</code> component is automatically set to full width.
       To limit it&#39;s size, wrap the component in a <code>div</code> tag (or similar HTML tag) with a set width.
      </p>
      <div className="u-m-t" style={{ width: '30rem' }}>
        <SlidingRadio
          selectedValue="2"
          name="exampleSlidingRadio3"
          options={[
            { label: 'Denied', value: '1', type: 'danger' },
            { label: 'Unknown', value: '2', type: 'warning' },
            { label: 'Granted', value: '3', type: 'secondary' },
          ]}
        />
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Sliding Radio Playground</h3>

      <Live
        code={SlidingRadioExample}
        scope={SlidingRadioScope}
        component={SlidingRadio}
        propDescriptions={SlidingRadioDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<FormApp />, document.getElementById('root'));
