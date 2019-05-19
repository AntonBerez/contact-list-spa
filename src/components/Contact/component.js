import React from 'react';
import emptyProfile from '../../assets/profile-empty.jpg';
import './component.scss';

function Contact(props) {
  return (
    <div className='contact'>
      <div className='contact-image'>
        <img src={emptyProfile} alt='' />
      </div>
      <div className='contact-name'>
        <p>{props.contact.name}</p>
      </div>
    </div>
  );
}

export default Contact;