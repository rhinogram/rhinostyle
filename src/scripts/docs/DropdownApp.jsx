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

      <Dropdown>
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

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={dropdownExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<DropdownApp />, document.getElementById('js-app'));
