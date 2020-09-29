
import React from 'react';
import { Image, List, Segment } from 'semantic-ui-react'
import "./MessageList.css"
import MessageItem from '../messageItem/MessageItem';
import FetchService from "../../FetchService";

class MessageList extends React.Component {

    render() {

        return (
            <div className="MessageList">
                <h2>Message List</h2>

                { this.props.messages.map((messageObj, i) => {

                    return (

                        <MessageItem
                            key={i}
                            id={messageObj.id}
                            text={messageObj.text}
                            createdAt={messageObj.createdAt.toString().replace('T',' at ').slice(0, 19)}
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