import React from 'react';
import { withRouter } from 'react-router-dom';

import CreateForm from './component';

const required = value => value ? undefined : 'Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
    </div>
  </div>
);

const apiUrl = 'http://localhost:3001/contacts';

class CreateFormContainer extends React.Component {
  createContact = (values) => {
    fetch(apiUrl, {
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
      <CreateForm
        required={required}
        number={number}
        renderField={renderField}
        createContact={this.createContact}
        onSubmit={this.createContact}
      />
    )
  }
}

export default withRouter((CreateFormContainer));