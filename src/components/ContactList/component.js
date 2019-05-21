import React from 'react';
import './component.scss';

import { Contact } from '../Contact';

function ContactList(props) {
  return (
    <div className='contact-list'>
      {props.contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
      <div className='pagination'>
        {props.link.prev ? <span onClick={() => props.handlePginationClick(props.link.prev.url)}>{props.link.prev.rel}</span> : null}
        {props.link.next ? <span onClick={() => props.handlePginationClick(props.link.next.url)}>{props.link.next.rel}</span> : null}
      </div>
    </div>
  )
}

export default ContactList;