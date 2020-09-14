import React , { Component } from 'react';
import Menu from "../components/menu/Menu";
import GetMessages from "../components/getMessages/GetMessages"

class MessageFeed extends Component {
    render() {
        return (
            <div className="feed">
                <Menu />
                <GetMessages />
            </div>
        )
    }
}

export default MessageFeed