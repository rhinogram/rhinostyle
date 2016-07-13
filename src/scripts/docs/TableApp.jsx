import React    from 'react';
import ReactDOM from 'react-dom';

import { Table } from '../components';

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

        <br /> <br /> <br />

        <Table hover striped>
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
              <td>Craig</td>
              <td>Anthony</td>
              <td>@anthony</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Keaton</td>
              <td>Foster</td>
              <td>@foster</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Paul</td>
              <td>Griffin</td>
              <td>@griffin</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Terry</td>
              <td>Kennair</td>
              <td>@kennair</td>
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
