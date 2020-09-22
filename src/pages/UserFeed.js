import React from 'react'
import Menu from '../components/menu/Menu'
import { userIsAuthenticated } from "../redux/HOCs";



class UserFeed extends React.Component {
    render(){
        return(
            <div className="UserFeed">
                <Menu isAuthenticated={this.props.isAuthenticated}/>
                
            </div>
        )
    }
}


export default userIsAuthenticated(UserFeed);