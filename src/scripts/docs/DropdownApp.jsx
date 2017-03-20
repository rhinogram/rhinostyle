import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Button, Dropdown, DropdownFilter, DropdownMenuDivider, DropdownMenuHeader, DropdownMenuItem, DropdownMenuItemWild, DropdownMenuScroll, DropdownMultiSelect, Icon, UtilityInlineGrid } from '../components';
import dropdownExample from './examples/Dropdown.example.txt';
import dropdownMultiSelectExample from './examples/DropdownMultiSelect.example.txt';
import dropdownMenuHeaderExample from './examples/DropdownMenuHeader.example.txt';
import dropdownMenuItemExample from './examples/DropdownMenuItem.example.txt';
import dropdownMenuItemWildExample from './examples/DropdownMenuItemWild.example.txt';

const dropdownDocs = {
  activeKey: '[Optional] - The id of the currently selected DropdownMenuItem',
  block: '[Optional] - Block level dropdown',
  className: '[Optional] - Include additional class name(s)',
  disableScroll: '[Optional] - Disabled default dropdown menu scrolling. Does not apply when filter is used.',
  hideCaret: '[Optional] - Hide Dropdown caret',
  icon: '[Optional] - Name of icon',
  label: '[Optional] - Text in dropdown when closed',
  lockLabel: '[Optional] - Do not change label text when selecting item',
  position: '[Optional] -  Position of Dropdown - [right | top | top-right]',
  size: '[Optional] - Size of Dropdown - [small | large]',
  onSelect: '[Optional] - Callback when a DropdownMenuItem is selected',
  type: '[Optional] - Type of Dropdown -  [default | input | primary | secondary | outline-default | outline-primary | outline-reversed | link]',
  wide: '[Optional] - Sets a min-width on dropdown menu to ensure a great width',
};

const dropdownMultiSelectDocs = {
  activeKey: '[Optional] - The id of the currently selected DropdownMenuItem',
  block: '[Optional] - Block level dropdown',
  className: '[Optional] - Include additional class name(s)',
  disabled: '[Optional] - Disabled state',
  explanationMessage: '[Optional] - Explanation message to help user',
  icon: '[Optional] - Name of icon',
  label: '[Optional] - Text in dropdown when closed',
  position: '[Optional] -  Position of Dropdown - [right | top | top-right]',
  size: '[Optional] - Size of Dropdown - [small | large]',
  onSelect: '[Optional] - Callback when a DropdownMenuItem is selected',
  placeholder:        '[Optional] - Any placeholder text you want in the dropdown',
  validationMessage:  '[Optional] - Validation message for errors',
  wide: '[Optional] - Sets a min-width on dropdown menu to ensure a great width',
};

const dropdownMenuHeaderDocs = {
  className: '[Optional] - Include additional class name(s)',
  label: '[Required] - Label for header',
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
  labelDesc: '[Optional] - Description for label',
  onClick: '[Opational] - Click function',
  route: '[Optional] - React-router route to use for item',
  url: '[Optional] - URL for item',
};

const dropdownMenuItemWildDocs = {
  toggleDropdown: '[Optional] - Clicking will close the dropdown',
};

const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Dropdown,
  DropdownFilter,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuItemWild,
  DropdownMenuScroll,
  DropdownMultiSelect,
  Icon,
  UtilityInlineGrid,
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
      <UtilityInlineGrid>
        <Dropdown label="Default">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
          <div className="dropdown__menu__container"><Button block type="outline-primary" size="small">Log Out</Button></div>
        </Dropdown>

        <Dropdown label="Input" type="input">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Primary" type="primary">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Secondary" type="secondary">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Outline Default" type="outline-default">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Outline Primary" type="outline-primary">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Link" type="link">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="link" icon="search">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="default" icon="search">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="primary" icon="lock">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="secondary" icon="cog">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="outline-default" icon="search">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown type="outline-primary" icon="lock">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>

        <Dropdown label="Link with Color Utility" type="link" className="u-text-body">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Modifiers</h3>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Block</h5>
        <p className="site-copy">
          Add <code>block</code> property to create 100% width, block level dropdown.
        </p>
        <Dropdown label="Dropdown Block" type="default" icon="cog" block>
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Right</h5>
        <p className="site-copy">Add <code>position=&quot;right&quot;</code> property.</p>
        <Dropdown label="Dropdown Right" type="default" position="right">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Top</h5>
        <p className="site-copy">Add <code>position=&quot;top&quot;</code> property.</p>
        <Dropdown label="Dropdown Top" type="default" position="top">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Dropdown Top &amp; Right</h5>
        <p className="site-copy">Add <code>position=&quot;top-right&quot;</code> property.</p>
        <Dropdown label="Dropdown Top Right" type="default" position="top-right">
          <DropdownMenuHeader label="Menu Header" />
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
          <DropdownMenuHeader label="Menu Header" />
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
      <p className="site-copy">Use <code>Dropdown</code> component to create a dropdown with selectable menu items. Selected menu items are reflected in the dropdown button&apos;s text when an <code>id</code> is used in <code>DropdownMenuItem</code>. To prevent this, use the <code>lockLabel</code> property.</p>
      <p className="site-copy">Use <code>type=&quot;input&quot;</code> if you want dropdown to appear like a form input.</p>
      <Playground theme="default" docClass={Dropdown} propDescriptionMap={dropdownDocs} codeText={dropdownExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown MultiSelect</h3>
      <p className="site-copy">Use <code>DropdownMultiSelect</code> component to create a multi-select list of <code>DropdownMenuItem(s)</code>.
        This dropdown and dropdown menu will always have 100% width and the appearance of a form input. Selected items are shown as &quot;pills&quot; below the dropdown.
      </p>

      <Playground theme="default" docClass={DropdownMultiSelect} propDescriptionMap={dropdownMultiSelectDocs} codeText={dropdownMultiSelectExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">DropdownMenuHeader</h3>
      <Playground theme="default" docClass={DropdownMenuHeader} propDescriptionMap={dropdownMenuHeaderDocs} codeText={dropdownMenuHeaderExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">DropdownMenuItem</h3>
      <Playground theme="default" docClass={DropdownMenuItem} propDescriptionMap={dropdownMenuItemDocs} codeText={dropdownMenuItemExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">DropdownMenuItemWild</h3>
      <Playground theme="default" docClass={DropdownMenuItemWild} propDescriptionMap={dropdownMenuItemWildDocs} codeText={dropdownMenuItemWildExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<DropdownApp />, document.getElementById('js-app'));
