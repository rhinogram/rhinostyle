import React    from 'react';
import ReactDOM from 'react-dom';

import { Avatar, Icon } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const avatarExample = require('raw!./examples/Avatar.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Avatar,
  Icon,
};

const AvatarApp = () =>
  <div>
    <h1 className="site-headline">Avatars</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Avatar Types</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Cool Avatar</h5>
        <p className="site-copy"><code>type="cool"</code></p>
        <div className="site-example-avatar">
          <Avatar image="//bit.ly/1VMOwOw" name="Ben Bruning" type="cool" />
          <Avatar name="Ben Bruning" type="cool" />
          <Avatar type="cool" />
        </div>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Accent Avatar</h5>
        <p className="site-copy"><code>type="accent"</code></p>
        <div className="site-example-avatar">
          <Avatar image="//bit.ly/1VMOwOw" name="Ben Bruning" type="accent" />
          <Avatar name="Ben Bruning" type="accent" />
          <Avatar type="accent" />
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Avatar Sizes</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Large Avatar</h5>
        <p className="site-copy"><code>size="large"</code>.</p>
        <div className="site-example-avatar">
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="large" type="cool" />
          <Avatar name="Craig Anthony" size="large" type="cool" />
          <Avatar type="cool" size="large" />
        </div>
      </div>
      <div>
        <h5 className="site-miniheadline">Small Avatar</h5>
        <p className="site-copy"><code>size="small"</code>.</p>
        <div className="site-example-avatar">
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="small" type="cool" />
          <Avatar name="Craig Anthony" size="small" type="cool" />
          <Avatar type="cool" size="small" />
        </div>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={avatarExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<AvatarApp />, document.getElementById('js-app'));
