import React from "react"

function MessageItem(props) {
    return (
    <div className="MessageItem">
        Message Text: {props.text}
        <br/>
        Username: {props.username}
        <br/>
        Likes: {props.likes.length}
        <br/>
        
    </div>
    )
}

export default MessageItem