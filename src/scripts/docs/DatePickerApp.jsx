import Playground from 'component-playground';
import React      from 'react';
import ReactDOM   from 'react-dom';
import moment     from 'moment';

import { DatePicker, Label } from '../components';

/* eslint import/no-unresolved: 0 */
const datePickerExample = require('raw-loader!./examples/DatePicker.example.txt');
const datePickerDocs = {
  className: '[Optional] - Include additional class name(s)',
};
const exampleScope  = {
  React,
  ReactDOM,
  DatePicker,
  Label,
  moment,
};

class DatePickerApp extends React.Component {
  static displayName = 'Rhinostyle Date Picker Examples';

  state = {
    startDate: moment(),
  };

  _handleChange = (date) => {
    this.setState({ startDate: date });
  };

  render() {
    return (
      <div>
        <h1 className="site-headline">Date Picker</h1>

        <section className="site-section">
          <h3 className="site-subheadline">DatePicker <Label className="u-m-l-sm" type="accent" label="third party" /></h3>
          <p className="site-copy">We are using <a href="https://hacker0x01.github.io/react-datepicker/" target="_blank" rel="noopener noreferrer">react-datepicker</a> with custom styling.</p>

          <div className="row row--condensed">
            <div className="col-sm-2 u-m-b">
              <DatePicker className="form__control" readOnly selected={this.state.startDate} onChange={this._handleChange} />
            </div>
            <div className="col-sm-2">
              <DatePicker className="form__control" readOnly selected={this.state.startDate} onChange={this._handleChange} showYearDropdown dateFormatCalendar="MMMM" />
            </div>
          </div>
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground docClass={DatePicker} propDescriptionMap={datePickerDocs} codeText={datePickerExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
}

ReactDOM.render(<DatePickerApp />, document.getElementById('js-app'));
