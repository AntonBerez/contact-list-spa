import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import './component.scss';

import { MainButton } from '../shared/MainButton';

function EditForm(props) {
  return (
    <form className='edit-form' onSubmit={props.handleSubmit}>
      <Field
        name="firstName"
        component={props.renderField}
        type="text"
        label="First Name"
        validate={props.required}
      />
      <Field
        name="lastName"
        component={props.renderField}
        type="text"
        label="Last Name"
        validate={props.required}
      />
      <Field
        name="tel"
        component={props.renderField}
        type="tel"
        label="Phone"
        validate={[props.required, props.number]}
      />
      <div className="btns-container">
        <Link to='/'>
          <MainButton type='button' name='Cancel' />
        </Link>
        <MainButton type='submit' name='Edit' />
      </div>
    </form>
  )
}

export default reduxForm({form: 'edit'})(EditForm);