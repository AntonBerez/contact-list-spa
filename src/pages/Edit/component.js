import React from 'react';
// import './component.scss';

import { EditForm } from '../../components/EditForm';

class Edit extends React.Component {

  render() {
    return (
      <div className="edit">
        <header> 
          <h2>Edit contact</h2>
        </header>
        <main>
          <EditForm />
        </main>
      </div>
    )
  }
}

export default Edit;
