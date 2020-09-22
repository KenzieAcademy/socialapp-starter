import React from 'react';


function MessageItem(props) {

    return (
        <div className="MessageItem">

            Username: {props.username}
            <br />
            MessageID: {props.id}
            <br />
            Text: {props.text}
            <br />
            Likes:  {props.likes.length}
            <br />
            <button onClick={() => { props.handleLike(props.id) }}>Like</button>
            <button onClick={() => { props.handleRemoveLike(props.id) }}>UnLike</button>


        </div>
    )
}
export default MessageItem;