import React from "react";
import DataService from '../../dataService';
import { userIsAuthenticated } from "../../redux/HOCs";

class DeleteUser extends React.Component {
  constructor(props) {
    const loginData = JSON.parse(localStorage.getItem("login"));

    super(props)
    this.state = {
      username: loginData.result.username,
      token: loginData.result.token
      
    };
    this.client = new DataService();
  }

  handleUserDelete = e => {
    e.preventDefault();
    // const thisHeader = {data:
    //   {
    //     username: this.state.username
    //   }, 
    //   headers:
    //   {
    //     Authorization: this.state.token
    //   }
    // }


      this.client.deleteUser(
        {
          username : this.state.username,
          token : this.state.token
        }
          )
        
    alert('User was deleted')
    localStorage.clear()
    window.location.reload()
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

