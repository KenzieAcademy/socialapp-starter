import React from 'react'
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs"
import PostMessageForm from "../components/postMessageForm/PostMessageForm"

class MainHub extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "mainHub">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>Everything will be here</h1>
                <PostMessageForm />
            </div>
        )
    }
}

export default userIsAuthenticated(MainHub)