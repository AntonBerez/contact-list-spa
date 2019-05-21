import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createContact } from '../../actions/contacts';

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
    this.props.createContact(values, apiUrl);
  }

  componentDidUpdate() {
    if (this.props.contactCreated) {
      this.props.history.push('/')
    }
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

const mapStateToProps = (state) => {
  return {
    contactCreated: state.contacts.contactCreated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (values, url) => dispatch(createContact(values, url))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateFormContainer));