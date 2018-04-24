import Playground from 'component-playground';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { Date, Label } from '../components';
import dateExample from './examples/Date.example.txt';

const dateDocs = {
  className: '[Optional] - Include additional class name(s)',
};
const exampleScope  = {
  React,
  ReactDOM,
  Date,
  Label,
  moment,
};

class DateApp extends React.Component {
  static displayName = 'RhinoStyle Date Examples';

  state = {
    startDate: moment(),
  };

  handleChange = (date) => {
    this.setState({ startDate: date });
  };

  render() {
    return (
      <div>
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
          <Playground theme="default" docClass={Date} propDescriptionMap={dateDocs} codeText={dateExample} scope={exampleScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<DateApp />, document.getElementById('js-app'));
