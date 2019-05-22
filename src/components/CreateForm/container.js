import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createContact } from '../../actions/contacts';
import { required, number, renderField } from '../../utils/formVars';

import CreateForm from './component';

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