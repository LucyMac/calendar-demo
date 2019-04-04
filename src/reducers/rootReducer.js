/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import calendar  from './calendarReducer';

export default combineReducers({
  calendar,
  form: formReducer
});