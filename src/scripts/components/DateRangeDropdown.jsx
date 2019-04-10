import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Dropdown, DropdownMenuItem, DropdownMenuDivider, DropdownMenuItemWild, Date, Button, ResourceRight } from '.';

class DateRangeDropdown extends React.Component {
  state = {
    isApplyEnabled: false,
    startDate: moment(this.props.startDate),
    endDate: moment(this.props.endDate),
    minDate: moment(this.props.minDate),
    maxDate: moment(this.props.maxDate),
    dropdownMenuItems: this.props.dropdownMenuItems || [],
    activeKey: this.props.activeKey,
  };

  componentDidMount() {
    this.setState({ isApplyEnabled: false, startDate: moment(this.props.startDate), endDate: moment(this.props.endDate) });
  }

  handleDropdownClick = () => {
    if (this.props.isCustomDate) {
      const startInputValue = this.startDatePickerInput.datePickerInput.input.element.value;
      const endInputValue = this.endDatePickerInput.datePickerInput.input.element.value;
      const { startDate, endDate } = this.props;
      // This condition is for applying custom date range selection
      if (this.state.isApplyEnabled || endInputValue !== moment(endDate).format('MM/DD/YYYY') || startInputValue !== moment(startDate).format('MM/DD/YYYY')) {
        this.endDatePickerInput.datePickerInput.input.element.value = moment(this.props.endDate).format('MM/DD/YYYY');
        this.startDatePickerInput.datePickerInput.input.element.value = moment(this.props.startDate).format('MM/DD/YYYY');
        this.setState({ isApplyEnabled: false, startDate: this.props.startDate, endDate: this.props.endDate });
      }
    }
  }

  handleStartDateChange = (date) => {
    const { minDate, maxDate } = this.props;
    let from = moment(date);
    let to = moment(this.state.endDate);
    if (!(date && date.isValid())) {
      from = moment(this.state.startDate);
    }
    if (from.isBefore(moment(minDate)) || from.isAfter(moment(maxDate))) {
      from = to.clone();
    }
    if (from.isAfter(to)) {
      to = from.clone();
    }
    this.setState({ isApplyEnabled: true, startDate: from, endDate: to });
  };

  handleEndDateChange = (date) => {
    const { minDate, maxDate } = this.props;
    let from = moment(this.state.startDate);
    let to = moment(date);
    if (!(date && date.isValid())) {
      to = moment(this.state.endDate);
    }

    if (to.isBefore(moment(minDate)) || to.isAfter(moment(maxDate))) {
      to = from.clone();
    }
    if (from.isAfter(to)) {
      from = to.clone();
    }
    this.setState({ isApplyEnabled: true, startDate: from, endDate: to });
  };

  handleChange = (duration, activeKey) => {
    const { startDate, endDate } = this.props.selectDateRange(duration, activeKey);
    this.setState({ startDate: moment(startDate), endDate: moment(endDate), activeKey });
    this.props.selectDate({ startDate: moment(startDate), endDate: moment(endDate), activeKey });
  };

  getLabel(activeKey) {
    const { dropdownMenuItems } = this.state;
    return `${(dropdownMenuItems[activeKey - 1] && dropdownMenuItems[activeKey - 1].label) || ''} 
    (${moment(this.state.startDate).format('MMM DD, YYYY')} - ${moment(this.state.endDate).format('MMM DD, YYYY')})`;
  }

  applyDates = () => {
    const totalLabels = this.props.dropdownMenuItems.length;
    this.setState({ isApplyEnabled: false, activeKey: totalLabels });

    if (this.dropdown && this.dropdown.dropdown) {
      this.dropdown.dropdown.componentNode.timeline.reverse();
    }
    this.props.selectDate({ startDate: this.state.startDate, endDate: this.state.endDate, activeKey: 6 });
  };

  render() {
    const { name, position = 'center', isCustomDate } = this.props;
    const { startDate, endDate, dropdownMenuItems, activeKey, minDate, maxDate } = this.state;
    return (
      <div className="daterange__dropdown">
        <Dropdown
          label={this.getLabel(activeKey)}
          lockLabel
          onClick={this.handleDropdownClick}
          activeKey={activeKey}
          position={position}
          name={name}
          blur
          hideCaret
          wide
          autoFocusInput={false}
          ref={dropdown => (this.dropdown = dropdown)}
        >
          {dropdownMenuItems.map((menuItem, index) => (
            (index !== dropdownMenuItems.length - 1) &&
              <DropdownMenuItem key={menuItem.label} id={menuItem.id} label={menuItem.label} onClick={() => this.handleChange(menuItem.duration, menuItem.id)} />))}
          {isCustomDate && (
            <Fragment>
              <DropdownMenuDivider />
              <DropdownMenuItemWild id={5}>
                <div className="date-range__label">
                  Custom Range
                </div>
                <div className="row date-range__buttons">
                  <div className="column-6@small">
                    <Date
                      name="startDate"
                      selected={startDate}
                      onChange={this.handleStartDateChange}
                      placeholderText="Click to select Start Date"
                      shouldCloseOnSelect
                      explanationMessage=""
                      minDate={minDate}
                      maxDate={maxDate}
                      label="From:"
                      onBlur={event => this.handleStartDateChange(moment(event.target.value, 'MM/DD/YYYY'))}
                      ref={inputRef => (this.startDatePickerInput = inputRef)}
                    />
                  </div>
                  <div className="column-6@small">
                    <Date
                      name="endDate"
                      selected={endDate}
                      onChange={this.handleEndDateChange}
                      placeholderText="Click to select End Date"
                      shouldCloseOnSelect
                      explanationMessage=""
                      minDate={startDate}
                      maxDate={maxDate}
                      label="To:"
                      onBlur={event => this.handleEndDateChange(moment(event.target.value, 'MM/DD/YYYY'))}
                      ref={inputRef => (this.endDatePickerInput = inputRef)}
                    />
                  </div>
                </div>
                {this.state.isApplyEnabled && (
                  <div className="menu__divider">
                    <ResourceRight>
                      <Button type="primary" size="small" onClick={this.applyDates}>Apply</Button>
                    </ResourceRight>
                  </div>)
                }
              </DropdownMenuItemWild>
            </Fragment>
          )}
        </Dropdown>
      </div>
    );
  }
}

DateRangeDropdown.propTypes = {
  position: PropTypes.string,
  name: PropTypes.string.isRequired,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectDate: PropTypes.func,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  dropdownMenuItems: PropTypes.array.isRequired,
  selectDateRange: PropTypes.func.isRequired,
  isCustomDate: PropTypes.bool,
};

export default DateRangeDropdown;
