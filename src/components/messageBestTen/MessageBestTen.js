import React from 'react';
import { Image, List, Segment } from 'semantic-ui-react';
import "./MessageBestTen.css"
import MessageBestItem from '../messageBestItem/MessageBestItem';
import FetchService from "../../FetchService";

class MessageBestTen extends React.Component {

    render() {

        return (
            <div className="MessageBestTen">
                <h2>Best ten posts</h2>
                {this.props.messages.sort((a, b) => b.likes.length - a.likes.length)
                    .map((messageObject, i) => {

                        return (
                            <MessageBestItem
                                key={i}
                                id={messageObject.id}
                                text={messageObject.text}
                                createdAt={messageObject.createdAt.toString().replace('T',' at ').slice(0, 19)}
                                username={messageObject.username}
                                likes={messageObject.likes}
                            />
                        )

                    }).slice(0, 10)}

            </div>
        )


    }
}

export default MessageBestTen
