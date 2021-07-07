import React from "react"
import Menu from "../components/menu/Menu"
import UserList from "../components/userList/UserList";
//import UserList from "../components/userList/UserList"
import FetchService from "../FetchService";

import { userIsAuthenticated } from "../redux/HOCs";


class UserFeed extends React.Component {
    constructor(props) {
        super(props)
        this.client = new FetchService()
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        this.client.userList().then(userData => {
            this.setState({
                user: userData.users
            })
        })
    }



    render() {
        return (
            <div className="UserFeed">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <UserList user={this.state.user} />
            </div>
        )
    }
}
export default userIsAuthenticated(UserFeed)