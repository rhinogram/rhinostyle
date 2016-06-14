import React    from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, DropdownMenuDivider, DropdownMenuHeader, DropdownMenuItem, DropdownMultiSelect, Input } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const dropdownExample = require('raw!./examples/Dropdown.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Dropdown,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMultiSelect,
  Input,
};

const DropdownApp = () =>
  <div>
    <h1 className="site-headline">Dropdowns</h1>
    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Types</h3>
      <p className="site-copy">See button component for all of the available <code>type</code> properties.</p>
      <div className="site-example-dropdowns">
        <Dropdown label="Dropdown">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown label="Dropdown" type="primary">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown label="Dropdown" type="secondary">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown label="Dropdown" type="default-outline">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown label="Dropdown" type="primary-outline">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown label="Dropdown" type="link">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown type="link" icon="search">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <br /><br />

        <Dropdown icon="search">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown type="primary" icon="lock">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown type="secondary" icon="cog">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown type="default-outline" icon="search">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>

        <Dropdown type="primary-outline" icon="lock">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Modifiers</h3>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Block</h5>
        <p className="site-copy">
          Add <code>block</code> property to create 100% width, block level dropdown. The <code>dropdown__menu</code> will also have 100% width to match.
        </p>

        <div className="u-m-b">

          <Dropdown label="Dropdown Block" icon="cog" block>
            <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Another Item</DropdownMenuItem>
            <DropdownMenuItem>A third item</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated item</DropdownMenuItem>
          </Dropdown>

        </div>

      </div>
    </section>

    <section className="site-section">

      <h3 className="site-subheadline">Dropdown Menu Modifiers</h3>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Menu Right</h5>
        <p className="site-copy">Add <code>position="right"</code> property.</p>
        <Dropdown label="Dropdown Menu Right" position="right">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Menu Top</h5>
        <p className="site-copy">Add <code>position="top"</code> property.</p>
        <Dropdown label="Dropdown Menu Top" position="top">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Menu Top &amp; Right</h5>
        <p className="site-copy">Add <code>position="top-right"</code> property.</p>
        <Dropdown label="Dropdown Menu Top Right" position="top-right">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Menu Wide</h5>
        <p className="site-copy">Add <code>wide</code> property. This gives the dropdown menu a larger min-width value.</p>
        <Dropdown label="Dropdown Menu Wide" wide>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown MultiSelect</h3>

      <div className="u-m-b-md">
        <p className="site-copy">Add the <code>dropdown--multiselect</code> modifier to <code>dropdown</code>.
          This dropdown and dropdown menu will always have 100% width. Selected items are shown as "pills" below the dropdown.
        </p>

        <div className="u-m-b">

          <DropdownMultiSelect label="Dropdown">
            <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Another Item</DropdownMenuItem>
            <DropdownMenuItem>A third item</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated item</DropdownMenuItem>
          </DropdownMultiSelect>

        </div>

      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={dropdownExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<DropdownApp />, document.getElementById('js-app'));
