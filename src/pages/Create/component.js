import React from 'react';

import SimpleForm from '../../components/CreateForm/component';


class Create extends React.Component {

  render() {
    return (
      <React.Fragment>
        <header> 
          <h2>Create new contact</h2>
        </header>
        <main>
          <SimpleForm />
        </main>
      </React.Fragment>
    )
  }
}

export default Create;
