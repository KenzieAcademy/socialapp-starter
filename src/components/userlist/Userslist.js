import React from "react";
import DataService from '../../DataService'
import User from '../userlist/Users'
import './userlist.css'

class Userlist extends React.Component {
state = {users: []}
client = new DataService ();

componentDidMount () {
    this.client.getuserlist().then(response => 
        this.setState({users: response.data.users})
    )
}


    render () {
        
        return (
            
            <div className='userlist'>
                               
                
               
                <h2 className="usertitle">user list</h2>
                
                <ul>
                    {this.state.users.map(userObject => (
                        <User key={userObject.username} {...userObject} />
                    ))}
                </ul>
                


            </div>
        )
    }
}

export default Userlist