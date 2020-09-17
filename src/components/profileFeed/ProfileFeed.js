import React from "react";
import DataService from '../../DataService'

import Message from '../message/Message'

class ProfileFeed extends React.Component {
state = {messages: []}
client = new DataService

componentDidMount () {
    let authData = JSON.parse(localStorage.getItem('login'))
    this.client.getProfileFeed(authData.result.username, 5).then(response => {
        this.setState({ messages: response.data.messages})
    })
}

    render () {
        return (
            <div className='profilefeed'>
                <h2>My Feed</h2>
                <ul>
                {this.state.messages.map(messageObject => (
                        <Message key={messageObject.id} {...messageObject} />
                    ))}
                </ul>

            </div>
        )
    }
}

export default ProfileFeed