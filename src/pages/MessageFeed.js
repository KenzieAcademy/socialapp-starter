import React , { Component } from 'react';
import Menu from "../components/menu/Menu";
import GetMessages from "../components/getMessages/GetMessages"
import PostMessage from "../components/postMessage/PostMessage"

class MessageFeed extends Component {
    render() {
        return (
            <div className="feed">
                <Menu />
                <PostMessage />
                <GetMessages />
            </div>
        )
    }
}

export default MessageFeed