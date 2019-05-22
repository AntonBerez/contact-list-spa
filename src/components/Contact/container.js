import React from 'react';
import { connect } from 'react-redux';
import { deleteContact, getIdForEdit } from '../../actions/contacts';

import Contact from './component'

class ContactContainer extends React.Component {
  handleDeleteClick = (id) => {
    this.props.deleteContact(id);
  }

  handleEditClick = (id) => {
    this.props.editContact(id);
  }

  render() {
    return (
      <Contact
        contact={this.props.contact}
        handleDeleteContact={this.handleDeleteClick}
        handleEditContact={this.handleEditClick}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
    editContact: (id) => dispatch(getIdForEdit(id))
  };
};

export default connect(null, mapDispatchToProps)(ContactContainer);