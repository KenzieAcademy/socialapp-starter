import React from "react"
import QuestboardService from "../servicesPage/ServicePage"
import Message from "../Message/Message"
import "./feed2.css"


class MessageFeed2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }

        this.interval = setInterval(() => new QuestboardService().GetMessageList().then(messages => {
            this.setState({ messages })
        }), 5000)

    }

    componentDidMount() {
        new QuestboardService().GetMessageList().then(messages => {
            this.setState({ messages })
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        if (this.state.messages.length === 0)
            return (
                <div id="feedBackground">
                    <div className="messageFeed">

                        <h1>Message Feed</h1>
                        <h3>loading...</h3>
                    </div>

                </div>
            )
        return (
            <div id="feedBackground">
                <div className="messageFeedTitle">
                    <h1 className="messageFeedTitle2">Message Feed</h1>
                    <div className="MessageFeed">
                        {this.state.messages.map(msg => <Message key={msg.id} {...msg} />)}
                    </div>

                </div>
            </div>
        )
    }
}

export default MessageFeed2