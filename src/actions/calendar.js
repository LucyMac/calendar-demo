//---- Action constants ----
export const CALENDAR = {
  ADD_REMINDER: 'ADD_REMINDER',
  ADD_REMINDER_SUCCESS: 'ADD_REMINDER_SUCCESS',
  ADD_REMINDER_FAIL: 'ADD_REMINDER_FAIL',

  DELETE_REMINDER: 'DELETE_REMINDER',
  DELETE_REMINDER_SUCCESS: 'DELETE_REMINDER_SUCCESS',
  DELETE_REMINDER_FAIL: 'DELETE_REMINDER_FAIL',
}


export const addReminder = (reminder, date) => {

  console.log('addReminder ACTION:', reminder);

  return {
    type: CALENDAR.ADD_REMINDER,
    payload: {
      reminder,
      date
    },
  }
};

export const deleteReminder = (id, date) => {

  console.log('deleteReminder ACTION:', id);

  return {
    type: CALENDAR.DELETE_REMINDER,
    payload: {
      id,
      date
    },
  }
};