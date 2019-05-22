import React from 'react';

export const required = value => value ? undefined : 'Required';
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
    </div>
  </div>
);