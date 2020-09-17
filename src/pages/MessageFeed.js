import React from "react";
import DataService from '../DataService'

import Message from '../components/message/Message'

class MessageFeed extends React.Component {
state = {messages: []}
client = new DataService

componentDidMount () {
    this.client.getFeed().then(response => 
        this.setState({ messages: response.data.messages})
    )
}


    render () {
        return (
            <div className='messagefeed'>
                <h2>Message Feed</h2>
                <ul>
                    {this.state.messages.map(messageObject => (
                        <Message key={messageObject.id} {...messageObject} />
                    ))}
                </ul>

            </div>
        )
    }
}

export default MessageFeed