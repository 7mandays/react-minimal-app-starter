import React from 'react'
import { Link } from 'react-router'

const MessageDetailLink = ({id, children}) => (
    <Link to={`/messages/${id}`}>{children}</Link>
  )

MessageDetailLink.propTypes = {
  id: React.PropTypes.string.isRequired
}

export default MessageDetailLink
