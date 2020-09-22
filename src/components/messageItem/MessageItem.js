import React from 'react';


function MessageItem(props) {

    return(
        <div className="MessageItem">
            
            Username: {props.username}
            <br/>
            Text: {props.text}
            <br/>
            Likes:  {props.likes.length}
        </div>
    )
}
export default MessageItem;