import React from 'react'
import { connect } from 'react-redux'
import { deleteMessage, fetchMessages } from '../actions/actions'
import MessageList from '../components/MessageList'

const getFilteredMessages = (messages, filter) => {
  return messages.slice(0, filter)
}

const mapStateToProps = (state) => {
  return {
    messages: getFilteredMessages(state.messages, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    onMessageClick: (id) => {
      dispatch(deleteMessage(id))
    }
  }
}

class MessageListC extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // const { dispatch } = this.props
    this.props.dispatch(fetchMessages())
  }

  render(){
    return (
      <MessageList messages={this.props.messages} onMessageClick={this.props.onMessageClick}/>
    )
  }
}

const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListC)

export default MessageListContainer
