
import React from 'react';
import MessageItem from '../messageItem/MessageItem';
import FetchService from "../../FetchService";

class MessageList extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.client = new FetchService()
    // }

    // handleLike = ((messageId, event) => {
    //     // console.log("Hi from HandleLike")
    //     this.client.addLike(messageId)
    //         //get messageList again (refresh)
    //         .then((data) => {
    //             this.setState({ messages: messageData.messages })
    //         })
    // })

    render() {

        return (
            <div className="MessageList">

                { this.props.messages.map((messageObj, i) => {

                    return (

                        <MessageItem
                            key={i}
                            id={messageObj.id}
                            text={messageObj.text}
                            username={messageObj.username}
                            likes={messageObj.likes}
                            handleLike={this.props.handleLike}
                            handleRemoveLike={this.props.handleRemoveLike}
                        />

                    )
                })}

            </div>
        )
    }
}

export default MessageList