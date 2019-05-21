import parseLink from 'parse-link-header';

export function getContacts(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.headers.get('Link') !== '' && response.headers.get('Link') !== null) {
          dispatch({
            type: 'RECEIVE_LINK',
            link: parseLink(response.headers.get('Link').toString())
          })
        }
        return response;
      })
      .then((response) => response.json())
      .then((contacts) => dispatch({
        type: 'RECEIVE_CONTACTS',
        contacts: contacts
      }))
  };
}

export function deleteContact(id) {
  return (dispatch) => {
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'DELETE_CONTACT',
            id: id
          })
        }
      })
  };
}
