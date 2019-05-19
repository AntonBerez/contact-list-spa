export function contacts(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return action.contacts;

    default:
      return state;
  }
}