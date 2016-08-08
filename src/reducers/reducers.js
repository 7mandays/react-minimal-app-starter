import { combineReducers } from 'redux'

function messages(state = [], action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        action.message
      ]
    case 'DELETE_MESSAGE':
      return state.filter((m) => {
        return m.id != action.id
      })
    default:
      return state
  }
}

function filter(state = 3, action) {
  switch(action.type) {
    case 'CHANGE_FILTER':
      return action.numberOfRecords
    default:
      return state
  }
}

const app = combineReducers({
  messages,
  filter
})


export default app
