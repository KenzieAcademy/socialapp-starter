import React from "react"
import Menu from "../components/menu/Menu"
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messagelist/MessageList"
import Service from "../Service"

class MessageFeed extends React.Component {
    constructor(props){
        super(props)
        this.client = new Service()
        this.state = {
            messages: []
        }
    }
    componentDidMount() {
        this.client.userMessage().then(messageData => {
            this.setState({
                messages: messageData.messages
            })
        })
    }

    render() {
        return (
            <div className="MessageFeed">
                <Menu isAuthenticated={this.props.isAuthenticated}/>
                <MessageList messages={this.state.messages}/>
                
            </div>
        )

    }
}

export default userIsAuthenticated (MessageFeed)