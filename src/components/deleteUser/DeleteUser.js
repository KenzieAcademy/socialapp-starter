import React from "react";
import DataService from "../../DataService"
import LoginForm from '../loginForm/LoginForm'

class DeleteUser extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          username: ""
      };
      this.client = new DataService();
    }

    handleDelete = e => {
      console.log('dog')
      
       this.props.deleteUser();
      };

  
render () {
    return (
        <div className='DeleteUser'>
        
                <button type="submit" onClick={this.handleDelete}>Delete User</button>
            
        </div>
    )
    }
}

export default DeleteUser;



// deleteUser(username){
//     return this.client.delete(this.url + "/users{username}", username);
// }