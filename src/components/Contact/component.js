import React from 'react';
import emptyProfile from '../../assets/profile-empty.jpg';
import './component.scss';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contacts';

class Contact extends React.Component {
  handleDeleteContact = (id) => {
    this.props.deleteContact(id);
  }

  render() {
    return (
      <div className='contact'>
        <div className='contact-image'>
          <img src={emptyProfile} alt='' />
        </div>
        <div className='contact-name'>
          <p>{this.props.contact.firstName} {this.props.contact.lastName}</p>
          <p>{this.props.contact.tel}</p>
          <span onClick={() => {this.handleDeleteContact(this.props.contact.id)}}>del</span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id))
  };
};

export default connect(null, mapDispatchToProps)(Contact);