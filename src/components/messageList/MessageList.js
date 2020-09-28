import React from 'react'
import './MessageList.css'
import Message from "../message/Message"


function MessageList(props) {
    const listItems = props.messages.map((message, i) => <Message {...message} key={i} message={message.text} />)
    return (
        <div>
            <h1>Message List</h1>
            {listItems}
        </div>
    )
    //    <li key={i}>{NewMessage.received}</li>

    //         <ul className="MessageList">
    //             {listItems}
    //         </ul>

    //         )
    // }

    // <button onClick={() => this.props.deletemessage(this.props.id)}>Delete</button>

    // this.setState((state, props) => ({


}


export default MessageList