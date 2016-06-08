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
        <h5 className="site-miniheadline">Patient Avatar</h5>
        <p className="site-copy">Patient avatars require the <code>avatar--patient</code> modifier.</p>
        <div className="site-example-avatar">
          <Avatar type="patient">CA</Avatar>
          <Avatar type="patient"><Icon icon="user" type="avatar" /></Avatar>
          <Avatar type="patient" image="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg" />
        </div>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Member Avatar</h5>
        <p className="site-copy">Member avatars require the <code>avatar--member</code> modifier.</p>
        <div className="site-example-avatar">
          <Avatar type="member">CA</Avatar>
          <Avatar type="member"><Icon icon="user" type="avatar" /></Avatar>
          <Avatar type="member" image="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg" />
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Avatar Sizes</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Large Avatar</h5>
        <p className="site-copy">Add the <code>avatar--lg</code> modifier to <code>avatar</code> for large size.</p>
        <div className="site-example-avatar">
          <Avatar type="patient" size="large">CA</Avatar>
          <Avatar type="patient" size="large"><Icon icon="user" type="avatar" /></Avatar>
          <Avatar type="member" size="large" image="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg" />
        </div>
      </div>
      <div>
        <h5 className="site-miniheadline">Small Avatar</h5>
        <p className="site-copy">Add the <code>avatar--sm</code> modifier to <code>avatar</code> for small size.</p>
        <div className="site-example-avatar">
          <Avatar type="patient" size="small">CA</Avatar>
          <Avatar type="patient" size="small"><Icon icon="user" type="avatar" /></Avatar>
          <Avatar type="patient" size="small" image="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg" />
        </div>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={avatarExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<AvatarApp />, document.getElementById('js-app'));
