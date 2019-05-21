import React from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contacts';

import Contactlist from './component';

const initUrl = 'http://localhost:3001/contacts?_page=1&_limit=5';

class ContactListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchContacts(initUrl);
  }

  handlePginationClick = (url) => {
    this.props.fetchContacts(url);
  }

  render() {
    const { link, contacts } = this.props;
    return (
      <Contactlist contacts={contacts} link={link} handlePginationClick={this.handlePginationClick} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    link: state.getLink
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: (url) => dispatch(getContacts(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListContainer);
