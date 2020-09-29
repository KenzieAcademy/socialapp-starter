import React from 'react'
import './MessageList.css'
import Message from "../message/Message"
// import { message } from 'antd'


function MessageList(props) {

    const listItems = props.messages.map((message, i) => <Message key={i} message={message} />)
    return (
        <div>
            <h1>Message List</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )

}

export default MessageList