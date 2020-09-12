import React from 'react'
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs"
import PostMessageForm from "../components/postMessagesForm/PostMessageForm"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h3>Post Stuff here</h3>
                <PostMessageForm />
            </div>
        )
    }
}

export default userIsAuthenticated(Main)