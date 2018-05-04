import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Live } from './components';
import SizesExample from './examples/Grid/sizes.example.txt';
import CollapseExample from './examples/Grid/collapse.example.txt';
import SourceOrderExample from './examples/Grid/sourceOrder.example.txt';
import OffsetExample from './examples/Grid/offset.example.txt';

const GridScope  = {
  React,
  ReactDOM,
};

const LabelApp = () => (
  <Fragment>
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

      <Live
        code={SizesExample}
        scope={GridScope}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Collapsed Playground</h3>
      <p>By applying the <code>.row--collapsed</code> modifier you can remove the automatic spacing provided by our grid system.</p>

      <Live
        code={CollapseExample}
        scope={GridScope}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Source-order Playground</h3>
      <p>Depending on the screen-size, you may need to adjust the order of illustrations and/or text. You may use the <code>.column--first</code> or <code>.column--last</code> modifier attached directly to a specific <code>column</code>. If you&apos;d like to have this behavior available at different breakpoints, you may use the following: <code>.column--first@[xsmall,small,medium]</code> or <code>.column--last@[xsmall,small,medium]</code>.</p>

      <Live
        code={SourceOrderExample}
        scope={GridScope}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Offset Playground</h3>
      <p>Offsets allow you to space out your columns more selectively across each axis. You may use the <code>.column-offset-[1-12]</code> modifier attached directly to a specific <code>column</code>. If you&apos;d like to have this behavior available at different breakpoints, you may use the following: <code>.column-offset-[1-12]@[xsmall,small,medium]</code>.</p>

      <Live
        code={OffsetExample}
        scope={GridScope}
      />
    </section>

  </Fragment>
);

ReactDOM.render(<LabelApp />, document.getElementById('root'));
