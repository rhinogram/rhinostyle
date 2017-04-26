import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import sizesExample from './examples/Grid/sizes.example.txt';
import collapsedExample from './examples/Grid/collapsed.example.txt';

const exampleScope  = {
  React,
  ReactDOM,
};

const LabelApp = () =>
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Grid</h3>
      <div className="site-text-lead">
        <p>We have rolled our own 12-column flexbox grid system. Columns that add-up to more than 12 automatically get some space in-between. Because of the complexity around class modifiers, we have decided to leave the implementation up to standard HTML classes and not as a React component.</p>
        <p><strong>Note:</strong> There should be no whitespace modifiers attached to <code>.row</code> or its direct children. You can attach them on adjacent DOM or by wrapping the component in a <code>&lt;div&gt;</code>.</p>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Column-size Playground</h3>
      <p>Columns are constructed with the following naming pattern: <code>.column-[1-12]</code>. If you&apos;d like to present different block widths on certain breakpoints, you can use the following: <code>.column-[1-12]@[xsmall,small,medium]</code>.</p>
      <p>You can chain these classes together for unique widths based on our global breakpoints: <code>.column-10 column-8@xsmall column-6@small column-4@medium</code>.</p>

      <Playground theme="default" codeText={sizesExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Collapsed Playground</h3>
      <p>test</p>

      <Playground theme="default" codeText={collapsedExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<LabelApp />, document.getElementById('js-app'));
