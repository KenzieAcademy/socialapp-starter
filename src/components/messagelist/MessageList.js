import React from "react"
import MessageItem from "../messageitem/MessageItem"

class MessageList extends React.Component {
    render() {
        return (
            <div className="MessageList">
                {this.props.messages.map((messageObj, i) => {
                    return <MessageItem
                        key={i}
                        text={messageObj.text}
                        username={messageObj.username}
                        likes={messageObj.likes}
                        
                    />
                })}


            </div>
        )
    }
}

export default MessageList