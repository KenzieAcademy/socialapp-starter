import React from "react"
import MessageItem from "../messageitem/MessageItem"
import { Feed } from 'semantic-ui-react'

function MessageList(props) {

    return (
        <Feed >
            {props.messages.map((messageObj, index) => {
                return <MessageItem
                    index={index}
                    key={messageObj.id}
                    text={messageObj.text}
                    username={messageObj.username}
                    likes={messageObj.likes}
                    id={messageObj.id}
                    handleLike={props.handleLike}
                    handleRemoveLike={props.handleRemoveLike}
                />
            })}


        </Feed>
    )

}
export default MessageList