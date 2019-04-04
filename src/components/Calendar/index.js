import React, { Component } from 'react';
import { connect } from 'react-redux';

import Day from './Day';
import ReminderForm from './ReminderForm';

// Actions
import { addReminder, deleteReminder } from '../../actions/calendar';

import './Calendar.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formIsVisible: false,
      currentDay: null
    };
  }

  toggleFormView = (day) => {
    if (day) {
      this.setState({ 
        formIsVisible: !this.state.formIsVisible,
        currentDay: day
      });
    }
  }

  addReminder = (values) => {
    this.props.dispatch(addReminder(values, this.state.currentDay.date));
    this.setState({ 
      formIsVisible: false
    });
  }

  deleteReminder = (id, date) => {
    console.log('deleteReminder id:', id, date);
    this.props.dispatch(deleteReminder(id, date));
  }

  render() {

    const { currentMonth } = this.props;
    const { formIsVisible, currentDay } = this.state;

    return (
      <section className="calendar">
        <div className="calendar__header">
          <div className="calendar__header-item">Monday</div>
          <div className="calendar__header-item">Tuesday</div>
          <div className="calendar__header-item">Wednesday</div>
          <div className="calendar__header-item">Thursday</div>
          <div className="calendar__header-item">Friday</div>
          <div className="calendar__header-item">Saturday</div>
          <div className="calendar__header-item">Sunday</div>
        </div>
        <div className="calendar__body">
          {currentMonth.map((day, i) => {
            return (
              <div key={i} >
                <Day 
                  day={day} 
                  deleteReminder={this.deleteReminder}
                  toggleReminderFormView={this.toggleFormView}
                />
              </div>
            )
          })}
          {formIsVisible && currentDay &&
            <ReminderForm 
              currentDay={currentDay}
              onSubmit={this.addReminder}
              cancelAction={this.toggleFormView}
            />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentMonth: state.calendar.currentMonth
});

export default connect(
  mapStateToProps
)(Calendar);

