import React from 'react';
import { Link } from 'react-router'
import MessageDetailLink from './MessageDetailLink'

const Message = ({id, text, onClick}) => {
    return (
      <li>
        {text}
        <button onClick={onClick}>Delete</button>
        <MessageDetailLink id={id}>message detail</MessageDetailLink>
      </li>
    );
}

Message.propTypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Message;
