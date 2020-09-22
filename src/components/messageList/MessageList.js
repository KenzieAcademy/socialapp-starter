
import React from 'react';
import MessageItem from '../messageItem/MessageItem'
import { Image, List, Segment } from 'semantic-ui-react'
import "./MessageList.css"

class MessageList extends React.Component {

    render() {

        return (
            <div className="MessageList">
                <h2>Message List</h2>

                { this.props.messages.map((messageObj, i) => {

                    return (
                        // <div className="MessageList">
                        // <MessageItem
                        // key={i}
                        // text={messageObj.text}
                        // username={messageObj.username} 
                        // likes={messageObj.likes}

                        <List relaxed>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header as='a'>{messageObj.username}</List.Header>
                                    <List.Description>
                                        Posted:{' '}
                                        <a>
                                            <b>{messageObj.text}</b>
                                        </a>{' '}
                                        ...
                                        <a>
                                            {/* <b>{messageObj.likes}</b> */}
                                        </a>

                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </List>

                        // />

                        // </div>
                    )
                })}

            </div>
        )
    }
}

export default MessageList