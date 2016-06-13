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
      <p className="site-copy">See button component for all of the avaialbe types.</p>
      <div className="site-example-dropdowns">
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

        <Dropdown label="Dropdown" type="default-outline">
          <DropdownMenu>
            <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Another Item</DropdownMenuItem>
            <DropdownMenuItem>A third item</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated item</DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown label="Dropdown" type="primary-outline">
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

        <Dropdown type="default-outline" icon="search">
          <DropdownMenu>
            <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Another Item</DropdownMenuItem>
            <DropdownMenuItem>A third item</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated item</DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown type="primary-outline" icon="lock">
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

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Modifiers</h3>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Block</h5>
        <p className="site-copy">
          Add <code>block</code> property to create 100% width, block level dropdown. The <code>dropdown__menu</code> will also have 100% width to match.
        </p>

        <div className="u-m-b">

          <Dropdown label="Dropdown Block" block icon="cog">
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
        <p className="site-copy">Add <code>position="right"</code> to <code>DropdownMenu</code> component.</p>
        <Dropdown label="Dropdown Menu Right">
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
        <p className="site-copy">Add <code>position="top"</code> to <code>DropdownMenu</code> component.</p>
        <Dropdown label="Dropdown Menu Top">
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
        <p className="site-copy">Add <code>position="top-right"</code> to <code>DropdownMenu</code> component.</p>
        <Dropdown label="Dropdown Menu Top Right">
          <DropdownMenu position="top-right">
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
        <p className="site-copy">Add <code>wide</code> property to <code>DropdownMenu</code> component. This gives the dropdown menu a larger min-width value.</p>
        <Dropdown label="Dropdown Menu Wide">
          <DropdownMenu wide>
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
