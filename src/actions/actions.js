const uid = () => Math.random().toString(34).slice(2);

export function addMessage(text) {
  return {
    type: 'ADD_MESSAGE',
    payload: {
      id: uid(),
      text: text
    }
  };
}

export function deleteMessage(id = -1) {
  return {
    type: 'DELETE_MESSAGE',
    payload: id
  }
}

export function changeFilter(numberOfRecords) {
  return {
    type: 'CHANGE_FILTER',
    payload: numberOfRecords
  }
}
