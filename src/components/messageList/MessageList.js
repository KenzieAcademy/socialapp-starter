import React from 'react'

import './MessageList.css'

function MessageList(props) {
    const listItems = props.message.map((message, i) =>
        <Messages key={i}>{messages.read}({messages.unread}>))
}

 <button>Delete</button>
return (
    <ul className="Message">
                {listItems}
            </ul>
           
    

)
export default MessageList