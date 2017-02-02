import Playground from 'component-playground';
import React      from 'react';
import ReactDOM   from 'react-dom';

import { Avatar, Icon, UtilityInlineGrid } from '../components';

/* eslint import/no-unresolved: 0 */
const avatarExample = require('raw!./examples/Avatar.example.txt');

const avatarDocs = {
  className: '[Optional] - Include additional class name(s)',
  image: '[Optional] - Include source to image',
  name: '[Optional] - Name of Avatar, as a string',
  size: '[Optional] - Size of Avatar, as a string - [small | large]',
  type: '[Optional] - Type of Avatar, as a string -  [default | member]',
};
const exampleScope  = {
  React,
  ReactDOM,
  Avatar,
  Icon,
  UtilityInlineGrid,
};

const AvatarApp = () =>
  <div>
    <h1 className="site-headline">Avatars</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Avatar Types</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Default Avatar</h5>
        <p className="site-copy"><code>type="default"</code></p>
        <UtilityInlineGrid>
          <Avatar image="//source.unsplash.com/category/people/200x200" name="Ben Bruning" />
          <Avatar name="Ben Bruning" />
          <Avatar />
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Member Avatar</h5>
        <p className="site-copy"><code>type="member"</code></p>
        <UtilityInlineGrid>
          <Avatar image="//source.unsplash.com/category/people/200x200" name="Ben Bruning" type="member" />
          <Avatar name="Ben Bruning" type="member" />
          <Avatar type="member" />
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Avatar Sizes</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Large Avatar</h5>
        <p className="site-copy"><code>size="large"</code></p>
        <UtilityInlineGrid>
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="large" type="member" />
          <Avatar name="Craig Anthony" size="large" type="member" />
          <Avatar type="member" size="large" />
        </UtilityInlineGrid>
      </div>
      <div>
        <h5 className="site-miniheadline">Small Avatar</h5>
        <p className="site-copy"><code>size="small"</code></p>
        <UtilityInlineGrid>
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="small" type="member" />
          <Avatar name="Craig Anthony" size="small" type="member" />
          <Avatar type="member" size="small" />
        </UtilityInlineGrid>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Avatar} propDescriptionMap={avatarDocs} codeText={avatarExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<AvatarApp />, document.getElementById('js-app'));
