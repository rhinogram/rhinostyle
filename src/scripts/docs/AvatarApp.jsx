import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Avatar, Icon, UtilityInlineGrid } from '../components';
import { Live } from './components';
import AvatarExample from './examples/Avatar.example.txt';

const AvatarDocs = {
  image: 'Source to image',
  name: 'Used for fallback initials',
  size: "<code>oneOf(['small', 'default', 'large', 'xlarge'])</code>", // eslint-disable-line single-quotes
  type: "<code>oneOf(['default', 'member'])</code>", // eslint-disable-line single-quotes
};
const AvatarScope  = {
  React,
  ReactDOM,
  Avatar,
  Icon,
  UtilityInlineGrid,
};

const AvatarApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Avatar Types</h3>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Default Avatar</h5>
        <p className="site-copy"><code>type=&quot;default&quot;</code></p>
        <UtilityInlineGrid>
          <Avatar image="//source.unsplash.com/category/people/200x200" name="Ben Bruning" />
          <Avatar name="Ben Bruning" />
          <Avatar />
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Member Avatar</h5>
        <p className="site-copy"><code>type=&quot;member&quot;</code></p>
        <UtilityInlineGrid>
          <Avatar image="//source.unsplash.com/category/people/200x200" name="Ben Bruning" type="member" />
          <Avatar name="Ben Bruning" type="member" />
          <Avatar type="member" />
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Avatar Sizes</h3>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Large Avatar</h5>
        <p className="site-copy"><code>size=&quot;large&quot;</code></p>
        <UtilityInlineGrid>
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="large" type="member" />
          <Avatar name="Craig Anthony" size="large" type="member" />
          <Avatar type="member" size="large" />
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">XLarge Avatar</h5>
        <p className="site-copy"><code>size=&quot;xlarge&quot;</code></p>
        <UtilityInlineGrid>
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="xlarge" type="member" />
          <Avatar name="Craig Anthony" size="xlarge" type="member" />
          <Avatar type="member" size="xlarge" />
        </UtilityInlineGrid>
      </div>
      <div>
        <h5 className="site-miniheadline">Small Avatar</h5>
        <p className="site-copy"><code>size=&quot;small&quot;</code></p>
        <UtilityInlineGrid>
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="small" type="member" />
          <Avatar name="Craig Anthony" size="small" type="member" />
          <Avatar type="member" size="small" />
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Live
        code={AvatarExample}
        scope={AvatarScope}
        component={Avatar}
        propDescriptions={AvatarDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<AvatarApp />, document.getElementById('root'));
