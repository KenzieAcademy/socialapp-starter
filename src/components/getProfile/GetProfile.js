import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from '../../dataService';


class GetProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          username: JSON.parse(localStorage.getItem('username'))
        };
        this.client = new DataService();
      }

      componentDidMount() {
        this.handleGetProfile()
      }

    handleGetProfile(){
        
          this.client.getProfile(this.state.username).then(response => {
            alert(JSON.stringify(response.data))
            console.log(response)
            this.setState({ data: response.data.users })
          });
            
        
      }



  render() {
    return (
      <div className="getProfile">
          
        {/* {this.state.data.map(d => <li key={d.username}>{d.username}</li>)} */}
           
      </div>
    );
  }
}

export default userIsAuthenticated(GetProfile);