import React    from 'react';
import ReactDOM from 'react-dom';

import { Button, Checkbox, Icon, Input, Select, Textarea } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved:0 */
const inputExample = require('raw!./examples/Input.example.txt');
const inputDocs  = {
  addon:        '[Optional] - Display an add-on on the input, as a string - [left | right | both]',
  label:        '[Optional] - A label for the input',
  name:         '[Optional] - An id for the label and the input, use if you want clicking the label to activate the input',
  placeholder:  '[Optional] - Any placeholder text you want in the input',
  type:         '[Optional] - As a string, what type of input you are creating - [email | password] - defaults to text',
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
  placeholder:  '[Optional] - Any placeholder text you want in the textarea',
  initialValue: '[Optional] - Any initial value for the textarea',
};
const textareaScope = {
  React,
  ReactDOM,
  Textarea,
};

const FormApp = () =>
  <div>
    <h1 className="site-headline">Forms</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Form Example</h3>
      <form className="form">
        <Input name="exampleInputEmail1" label="Email Address" placeholder="Email" type="email" />
        <Input name="exampleInputPassword1" label="Password" placeholder="Password" type="password" />
        <Select name="exampleSelect1" label="Select" options={selectOpts} />
        <Textarea label="Text Area" name="exampleTextarea1" placeholder="Enter some text" />
        <div className="form__group">
          <label htmlFor="" className="u-block">Checkboxes</label>
          <Checkbox inline name="exampleCheckbox1">Checkbox One</Checkbox>
          <Checkbox inline name="exampleCheckbox2">Checkbox Two</Checkbox>
          <Checkbox inline name="exampleCheckbox3">Checkbox Three</Checkbox>
        </div>
        <div className="form__group">
          <label htmlFor="" className="u-block">Radios</label>
          <div className="rhinodio rhinodio--inline">
            <input type="radio" name="exampleRadio" id="exampleRadio1" />
            <label htmlFor="exampleRadio1">Radio One</label>
          </div>
          <div className="rhinodio rhinodio--inline">
            <input type="radio" name="exampleRadio" id="exampleRadio2" checked />
            <label htmlFor="exampleRadio2">Radio Two</label>
          </div>
          <div className="rhinodio rhinodio--inline">
            <input type="radio" name="exampleRadio" id="exampleRadio3" />
            <label htmlFor="exampleRadio3">Radio Three</label>
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="" className="u-block">Switcher</label>
          <div className="rhinoswitcher">
            <input type="checkbox" checked className="rhinoswitcher__input" id="exampleSwitcher1" />
            <label className="rhinoswitcher__label" htmlFor="exampleSwitcher1">
              <div className="rhinoswitcher__inner">
                <div className="rhinoswitcher__on">
                  <svg className="rhinoswitcher__icon icon icon-checkmark"><use xlinkHref="#icon-checkmark"/></svg>
                </div>
                <div className="rhinoswitcher__off">
                  <svg className="rhinoswitcher__icon icon icon-close"><use xlinkHref="#icon-close"/></svg>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="u-text-right">
          <Button type="secondary">Submit Form</Button>
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
          <Button type="secondary">Sign In</Button>
        </form>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Input</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Basic Input</h5>
        <div className="site-copy">
          <p>Basic form inputs. Use <code>label, name, placeholder, type and initialValue</code>.</p>
        </div>
        <Input name="exampleInputEmail31" label="Email Address" type="email" />
        <Input name="exampleInputName31" label="First Name" placeholder="First Name" type="email" initialValue="Ian" />
        <Input name="exampleInputPassword31" placeholder="Password" type="password" />
        <div className="u-m-b-md">
          <h5 className="site-miniheadline">Input Add-On</h5>
          <div className="site-copy">
            <p>Use the <code>addon</code> property on Inputs with add-ons. Pass the addons as renderable nodes.</p>
          </div>
        </div>
        <Input addon="left" type="text" placeholder="Encrypted">
          <Icon icon="lock" />
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
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Input} propDescriptionMap={inputDocs} codeText={inputExample} scope={inputScope} noRender={false} />
    </section>

    <section className="site-section">
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Text Area</h5>
        <div className="site-copy">
          <p>Our textareas.</p>
        </div>
      </div>
      <Textarea label="Text Area" name="exampleTextarea2" placeholder="Enter some text" />
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Textarea} propDescriptionMap={textareaDocs} codeText={textareaExample} scope={textareaScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Checkbox</h3>
      {/* <!-- <p className="site-copy">Our custom checkbox element is called <code>rhinobox</code>. By default, these are stacked.</p> -->*/}
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Rhinobox</h5>
        <p className="site-copy">Our custom checkbox element is called <code>rhinobox</code>. By default, these are stacked.</p>
        <Checkbox isChecked name="exampleCheckbox11">Checkbox One</Checkbox>
        <Checkbox name="exampleCheckbox12">Checkbox Two</Checkbox>
        <Checkbox name="exampleCheckbox13">Checkbox Three</Checkbox>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Inline Rhinobox</h5>
        <p className="site-copy">Add the <code>inline</code> modifier to create inline checkboxes.</p>
        <Checkbox inline name="exampleCheckbox21">Checkbox One</Checkbox>
        <Checkbox inline isChecked name="exampleCheckbox22">Checkbox Two</Checkbox>
        <Checkbox inline isChecked name="exampleCheckbox23">Checkbox Three</Checkbox>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Radio</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Rhinodio</h5>
        <p className="site-copy">Our custom radio element is called <code>rhinodio</code>. By default, these are stacked.</p>
        <div className="rhinodio">
          <input type="radio" name="exampleRadio1" id="exampleRadio11" />
          <label htmlFor="exampleRadio11">Radio One</label>
        </div>
        <div className="rhinodio">
          <input type="radio" name="exampleRadio1" id="exampleRadio12" checked />
          <label htmlFor="exampleRadio12">Radio Two</label>
        </div>
        <div className="rhinodio">
          <input type="radio" name="exampleRadio1" id="exampleRadio13" />
          <label htmlFor="exampleRadio13">Radio Three</label>
        </div>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Inline Rhinodio</h5>
        <p className="site-copy">Add the <code>rhinodio--inline</code> modifier to create inline radios.</p>
        <div className="rhinodio rhinodio--inline">
          <input type="radio" name="exampleRadio2" id="exampleRadio21" />
          <label htmlFor="exampleRadio21">Radio One</label>
        </div>
        <div className="rhinodio rhinodio--inline">
          <input type="radio" name="exampleRadio2" id="exampleRadio22" />
          <label htmlFor="exampleRadio22">Radio Two</label>
        </div>
        <div className="rhinodio rhinodio--inline">
          <input type="radio" name="exampleRadio2" id="exampleRadio23" checked />
          <label htmlFor="exampleRadio23">Radio Three</label>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Select</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Rhinoselect</h5>
        <p className="site-copy">Our custom select element is called <strong>rhinoselect</strong>. Simply wrap a <code>select</code> element (containing the standard <code>form__control</code> className) in a container and give it the <code>rhinoselect</code> className.</p>
        <Select name="exampleSelect2" label="Select" options={selectOpts} />
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Select} propDescriptionMap={selectDocs} codeText={selectExample} scope={selectScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Switcher</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Rhinoswitcher</h5>
        <p className="site-copy">Our custom radio element is called <code>rhinoswitcher</code>. Disable the switcher using the <code>rhinoswitcher--disabled</code> modifer className.</p>
        <div className="rhinoswitcher">
          <input type="checkbox" checked className="rhinoswitcher__input" id="exampleSwitcher2" />
          <label className="rhinoswitcher__label" htmlFor="exampleSwitcher2">
            <div className="rhinoswitcher__inner">
              <div className="rhinoswitcher__on">
                <svg className="rhinoswitcher__icon icon icon-checkmark"><use xlinkHref="#icon-checkmark"/></svg>
              </div>
              <div className="rhinoswitcher__off">
                <svg className="rhinoswitcher__icon icon icon-close"><use xlinkHref="#icon-close"/></svg>
              </div>
            </div>
          </label>
        </div>
        <div className="rhinoswitcher rhinoswitcher--disabled">
          <input type="checkbox" checked className="rhinoswitcher__input" id="exampleSwitcher2" />
          <label className="rhinoswitcher__label" htmlFor="exampleSwitcher2">
            <div className="rhinoswitcher__inner">
              <div className="rhinoswitcher__on">
                <svg className="rhinoswitcher__icon icon icon-checkmark"><use xlinkHref="#icon-checkmark"/></svg>
              </div>
              <div className="rhinoswitcher__off">
                <svg className="rhinoswitcher__icon icon icon-close"><use xlinkHref="#icon-close"/></svg>
              </div>
            </div>
          </label>
        </div>
      </div>
    </section>
  </div>;

ReactDOM.render(<FormApp />, document.getElementById('js-app'));
