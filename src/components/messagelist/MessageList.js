import React from "react"
import MessageItem from "../messageitem/MessageItem"

function MessageList(props) {
    
        return (
            <div className="MessageList">
                {props.messages.map((messageObj, i) => {
                    return <MessageItem
                        key={messageObj.id}
                        text={messageObj.text}
                        username={messageObj.username}
                        likes={messageObj.likes}
                        id={messageObj.id}
                        handleLike={props.handleLike}
                        handleRemoveLike={props.handleRemoveLike}
                        
                    />
                })}


            </div>
        )
    
}

export default MessageList