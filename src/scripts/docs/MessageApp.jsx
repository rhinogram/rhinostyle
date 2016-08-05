import React    from 'react';
import ReactDOM from 'react-dom';

import { Message } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const messageExample = require('raw!./examples/Message.example.txt');
const messageDocs = {
  className: '[Optional] - Include additional class name(s)',
  type: '[Optional] - Message type -  [primary | note]',
  direction: '[Optional] - Message direction -  [inbound | outbound]',
};
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
      <p className="site-copy"><code>type="default | primary | note"</code></p>
      <div className="site-example-messages">
        <Message>
          Default Message <a href="#">www.linktosomething.com</a>
        </Message>
        <Message type="primary">
          Primary Message <a href="#">www.linktosomething.com</a>
        </Message>
        <Message type="note">
          Note Message <a href="#">www.linktosomething.com</a>
        </Message>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Direction</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Inbound Message</h5>
        <p className="site-copy"><code>direction="inbound"</code></p>
        <div>
          <Message direction="inbound">
            Default Message
          </Message>
          <Message direction="inbound" type="primary">
            Primary Message
          </Message>
          <Message direction="inbound" type="note">
            Note Message
          </Message>
        </div>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Outbound Message</h5>
        <p className="site-copy"><code>direction="outbound"</code></p>
        <div>
          <Message direction="outbound">
            Default Message
          </Message>
          <Message direction="outbound" type="primary">
            Primary Message
          </Message>
          <Message direction="outbound" type="note">
            Note Message
          </Message>
        </div>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Message} propDescriptionMap={messageDocs} codeText={messageExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<MessageApp />, document.getElementById('js-app'));
