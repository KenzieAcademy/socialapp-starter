import React from 'react'
import Message from '../message/Messages'
import './MessageList.css'
import { render } from 'react-dom'

function MessageList(props) {
    const listItems = props.message.map((message, i) => <Message key={i} message={message} />

 (
            <ul className="Message">
                {listItems}
            </ul>

        )
}

<li>
    <button onClick={() => this.props.deletemessage(this.props.id)}>Delete</button>
</li>
this.setState((state, props) => ({


}))


export default MessageList