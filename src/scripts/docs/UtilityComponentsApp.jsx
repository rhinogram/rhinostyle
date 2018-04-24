import Playground from 'component-playground';
import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Icon, UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';
import utilityInlineGridExample from './examples/UtilityInlineGrid.example.txt';
import utilityListExample from './examples/UtilityList.example.txt';

const utilityInlineGridDocs = {
  align: '[Optional] - Align grid along x-axis (left by default) - [middle | right | between]',
  size: '[Optional] - Gutter size for list (small by default) -  [small | regular | large]',
};
const utilityInlineGridScope = {
  React,
  ReactDOM,
  Button,
  Icon,
  UtilityInlineGrid,
};

const utilityListDocs = {
  space: '[Optional] - List items have space between them',
  border: '[Optional] - List items have space and border between them',
};
const utilityListScope = {
  React,
  ReactDOM,
  UtilityList,
  UtilityListItem,
};

const UtilityComponentsApp = () => (
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Utility Components</h3>
      <p className="site-text-lead">Helpers that can be used in conjunction with our components.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Inline Grid</h3>
      <div className="u-m-b-large">
        <p>Variable-width content; like buttons and/or list items, can wrap at certain widths within our app when placed next to each other. We can use the <code>u-inline-grid</code> class to provide adequate spacing.</p>
        <p><strong>Note:</strong> This utility adds margin to each decendant of the class, so if the component you are interacting with has margin, wrap it in another element (such as a <code>&lt;div&gt;</code>) to get around adverse spacing effects.</p>
      </div>
      <h3 className="site-subheadline">Inline Grid Playground</h3>
      <Playground theme="default" docClass={UtilityInlineGrid} propDescriptionMap={utilityInlineGridDocs} codeText={utilityInlineGridExample} scope={utilityInlineGridScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">List</h3>
      <div className="u-m-b-large">
        <p>Create block-level lists that reset default <code>&lt;ul&gt;</code> styles.</p>
      </div>
      <h3 className="site-subheadline">List Playground</h3>
      <Playground theme="default" docClass={UtilityList} propDescriptionMap={utilityListDocs} codeText={utilityListExample} scope={utilityListScope} noRender={false} />
    </section>
  </div>
);

ReactDOM.render(<UtilityComponentsApp />, document.getElementById('js-app'));
