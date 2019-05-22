import { combineReducers } from 'redux';
import { contacts, getLink, getIdForEdit } from './contacts';
import { reducer as reduxFormReducer } from 'redux-form';
import loadContact from '../components/EditForm/loadContact';

export default combineReducers({
  form: reduxFormReducer,
  loadContact,
  contacts,
  getLink,
  getIdForEdit
});