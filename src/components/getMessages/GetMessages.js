import React , { Component } from 'react'
import GetMessagesService from './GetMessagesService'
import LikeMessageService from '../likeMessage/LikeMessageService'
import "./GetMessages.css"
class GetMessages extends Component {
    constructor(props) {
        super(props)
        this.client = new GetMessagesService()
        this.likeClient = new LikeMessageService()
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
            post.className = "jerry"
            let postUser = document.createElement("h5")
            postUser.innerText = messageArray[i].username
            let postText = document.createElement("p")
            postText.innerText = messageArray[i].text
            let postLike = document.createElement("button")
            postLike.id = messageArray[i].id
            postLike.innerHTML = "&#128077;"
            postLike.addEventListener("click", function(event) {
                this.likeClient.likeMessage(event.target.id)
            })
            postText.append(postLike)
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
                    
                </div>
            )
        }
    }
}

export default GetMessages