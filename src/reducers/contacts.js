const initialState = {
  contacts: [],
  contact: '',
  contactCreated: false
}

export function contacts(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_CONTACTS':
      return Object.assign({}, state, {
        contacts: action.contacts,
        contactCreated: false,
        contact: ''
      });
    case 'DELETE_CONTACT':
      return Object.assign({}, state, {
        contacts: state.contacts.filter((contact) => contact.id !== action.id)
      });
    case 'CREATE_CONTACT':
      return Object.assign({}, state, {
        contactCreated: true
      })
    case 'RECEIVE_CONTACT':
      return Object.assign({}, state, {
        contact: action.contact
      })

    default:
      return state;
  }
}

export function getLink(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_LINK':
      return action.link;

    default:
      return state;
  }
}

export function getIdForEdit(state = '', action) {
  switch (action.type) {
    case 'GET_ID_FOR_EDIT':
      return action.id;

    default:
      return state;
  }
}
