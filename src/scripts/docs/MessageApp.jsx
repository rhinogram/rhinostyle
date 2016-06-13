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
      <h3 className="site-subheadline">Message Direction</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">From Message</h5>
        <p className="site-copy"><code>direction="from"</code></p>
        <div className="site-example-messages u-bg-gray-lighter u-p-a">
          <Message direction="from">
            A Default Message
          </Message>
          <Message direction="from" type="primary">
            A Primary Message
          </Message>
          <Message direction="from" type="secondary">
            A Secondary Message
          </Message>
          <Message direction="from" type="note">
            A Note
          </Message>
        </div>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">To Message</h5>
        <p className="site-copy"><code>direction="to"</code></p>
        <div className="site-example-messages u-bg-gray-lighter u-p-a">
          <Message direction="to">
            A Default Message
          </Message>
          <Message direction="to" type="primary">
            A Primary Message
          </Message>
          <Message direction="to" type="secondary">
            A Secondary Message
          </Message>
          <Message direction="to" type="note">
            A Note
          </Message>
        </div>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={messageExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<MessageApp />, document.getElementById('js-app'));
