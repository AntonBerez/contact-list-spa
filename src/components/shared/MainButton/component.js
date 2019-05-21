import React from 'react';
import './component.scss';

function MainButton(props) {
  return (
    <React.Fragment>
      <button className="main-btn" type={props.type}>{props.name}</button>
    </React.Fragment>
  )
}

export default MainButton;