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

export function createContact(values, url) {
  return (dispatch) => {
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(values)
    })
      .then((response) => {
        if(response.status === 201) {
          dispatch({
            type: 'CREATE_CONTACT'
          })
        }
      })
  }
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
