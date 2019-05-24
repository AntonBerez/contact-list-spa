const LOAD_CONTACT = 'redux-form-examples/account/LOAD';

const loadContact = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CONTACT:
      return {
        data: action.data,
      };
    case 'CLEAR_LOADED_CONTACT':
      return {};
    
    default:
      return state;
  }
};

export default loadContact;
