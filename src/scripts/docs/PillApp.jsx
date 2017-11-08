import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Pill, UtilityInlineGrid } from '../components';
import pillExample from './examples/Pill.example.txt';

const pillDocs = {
  className: '[Optional] - Include additional class name(s)',
  disabled:  '[Optional] - Pill is disabled',
  icon:      '[Optional] - Attaches an Icon to the Pill',
  hideClose: '[Optional] - Whether to show close icon',
  onClick:   '[Required] - Include click function for Pill',
  label:     '[Required] - Include label for Pill',
  type:      '[Optional] - Pill type, as a string - [default, primary]',
};
const exampleScope  = {
  React,
  ReactDOM,
  Pill,
  UtilityInlineGrid,
};

const PillApp = () =>
  (<div>
    <section className="site-section">
      <h3 className="site-subheadline">Pills</h3>
      <p className="site-text-lead">The Pill component is used to display current filters or selections.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Playground theme="default" docClass={Pill} propDescriptionMap={pillDocs} codeText={pillExample} scope={exampleScope} noRender={false} />
    </section>

  </div>);

ReactDOM.render(<PillApp />, document.getElementById('js-app'));
