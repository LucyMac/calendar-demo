import React from 'react';

const Reminder = ({ reminder, deleteReminder }) => {
  return (
    <div className="reminder">
      <div className="reminder__colour" style={{ backgroundColor: reminder.color}}></div>
      <div className="reminder__details">
        <p className="reminder__start">{reminder.startTime}</p>
        <p className="reminder__title">{reminder.title}</p>
      </div>
      <div className="reminder__remove" onClick={() => deleteReminder(reminder.id)}>x</div>
    </div>
  );
}

export default Reminder;