import React from 'react';
import './component.scss';
import { Link } from 'react-router-dom';

function AddButton() {
  return (
    <React.Fragment>
      <Link to='/create' className='create-link'>Add Contact</Link>
    </React.Fragment>
  );
}

export default AddButton;