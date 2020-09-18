import React from 'react'
import './userlist.css'

class Users extends React.Component {


    render() {
        
        return (
           
<div className="users">
            <li >
                 @
               
                {this.props.username}
              
               
            </li>
            
            </div>
            
            
        )
    }

}


export default Users