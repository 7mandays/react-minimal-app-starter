import fetch from 'isomorphic-fetch'

const uid = () => Math.random().toString(34).slice(2)

export function addMessage(text) {
  return {
    type: 'ADD_MESSAGE',
    message: {
      id: uid(),
      text
    }
  }
}

export function deleteMessage(id = -1) {
  return {
    type: 'DELETE_MESSAGE',
    id
  }
}

export function changeFilter(numberOfRecords) {
  return {
    type: 'CHANGE_FILTER',
    numberOfRecords
  }
}

function receiveMessagesStart() {
  return {
    type: 'RECEIVE_MESSAGES_START',
    startAt: Date.now()
  }
}

function receiveMessagesFinish(json) {
  return {
    type: 'RECEIVE_MESSAGES_FINISH',
    messages: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchMessages() {
  return function (dispatch) {
    dispatch(receiveMessagesStart())
    return fetch(`http://www.reddit.com/r/`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveMessagesFinish(json))
      )
      .catch((e) => {console.log(`fetchMessage ${e}`)})
  }
}
