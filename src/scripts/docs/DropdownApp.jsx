import React    from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, DropdownDocs, DropdownMenuDivider, DropdownMenuHeader, DropdownMenuItem, DropdownMenuScroll, DropdownMultiSelect, DropdownMultiSelectDocs, DropdownSelect, DropdownSelectDocs, DropdownSelectFilter, Icon } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const dropdownExample = require('raw!./examples/Dropdown.example.txt');
const dropdownSelectExample = require('raw!./examples/DropdownSelect.example.txt');
const dropdownMultiSelectExample = require('raw!./examples/DropdownMultiSelect.example.txt');

const dropdownDocs = {
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Name of icon',
  label: '[Optional] - Text in dropdown when closed',
  position: '[Optional] -  Position of Dropdown - [right | top | top-right]',
  size: '[Optional] - Size of Dropdown - [small | large]',
  type: '[Optional] - Type of Dropdown -  [default | primary | secondary | default-outline | primary-outline | link]',
};

const dropdownSelectDocs = {
  activeKey: '[Optional] - The id of the currently selected DropdownMenuItem',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Name of icon',
  label: '[Optional] - Text in dropdown when closed',
  position: '[Optional] -  Position of Dropdown - [right | top | top-right]',
  size: '[Optional] - Size of Dropdown - [small | large]',
  onSelect: '[Optional] - Callback when a DropdownMenuItem is selected',
  type: '[Optional] - Type of Dropdown -  [default | primary | secondary | default-outline | primary-outline | link]',
};

const dropdownMultiSelectDocs = {
  activeKey: '[Optional] - The id of the currently selected DropdownMenuItem',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Name of icon',
  label: '[Optional] - Text in dropdown when closed',
  position: '[Optional] -  Position of Dropdown - [right | top | top-right]',
  size: '[Optional] - Size of Dropdown - [small | large]',
  onSelect: '[Optional] - Callback when a DropdownMenuItem is selected',
  type: '[Optional] - Type of Dropdown -  [default | primary | secondary | default-outline | primary-outline | link]',
};

const exampleScope  = {
  React,
  ReactDOM,
  Dropdown,
  DropdownDocs,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuScroll,
  DropdownMultiSelect,
  DropdownMultiSelectDocs,
  DropdownSelect,
  DropdownSelectDocs,
  DropdownSelectFilter,
  Icon,
};

const DropdownApp = () =>
  <div>
    <h1 className="site-headline">Dropdowns</h1>

    <section className="site-section">
      <h3 className="site-subheadline">About Dropdowns</h3>
      <p className="site-text-lead">We have three dropdown components: <span className="u-text-accent">Dropdown</span>, <span className="u-text-accent">DropdownSelect</span>, and <span className="u-text-accent">DropdownMultiSelect</span>.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Types</h3>
      <p className="site-copy">See button component for all of the available <code>type</code> properties.</p>
      <div className="site-example-dropdowns">
        <Dropdown label="Dropdown">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Dropdown" type="primary">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Dropdown" type="secondary">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Dropdown" type="default-outline">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Dropdown" type="primary-outline">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Dropdown" type="link">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="link" icon="search">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <br /><br />

        <Dropdown icon="search">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="primary" icon="lock">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="secondary" icon="cog">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="default-outline" icon="search">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="primary-outline" icon="lock">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Modifiers</h3>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Block</h5>
        <p className="site-copy">
          Add <code>block</code> property to create 100% width, block level dropdown.
        </p>
        <Dropdown label="Dropdown Block" icon="cog" block>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Right</h5>
        <p className="site-copy">Add <code>position="right"</code> property.</p>
        <Dropdown label="Dropdown Right" position="right">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Top</h5>
        <p className="site-copy">Add <code>position="top"</code> property.</p>
        <Dropdown label="Dropdown Top" position="top">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Top &amp; Right</h5>
        <p className="site-copy">Add <code>position="top-right"</code> property.</p>
        <Dropdown label="Dropdown Top Right" position="top-right">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Wide</h5>
        <p className="site-copy">Add <code>wide</code> property. This gives the dropdown menu a larger min-width value. Handy when you want to include an input filter.</p>
        <Dropdown label="Dropdown Wide" wide>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown with Scroll</h3>
      <p className="site-copy">Use <code>DropdownMenuScroll</code> component to create scrollable <code>DropdownMenuItem(s)</code>.
      This is handy when you have a long list of menu items or if you desire fixed content at the top of the menu.</p>

      <Dropdown label="Dropdown with Scroll">
        <DropdownMenuHeader>Scrollable Items Below</DropdownMenuHeader>
        <DropdownMenuScroll>
          <DropdownMenuItem label="Item 1" />
          <DropdownMenuItem label="Item 2" />
          <DropdownMenuItem label="Item 3" />
          <DropdownMenuItem label="Item 4" />
          <DropdownMenuItem label="Item 5" />
          <DropdownMenuItem label="Item 6" />
          <DropdownMenuItem label="Item 7" />
          <DropdownMenuItem label="Item 8" />
          <DropdownMenuItem label="Item 9" />
        </DropdownMenuScroll>
      </Dropdown>

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Playground</h3>
      <Playground docClass={DropdownDocs} propDescriptionMap={dropdownDocs} codeText={dropdownExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Select</h3>
      <p className="site-copy">Use <code>DropdownSelect</code> component to create a dropdown with selectable menu items. Selected menu items are reflected in the dropdown button's text.</p>
      <Playground docClass={DropdownSelectDocs} propDescriptionMap={dropdownSelectDocs} codeText={dropdownSelectExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown MultiSelect</h3>
      <p className="site-copy">Use <code>DropdownMultiSelect</code> component to create a multi-select list of <code>DropdownMenuItem(s)</code>.
        This dropdown and dropdown menu will always have 100% width. Selected items are shown as "pills" below the dropdown.
      </p>

      <Playground docClass={DropdownMultiSelectDocs} propDescriptionMap={dropdownMultiSelectDocs} codeText={dropdownMultiSelectExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<DropdownApp />, document.getElementById('js-app'));
