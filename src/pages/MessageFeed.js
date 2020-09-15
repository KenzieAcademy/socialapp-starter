import React , { Component } from 'react';
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import GetMessages from "../components/getMessages/GetMessages"
<<<<<<< HEAD
import { userIsAuthenticated } from "../redux/HOCs";

=======
import PostMessage from "../components/postMessage/PostMessage"
>>>>>>> 874cabbb719e114d24964114f52cdcdfa7f0f601

class MessageFeed extends Component {
    render() {
        return (
            <div className="feed">
                <Menu isAuthenticated={this.props.isAuthenticated} />
<<<<<<< HEAD
=======
                <PostMessage />
>>>>>>> 874cabbb719e114d24964114f52cdcdfa7f0f601
                <GetMessages />
            </div>
        )
    }
}

<<<<<<< HEAD
export default userIsAuthenticated(MessageFeed);
=======
export default userIsAuthenticated(MessageFeed)
>>>>>>> 874cabbb719e114d24964114f52cdcdfa7f0f601
