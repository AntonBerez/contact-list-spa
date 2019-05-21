import React from 'react';

import CreateForm from '../../components/CreateForm/component';


class Create extends React.Component {

  render() {
    return (
      <React.Fragment>
        <header> 
          <h2>Create new contact</h2>
        </header>
        <main>
          <CreateForm />
        </main>
      </React.Fragment>
    )
  }
}

export default Create;
