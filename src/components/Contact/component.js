import React from 'react';
import './component.scss';
import emptyProfile from '../../assets/profile-empty.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Contact(props) {
  return (
    <div className='contact'>
      <div className='contact-image'>
        <img src={emptyProfile} alt='' />
      </div>
      <div className='contact-name'>
        <p>{props.contact.firstName} {props.contact.lastName}</p>
        <p>{props.contact.tel}</p>
      </div>
      <div className='control-icons'>
        <span className='icon edit-icon' onClick={() => {props.handleEditContact(props.contact.id)}}>
          <Link to='/edit'><FontAwesomeIcon icon="edit" /></Link>
        </span>
        <span className='icon delete-icon' onClick={() => {props.handleDeleteContact(props.contact.id)}}>
          <FontAwesomeIcon icon="trash" />
        </span>
      </div>
    </div>
  )
}

export default Contact;