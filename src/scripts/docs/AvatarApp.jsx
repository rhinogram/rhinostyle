import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar, Icon, UtilityInlineGrid, MultiAvatar, Resource, ResourceIntro } from '../components';
import { Live } from './components';
import AvatarExample from './examples/Avatar.example.txt';
import MultiAvatarExample from './examples/MultiAvatar.example.txt';

const AvatarDocs = {
  image: 'Source to image',
  name: 'Used for fallback initials',
  size: "<code>oneOf(['small', 'default', 'large', 'xlarge'])</code>",
  type: "<code>oneOf(['default', 'member'])</code>",
};
const AvatarScope = {
  React,
  ReactDOM,
  Avatar,
  Icon,
  UtilityInlineGrid,
};

const MultiAvatarDocs = {
  foregroundImageUrl: 'Source to foreground avatar image',
  backgroundImageUrl: 'Source to background avatar image',
  foregroundName: 'Used for fallback initials in foreground avatar',
  backgroundName: 'Used for fallback intiials in background avatar',
};
const MultiAvatarScope = {
  React,
  ReactDOM,
  MultiAvatar,
  ResourceIntro,
  UtilityInlineGrid,
};

const AvatarApp = () => (
  <>
    <section className="site-section">
      <h3 className="site-subheadline">Avatar Types</h3>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Default Avatar</h5>
        <p className="site-copy">
          <code>type=&quot;default&quot;</code>
        </p>
        <UtilityInlineGrid>
          <Avatar image="//source.unsplash.com/category/people/200x200" name="Ben Bruning" />
          <Avatar name="Ben Bruning" />
          <Avatar />
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Member Avatar</h5>
        <p className="site-copy">
          <code>type=&quot;member&quot;</code>
        </p>
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
        <p className="site-copy">
          <code>size=&quot;large&quot;</code>
        </p>
        <UtilityInlineGrid>
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="large" type="member" />
          <Avatar name="Craig Anthony" size="large" type="member" />
          <Avatar type="member" size="large" />
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">XLarge Avatar</h5>
        <p className="site-copy">
          <code>size=&quot;xlarge&quot;</code>
        </p>
        <UtilityInlineGrid>
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="xlarge" type="member" />
          <Avatar name="Craig Anthony" size="xlarge" type="member" />
          <Avatar type="member" size="xlarge" />
        </UtilityInlineGrid>
      </div>
      <div>
        <h5 className="site-miniheadline">Small Avatar</h5>
        <p className="site-copy">
          <code>size=&quot;small&quot;</code>
        </p>
        <UtilityInlineGrid>
          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" size="small" type="member" />
          <Avatar name="Craig Anthony" size="small" type="member" />
          <Avatar type="member" size="small" />
        </UtilityInlineGrid>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Live code={AvatarExample} scope={AvatarScope} component={Avatar} propDescriptions={AvatarDocs} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">MultiAvatars</h3>
      <p className="site-text-lead">
        MultiAvatars are (currently) used for multi-member chat threads within the Direct inbox. The default size is
        40px (same as an avatar in an inbox view), and no more than 2 avatars are to be displayed based on current
        designs.
      </p>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">MultiAvatar examples</h5>
        <UtilityInlineGrid>
          <MultiAvatar
            foregroundImageUrl="//source.unsplash.com/category/people/200x200"
            backgroundImageUrl="//bit.ly/1UfJ6KF"
            foregroundName="Stevie Wonder"
            backgroundName="Greg Olsen"
          />
          <MultiAvatar
            foregroundImageUrl=""
            backgroundImageUrl="//bit.ly/1UfJ6KF"
            foregroundName="Stevie Wonder"
            backgroundName="Greg Olsen"
          />
          <MultiAvatar
            foregroundImageUrl="//bit.ly/1UfJ6KF"
            backgroundImageUrl=""
            foregroundName="Stevie Wonder"
            backgroundName="Greg Olsen"
          />
          <MultiAvatar
            foregroundImageUrl=""
            backgroundImageUrl=""
            foregroundName="Stevie Wonder"
            backgroundName="Greg Olsen"
          />
        </UtilityInlineGrid>
        <h5 className="site-miniheadline">MultiAvatar within a ResourceIntro</h5>
        <Resource>
          <ResourceIntro
            multiAvatar={{
              foregroundImageUrl: '//bit.ly/1UfJ6KF',
              backgroundImageUrl: '//source.unsplash.com/category/people/200x200',
              foregroundName: 'JJ',
              backgroundName: 'BB',
            }}
            title="Duane Allman, Sarah McLaughlin..."
          />
        </Resource>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Live
        code={MultiAvatarExample}
        scope={MultiAvatarScope}
        component={MultiAvatar}
        propDescriptions={MultiAvatarDocs}
      />
    </section>
  </>
);

ReactDOM.render(<AvatarApp />, document.getElementById('root'));
