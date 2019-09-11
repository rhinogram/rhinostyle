import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Avatar, Button, Icon, UtilityInlineGrid } from '../components';
import { Live } from './components';
import ButtonExample from './examples/Button.example.txt';

const ButtonDocs = {
  iconOnly: 'Icon with no text or avatar',
  avatarOnly: 'Avatar without text or icon',
  route: '<code>react-router</code> route',
  size: "<code>oneOf(['small', 'large'])</code>", // eslint-disable-line single-quotes
  title: 'Represents advisory information on hover',
  type: "<code>oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-primary', 'outline-secondary', 'outline-reversed', 'link', 'link-muted'])</code>", // eslint-disable-line single-quotes, max-len
  loading: 'Specify a loading-state for the button to denote a background-action is in-progress',
  reset: 'Removes any/all formatting attached to a button to inherit the surrounding text. Overrides type, block, and iconOnly props to avoid conflicts',
};
const ButtonScope = {
  React,
  ReactDOM,
  Button,
  Icon,
  Avatar,
  UtilityInlineGrid,
};

const ButtonApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Button Types</h3>
      <p className="site-copy">
        <code>type=&quot;default |primary | secondary | accent | input | outline-primary | outline-secondary | link | link-muted | danger&quot;</code>
      </p>
      <UtilityInlineGrid>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="accent">Accent</Button>
        <Button type="input">Input</Button>
        <Button type="outline-primary">Outline Primary</Button>
        <Button type="outline-secondary">Outline Secondary</Button>
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
        <p className="site-copy">
          Include <code>iconOnly</code> property when creating a button with an icon but no text. This modifier adjusts the padding to give a more square appearance.
        </p>
        <UtilityInlineGrid>
          <Button iconOnly><Icon icon="chat" /></Button>
          <Button type="primary" iconOnly><Icon icon="email" /></Button>
          <Button type="secondary" iconOnly><Icon icon="cog" /></Button>
          <Button type="outline-primary" iconOnly><Icon icon="star" /></Button>
        </UtilityInlineGrid>
        <h5 className="site-miniheadline">Avatar-Only Buttons</h5>
        <p className="site-copy">
          Include <code>avatarOnly</code> property when creating a button with an
          avatar and without any text or icon. This modifier adjusts the height
          and the width to give a circular appearance to the button.
        </p>
        <UtilityInlineGrid>
          <Button avatarOnly><Avatar name="Ben Bruning" size="small" type="member" /></Button>
          <Button avatarOnly><Avatar name="Ben Bruning" size="large" type="member" /></Button>
          <Button avatarOnly><Avatar name="Ben Bruning" size="xlarge" type="member" /></Button>
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
          <Button type="primary" outlined>Primary outlined</Button>
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Button type="secondary">Secondary</Button>
          <Button type="secondary" active>Secondary Active</Button>
          <Button type="secondary" disabled>Secondary Disabled</Button>
          <Button type="secondary" outlined>Secondary outlined</Button>
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Button type="outline-primary">Outline Primary</Button>
          <Button type="outline-primary" active>Outline Primary Active</Button>
          <Button type="outline-primary" disabled>Outline Primary Disabled</Button>
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Button type="outline-secondary">Outline Secondary</Button>
          <Button type="outline-secondary" active>Outline Secondary Active</Button>
          <Button type="outline-secondary" disabled>Outline Secondary Disabled</Button>
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
          <Button type="primary" outlined>Primary &nbsp;<span className="button__badge">12</span></Button>
          <Button type="secondary" outlined>Secondary &nbsp;<span className="button__badge">2</span></Button>
          <Button type="outline-primary">Outline Primary &nbsp;<span className="button__badge">12</span></Button>
          <Button type="outline-secondary">Outline Secondary &nbsp;<span className="button__badge">12</span></Button>
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
      <Live
        code={ButtonExample}
        scope={ButtonScope}
        component={Button}
        propDescriptions={ButtonDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<ButtonApp />, document.getElementById('root'));
