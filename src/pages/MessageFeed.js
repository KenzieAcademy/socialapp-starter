import React , { Component } from 'react';
import Menu from "../components/menu/Menu";
import GetMessages from "../components/getMessages/GetMessages"
import { userIsAuthenticated } from "../redux/HOCs";


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