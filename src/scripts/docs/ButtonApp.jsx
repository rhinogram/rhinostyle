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
          <Button label="Anchor" type="default" />
          <button className="btn btn--default" type="submit">Button</button>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Color Modifiers</h3>
          <div className="u-m-b">
            <button  className="btn btn--default">Default</button>
            <button  className="btn btn--primary">Primary</button>
            <button  className="btn btn--secondary">Secondary</button>
          </div>
          <div className="u-m-b">
            <button  className="btn btn--default-outline">Default Outline</button>
            <button  className="btn btn--primary-outline">Primary Outline</button>
          </div>
          <div>
            <button  className="btn btn--link">Link</button>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Size Modifiers</h3>
          <div className="u-m-b">
            <button  className="btn btn--lg btn--default">Large</button>
            <button  className="btn btn--default">Default</button>
            <button  className="btn btn--sm btn--default">Small</button>
          </div>
          <div className="u-m-b">
            <button  className="btn btn--lg btn--default">Large</button>
            <button  className="btn btn--lg btn--default">
              <svg className="icon"><use xlinkHref="#icon-cog"/></svg> Large
            </button>
            <button  className="btn btn--lg btn--default btn--icon">
              <svg className="icon"><use xlinkHref="#icon-cog"/></svg>
            </button>
          </div>
          <div className="u-m-b">
            <button  className="btn btn--default">Default</button>
            <button  className="btn btn--default">
              <svg className="icon"><use xlinkHref="#icon-cog"/></svg> Default
            </button>
            <button  className="btn btn--default btn--icon">
              <svg className="icon"><use xlinkHref="#icon-cog"/></svg>
            </button>
          </div>
          <div>
            <button  className="btn btn--sm btn--default">Small</button>
            <button  className="btn btn--sm btn--default">
              <svg className="icon"><use xlinkHref="#icon-cog"/></svg> Small
            </button>
            <button  className="btn btn--sm btn--default btn--icon">
              <svg className="icon"><use xlinkHref="#icon-cog"/></svg>
            </button>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button Type Modifiers</h3>
          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Block Buttons</h5>
            <p className="site-copy">Add the <code>btn--block</code> modifier to create block level button.</p>
            <div className="row">
              <div className="col-sm-10">
                <button  className="btn btn--default btn--block">Block Button</button>
              </div>
            </div>
          </div>
          <div>
            <h5 className="site-miniheadline">Icon-Only Buttons</h5>
            <p className="site-copy">Add the <code>btn--icon</code> modifier when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance.</p>
            <button  className="btn btn--default btn--icon">
              <svg className="icon"><use xlinkHref="#icon-sms"/></svg>
            </button>
            <button  className="btn btn--primary btn--icon">
              <svg className="icon"><use xlinkHref="#icon-email"/></svg>
            </button>
            <button  className="btn btn--secondary btn--icon">
              <svg className="icon"><use xlinkHref="#icon-cog"/></svg>
            </button>
            <button  className="btn btn--default-outline btn--icon">
              <svg className="icon"><use xlinkHref="#icon-clock"/></svg>
            </button>
            <button  className="btn btn--primary-outline btn--icon">
              <svg className="icon"><use xlinkHref="#icon-pencil"/></svg>
            </button>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Button States</h3>
          <div className="u-m-b">
            <button  className="btn btn--default">Default</button>
            <button  className="btn btn--default active">Default Active</button>
            <button  className="btn btn--default disabled">Default Disabled</button>
          </div>
          <div className="u-m-b">
            <button  className="btn btn--primary">Primary</button>
            <button  className="btn btn--primary active">Primary Active</button>
            <button  className="btn btn--primary disabled">Primary Disabled</button>
          </div>
          <div className="u-m-b">
            <button  className="btn btn--secondary">Secondary</button>
            <button  className="btn btn--secondary active">Secondary Active</button>
            <button  className="btn btn--secondary disabled">Secondary Disabled</button>
          </div>

          <div className="u-m-b">
            <button  className="btn btn--default-outline">Default Outline</button>
            <button  className="btn btn--default-outline active">Default Outline Active</button>
            <button  className="btn btn--default-outline disabled">Default Outline Disabled</button>
          </div>
          <div className="u-m-b">
            <button  className="btn btn--primary-outline">Primary Outline</button>
            <button  className="btn btn--primary-outline active">Primary Outline Active</button>
            <button  className="btn btn--primary-outline disabled">Primary Outline Disabled</button>
          </div>

        </section>
      </div>
    );
  }
});

render(<BookApp />, document.getElementById('js-app'));
