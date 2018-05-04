import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { VariableMessage } from '../components';
import { Live } from './components';
import VariableMessageExample from './examples/VariableMessage.example.txt';

const VariableMessageDocs = {
  composeLabel: 'Label used above the editable text',
  explanationMessage: 'Text that appears next to the variable select',
  previewLabel: 'Label used above the preview message bubble',
  reset: 'Allow the initial value to be reverted after edit',
  variables: 'Select options (with variable notes) that power the find/replace functionality',
  initialValue: 'Plain-text message value that should be used by default or that is currently stored in the database',
  onInput: 'Callback function when the composition area is changed',
  readOnly: 'Disable compose input, select variable option, and message preview. This would typically be used in tandem with the intialValue prop',
};
const VariableMessageScope  = {
  React,
  ReactDOM,
  VariableMessage,
};

const VariableMessageApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Variable Messages</h3>
      <p className="site-text-lead">Variable Messages are a composition tool that uses placeholders to create templates that substitute the actual values when in-use.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Variable Message Playground</h3>

      <Live
        code={VariableMessageExample}
        scope={VariableMessageScope}
        component={VariableMessage}
        propDescriptions={VariableMessageDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<VariableMessageApp />, document.getElementById('root'));
