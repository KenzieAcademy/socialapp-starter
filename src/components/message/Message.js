import React from 'react'

function Message(props) {
    return (
        <li className="Message">
            {JSON.stringify(props.message)}
            <br />
            {props.message.text}
        </li>
    )
}
export default Message