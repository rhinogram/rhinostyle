import React    from 'react';
import ReactDOM from 'react-dom';

import { Button, Icon } from '../components';

import Playground from 'component-playground';

const buttonExample = require('raw!./examples/Button.example.txt');
const exampleScope  = {
  React:  React,
  ReactDOM: ReactDOM,
  Button: Button
};

const ButtonApp = React.createClass({
  displayName: 'Rhinostyle Button Example',

  render() {
    return (
      <div>
        <h1 className="site-headline">Buttons</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Button Types</h3>
            <Button type="default">Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="default" outline={true}>Default Outline</Button>
            <Button type="primary" outline={true}>Primary Outline</Button>
            <Button type="link">Link</Button>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Sizes</h3>
          <div className="u-m-b">
            <Button type="default" size="large">Large</Button>
            <Button type="default">Default</Button>
            <Button type="default" size="small">Small</Button>
          </div>
          <div className="u-m-b">
            <Button type="default" size="large">Large</Button>
            <Button type="default" size="large"><Icon icon="cog" />&nbsp;Large</Button>
            <Button type="default" size="large" iconOnly={true}><Icon icon="cog" /></Button>
          </div>
          <div className="u-m-b">
            <Button type="default">Default</Button>
            <Button type="default"><Icon icon="cog" />&nbsp;Default</Button>
            <Button type="default" iconOnly={true}><Icon icon="cog" /></Button>
          </div>
          <div>
            <Button size="small">Small</Button>
            <Button size="small"><Icon icon="cog" />&nbsp;Small</Button>
            <Button size="small" iconOnly={true}><Icon icon="cog" /></Button>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Modifiers</h3>
          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Block Buttons</h5>
            <p className="site-copy">Add <code>block={'{true}'}</code> to create a block level button.</p>
            <Button block={true}>Block Button</Button>
          </div>
          <div>
            <h5 className="site-miniheadline">Icon-Only Buttons</h5>
            <p className="site-copy">Add <code>iconOnly={'{true}'}</code> when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance. Be sure you pass your icon in as the label, <code>label={'{<Icon icon="cog" />}'}</code>.</p>
            <Button iconOnly={true}><Icon icon="sms" /></Button>
            <Button type="primary" iconOnly={true}><Icon icon="email" /></Button>
            <Button type="secondary" iconOnly={true}><Icon icon="cog" /></Button>
            <Button outline={true} iconOnly={true}><Icon icon="clock" /></Button>
            <Button outline={true} type="primary" iconOnly={true}><Icon icon="pencil" /></Button>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button States</h3>
          <div className="u-m-b">
            <Button>Default</Button>
            <Button classes="active">Default Active</Button>
            <Button classes="disabled">Default Disabled</Button>
          </div>
          <div className="u-m-b">
            <Button type="primary">Primary</Button>
            <Button type="primary" classes="active">Primary Active</Button>
            <Button type="primary" classes="disabled">Primary Disabled</Button>
          </div>
          <div className="u-m-b">
            <Button type="secondary">Secondary</Button>
            <Button type="secondary" classes="active">Secondary Active</Button>
            <Button type="secondary" classes="disabled">Secondary Disabled</Button>
          </div>
          <div className="u-m-b">
            <Button outline={true}>Default Outline</Button>
            <Button outline={true} classes="active">Default Outline Active</Button>
            <Button outline={true} classes="disabled">Default Outline Disabled</Button>
          </div>
          <div className="u-m-b">
            <Button type="primary" outline={true}>Primary Outline</Button>
            <Button type="primary" outline={true} classes="active">Primary Outline Active</Button>
            <Button type="primary" outline={true} classes="disabled">Primary Outline Disabled</Button>
          </div>
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={buttonExample} scope={exampleScope} noRender={false} />
        </section>

        
      </div>
    );
  }
});

ReactDOM.render(<ButtonApp />, document.getElementById('js-app'));
