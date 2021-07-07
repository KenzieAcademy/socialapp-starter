import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from '../../dataService';


class GetProfile extends React.Component {
    constructor(props) {
      const loginData = JSON.parse(localStorage.getItem("login"));
        super(props)
        this.state = {
          data: [],
          username: loginData.result.username,
          token: loginData.result.token
        };
        this.client = new DataService();
      }

      componentDidMount() {
        this.handleGetProfile()
      }

    handleGetProfile(){
        
          this.client.getProfile({username:this.state.username, token:this.state.token}).then(response => {
  
            this.setState({ data: response.data.user })
          });
            
        
      }



      render() {
        const { loading, error } = this.props;
        // let getUserURL = '/profile/' + this.state.data.username
        // console.log(this.state.data.username)
        return (
          <div className="GetProfile">
            <p>
              {this.state.data.displayName}
             </p>
             <p>
               {this.state.data.about}
             </p>
             <p>
               {this.state.data.pictureLocation}
             </p>
             </div>
        );
      }
}

export default userIsAuthenticated(GetProfile);