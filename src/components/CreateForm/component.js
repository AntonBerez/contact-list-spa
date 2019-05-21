import React from 'react';
import './component.scss';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import MainButton from '../shared/MainButton/component'

const required = value => value ? undefined : 'Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
    </div>
  </div>
)

class CreateForm extends React.Component {
  createContact = (values) => {
    fetch('http://localhost:3001/contacts', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <form className='create-form' onSubmit={this.props.handleSubmit(this.createContact)}>
        <Field
          name="firstName"
          component={renderField}
          type="text"
          label="First Name"
          validate={required}
        />
        <Field
          name="lastName"
          component={renderField}
          type="text"
          label="Last Name"
          validate={required}
        />
        <Field
          name="tel"
          component={renderField}
          type="tel"
          label="Phone"
          validate={[required, number]}
        />
        <div className="btns-container">
          <Link to='/'>
            <MainButton type='button' name='Cancel' />
          </Link>
          <MainButton type='submit' name='Create' />
        </div>
      </form>
    )
  }
}

export default withRouter(reduxForm({ form: 'create' })(CreateForm));