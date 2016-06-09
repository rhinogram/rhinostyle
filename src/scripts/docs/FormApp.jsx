import React    from 'react';
import ReactDOM from 'react-dom';

import { Input } from '../components';

import Playground from 'component-playground';

const InputApp = () =>
  <div>
    <h1 className="site-headline">Forms</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Form Example</h3>
      <form className="form">
        <Input name="exampleInputEmail1" label="Email Address" placeholder="Email" type="email" />
        <Input name="exampleInputPassword1" label="Password" placeholder="Password" type="password" />
        <div className="form__group">
          <label htmlFor="">Select</label>
          <div className="rhinoselect">
            <select className="form__control" id="exampleSelect2">
              <option value="" selected="">Option One</option>
              <option value="">Option Two</option>
              <option value="">Option Three</option>
              <option value="">Option Four</option>
            </select>
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="">Text Area <span className="form__optional">(optional)</span></label>
          <textarea className="form__control" rows="3" placeholder="Enter some text"></textarea>
        </div>
        <div className="form__group">
          <label htmlFor="" className="u-block">Checkboxes</label>
          <div className="rhinobox rhinobox--inline">
            <input type="checkbox" id="exampleCheckbox1" checked />
            <label htmlFor="exampleCheckbox1">Checkbox One</label>
          </div>
          <div className="rhinobox rhinobox--inline">
            <input type="checkbox" id="exampleCheckbox2" />
            <label htmlFor="exampleCheckbox2">Checkbox Two</label>
          </div>
          <div className="rhinobox rhinobox--inline">
            <input type="checkbox" id="exampleCheckbox3" />
            <label htmlFor="exampleCheckbox3">Checkbox Three</label>
          </div>
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
          <button type="submit" className="btn btn--secondary">Submit Form</button>
        </div>
      </form>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Modifiers</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Inline Form</h5>
        <p className="site-copy">Add the <code>form--inline</code> modifier to <code>form</code>.</p>
        <form className="form form--inline">
          <div className="form__group">
            <label htmlFor="exampleInputEmail2">Email Address</label>
            <input type="email" className="form__control" id="exampleInputEmail2" placeholder="Enter email" />
          </div>
          <div className="form__group">
            <label htmlFor="exampleInputPassword2">Password</label>
            <input type="password" className="form__control" id="exampleInputPassword2" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn--secondary">Sign In</button>
        </form>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Add-On</h3>
      <div className="site-copy">
        <p>Use <code>form__addon</code> around inputs with add-ons.</p>
        <p>Add-ons require the <code>form__addon__item</code> class with a <code>form__addon__item--left</code> or <code>form__addon__item--right</code> modifier.</p>
      </div>
      <form className="form">
        <div className="form__group">
          <div className="form__addon">
            <div className="form__addon__item form__addon__item--left">
              <svg className="icon"><use xlinkHref="#icon-lock"></use></svg>
            </div>
            <input type="text" className="form__control" placeholder="Encrypted" />
          </div>
        </div>
        <div className="form__group">
          <div className="form__addon">
            <input type="text" className="form__control" id="" />
            <a href="#" className="form__addon__item form__addon__item--right">Go For It!</a>
          </div>
        </div>
        <div className="form__group">
          <div className="form__addon">
            <div className="form__addon__item form__addon__item--left">Amount $</div>
            <input type="text" className="form__control" placeholder="Lorem ipsum dolor sit" /><div className="form__addon__item form__addon__item--right">.00</div>
          </div>
        </div>
      </form>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Checkbox</h3>
      {/* <!-- <p className="site-copy">Our custom checkbox element is called <code>rhinobox</code>. By default, these are stacked.</p> -->*/}
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Rhinobox</h5>
        <p className="site-copy">Our custom checkbox element is called <code>rhinobox</code>. By default, these are stacked.</p>
        <div className="rhinobox">
          <input type="checkbox" id="exampleCheckbox11" checked />
          <label htmlFor="exampleCheckbox11">Checkbox One</label>
        </div>
        <div className="rhinobox">
          <input type="checkbox" id="exampleCheckbox12" />
          <label htmlFor="exampleCheckbox12">Checkbox Two</label>
        </div>
        <div className="rhinobox">
          <input type="checkbox" id="exampleCheckbox13" />
          <label htmlFor="exampleCheckbox13">Checkbox Three</label>
        </div>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Inline Rhinobox</h5>
        <p className="site-copy">Add the <code>rhinobox--inline</code> modifier to create inline checkboxes.</p>
        <div className="rhinobox rhinobox--inline">
          <input type="checkbox" id="exampleCheckbox21" />
          <label htmlFor="exampleCheckbox21">Checkbox One</label>
        </div>
        <div className="rhinobox rhinobox--inline">
          <input type="checkbox" id="exampleCheckbox22" checked />
          <label htmlFor="exampleCheckbox22">Checkbox Two</label>
        </div>
        <div className="rhinobox rhinobox--inline">
          <input type="checkbox" id="exampleCheckbox23" checked />
          <label htmlFor="exampleCheckbox23">Checkbox Three</label>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Control</h3>
      <p className="site-copy">Use <code>form__control</code> on all inputs, selects, and text areas for consistent appearance.</p>

      <form className="form">
        <input type="text" className="form__control" id="" placeholder=".form__control on input" />
        <br />
        <div className="rhinoselect">
          <select className="form__control" id="">
            <option value="" selected="">.form__control on select</option>
            <option value="">Option Two</option>
            <option value="">Option Three</option>
            <option value="">Option Four</option>
          </select>
        </div>
        <br />
        <textarea name="" id="" rows="3" className="form__control" placeholder=".form__control on textarea"></textarea>
      </form>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Form Group</h3>
      <p className="site-copy">Use <code>form__group</code> around labels and inputs to give bottom margin in vertical forms. May also be used around any form element to provide proper spacing.</p>
      <form className="form">
        <div className="form__group">
          <label htmlFor="">Label</label>
          <input type="text" className="form__control" id="" placeholder="Input" />
        </div>
        <label htmlFor="">Label</label>
        <input type="text" className="form__control" id="" placeholder="Input" />
      </form>
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
        <div className="form__group">
          <div className="rhinoselect">
            <select className="form__control" id="exampleSelect2">
              <option value="" selected="">Option One</option>
              <option value="">Option Two</option>
              <option value="">Option Three</option>
              <option value="">Option Four</option>
            </select>
          </div>
        </div>
      </div>
      {/*<!-- <div className="u-m-b-md">
        <h5 className="site-miniheadline">Small Rhinoselect</h5>
        <p className="site-copy">Add the <code>rhinoselect--sm</code> modifier to the <code>rhinoselect</code> class.<br />
        Add the <code>form__conrol--sm</code> modifier to the <code>form__control</code> class.</p>
        <div className="form__group">
          <div className="rhinoselect rhinoselect--sm">
            <select className="form__control form__control--sm" id="exampleSelect2">
              <option value="" selected="">Option One</option>
              <option value="">Option Two</option>
              <option value="">Option Three</option>
              <option value="">Option Four</option>
            </select>
          </div>
        </div>
        </div> -->*/}
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

ReactDOM.render(<InputApp />, document.getElementById('js-app'));
