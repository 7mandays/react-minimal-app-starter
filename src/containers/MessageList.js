import { connect } from 'react-redux'
import { deleteMessage } from '../actions/actions'
import MessageList from '../components/MessageList'

const getFilteredMessages = (messages, filter) => {
  return messages.slice(0, filter);
}

const mapStateToProps = (state) => {
  return {
    messages: getFilteredMessages(state.messages, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageClick: (id) => {
      dispatch(deleteMessage(id))
    }
  }
}

const VisibleMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)

export default VisibleMessageList
