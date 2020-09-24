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
        <button onClick={()=> {props.handleLike(props.id) }}>Like</button>
        <br/>
        <button onClick={()=> {props.handleRemoveLike(props.id) }}>UnLike</button>

    </div>
    )
}

export default MessageItem