import React from 'react';
import './component.scss';

import ContactList from '../../components/ContactList/component';
import AddButton from '../../components/AddButton/component';

function Home() {
  return (
    <React.Fragment>
      <header> 
        <h2>Contact List</h2>
        <AddButton />
      </header>
      <main>
        <ContactList />
      </main>
    </React.Fragment>
  );
}

export default Home;