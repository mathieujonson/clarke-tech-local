import * as types from './actionTypes'

export function receiveEnvironments(json) {
  return { type: types.GET_ENVIRONMENTS_SUCCESS, payload: json }
}

export function getEnvironments() {
  // return dispatch => {
  //   return fetch(url(), {
  //     method: 'GET',
  //     mode: 'cors',
  //     credentials: 'include',
  //     headers: {
  //       'x-api-key': apiKey,
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json => dispatch(receiveStuff(json)));
  // };
}
