import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { Date, Label } from '../components';
import { Live } from './components';
import DateExample from './examples/Date.example.txt';

const DateDocs = {};
const DateScope  = {
  React,
  ReactDOM,
  Date,
  Label,
  moment,
};

class DateApp extends React.Component {
  state = {
    startDate: moment(),
  };

  handleChange = (date) => {
    this.setState({ startDate: date });
  };

  render() {
    return (
      <Fragment>
        <section className="site-section">
          <h3 className="site-subheadline">DatePicker <Label className="u-m-l-small" type="accent" label="third party" /></h3>
          <p className="site-copy">We are using <a href="https://hacker0x01.github.io/react-datepicker/" target="_blank" rel="noopener noreferrer">react-datepicker</a> with custom styling. We have wrapped it within our own to provide sensible defaults for our application. Refer to that repos documentation about everything else available, but be aware we only include a subset of styles to meet our needs, instead of including and overriding the entire stylesheet provided.</p>

          <div className="row">
            <div className="column-3@small">
              <Date
                name="date"
                selected={this.state.startDate}
                onChange={this.handleChange}
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
              />
            </div>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Playground</h3>

          <Live
            code={DateExample}
            scope={DateScope}
            component={Date}
            propDescriptions={DateDocs}
          />
        </section>
      </Fragment>
    );
  }
}

ReactDOM.render(<DateApp />, document.getElementById('js-app'));
