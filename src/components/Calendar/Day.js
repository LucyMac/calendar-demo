import React from 'react';
import Reminder from './Reminder';

const Day = ({ day, toggleReminderFormView, deleteReminder }) => {
  return (
    <div className="day">
      <div className="day__header">
      <div className="day__add" onClick={() => toggleReminderFormView(day)}>+</div>
      <h6 className="day__date">{day.date}</h6>
      </div>
      <div className="day__reminders">
      {day.reminders.length > 0 && day.reminders.map((reminder, i) => {
        return (
          <Reminder 
            key={i} 
            reminder={reminder}
            deleteReminder={deleteReminder}
          />
        )
      })}
      </div>
    </div>
  );
}

export default Day;