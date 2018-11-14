import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Message, UtilityInlineGrid } from '../components';
import { Live } from './components';
import MessageExample from './examples/Message.example.txt';

const MessageDocs = {
  type: "<code>oneOf(['primary', 'note'])</code>", // eslint-disable-line single-quotes
  direction: "Message tail direction <code>oneOf(['inbound', 'outbound'])</code>", // eslint-disable-line single-quotes
};
const MessageScope = {
  React,
  ReactDOM,
  Message,
  UtilityInlineGrid,
};

const MessageApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Message Types</h3>
      <p className="site-copy"><code>type=&quot;default | primary | note&quot;</code></p>
      <UtilityInlineGrid>
        <div>
          <Message>
            Default Message <a href="https://www.rhinogram.com">rhinogram.com</a>
          </Message>
        </div>
        <div>
          <Message type="primary">
            Primary Message <a href="https://www.rhinogram.com">rhinogram.com</a>
          </Message>
        </div>
        <div>
          <Message type="note">
            Note Message <a href="https://www.rhinogram.com">rhinogram.com</a>
          </Message>
        </div>
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Direction</h3>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Inbound Message</h5>
        <p className="site-copy"><code>direction=&quot;inbound&quot;</code></p>
        <UtilityInlineGrid>
          <div>
            <Message direction="inbound">
              Default Message
            </Message>
          </div>
          <div>
            <Message direction="inbound" type="primary">
              Primary Message
            </Message>
          </div>
          <div>
            <Message direction="inbound" type="note">
              Note Message
            </Message>
          </div>
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Outbound Message</h5>
        <p className="site-copy"><code>direction=&quot;outbound&quot;</code></p>
        <UtilityInlineGrid>
          <div>
            <Message direction="outbound">
              Default Message
            </Message>
          </div>
          <div>
            <Message direction="outbound" type="primary">
              Primary Message
            </Message>
          </div>
          <div>
            <Message direction="outbound" type="note">
              Note Message
            </Message>
          </div>
        </UtilityInlineGrid>
      </div>
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>

      <Live
        code={MessageExample}
        scope={MessageScope}
        component={Message}
        propDescriptions={MessageDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<MessageApp />, document.getElementById('root'));
