import React from 'react';
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu"
import FetchService from "../FetchService";
import MessageList from "../components/messageList/MessageList";
import UserMessage from "../components/userMessage/UserMessage"
import "../index.css"

class MessageFeed extends React.Component {

    constructor(props) {
        super(props)
        this.client = new FetchService();

        this.state = {
            messages: []
        }
    }

    componentDidMount() {

        this.client.getMessages()
            // .then(messageData => console.log(messageData))
            .then((messageData) => {
                this.setState({
                    messages: messageData.messages
                })
            })
    }

    render() {
        return (

            <div className="MessageFeed">
                <Menu isAuthenticated={this.props.isAuthenticated} />

                <div className="message_field_format">
                    <div className="auto_scroll">
                        <MessageList messages={this.state.messages} />
                    </div>
                    <div className="centralize_elements">
                        <UserMessage />
                    </div>
                </div>

            </div>
        )
    }

}

export default userIsAuthenticated(MessageFeed);