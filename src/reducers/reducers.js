import { combineReducers } from 'redux'

function messages(state = [], action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        action.payload
      ]
    case 'DELETE_MESSAGE':
      return state.filter((v) => {
        return v.id != action.payload
      });
    default:
      return state;
  }
}

function filter(state = 3, action) {
  switch(action.type) {
    case 'CHANGE_FILTER':
      return action.payload
    default:
      return state;
  }
}

const app = combineReducers({
  messages,
  filter
})


export default app;
