import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { VariableMessage } from '../components';
import variableMessageExample from './examples/VariableMessage.example.txt';

const bucketDocs = {
  className: '[Optional] - Include additional class name(s)',
  size: '[Optional] - Bucket size -  [small]',
  type: '[Optional] - Bucket type -  [default | light | primary]',
};
const variableMessageScope  = {
  React,
  ReactDOM,
  VariableMessage,
};

const VariableMessageApp = () =>
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Variable Messages</h3>
      <p className="site-text-lead">Variable Messages are a composition tool that uses placeholders to create templates that substitute the actual values when in-use.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Variable Message Playground</h3>
      <Playground theme="default" docClass={VariableMessage} propDescriptionMap={bucketDocs} codeText={variableMessageExample} scope={variableMessageScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<VariableMessageApp />, document.getElementById('js-app'));
