import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import './ReminderForm.scss'

const textInput = ({label, name, input}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input value={input.value} onChange={input.onChange}  type="text" maxLength="30" id={name} />
    </div>
  )
}

const timeInput = ({label, name, input}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input value={input.value} onChange={input.onChange}  type="time" step="300" id={name} />
    </div>
  )
}

const colourInput = ({label, name, input}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input value={input.value} onChange={input.onChange} type="color" id={name} />
    </div>
  )
}

class ReminderForm extends React.Component {

  render() {
    const {
      handleSubmit,
      currentDay
    } = this.props;

    return (
      <form 
        onSubmit={handleSubmit} 
        id='new-reminder-form' 
        className="form" >
        <div className="form__container">
          <h4>Add a reminder for {currentDay.date} April</h4>
          <Field
            name="startTime"
            component={timeInput}
            label="Start time"
          />
          <Field
            name="title"
            component={textInput}
            label="Title"
          />
          <Field
            name="color"
            component={colourInput}
            label="Select a colour"
          />
          <div className="form__buttons">
            <button className="form__submit" type="submit">
              Save
            </button>
            <button className="form__cancel" onClick={this.props.cancelAction}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  initialValues: state.form
});

const ReminderFormRedux = reduxForm({
  form: 'new-reminder-form',
})(ReminderForm);

export default connect(mapStateToProps)(ReminderFormRedux);

