import React    from 'react';
import ReactDOM from 'react-dom';

import { Avatar, Icon } from '../components';

import Playground from 'component-playground';

const avatarExample = require('raw!./examples/Avatar.example.txt');
const exampleScope  = {
  React:    React,
  ReactDOM: ReactDOM,
  Avatar:   Avatar
};

const AvatarApp = React.createClass({
  displayName: 'Rhinostyle Avatar Example',

  render() {
    return (
      <div>
        <h1 classNames="site-headline">Avatars</h1>

        <section classNames="site-section">
          <h3 classNames="site-subheadline">Avatar Types</h3>
          <div classNames="u-m-b-md">
            <h5 classNames="site-miniheadline">Patient Avatar</h5>
            <p classNames="site-copy">Patient avatars require the <code>avatar--patient</code> modifier.</p>
            <figure classNames="avatar avatar--patient">CA</figure>
            <figure classNames="avatar avatar--patient"><svg classNames="avatar__icon"><use xlinkHref="#icon-user"></use></svg></figure>
          </div>

          <div classNames="u-m-b-md">
            <h5 classNames="site-miniheadline">Member Avatar</h5>
            <p classNames="site-copy">Member avatars require the <code>avatar--member</code> modifier.</p>
            <figure classNames="avatar avatar--member">CA</figure>
            <figure classNames="avatar avatar--member"><svg classNames="avatar__icon"><use xlinkHref="#icon-user"></use></svg></figure>
          </div>
        </section>

        <section classNames="site-section">
          <h3 classNames="site-subheadline">Avatar Sizes</h3>
          <div classNames="u-m-b-md">
            <h5 classNames="site-miniheadline">Large Avatar</h5>
            <p classNames="site-copy">Add the <code>avatar--lg</code> modifier to <code>avatar</code> for large size.</p>
            <figure classNames="avatar avatar--patient avatar--lg">CA</figure>
            <figure classNames="avatar avatar--patient avatar--lg"><svg classNames="avatar__icon"><use xlinkHref="#icon-user"></use></svg></figure>
            <figure classNames="avatar avatar--member avatar--lg">CA</figure>
          </div>

          <div>
            <h5 classNames="site-miniheadline">Small Avatar</h5>
            <p classNames="site-copy">Add the <code>avatar--sm</code> modifier to <code>avatar</code> for small size.</p>
            <figure classNames="avatar avatar--patient avatar--sm">CA</figure>
            <figure classNames="avatar avatar--patient avatar--sm"><svg classNames="avatar__icon"><use xlinkHref="#icon-user"></use></svg></figure>
            <figure classNames="avatar avatar--member avatar--sm">CA</figure>
          </div>
        </section>
      </div>
    );
  }
});

ReactDOM.render(<AvatarApp />, document.getElementById('js-app'));
