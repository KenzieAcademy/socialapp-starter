import React , { Component } from 'react'
import GetMessagesServices from './GetMessagesService'

class GetMessages extends Component {
    constructor(props) {
        super(props)
        this.client = new GetMessagesServices
        this.state = {
            messages: [],
            mounted: false
        }
    }

    componentDidMount() {
        return this.client.getMessages().then(result => {
            this.setState({
                messages: result.data.messages,
                mounted: true
            })
            this.displayMessages()
        })
    }

    displayMessages() {
        const feed = document.querySelector(".message-feed")
        const messageArray = this.state.messages
        for (let i = 0; i < messageArray.length; i++) {
            let post = document.createElement("div")
            post.className = "message"
            let postUser = document.createElement("h5")
            postUser.innerText = messageArray[i].username
            let postText = document.createElement("p")
            postText.innerText = messageArray[i].text
            post.append(postUser)
            post.append(postText)
            feed.append(post)            
        }
    }

    render() {
        if(!this.state.mounted) {
            return (
                <div className="message-feed">
                </div>
            )
        }
        else {
            return (
                <div className="message-feed">
                    {/* <div className="message">
                        <div id="user">
                            <h5>{this.state.messages[0].username}</h5>
                        </div>
                        <div id="message">
                            <p>{this.state.messages[0].text}</p>
                        </div>
                    </div> */}
                </div>
            )
        }
    }
}

export default GetMessages