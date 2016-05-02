import React      from 'react';
import { render } from 'react-dom';

import { Button } from '../components';

const BookApp = React.createClass({
  displayName: 'Rhinostyle Button Example',

  render() {
    return (
      <div>
        <h1 className="site-headline">Buttons</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Button Tags</h3>
          <Button label="Anchor" />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Color Modifiers</h3>
          <div className="u-m-b">
            <Button label="Default" type="default" />
            <Button label="Primary" type="primary" />
            <Button label="Secondary" type="secondary" />
          </div>
          <div className="u-m-b">
            <Button label="Default Outline" type="default" outline={true} />
            <Button label="Primry Outline" type="primary" outline={true} />
          </div>
          <div>
            <Button label="Link" type="link" />
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Size Modifiers</h3>
          <div className="u-m-b">
            <Button label="Large" size="large" />
            <Button label="Default" />
            <Button label="Small" size="small" />
          </div>
          <div className="u-m-b">
            <Button label="Large" size="large" />
            <Button label={<span><svg className="icon"><use xlinkHref="#icon-cog" /></svg> Large</span>} size="large" />
            <Button label={<svg className="icon"><use xlinkHref="#icon-cog" /></svg>} size="large" iconOnly={true} />
          </div>
          <div className="u-m-b">
            <Button label="Default" />
            <Button label={<span><svg className="icon"><use xlinkHref="#icon-cog" /></svg> Default</span>} />
            <Button label={<svg className="icon"><use xlinkHref="#icon-cog" /></svg>} iconOnly={true} />
          </div>
          <div>
            <Button label="Small" size="small" />
            <Button label={<span><svg className="icon"><use xlinkHref="#icon-cog" /></svg> Small</span>} size="small" />
            <Button label={<svg className="icon"><use xlinkHref="#icon-cog" /></svg>} size="small" iconOnly={true} />
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Type Modifiers</h3>
          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Block Buttons</h5>
            <p className="site-copy">Add <code>block={'{true}'}</code> to create a block level button.</p>
            <div className="row">
              <div className="col-sm-10">
                <Button label="Block Button" block={true} />
              </div>
            </div>
          </div>
          <div>
            <h5 className="site-miniheadline">Icon-Only Buttons</h5>
            <p className="site-copy">Add <code>iconOnly={'{true}'}</code> when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance. Be sure you pass your icon in as the label, <code>label={'{<svg className="icon"><use xlinkHref="#icon-sms"></svg>}'}</code>.</p>
            <Button label={<svg className="icon"><use xlinkHref="#icon-sms" /></svg>} iconOnly={true} />
            <Button label={<svg className="icon"><use xlinkHref="#icon-email" /></svg>} type="primary" iconOnly={true} />
            <Button label={<svg className="icon"><use xlinkHref="#icon-cog" /></svg>} type="secondary" iconOnly={true} />
            <Button label={<svg className="icon"><use xlinkHref="#icon-clock" /></svg>} outline={true} iconOnly={true} />
            <Button label={<svg className="icon"><use xlinkHref="#icon-pencil" /></svg>} outline={true} type="primary" iconOnly={true} />
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
      </div>
    );
  }
});

render(<BookApp />, document.getElementById('js-app'));
