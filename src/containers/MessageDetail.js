import { connect } from 'react-redux'
import { deleteMessage } from '../actions/actions'
import Message from '../components/Message'

const getMessage = (messages, id) => {
  return messages.filter((m) => {return m.id == id})[0]
}

const mapStateToProps = (state, customProps) => {
  const m = getMessage(state.messages, customProps.params.id)
  return {
    id: m.id,
    text: m.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(deleteMessage(id))
      window.location = '/messages'
    }
  }
}

const MessageDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)

export default MessageDetail
