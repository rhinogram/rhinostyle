import React from 'react';
import ReactDOM from 'react-dom';

import {
  Input,
  Button,
  Close,
  Dropdown,
  DropdownCheckbox,
  DropdownFilter,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuItemWild,
  DropdownMenuScroll,
  DropdownMultiSelect,
  Icon,
  UtilityInlineGrid,
} from '../components';
import { Live } from './components';
import DropdownMultiSelectAdvanced from '../components/DropdownMultiSelectAdvanced';
import DateRangeDropdown from '../components/DateRangeDropdown';
import DropdownExample from './examples/Dropdown.example.txt';
import DropdownCheckboxExample from './examples/DropdownCheckbox.example.txt';
import DropdownMultiSelectExample from './examples/DropdownMultiSelect.example.txt';
import DropdownMenuHeaderExample from './examples/DropdownMenuHeader.example.txt';
import DropdownMenuItemExample from './examples/DropdownMenuItem.example.txt';
import DropdownMenuItemWildExample from './examples/DropdownMenuItemWild.example.txt';
import DropdownMultiSelectAdvancedExample from './examples/DropdownMultiSelectAdvanced.example.txt';
import DateRangeDropdownExample from './examples/DateRangeDropdown.example.txt';

const DropdownDocs = {
  autoFocusInput:
    'Set autofocus to false to blur the input inside the dropdown. By default its value is true giving a focus to the inputs.',
  activeKey: 'The id of the currently selected DropdownMenuItem',
  block: 'Block level',
  disableScroll: 'Disabled default dropdown menu scrolling. Does not apply when filter is used.',
  hideCaret: 'Hide Dropdown caret',
  label: 'Text in dropdown when closed',
  lockLabel: 'Do not change label text when selecting item',
  position: "Position of Dropdown <code>oneOf(['right', 'top', 'top-right'])</code>",
  size: "Size of Dropdown <code>oneOf(['small', 'large'])</code>",
  onSelect: 'Callback when a DropdownMenuItem is selected',
  type:
    "<code>oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-reversed', 'link', 'link-muted'])</code>",
  wide: 'Sets a min-width on dropdown menu',
  manualClose:
    'Disables the default action of closing on an outside click. <code>&lt;Close /&gt;</code> must appear in <code>&lt;DropdownMenuItemWild /&gt;</code> component to close. Refer to example below.', // eslint-disable-line max-len
  noChangeLabel: 'Displays default label in place of currently selected label.',
  outlined: 'Displays button having border.',
};

const DropdownCheckboxDocs = {
  activeKey: 'The id of the currently selected DropdownMenuItem',
  block: 'Block level',
  disableScroll: 'Disabled default dropdown menu scrolling. Does not apply when filter is used.',
  hideCaret: 'Hide Dropdown caret',
  label: 'Text in dropdown when closed',
  lockLabel: 'Do not change label text when selecting item',
  position: "Position of Dropdown <code>oneOf(['right', 'top', 'top-right'])</code>",
  size: "Size of Dropdown <code>oneOf(['small', 'large'])</code>",
  onSelect: 'Callback when a DropdownMenuItem is selected',
  type:
    "<code>oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-reversed', 'link', 'link-muted', 'checkbox', 'checkbox-muted'])</code>",
  wide: 'Sets a min-width on dropdown menu',
  manualClose:
    'Disables the default action of closing on an outside click. <code>&lt;Close /&gt;</code> must appear in <code>&lt;DropdownMenuItemWild /&gt;</code> component to close. Refer to example below.', // eslint-disable-line max-len
  isCheckbox: 'Enable the checkbox.',
  checkboxClassName: 'Classes to be applied to checkbox. <code>partially-checked</code> class can be applied.',
  isChecked: 'Current state of checkbox.',
  onChange: 'Callback when checkbox is clicked.',
  labelValueAssociated: 'Total no. of items present of the same category as the DropdownMenuItem selected.',
  showAssociatedLabel: 'Enables labelValueAssociated.',
};

const DateRangeDropdownDocs = {
  activeKey: 'The id of the currently selected DropdownMenuItem',
  startDate: 'Default selected Start date for calendar',
  endDate: 'Default selected End date for calendar',
  minDate: 'Minimum date for calendar',
  maxDate: 'Maximum date for calendar',
  position: 'Position of Dropdown',
  name: 'Name of the dropdown',
  selectDate: 'Function to set start date and end date in to start of container',
  dropdownMenuItems: 'Menu Items to be displayed as options',
  selectDateRange: 'Function to calculate start date and end date on basis of selected option',
  isCustomDate: 'Boolean value to render custom date selector',
};

const DropdownMultiSelectDocs = {
  dataCypress: 'for testing',
  handleSelect: 'Callback when item is selected',
  itemIds: 'Array of all item ids',
  selectedItemIds: 'Array of selected item ids',
  items: 'Items to be displayed as options',
  label: 'Text in dropdown when closed',
  dropdownClass: 'Custom class applied to Dropdown component',
  getItemLabelValue: 'Custom format for items in dropdown',
  wide: 'Sets a min-width on dropdown menu',
  name: 'Name of dropdown',
  position: "Position of Dropdown <code>oneOf(['right', 'top', 'top-right'])</code>",
};

const DropdownMenuHeaderDocs = {
  className: 'Include additional class name(s)',
};

const DropdownMenuItemDocs = {
  avatar: 'Path to avatar image',
  blankWindow: 'Open URL in blank browser window',
  id: 'Identifies the selected item in Dropdown when you want to use as a Dropdown Select',
  label: 'Label for item',
  labelDesc: 'Description for label',
  route: '<code>react-router</code> route',
};

const DropdownMenuItemWildDocs = {
  toggleDropdown: 'Clicking will close the dropdown',
};

const DropdownScope = {
  React,
  ReactDOM,
  Button,
  Close,
  Dropdown,
  DropdownCheckbox,
  DropdownFilter,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuItemWild,
  DropdownMenuScroll,
  DropdownMultiSelect,
  Icon,
  UtilityInlineGrid,
  DropdownMultiSelectAdvanced,
  DateRangeDropdown,
};

const DropdownApp = () => (
  <>
    <section className="site-section">
      <h3 className="site-subheadline">Dropdowns</h3>
      <p className="site-text-lead">
        We have two main dropdown components: <span className="u-text-accent">Dropdown</span> and{' '}
        <span className="u-text-accent">DropdownMultiSelect</span>.
      </p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Types</h3>
      <p className="site-copy">
        Types are the same as the Button component with one exception - Dropdowns include an <code>input</code> type so
        that they mimic form controls.
      </p>
      <UtilityInlineGrid>
        <Dropdown label="Default">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
          <div className="dropdown__menu__container">
            <Button block type="primary" size="small" outlined>
              Log Out
            </Button>
          </div>
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

        <Dropdown label="Outline Primary" type="primary" outlined>
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

        <Dropdown type="primary" icon="lock" outlined>
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

        <Dropdown
          position="center"
          avatar={{
            image: '//source.unsplash.com/category/people/200x200',
            name: 'Ben Bruning',
            type: 'member',
            size: 'small',
          }}
        >
          <DropdownMenuItem
            label="Dropdown menu after clicking on an avatar Image"
            labelDesc="This dropdown button displays image"
          />
          <DropdownMenuItem
            label="Url Blank Window Item"
            labelDesc="Click me and I will take you to a site that opens in a new browser window."
            url="http://www.rhinogram.com"
            blankWindow
          />
          <DropdownMenuItem
            label="Url Item"
            labelDesc="Click me and I will take you to a new site in the same browser window."
            url="http://www.rhinogram.com"
          />
        </Dropdown>

        <Dropdown label="Without Focus" type="primary" autoFocusInput={false}>
          <DropdownMenuItemWild>
            <Input label="First Name" name="firstName" />
          </DropdownMenuItemWild>
          <DropdownMenuItemWild>
            <Input label="Last Name" name="lastName" />
          </DropdownMenuItemWild>
        </Dropdown>
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Modifiers</h3>

      <div className="u-m-b-large">
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

      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Dropdown Right</h5>
        <p className="site-copy">
          Add <code>position=&quot;right&quot;</code> property.
        </p>
        <Dropdown label="Dropdown Right" type="default" position="right">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Dropdown Center</h5>
        <p className="site-copy">
          Add <code>position=&quot;center&quot;</code> property.
        </p>
        <Dropdown label="Dropdown Center" type="default" position="center">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Dropdown Top</h5>
        <p className="site-copy">
          Add <code>position=&quot;top&quot;</code> property.
        </p>
        <Dropdown label="Dropdown Top" type="default" position="top">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Dropdown Top &amp; Right</h5>
        <p className="site-copy">
          Add <code>position=&quot;top-right&quot;</code> property.
        </p>
        <Dropdown label="Dropdown Top Right" type="default" position="top-right">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Dropdown Top &amp; Center</h5>
        <p className="site-copy">
          Add <code>position=&quot;top-center&quot;</code> property.
        </p>
        <Dropdown label="Dropdown Top Center" type="default" position="top-center">
          <DropdownMenuHeader label="Menu Header" />
          <DropdownMenuItem label="Item" />
          <DropdownMenuItem label="Another Item" />
          <DropdownMenuItem label="A third item" />
          <DropdownMenuDivider />
          <DropdownMenuItem label="Separated Item" />
        </Dropdown>
      </div>

      <div className="u-m-b-large">
        <h5 className="site-miniheadline">Dropdown Wide</h5>
        <p className="site-copy">
          Add <code>wide</code> property. This gives the dropdown menu a larger min-width value. Handy when you want to
          include an input filter.
        </p>
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
      <p className="site-copy">
        Use <code>Dropdown</code> component to create a dropdown with selectable menu items. Selected menu items are
        reflected in the dropdown button&apos;s text when an
        <code>id</code> is used in <code>DropdownMenuItem</code>. To prevent this, use the <code>lockLabel</code>{' '}
        property.
      </p>
      <p className="site-copy">
        Use <code>type=&quot;input&quot;</code> if you want dropdown to appear like a form input.
      </p>

      <Live code={DropdownExample} scope={DropdownScope} component={Dropdown} propDescriptions={DropdownDocs} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown Checkbox</h3>
      <p className="site-copy">
        Use <code>Dropdown Checkbox</code> component to create a dropdown with selectable menu items and a checkbox. The
        main use of this component is for performing bulk actions. The checkbox is used to select multiple items at a
        time.
      </p>
      <p className="site-copy">
        Add <code>checkboxClassName=&quot;partially-checked&quot;</code> property for partial selections.
      </p>
      <p className="site-copy">
        The label associated to an option is enabled using <code>showAssociatedLabel</code> in{' '}
        <code>DropdownCheckbox</code>. Use <code>type=&quot;checkbox&quot;</code> if you want a checkbox to display the
        component as below.
      </p>

      <Live
        code={DropdownCheckboxExample}
        scope={DropdownScope}
        component={DropdownCheckbox}
        propDescriptions={DropdownCheckboxDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown MultiSelect</h3>
      <p className="site-copy">
        Use <code>DropdownMultiSelect</code> component to create a multi-select list of <code>DropdownMenuItem(s)</code>
        . This dropdown and dropdown menu will always have 100% width and the appearance of a form input. Selected items
        are shown as &quot;pills&quot; below the dropdown.
      </p>

      <Live
        code={DropdownMultiSelectExample}
        scope={DropdownScope}
        component={DropdownMultiSelect}
        propDescriptions={DropdownMultiSelectDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Dropdown MultiSelect Advanced</h3>
      <p className="site-copy">
        Use <code>DropdownMultiSelectAdvanced</code> component to create a multi-select list of items. This dropdown and
        dropdown menu will always have 100% width and the appearance of a form input. Selected items are shown as
        &quot;pills&quot; below the dropdown. This will allow you to select multiple items, search, preview of selected
        items and clear all items.
      </p>

      <Live
        code={DropdownMultiSelectAdvancedExample}
        scope={DropdownScope}
        component={DropdownMultiSelectAdvanced}
        propDescriptions={DropdownMultiSelectDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">DropdownMenuHeader</h3>

      <Live
        code={DropdownMenuHeaderExample}
        scope={DropdownScope}
        component={DropdownMenuHeader}
        propDescriptions={DropdownMenuHeaderDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">DropdownMenuItem</h3>

      <Live
        code={DropdownMenuItemExample}
        scope={DropdownScope}
        component={DropdownMenuItem}
        propDescriptions={DropdownMenuItemDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">DropdownMenuItemWild</h3>

      <Live
        code={DropdownMenuItemWildExample}
        scope={DropdownScope}
        component={DropdownMenuItemWild}
        propDescriptions={DropdownMenuItemWildDocs}
      />
    </section>
    <section className="site-section">
      <h3 className="site-subheadline">Date Range Dropdoen</h3>
      <p className="site-copy">
        Use <code>DateRangeDropdown</code> component to create custom date range selector. This dropdown and dropdown
        menu will always have 100% width and the appearance of a form input. Selected items are shown as
        &quot;pills&quot; below the dropdown. This will allow you to select date range on basis of selected option to
        fetch data within a date range
      </p>

      <Live
        code={DateRangeDropdownExample}
        scope={DropdownScope}
        component={DateRangeDropdown}
        propDescriptions={DateRangeDropdownDocs}
      />
    </section>
  </>
);

ReactDOM.render(<DropdownApp />, document.getElementById('root'));
