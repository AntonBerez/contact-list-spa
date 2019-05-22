import React from 'react';
import './component.scss';
import emptyProfile from '../../assets/profile-empty.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact(props) {
  return (
    <div className='contact'>
      <div className='contact-image'>
        <img src={emptyProfile} alt='' />
      </div>
      <div className='contact-name'>
        <p>{props.contact.firstName} {props.contact.lastName}</p>
        <p>{props.contact.tel}</p>
        <span className='delete-icon' onClick={() => {props.handleDeleteContact(props.contact.id)}}>
          <FontAwesomeIcon icon="trash" />
        </span>
      </div>
    </div>
  )
}

export default Contact;