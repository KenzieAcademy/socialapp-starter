import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from '../../dataService';


class UpdateUser extends React.Component {
    constructor(props) {
      const loginData = JSON.parse(localStorage.getItem("login"));
        super(props)
        this.state = {
          username: loginData.result.username, 
          token: loginData.result.token
        };
        this.client = new DataService();
      }


    handleUpdateUser = e => {
        e.preventDefault();
        
          this.client.updateUser(
              {
                  username: this.state.username,
                  token: this.state.token,
                  password: this.state.password,
                  about: this.state.about,
                  displayName: this.state.displayName
              }
              )
            
        window.location.reload()
      }

      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      }; 


      render() {
        const { loading, error } = this.props;
        
        return (
            <div className='UpdateUser'>
                <h4>Update User Profile?</h4>
                <form onSubmit={this.handleUpdateUser}>
                    <div>
                        <label htmlFor="password">Change Password Here </label>
                        <input
                            type="text"
                            name="password"
                            placeholder="Don't forget this password!"
                            onChange={this.handleChange}
                        />
                        <br />

                        <label htmlFor="about">Change About Me Here </label>
                        <input
                            type="text"
                            name="about"
                            placeholder="Write about yourself"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="displayName">Change Display Name </label>
                        <input
                            type="text"
                            name="displayName"
                            placeholder="Write your post here"
                            // value={this.state.text}
                            onChange={this.handleChange}
                        />
                        
                    </div>
                    <br /> 
                    <button type='submit'>Update Profile</button>
                </form>
            </div>
        )
      }
}

export default userIsAuthenticated(UpdateUser);