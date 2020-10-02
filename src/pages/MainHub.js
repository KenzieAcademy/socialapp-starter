import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs"
import PostMessageForm from "../components/postMessageForm/PostMessageForm"
import GetMessages from "../components/messages/GetMessages";


class MainHub extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "mainHub">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <PostMessageForm />
                <GetMessages />
            </div>
        )
    }
}

export default userIsAuthenticated(MainHub);
