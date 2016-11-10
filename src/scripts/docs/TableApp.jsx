import React    from 'react';
import ReactDOM from 'react-dom';

import { Button, Table } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const tableExample = require('raw!./examples/Table.example.txt');
const tableDocs = {
  bordered: '[Optional] - Create bordered table',
  className: '[Optional] - Include additional class name(s)',
  condensed: '[Optional] - Create condensed table',
  hover: '[Optional] - Create hover table',
  striped: '[Optional] - Create striped table',
};
const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Table,
};

const LabelApp = () =>
  <div>
    <h1 className="site-headline">Tables</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Table Types</h3>
      <div className="site-example-tables">
        <div className="u-m-b-md">
          <p className="site-copy">
            Our basic table. Does not require any additional properties.
          </p>
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ben</td>
              <td>Bruning</td>
              <td>@bruning</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Blake</td>
              <td>Guilloud</td>
              <td>@guilloud</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Table Modifiers</h3>
      <div className="site-example-tables">
        <div className="u-m-b-md">
          <h5 className="site-miniheadline">Bordered Table</h5>
          <p className="site-copy">
            Add <code>bordered</code> property to create a bordered table.
          </p>
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ben</td>
              <td>Bruning</td>
              <td>@bruning</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Blake</td>
              <td>Guilloud</td>
              <td>@guilloud</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
          </tbody>
        </Table>
        <div className="u-m-b-md">
          <h5 className="site-miniheadline">Condensed Table</h5>
          <p className="site-copy">
            Add <code>condensed</code> property to create a table with condensed spacing.
          </p>
        </div>
        <Table condensed>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ben</td>
              <td>Bruning</td>
              <td>@bruning</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Blake</td>
              <td>Guilloud</td>
              <td>@guilloud</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
          </tbody>
        </Table>
        <div className="u-m-b-md">
          <h5 className="site-miniheadline">Hover Table</h5>
          <p className="site-copy">
            Add <code>hover</code> property to create a table with hover state.
          </p>
        </div>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ben</td>
              <td>Bruning</td>
              <td>@bruning</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Blake</td>
              <td>Guilloud</td>
              <td>@guilloud</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
          </tbody>
        </Table>
        <div className="u-m-b-md">
          <h5 className="site-miniheadline">Striped Table</h5>
          <p className="site-copy">
            Add <code>striped</code> property to create a striped table.
          </p>
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ben</td>
              <td>Bruning</td>
              <td>@bruning</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Blake</td>
              <td>Guilloud</td>
              <td>@guilloud</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Table Row &amp; Table Data Modifiers</h3>
      <div className="site-example-tables">
        <div className="u-m-b-md">
          <h5 className="site-miniheadline">Table Data</h5>
          <p className="site-copy">
            To change the background color, add <code>.table__data--active | .table__data--danger | .table__data--success | .table__data--warning</code> className to the <code>&lt;td&gt;</code> element.
          </p>
        </div>
        <Table>
          <tbody>
            <tr>
              <td className="table__data--active">1</td>
              <td>Ben</td>
              <td>Bruning</td>
              <td>@bruning</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="table__data--danger">Blake</td>
              <td>Guilloud</td>
              <td>@guilloud</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Keaton</td>
              <td className="table__data--success">Foster</td>
              <td>@foster</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Craig</td>
              <td>Anthony</td>
              <td className="table__data--warning">@anthony</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Paul</td>
              <td>Griffin</td>
              <td>@griffin</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Terry</td>
              <td>Kennair</td>
              <td>@kennair</td>
            </tr>
          </tbody>
        </Table>
        <div className="u-m-b-md">
          <h5 className="site-miniheadline">Table Row</h5>
          <p className="site-copy">
            To change the background color, add <code>.table__row--active | .table__row--danger | .table__row--success | .table__row--warning</code> className to the <code>&lt;tr&gt;</code> element.
          </p>
        </div>
        <Table>
          <tbody>
            <tr className="table__row--active">
              <td>1</td>
              <td>Ben</td>
              <td>Bruning</td>
              <td>@bruning</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Blake</td>
              <td>Guilloud</td>
              <td>@guilloud</td>
            </tr>
            <tr className="table__row--danger">
              <td>3</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Craig</td>
              <td>Anthony</td>
              <td>@anthony</td>
            </tr>
            <tr className="table__row--success">
              <td>5</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Paul</td>
              <td>Griffin</td>
              <td>@griffin</td>
            </tr>
            <tr className="table__row--warning">
              <td>7</td>
              <td>Terry</td>
              <td>Kennair</td>
              <td>@kennair</td>
            </tr>
          </tbody>
        </Table>
        <div className="u-m-b-md">
          <p className="site-copy">
            To change the vertical alignment add <code>.table__row--valign-middle</code> className to the <code>&lt;tr&gt;</code> element. By default, table rows and data are vertically aligned to the top.
          </p>
        </div>
        <Table>
          <tbody>
            <tr className="table__row--valign-middle">
              <td>1</td>
              <td>Ben</td>
              <td>Bruning</td>
              <td><Button>Delete</Button></td>
            </tr>
            <tr className="table__row--valign-middle">
              <td>2</td>
              <td>Blake</td>
              <td>Guilloud</td>
              <td><Button>Delete</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Table} propDescriptionMap={tableDocs} codeText={tableExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<LabelApp />, document.getElementById('js-app'));
