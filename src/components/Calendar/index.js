import React, { Component } from 'react';
import './Calendar.css';
import { april } from '../../mock/april.js';

class Calendar extends Component {
  render() {
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
          {april.map((day, i) => {
            return (
              <div className="day" key={i}>
                <h6 className="day__date">{day.date}</h6>
                <div className="day__reminders">
                {day.reminders.length > 0 && day.reminders.map((reminder, i) => {
                  return (
                    <div className="reminder">
                      <div className="reminder__colour" style={{ backgroundColor: reminder.color}}></div>
                      <div className="reminder__details">
                        <p className="reminder__start">{reminder.startTime}</p>
                        <p className="reminder__title">{reminder.title}</p>
                      </div>
                    </div>
                  )
                })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    );
  }
}

export default Calendar;
