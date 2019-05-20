import { combineReducers } from 'redux';
import { contacts } from './contacts';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  form: reduxFormReducer,
  contacts
});