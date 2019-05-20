export function contactsFetchSuccess(contacts) {
  return {
    type: 'RECEIVE_POSTS',
    contacts
  }
}

export function contactsFetchData() {
  return (dispatch) => {
    fetch('http://localhost:3001/contacts')
      .then((response) => response.json())
      .then((contacts) => dispatch(contactsFetchSuccess(contacts)))
  };
}
