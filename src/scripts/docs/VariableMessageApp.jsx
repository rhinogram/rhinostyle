import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { VariableMessage } from '../components';
import variableMessageExample from './examples/VariableMessage.example.txt';

const variableMessageDocs = {
  className: '[Optional] - Include additional class name(s)',
  composeLabel: '[Optional] - Label used above the editable text',
  explanationMessage: '[Optional] - Text that appears next to the variable select',
  previewLabel: '[Optional] - Label used above the preview message bubble',
  reset: '[Optional] - Allow the initial value to be reverted after edit',
  variables: 'Select options (with variable notes) that power the find/replace functionality',
  initialValue: 'Plain-text message value that should be used by default or that is currently stored in the database',
  onInput: 'Callback function when the composition area is changed',
  readOnly: '[Optional] - Disable compose input, select variable option, and message preview. This would typically be used in tandem with the intialValue prop',
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
      <Playground theme="default" docClass={VariableMessage} propDescriptionMap={variableMessageDocs} codeText={variableMessageExample} scope={variableMessageScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<VariableMessageApp />, document.getElementById('js-app'));
