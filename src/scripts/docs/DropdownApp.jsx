import React    from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, DropdownMenuDivider, DropdownMenuHeader, DropdownMenuItem, DropdownMenuScroll, DropdownMultiSelect, DropdownSelect, Icon } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const dropdownExample = require('raw!./examples/Dropdown.example.txt');
const dropdownSelectExample = require('raw!./examples/DropdownSelect.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Dropdown,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMultiSelect,
  DropdownSelect,
  Icon,
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
          Add <code>block</code> property to create 100% width, block level dropdown.
        </p>
        <Dropdown label="Dropdown Block" icon="cog" block>
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Right</h5>
        <p className="site-copy">Add <code>position="right"</code> property.</p>
        <Dropdown label="Dropdown Right" position="right">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Top</h5>
        <p className="site-copy">Add <code>position="top"</code> property.</p>
        <Dropdown label="Dropdown Top" position="top">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Top &amp; Right</h5>
        <p className="site-copy">Add <code>position="top-right"</code> property.</p>
        <Dropdown label="Dropdown Top Right" position="top-right">
          <DropdownMenuHeader>Menu Header</DropdownMenuHeader>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
          <DropdownMenuItem>A third item</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Separated item</DropdownMenuItem>
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Wide</h5>
        <p className="site-copy">Add <code>wide</code> property. This gives the dropdown menu a larger min-width value.</p>
        <Dropdown label="Dropdown Wide" wide>
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
      <h3 className="site-subheadline">Dropdown with Scroll</h3>
      <p className="site-copy">Use <code>DropdownMenuScroll</code> component to create scrollable <code>DropdownMenuItem(s)</code>.
      This is handy when you have a long list of menu items or if you desire fixed content at the top of the menu.</p>

      <Dropdown label="Dropdown with Scroll">
        <DropdownMenuHeader>Scrollable Items Below</DropdownMenuHeader>
        <DropdownMenuScroll>
          <DropdownMenuItem>Item One</DropdownMenuItem>
          <DropdownMenuItem>Item Two</DropdownMenuItem>
          <DropdownMenuItem>Item Three</DropdownMenuItem>
          <DropdownMenuItem>Item Four</DropdownMenuItem>
          <DropdownMenuItem>Item Five</DropdownMenuItem>
          <DropdownMenuItem>Item Six</DropdownMenuItem>
          <DropdownMenuItem>Item Seven</DropdownMenuItem>
          <DropdownMenuItem>Item Eight</DropdownMenuItem>
          <DropdownMenuItem>Item Nine</DropdownMenuItem>
          <DropdownMenuItem>Item Ten</DropdownMenuItem>
        </DropdownMenuScroll>
      </Dropdown>

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown MultiSelect</h3>
      <p className="site-copy">Add the <code>dropdown--multiselect</code> modifier to <code>dropdown</code>.
        This dropdown and dropdown menu will always have 100% width. Selected items are shown as "pills" below the dropdown.
      </p>

      <DropdownMultiSelect label="Dropdown MultiSelect">
        <DropdownMenuScroll>
          <DropdownMenuItem active>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/24263_391743639328_3523852_n.jpg?oh=260c184e71abf5fdaff9eddb361b0139&oe=57E56868)' }}></figure>
            <span className="u-m-l-sm u-text-overflow">Ben Bruning With Really Long Name</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1504523_437875089696117_7378541844854542050_n.jpg?oh=089a2d533f97e5a10f378291880c3dc8&oe=57CEA0AF)' }}></figure>
            <span className="u-m-l-sm u-text-overflow">Blake Guilloud</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg)' }}></figure>
            <span className="u-m-l-sm">Craig Anthony</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABECOyAoeLlhfOMzQEiC3ZjYXJkX3Bob3RvKig2ZWJmZWEwNjA3NDhkZTY0ZWRhOTczNDU3M2E5YzI0MDA2YmFhZWFhMAF_p4RL_jmWVcGIWRwQZgNrVdicmw?sz=128)' }}></figure>
            <span className="u-m-l-sm">Ian Greulich</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11377393_810816385765_6827778412867830242_n.jpg?oh=35b08f99b81268988c15eecbf9929e56&oe=57DFE90F)' }}></figure>
            <span className="u-m-l-sm">Keaton Foster</span>
          </DropdownMenuItem>
          <DropdownMenuItem active>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1390558_10202477697167953_1453503315_n.jpg?oh=d097810a214b43acc81cd309eda27386&oe=57A41ADF)' }}></figure>
            <span className="u-m-l-sm">Lauren Farr</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//scontent-iad3-1.xx.fbcdn.net/t31.0-8/12977098_10207580224281040_1166679891101945990_o.jpg)' }}></figure>
            <span className="u-m-l-sm">Max Krause</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10882107_701393473313574_7671196485562187669_n.jpg?oh=3100e182e75a87cfe3b236e32ca3686e&oe=57DA94B4)' }}></figure>
            <span className="u-m-l-sm">Paul Drake</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/c0.50.200.200/1947402_10152279843568698_519360225_n.jpg?oh=a3c546f01142712ab3a25a2b328df392&oe=579C05BA)' }}></figure>
            <span className="u-m-l-sm">Paul Griffin</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128)' }}></figure>
            <span className="u-m-l-sm">Rob Whelan</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <figure className="avatar avatar--member avatar--sm" style={{ backgroundImage: 'url(//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10440915_10100238785384001_3941742026226262266_n.jpg?oh=e57e9df480a0326ee7d0bb46950b9c3f&oe=57CF342E)' }}></figure>
            <span className="u-m-l-sm">Terry Kennair</span>
          </DropdownMenuItem>
        </DropdownMenuScroll>
      </DropdownMultiSelect>

    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={dropdownExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Select</h3>
      <Playground codeText={dropdownSelectExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<DropdownApp />, document.getElementById('js-app'));
