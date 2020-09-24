import React from 'react'
import Menu from '../components/menu/Menu'
import { userIsAuthenticated } from "../redux/HOCs";
import UserList from '../components/userList/UserList'
import FetchService from '../FetchService'

class UserFeed extends React.Component {
    constructor(props){
        super(props)
        this.client = new FetchService()
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        this.client.getUsers().then(userData=>{
            this.setState({
                users: userData.users
            })
        })
    }
    render(){
        return(
            <div className="UserFeed">
                <Menu isAuthenticated={this.props.isAuthenticated}/>
                <UserList users={this.state.users}/>
            </div>
        )
    }
}


export default userIsAuthenticated(UserFeed);