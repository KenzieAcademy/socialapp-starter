import React , { Component } from 'react'
import GetMessagesService from './GetMessagesService'
import LikeMessage from '../likeMessage/LikeMessage'
import "./GetMessages.css"
class GetMessages extends Component {
    constructor(props) {
        super(props)
        this.client = new GetMessagesService()
        this.state = {
            messages: [],
            mounted: false
        }
    }

    componentDidMount() {
        this.getMessages()
    }

    getMessages() {
        return this.client.getMessages().then(result => {
            this.setState({
                messages: result.data.messages,
                mounted: false
            })
            this.displayMessages()
            this.setState({
                mounted: true
            })
            this.updateMessages()
        })
    }

    updateMessages() {
        return this.client.getMessages().then(result => {
            if (result.data.messages[0].id === this.state.messages[0].id) {
                setTimeout(this.updateMessages(), 10000);
            }
            else {
                this.getMessages()
            }
        })
    }

    displayMessages() {
        const feed = document.querySelector(".message-feed")
        while (feed.firstChild) {
            feed.removeChild(feed.firstChild);
        }
        const messageArray = this.state.messages
        for (let i = 0; i < messageArray.length; i++) {
            let post = document.createElement("div")
            post.className = "jerry"
            let postUser = document.createElement("h5")
            postUser.innerText = messageArray[i].username
            let postText = document.createElement("p")
            postText.id = messageArray[i].id
            postText.innerText = messageArray[i].text
            post.append(postUser)
            post.append(postText)
            let postLikes = document.createElement("div")
            postLikes.id = "post" + messageArray[i].id
            postLikes.innerText = messageArray[i].likes.length + " Likes"
            post.append(postLikes)
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
                    <LikeMessage />
                </div>
            )
        }
    }
}

export default GetMessages