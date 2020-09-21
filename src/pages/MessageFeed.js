import React , { Component } from 'react';
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import GetMessages from "../components/getMessages/GetMessages"
import PostMessage from "../components/postMessage/PostMessage"

class MessageFeed extends Component {
    render() {
        return (
            <div className="feed">
                <Menu loggedIn={true} isAuthenticated={this.props.isAuthenticated} />
                <PostMessage />
                <GetMessages />
            </div>
        )
    }
}

export default userIsAuthenticated(MessageFeed)