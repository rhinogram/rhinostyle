import React    from 'react';
import ReactDOM from 'react-dom';

import { Button, Icon } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const buttonExample = require('raw!./examples/Button.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Icon,
};

const ButtonApp = () =>
  <div>
    <h1 className="site-headline">Buttons</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Button Types</h3>
      <div className="site-example-buttons">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button outline>Default Outline</Button>
        <Button type="primary" outline>Primary Outline</Button>
        <Button type="link">Link</Button>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Sizes</h3>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button size="large">Large</Button>
          <Button>Default</Button>
          <Button size="small">Small</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button size="large">Large</Button>
          <Button size="large"><Icon icon="cog" />&nbsp;Large</Button>
          <Button size="large" iconOnly><Icon icon="cog" /></Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button>Default</Button>
          <Button><Icon icon="cog" />&nbsp;Default</Button>
          <Button iconOnly><Icon icon="cog" /></Button>
        </div>
      </div>
      <div>
        <div className="site-example-buttons">
          <Button size="small">Small</Button>
          <Button size="small"><Icon icon="cog" />&nbsp;Small</Button>
          <Button size="small" iconOnly><Icon icon="cog" /></Button>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Modifiers</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Block Buttons</h5>
        <p className="site-copy">Include <code>block</code> property to create a block level button.</p>
        <Button block>Block Button</Button>
      </div>
      <div>
        <h5 className="site-miniheadline">Icon-Only Buttons</h5>
        <p className="site-copy">Include <code>iconOnly</code> property when creating a button with an icon but no text. This modifier adjusts the padding to give a more square appearance.</p>
        <div className="site-example-buttons">
          <Button iconOnly><Icon icon="sms" /></Button>
          <Button type="primary" iconOnly><Icon icon="email" /></Button>
          <Button type="secondary" iconOnly><Icon icon="cog" /></Button>
          <Button outline iconOnly><Icon icon="clock" /></Button>
          <Button outline type="primary" iconOnly><Icon icon="pencil" /></Button>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button States</h3>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button>Default</Button>
          <Button className="active">Default Active</Button>
          <Button className="disabled">Default Disabled</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button type="primary">Primary</Button>
          <Button type="primary" className="active">Primary Active</Button>
          <Button type="primary" className="disabled">Primary Disabled</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button type="secondary">Secondary</Button>
          <Button type="secondary" className="active">Secondary Active</Button>
          <Button type="secondary" className="disabled">Secondary Disabled</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button outline>Default Outline</Button>
          <Button outline className="active">Default Outline Active</Button>
          <Button outline className="disabled">Default Outline Disabled</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button type="primary" outline>Primary Outline</Button>
          <Button type="primary" outline className="active">Primary Outline Active</Button>
          <Button type="primary" outline className="disabled">Primary Outline Disabled</Button>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Ellipsis</h3>
      <h5 className="site-miniheadline">Long Text Inside Buttons</h5>
      <p>Wrap long button text in <code>u-text-overflow</code> utility class in order to allow ellipsis.</p>
      <div className="u-m-b">
        <Button className="u-m-b-sm"><span className="u-text-overflow">Button With Really Long Name</span></Button>
        <br />
        <Button><Icon icon="lock" />&nbsp;<span className="u-text-overflow">Button With Really Long Name and Icon</span></Button>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={buttonExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<ButtonApp />, document.getElementById('js-app'));
