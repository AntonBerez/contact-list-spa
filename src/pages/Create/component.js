import React from 'react';
import './component.scss';

import { CreateForm } from '../../components/CreateForm';

class Create extends React.Component {

  render() {
    return (
      <div className="create">
        <header> 
          <h2>Create new contact</h2>
        </header>
        <main>
          <CreateForm />
        </main>
      </div>
    )
  }
}

export default Create;
