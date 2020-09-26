import React from "react"
import { userIsAuthenticated } from "../redux/HOCs";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu"
import PostMessage from "../components/postMessage/PostMessage"
import DeleteMessage from "../components/deleteMessage/DeleteMessage"

import DataService from "../dataService"

class MessageFeed extends React.Component {
    state = { messages: [] }

    componentDidMount() {
        new DataService()
            .getMessages()
            .then(messages => {
                this.setState({ messages })
            })
    }

    render() {
       
        return (
            <div className='MessageFeed'>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>Message Feed</h1>
                <PostMessage />
                <DeleteMessage />
                <br />

                <Link to="/profile/:username">Back to Profile</Link>
            </div>
        )
    }
}

export default userIsAuthenticated(MessageFeed)
