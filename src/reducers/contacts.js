export function contacts(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_CONTACTS':
      return action.contacts;
    case 'DELETE_CONTACT':
      return state.filter((contact) => contact.id !== action.id)

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
