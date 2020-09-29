import React, { Component } from 'react'
import LikeMessageService from './LikeMessageService'

class LikeMessage extends Component {
    constructor(props) {
        super(props)
        this.client = new LikeMessageService()
        this.state = {
            messageIds: []
        }
    }

    componentDidMount() {
        let messageIds = []
        messageIds = document.getElementsByTagName("p")
        let length = messageIds.length
        for (let i = 0; i < length; i++) {
            const post = document.getElementById(messageIds[i].id)
            const likeButton = document.createElement("button")
            likeButton.id = messageIds[i].id
            likeButton.addEventListener("click", this.handleClick, false)
            likeButton.innerHTML = "&#128077;"
            post.append(likeButton)
        }
    }

    handleClick(e) {
        let client = new LikeMessageService()
        return client.likeMessage(e.target.id)
    }

    render() {
        return (
            <div></div>
        )
    }

}

export default LikeMessage