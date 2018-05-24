import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Button, Icon, UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';
import { Live } from './components';
import UtilityInlineGridExample from './examples/UtilityInlineGrid.example.txt';
import UtilityListExample from './examples/UtilityList.example.txt';

const UtilityInlineGridDocs = {
  align: "Align grid along x-axis <code>oneOf([middle', 'right', 'between'])</code>", // eslint-disable-line single-quotes
  size: "Gutter size for list <code>oneOf(['small', 'regular', 'large'])</code>", // eslint-disable-line single-quotes
};
const UtilityInlineGridScope = {
  React,
  ReactDOM,
  Button,
  Icon,
  UtilityInlineGrid,
};

const UtilityListDocs = {
  space: 'List items have space between them',
  border: 'List items have space and border between them',
};
const UtilityListScope = {
  React,
  ReactDOM,
  UtilityList,
  UtilityListItem,
};

const UtilityComponentsApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Utility Components</h3>
      <p className="site-text-lead">Helpers that can be used in conjunction with our components.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Inline Grid</h3>
      <div className="u-m-b-large">
        <p>Variable-width content; like buttons and/or list items, can wrap at certain widths within our app when placed next to each other. We can use the <code>u-inline-grid</code> class to provide adequate spacing.</p>
        <p><strong>Note:</strong> This utility adds margin to each decendant of the class, so if the component you are interacting with has margin, wrap it in another element (such as a <code>&lt;div&gt;</code>) to get around adverse spacing effects. There should be no whitespace modifiers directly attached.</p>
      </div>
      <h3 className="site-subheadline">Inline Grid Playground</h3>

      <Live
        code={UtilityInlineGridExample}
        scope={UtilityInlineGridScope}
        component={UtilityInlineGrid}
        propDescriptions={UtilityInlineGridDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">List</h3>
      <div className="u-m-b-large">
        <p>Create block-level lists that reset default <code>&lt;ul&gt;</code> styles.</p>
      </div>
      <h3 className="site-subheadline">List Playground</h3>

      <Live
        code={UtilityListExample}
        scope={UtilityListScope}
        component={UtilityList}
        propDescriptions={UtilityListDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<UtilityComponentsApp />, document.getElementById('root'));
