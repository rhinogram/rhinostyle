import React    from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, DropdownMenu, DropdownMenuDivider, DropdownMenuHeader, DropdownMenuItem } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const dropdownExample = require('raw!./examples/Dropdown.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Dropdown,
  DropdownMenu,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
};

const DropdownApp = () =>
  <div>
    <h1 className="site-headline">Dropdowns</h1>
    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Types</h3>

      <Dropdown label="Dropdown">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown label="Dropdown" type="primary">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown label="Dropdown" type="secondary">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown label="Dropdown" outline>
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown label="Dropdown" type="primary" outline>
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown label="Dropdown" type="link">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown type="link" icon="search">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <br /><br />

      <Dropdown icon="search">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown type="primary" icon="lock">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown type="secondary" icon="cog">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown outline icon="search">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown type="primary" outline icon="lock">
        <DropdownMenu>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Modifiers</h3>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Block</h5>
        <p className="site-copy">
          Add the <code>dropdown--block</code> modifier to <code>dropdown</code>to create 100% width, block level dropdown. The <code>dropdown__menu</code> will also have 100% width to match.
        </p>

        <div className="u-m-b">

          <Dropdown label="Dropdown Block" block>
            <DropdownMenu>
              <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
              <DropdownMenuItem>Item</DropdownMenuItem>
              <DropdownMenuItem>Another Item</DropdownMenuItem>
              <DropdownMenuItem>A third item</DropdownMenuItem>
              <DropdownMenuDivider />
              <DropdownMenuItem>Separated item</DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>

        </div>

      </div>
    </section>

    <section className="site-section">

      <h3 className="site-subheadline">Dropdown Menu Modifiers</h3>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Menu Right</h5>
        <p className="site-copy">Add the <code>dropdown__menu--right</code> modifier to <code>dropdown__menu</code>.</p>
        <Dropdown>
          <DropdownMenu position="right">
            <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Another Item</DropdownMenuItem>
            <DropdownMenuItem>A third item</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated item</DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Menu Top</h5>
        <p className="site-copy">Add the <code>dropdown__menu--top</code> modifier to <code>dropdown__menu</code>. Also, change <code>caret-down</code> className to <code>caret-up</code>.</p>
        <Dropdown>
          <DropdownMenu position="top">
            <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Another Item</DropdownMenuItem>
            <DropdownMenuItem>A third item</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated item</DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Menu Top &amp; Right</h5>
        <p className="site-copy">Add <code>dropdown__menu--top dropdown__menu--right</code> modifier to <code>dropdown__menu</code>.</p>
        <Dropdown>
          <DropdownMenu position="top right">
            <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Another Item</DropdownMenuItem>
            <DropdownMenuItem>A third item</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated item</DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Menu Wide</h5>
        <p className="site-copy">Add <code>dropdown__menu--wide</code> modifier to <code>dropdown__menu</code>. This gives the dropdown menu a larger min-width value.</p>
        <Dropdown>
          <DropdownMenu position="wide">
            <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Another Item</DropdownMenuItem>
            <DropdownMenuItem>A third item</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated item</DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
      </div>

    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={dropdownExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<DropdownApp />, document.getElementById('js-app'));
