import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contacts';

import Contact from './component'

class ContactContainer extends React.Component {
  handleDeleteContact = (id) => {
    this.props.deleteContact(id);
  }

  render() {
    return (
      <Contact contact={this.props.contact} handleDeleteContact={this.handleDeleteContact} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id))
  };
};

export default connect(null, mapDispatchToProps)(ContactContainer);