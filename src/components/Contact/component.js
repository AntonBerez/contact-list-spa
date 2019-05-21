import React from 'react';
import './component.scss';
import emptyProfile from '../../assets/profile-empty.jpg';

function Contact(props) {
  return (
    <div className='contact'>
      <div className='contact-image'>
        <img src={emptyProfile} alt='' />
      </div>
      <div className='contact-name'>
        <p>{props.contact.firstName} {props.contact.lastName}</p>
        <p>{props.contact.tel}</p>
        <span onClick={() => {props.handleDeleteContact(props.contact.id)}}>del</span>
      </div>
    </div>
  )
}

export default Contact;