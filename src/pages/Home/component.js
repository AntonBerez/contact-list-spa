import React from 'react';
import './component.scss';
import { Link } from 'react-router-dom';

import { ContactList } from '../../components/ContactList';
import { MainButton } from '../../components/shared/MainButton';

function Home() {
  return (
    <div className="home">
      <header> 
        <h2>Contact List</h2>
        <Link to='/create'>
          <MainButton type='button' name='Add new contact' />
        </Link>
      </header>
      <main>
        <ContactList />
      </main>
    </div>
  );
}

export default Home;