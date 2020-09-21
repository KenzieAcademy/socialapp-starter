import React from "react"
import QuestboardService from "../../pages/ServicePage"
import Message from "../Message/Message"
import "./feed2.css"

class MessageFeed2 extends React.Component {
    state = {
        messages: []
    }

    componentDidMount() {
        new QuestboardService().GetMessageList().then(messages => {
            this.setState({ messages })
        })
    }

    render () {
        if (this.state.messages.length === 0)
            return (
                <div className="messageFeed">
                    {/* <Menu /> */}
                    <h1>Message Feed</h1>
                    <h3>loading...</h3>
                </div>
            )
        return (
            <div className="MessageFeed">
                <menu />
                <h1>Message Feed</h1>
                <ul>
                    {this.state.messages.map(msg => <Message key={msg.id} {...msg}/>)}
                </ul>
            </div>
        )
    }
}

export default MessageFeed2