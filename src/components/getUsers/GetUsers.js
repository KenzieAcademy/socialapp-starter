import React from "react";
import DataService from '../../dataService';
import './GetUsers.css'

class GetUsers extends React.Component {
  constructor(props) {
    const loginData = JSON.parse(localStorage.getItem("login"));
    super(props)
    this.state = {
      data: [],
      token: loginData.result.token
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.handleGetUsers()
  }

  handleGetUsers() {
    
      this.client.getUsers(this.state).then(response => {
        // alert(JSON.stringify(result.data))
        
        this.setState({ data: response.data.users })
      });
        
    
  }


  render() {
    const { loading, error } = this.props;
    // let getUserURL = '/profile/' + this.state.data.username
    // console.log(this.state.data.username)
    return (
      <div className="GetUsers">
          <ul>
    {this.state.data.map(d => <div><li key={d.displayName}>{d.displayName}</li></div>)}
           </ul>
         
         </div>
    );
  }
}

export default GetUsers;
