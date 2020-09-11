import React from 'react'
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs"
import PostMessageForm from "../components/postMessagesForm/PostMessageForm"

class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="mainPage">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>Everything will be here</h1>
                <PostMessageForm />
            </div>
        )
    }
}

export default userIsAuthenticated(MainPage)