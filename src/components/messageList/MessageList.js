import React from 'react'
import Message from '../message/Messages'
import './MessageList.css'

function MessageList(props) {
    const listItems = props.message.map((message, i) => <Message key={i} message={message} />
      
return (
        <ul className="Message">
            {listItems}
        </ul>



    )
}

export default MessageList