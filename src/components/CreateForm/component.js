import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class CreateForm extends React.Component {
  sentRequest = (values) => {
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
      <form onSubmit={this.props.handleSubmit(this.sentRequest)}>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last Name"
        />
        <Field
          name="tel"
          component="input"
          type="tel"
          placeholder="Tel"
        />
        <button type="submit" disabled={this.props.pristine}>Submit</button>
      </form>
    )
  }
}

export default withRouter(reduxForm({ form: 'create' })(CreateForm));