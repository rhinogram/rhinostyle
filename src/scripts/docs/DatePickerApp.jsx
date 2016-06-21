import React    from 'react';
import ReactDOM from 'react-dom';

import { DatePicker } from '../components';

import moment from 'moment';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const datePickerExample = require('raw!./examples/DatePicker.example.txt');
const datePickerDocs = {
  className: '[Optional] - Include additional class name(s)',
};
const exampleScope  = {
  React,
  ReactDOM,
  DatePicker,
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
          <h3 className="site-subheadline">Date Picker</h3>
          <p className="site-copy">We are using <a href="https://hacker0x01.github.io/react-datepicker/" target="_blank">ReactJS Datepicker</a> with custom styling.</p>

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

