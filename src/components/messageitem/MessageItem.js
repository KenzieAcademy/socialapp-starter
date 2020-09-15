import React from "react"

function MessageItem(props) {
    return (
    <div className="MessageItem">
        Message Text: {props.text}
        <br/>
        Username: {props.username}
        Likes: {props.likes.length}
    </div>
    )
}

export default MessageItem