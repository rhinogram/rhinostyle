import React    from 'react';
import ReactDOM from 'react-dom';

import { Message } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const messageExample = require('raw!./examples/Message.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Message,
};

const MessageApp = () =>
  <div>
    <h1 className="site-headline">Messages</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Message Types</h3>
      <div className="site-example-messages u-bg-gray-lighter u-p-a">
        <div className="msg msg--default">Default message. <a href="#">www.rhinogram.com</a></div>
        <div className="msg msg--primary">Primary message. <a href="#">www.rhinogram.com</a></div>
        <div className="msg msg--secondary">Secondary message. <a href="#">www.rhinogram.com</a></div>
        <div className="msg msg--note">Note message. <a href="#">www.rhinogram.com</a></div>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={messageExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

  ReactDOM.render(<MessageApp />, document.getElementById('js-app'));
