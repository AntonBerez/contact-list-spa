import React from 'react';
import { connect } from 'react-redux';
import { contactsFetchData } from '../../actions/contacts';

import Contact from '../Contact/component';

class ContactList extends React.Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(contactsFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);