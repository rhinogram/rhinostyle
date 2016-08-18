import React    from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, DropdownFilter, DropdownDocs, DropdownMenuDivider, DropdownMenuHeader, DropdownMenuItem, DropdownMenuScroll, DropdownMultiSelect, DropdownMultiSelectDocs, Icon } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const dropdownExample = require('raw!./examples/Dropdown.example.txt');
const dropdownMultiSelectExample = require('raw!./examples/DropdownMultiSelect.example.txt');
const dropdownMenuItemExample = require('raw!./examples/DropdownMenuItem.example.txt');

const dropdownDocs = {
  activeKey: '[Optional] - The id of the currently selected DropdownMenuItem',
  className: '[Optional] - Include additional class name(s)',
  hideCaret: '[Optional] - Hide Dropdown caret',
  icon: '[Optional] - Name of icon',
  label: '[Optional] - Text in dropdown when closed',
  lockLabel: '[Optional] - Do not change label text when selecting item',
  position: '[Optional] -  Position of Dropdown - [right | top | top-right]',
  size: '[Optional] - Size of Dropdown - [small | large]',
  onSelect: '[Optional] - Callback when a DropdownMenuItem is selected',
  type: '[Optional] - Type of Dropdown -  [default | input | primary | secondary | outline-default | outline-primary | outline-reversed | link]',
};

const dropdownMultiSelectDocs = {
  activeKey: '[Optional] - The id of the currently selected DropdownMenuItem',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Name of icon',
  label: '[Optional] - Text in dropdown when closed',
  position: '[Optional] -  Position of Dropdown - [right | top | top-right]',
  size: '[Optional] - Size of Dropdown - [small | large]',
  onSelect: '[Optional] - Callback when a DropdownMenuItem is selected',
};

const dropdownMenuItemDocs = {
  active: '[Optional] - Active state',
  avatar: '[Optional] - Path to avatar image',
  blankWindow: '[Optional] - Open URL in blank browser window',
  className: '[Optional] - Include additional class name(s)',
  disabled: '[Optional] - Disabled state',
  icon: '[Optional] - Name of icon',
  id: '[Optional] - Identifies the selected item in Dropdown when you want to use as a Dropdown Select',
  label: '[Optional] - Label for item',
  onClick: '[Opational] - Click function',
  url: '[Optional] - URL for item',
};

const exampleScope  = {
  React,
  ReactDOM,
  Dropdown,
  DropdownFilter,
  DropdownDocs,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuScroll,
  DropdownMultiSelect,
  DropdownMultiSelectDocs,
  Icon,
};

const DropdownApp = () =>
  <div>
    <h1 className="site-headline">Dropdowns</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdowns</h3>
      <p className="site-text-lead">We have two main dropdown components: <span className="u-text-accent">Dropdown</span> and <span className="u-text-accent">DropdownMultiSelect</span>.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Types</h3>
      <p className="site-copy">Types are the same as the Button component with one exception - Dropdowns include an <code>input</code> type so that they mimic form controls.</p>
      <div className="site-example-dropdowns">
        <Dropdown label="Defualt">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Input" type="input">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Primary" type="primary">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Secondary" type="secondary">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Outline Default" type="outline-default">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Outline Primary" type="outline-primary">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Link" type="link">
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
        <Dropdown type="default" icon="search">
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

        <Dropdown type="outline-default" icon="search">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="outline-primary" icon="lock">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Link with Color Utility" type="link" className="u-text-body">
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
        <Dropdown label="Dropdown Block" type="default" icon="cog" block>
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
        <Dropdown label="Dropdown Right" type="default" position="right">
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
        <Dropdown label="Dropdown Top" type="default" position="top">
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
        <Dropdown label="Dropdown Top Right" type="default" position="top-right">
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
        <Dropdown label="Dropdown Wide" type="default" wide>
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
      <h3 className="site-subheadline">Dropdown</h3>
      <p className="site-copy">Use <code>Dropdown</code> component to create a dropdown with selectable menu items. Selected menu items are reflected in the dropdown button's text when an <code>id</code> is used in <code>DropdownMenuItem</code>. To prevent this, use the <code>lockLabel</code> property.</p>
      <p className="site-copy">Use <code>type="input"</code> if you want dropdown to appear like a form input.</p>
      <Playground docClass={DropdownDocs} propDescriptionMap={dropdownDocs} codeText={dropdownExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown MultiSelect</h3>
      <p className="site-copy">Use <code>DropdownMultiSelect</code> component to create a multi-select list of <code>DropdownMenuItem(s)</code>.
        This dropdown and dropdown menu will always have 100% width and the appearance of a form input. Selected items are shown as "pills" below the dropdown.
      </p>

      <Playground docClass={DropdownMultiSelectDocs} propDescriptionMap={dropdownMultiSelectDocs} codeText={dropdownMultiSelectExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">DropdownMenuItem</h3>
      <Playground docClass={DropdownMenuItem} propDescriptionMap={dropdownMenuItemDocs} codeText={dropdownMenuItemExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<DropdownApp />, document.getElementById('js-app'));
