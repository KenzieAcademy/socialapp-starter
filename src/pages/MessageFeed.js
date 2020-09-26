import React from 'react'
import Menu from '../components/menu/Menu';
import GetMessages from '../components/getMessages/GetMessages';
import DataService from '../dataService';
import { userIsAuthenticated } from '../redux/HOCs';

class MessageFeed extends React.Component {
    state = { messages: [] }

    componentDidMount() {
        new DataService()
            .getMessages()
            .then(messages => {
                this.setState({ messages })
            })
    }

    render() {
        if (this.state.messages.length === 0) {
            return (
                <div className="MessageFeed">
                    <Menu />
                    {/* <GetMessages /> */}
                    <h1>Message Feed</h1>
                    <h3>Loading...</h3>
                </div>
            )
        }
        
        return (
            <div className="MessageFeed">
                <Menu />
                <h1>Message Feed</h1>
                <GetMessages />
            </div>
        )
    }
}

export default userIsAuthenticated(MessageFeed);