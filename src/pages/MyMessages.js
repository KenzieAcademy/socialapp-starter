import React from "react"
import { userIsAuthenticated } from "../redux/HOCs";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu"
import PostMessage from "../components/postMessage/PostMessage"


class MyMessages extends React.Component {
    render() {
        return (
            <div className='MyMessages'>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <PostMessage />
                <br/>
                <Link to="/profile/:username">Back to Profile</Link>
            </div>
        )
    }
}

export default userIsAuthenticated(MyMessages)