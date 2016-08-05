import React from 'react';

const Message = ({text, onClick}) => {
    return (
      <li onClick={onClick}>
        {text}
      </li>
    );
}

Message.propTypes = {
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Message;
