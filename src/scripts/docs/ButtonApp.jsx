import React      from 'react';
import ReactDOM   from 'react-dom';
import Playground from 'component-playground';

import { Button, Icon, UtilityInlineGrid } from '../components';
import buttonExample from './examples/Button.example.txt';

const buttonDocs = {
  active: '[Optional] - Button is active',
  block: '[Optional] - Button is block level',
  className: '[Optional] - Include additional class name(s)',
  onClick: '[Optional] - Include click function for Button',
  disabled: '[Optional] - Button is disabled',
  iconOnly: '[Optional] - Button has an icon but no text',
  route: '[Optional] - React-router route to use for item',
  size: '[Optional] - Button size -  [small | large]',
  title: '[Optional] - Include title attribute that represents advisory information',
  type: '[Optional] - Button type -  [default | primary | secondary | accent | outline-primary | outline-reversed | link | link-muted]',
  url: '[Optional] - URL for item',
  loading: '[Optional] - Specify a loading-state for the button to denote a background-action is in-progress',
};
const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Icon,
  UtilityInlineGrid,
};

const ButtonApp = () =>
  (<div>
    <section className="site-section">
      <h3 className="site-subheadline">Button Types</h3>
      <p className="site-copy"><code>type=&quot;default | primary | secondary | accent | outline-primary | link | link-muted | danger&quot;</code></p>
      <UtilityInlineGrid>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="accent">Accent</Button>
        <Button type="outline-primary">Outline Primary</Button>
        <Button type="link">Link</Button>
        <Button type="link-muted">Link Muted</Button>
        <Button type="danger">Danger</Button>
      </UtilityInlineGrid>
      <p className="site-copy u-m-t"><code>type=&quot;outline-reversed&quot;</code></p>
      <div className="u-p-a u-bg-primary">
        <UtilityInlineGrid>
          <Button type="outline-reversed">Outline Reversed</Button>
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Sizes</h3>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Large Button</h5>
        <p className="site-copy"><code>size=&quot;large&quot;</code></p>
        <UtilityInlineGrid>
          <Button size="large">Large</Button>
          <Button size="large"><Icon icon="cog" />&nbsp;Large</Button>
          <Button size="large" iconOnly><Icon icon="cog" /></Button>
        </UtilityInlineGrid>
      </div>
      <div>
        <h5 className="site-miniheadline">Small Button</h5>
        <p className="site-copy"><code>size=&quot;small&quot;</code></p>
        <UtilityInlineGrid>
          <Button size="small">Small</Button>
          <Button size="small"><Icon icon="cog" />&nbsp;Small</Button>
          <Button size="small" iconOnly><Icon icon="cog" /></Button>
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Modifiers</h3>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Block Buttons</h5>
        <p className="site-copy">Include <code>block</code> property to create a block level button.</p>
        <Button block>Block Button</Button>
      </div>
      <div>
        <h5 className="site-miniheadline">Icon-Only Buttons</h5>
        <p className="site-copy">Include <code>iconOnly</code> property when creating a button with an icon but no text. This modifier adjusts the padding to give a more square appearance.</p>
        <UtilityInlineGrid>
          <Button iconOnly><Icon icon="chat" /></Button>
          <Button type="primary" iconOnly><Icon icon="email" /></Button>
          <Button type="secondary" iconOnly><Icon icon="cog" /></Button>
          <Button type="outline-primary" iconOnly><Icon icon="star" /></Button>
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button States</h3>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Button>Default</Button>
          <Button active>Default Active</Button>
          <Button disabled>Default Disabled</Button>
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Button type="primary">Primary</Button>
          <Button type="primary" active>Primary Active</Button>
          <Button type="primary" disabled>Primary Disabled</Button>
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Button type="secondary">Secondary</Button>
          <Button type="secondary" active>Secondary Active</Button>
          <Button type="secondary" disabled>Secondary Disabled</Button>
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Button type="outline-primary">Outline Primary</Button>
          <Button type="outline-primary" active>Outline Primary Active</Button>
          <Button type="outline-primary" disabled>Outline Primary Disabled</Button>
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Badges</h3>
      <h5 className="site-miniheadline">Badges Inside of Buttons</h5>
      <p>Include a span with <code>button__badge</code> class.</p>
      <div className="u-m-b-large">
        <UtilityInlineGrid>
          <Button>Default &nbsp;<span className="button__badge">12</span></Button>
          <Button type="primary">Primary &nbsp;<span className="button__badge">12</span></Button>
          <Button type="secondary">Secondary &nbsp;<span className="button__badge">2</span></Button>
          <Button type="outline-primary">Outline Primary &nbsp;<span className="button__badge">12</span></Button>
          <Button type="link">Link &nbsp;<span className="button__badge">12</span></Button>
          <Button type="danger">Danger &nbsp;<span className="button__badge">12</span></Button>
        </UtilityInlineGrid>
      </div>
      <div className="u-p-a u-bg-primary">
        <UtilityInlineGrid>
          <Button type="outline-reversed">Outline Reversed &nbsp;<span className="button__badge">12</span></Button>
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Ellipsis</h3>
      <h5 className="site-miniheadline">Long Text Inside of Buttons</h5>
      <p>Wrap long button text in <code>u-text-overflow</code> utility class in order to allow ellipsis.</p>
      <div className="u-m-b">
        <Button className="u-m-b-small"><span className="u-text-overflow">Button With Really Long Name</span></Button>
        <br />
        <Button><Icon icon="lock" />&nbsp;<span className="u-text-overflow">Button With Really Long Name and Icon</span></Button>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Playground theme="default" docClass={Button} propDescriptionMap={buttonDocs} codeText={buttonExample} scope={exampleScope} noRender={false} />
    </section>
  </div>);

ReactDOM.render(<ButtonApp />, document.getElementById('js-app'));
