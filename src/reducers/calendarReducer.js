import { CALENDAR } from '../actions/calendar';
import { april } from '../mock/april.js';

/**
 * Actions
 */
const {
  ADD_REMINDER,
  ADD_REMINDER_SUCCESS,
  ADD_REMINDER_FAIL,
  DELETE_REMINDER,
  DELETE_REMINDER_SUCCESS,
  DELETE_REMINDER_FAIL,
} = CALENDAR;

const currentMonth = april;
/**
 * Initial State
 */
export const initialState = {
  currentMonth
}

/**
 * calendarReducer
 * 
 * @param {*} state 
 * @param {*} action 
 */
const calendarReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {

    /** 
     * Add a reminder
     */
    case ADD_REMINDER: {

      const newReminder = action.payload.reminder;
      const reminderId =  Math.floor(Math.random() * 20);
      newReminder.id = reminderId;
      const date = action.payload.date;

      let updatedMonth = [...currentMonth];

      let dayChanging = updatedMonth.find(day => day.date === date );
      dayChanging.reminders.push(newReminder);

      const IndexDayChanging = updatedMonth.findIndex(savedDay => savedDay.date === date)
      updatedMonth[IndexDayChanging] = dayChanging;

      return Object.assign({}, state, {
        networkState: 'creating',
        currentMonth: updatedMonth
      })
    }

    case ADD_REMINDER_SUCCESS: {
      const data = action.payload.data;
      console.log('ADD_REMINDER_SUCCESS', data);
  
      return Object.assign({}, state, {
        networkState: 'created',
      })
    }

    case ADD_REMINDER_FAIL: {
      return Object.assign({}, state, {
        networkState: 'failed'
      })
    }

    /** 
     * Delete a reminder
     */
    case DELETE_REMINDER: {

    console.log('addReminder REDUCER:', action.payload.id);

    const idToRemove = action.payload.id;
    const date = action.payload.date;

    let updatedMonth = [...currentMonth];

    let dayChanging = updatedMonth.find(day => day.date === date );
    const indexToRemove = dayChanging.reminders.findIndex(reminder => reminder.id === idToRemove);
    dayChanging.reminders.splice(indexToRemove, 1);

    const IndexDayChanging = updatedMonth.findIndex(savedDay => savedDay.date === date)
    updatedMonth[IndexDayChanging] = dayChanging;

      return Object.assign({}, state, {
        networkState: 'deleting',
        currentMonth: updatedMonth
      })
    }

    case DELETE_REMINDER_SUCCESS: {
  
      return Object.assign({}, state, {
        networkState: 'deleted',
      })
    }

    case DELETE_REMINDER_FAIL: {
      return Object.assign({}, state, {
        networkState: 'failed'
      })
    }

    /**
     * Default
     */

    default:
      return state;
  }
};

export default calendarReducer;