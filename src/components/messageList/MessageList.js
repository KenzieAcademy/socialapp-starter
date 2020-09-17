
import React from 'react';
import MessageItem from '../messageItem/MessageItem'

class MessageList extends React.Component {

    render() {

        return (
            <div className="MessageList">

                { this.props.messages.map((messageObj, i) => {

                    return (
                        // <div className="MessageList">
                            <MessageItem 
                            key = {i}
                            text = {messageObj.text}
                            username = {messageObj.username}
                            likes = {messageObj.likes}
                                                       
                            />

                        // </div>
                    )
                })}
    
            </div>
        )
    }
}

export default MessageList