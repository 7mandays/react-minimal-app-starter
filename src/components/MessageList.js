import React from 'react';
import Message from './Message';

const MessageList = ({messages, onMessageClick}) => {
    return (
      <div>
        <ul>
          {messages.map(m => (
            <Message key={m.id} text={m.text} onClick={() => onMessageClick(m.id)} />
          ))}
        </ul>
      </div>
    );
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  onMessageClick: React.PropTypes.func.isRequired
}

export default MessageList;
