import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Message, UtilityInlineGrid } from '../components';
import messageExample from './examples/Message.example.txt';

const messageDocs = {
  className: '[Optional] - Include additional class name(s)',
  type: '[Optional] - Message type -  [primary | note]',
  direction: '[Optional] - Message direction -  [inbound | outbound]',
};
const exampleScope  = {
  React,
  ReactDOM,
  Message,
  UtilityInlineGrid,
};

const MessageApp = () =>
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Message Types</h3>
      <p className="site-copy"><code>type=&quot;default | primary | note&quot;</code></p>
      <UtilityInlineGrid>
        <div>
          <Message>
            Default Message <a href="javascript:void(0)">www.linktosomething.com</a>
          </Message>
        </div>
        <div>
          <Message type="primary">
            Primary Message <a href="javascript:void(0)">www.linktosomething.com</a>
          </Message>
        </div>
        <div>
          <Message type="note">
            Note Message <a href="javascript:void(0)">www.linktosomething.com</a>
          </Message>
        </div>
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Direction</h3>
      <div className="u-m-b-lg">
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
      <div className="u-m-b-lg">
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
      <Playground theme="default" docClass={Message} propDescriptionMap={messageDocs} codeText={messageExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<MessageApp />, document.getElementById('js-app'));
