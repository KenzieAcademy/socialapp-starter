import React from "react";
import DataService from '../../dataService';
import { userIsAuthenticated } from "../../redux/HOCs";

class DeleteUser extends React.Component {
  constructor(props) {
 
    super(props)
    this.state = {
      username: localStorage.getItem('username'),
      token: localStorage.getItem('token')
      
    };
    this.client = new DataService();
  }

  handleUserDelete = e => {
    e.preventDefault();

      this.client.deleteUser(this.state.username)
        
    
  }
    

  render() {
    const { loading, error } = this.props;
    return (
      <div className="DeleteUser">
          <button onClick={this.handleUserDelete}>Delete User</button>
         </div>
    );
  }
}

export default userIsAuthenticated(DeleteUser);
