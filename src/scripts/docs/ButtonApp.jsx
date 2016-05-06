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

        {/*<section className="site-section">
          <h3 className="site-subheadline">Button Tags</h3>
          <Button label="Anchor" />
        </section>*/}

        <section className="site-section">
          <h3 className="site-subheadline">Button Types</h3>
            <Button label="Default" type="default" />
            <Button label="Primary" type="primary" />
            <Button label="Secondary" type="secondary" />
            <Button label="Default Outline" type="default" outline={true} />
            <Button label="Primry Outline" type="primary" outline={true} />
            <Button label="Link" type="link" />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Sizes</h3>
          <div className="u-m-b">
            <Button label="Large" size="large" />
            <Button label="Default" />
            <Button label="Small" size="small" />
          </div>
          <div className="u-m-b">
            <Button label="Large" size="large" />
            <Button label={<span><Icon icon="cog" /> Large</span>} size="large" />
            <Button label={<Icon icon="cog" />} size="large" iconOnly={true} />
          </div>
          <div className="u-m-b">
            <Button label="Default" />
            <Button label={<span><Icon icon="cog" /> Default</span>} />
            <Button label={<Icon icon="cog" />} iconOnly={true} />
          </div>
          <div>
            <Button label="Small" size="small" />
            <Button label={<span><Icon icon="cog" /> Small</span>} size="small" />
            <Button label={<Icon icon="cog" />} size="small" iconOnly={true} />
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Modifiers</h3>
          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Block Buttons</h5>
            <p className="site-copy">Add <code>block={'{true}'}</code> to create a block level button.</p>
            <Button label="Block Button" block={true} />
          </div>
          <div>
            <h5 className="site-miniheadline">Icon-Only Buttons</h5>
            <p className="site-copy">Add <code>iconOnly={'{true}'}</code> when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance. Be sure you pass your icon in as the label, <code>label={'{<Icon icon="cog" />}'}</code>.</p>
            <Button label={<Icon icon="sms" />} iconOnly={true} />
            <Button label={<Icon icon="email" />} type="primary" iconOnly={true} />
            <Button label={<Icon icon="cog" />} type="secondary" iconOnly={true} />
            <Button label={<Icon icon="clock" />} outline={true} iconOnly={true} />
            <Button label={<Icon icon="pencil" />} outline={true} type="primary" iconOnly={true} />
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button States</h3>
          <div className="u-m-b">
            <Button label="Default" />
            <Button label="Default Active" classes="active" />
            <Button label="Default Disabled" classes="disabled" />
          </div>
          <div className="u-m-b">
            <Button label="Primary" type="primary" />
            <Button label="Primary Active" type="primary" classes="active" />
            <Button label="Primary Disabled" type="primary" classes="disabled" />
          </div>
          <div className="u-m-b">
            <Button label="Secondary" type="secondary" />
            <Button label="Secondary Active" type="secondary" classes="active" />
            <Button label="Secondary Disabled" type="secondary" classes="disabled" />
          </div>
          <div className="u-m-b">
            <Button label="Default Outline" outline={true} />
            <Button label="Default Outline Active" outline={true} classes="active" />
            <Button label="Default Outline Disabled" outline={true} classes="disabled" />
          </div>
          <div className="u-m-b">
            <Button label="Primary Outline" type="primary" outline={true} />
            <Button label="Primary Outline Active" type="primary" outline={true} classes="active" />
            <Button label="Primary Outline Disabled" type="primary" outline={true} classes="disabled" />
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
