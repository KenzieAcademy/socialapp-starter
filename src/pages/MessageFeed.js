import React , { Component } from 'react';
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import GetMessages from "../components/getMessages/GetMessages"


class MessageFeed extends Component {
    render() {
        return (
            <div className="feed">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <GetMessages />
            </div>
        )
    }
}

export default userIsAuthenticated(MessageFeed);
