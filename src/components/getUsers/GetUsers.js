import React from "react";
import DataService from '../../dataService';
import { Link } from "react-router-dom";
import "./GetUsers.css"

class GetUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
    this.client = new DataService();
  }
  componentDidMount() {
    this.handleGetUsers()
  }

  handleGetUsers = e => {
    // e.preventDefault();
    
      this.client.getUsers().then(response => {
        // alert(JSON.stringify(result.data))
        console.log(response)
        console.log(response.data.users)
        this.setState({ data: response.data.users })
      });
        
    
  }

  render() {
    const { loading, error } = this.props;
    return (
      <div className="GetUsers">
          {/* <button onClick={this.handleGetUsers}>Get User</button> */}
          <ul className="user-list">
           {this.state.data.map(d => <li key={d.username}>
            <Link to={d.username}>{d.username}</Link>
           </li>)}
           </ul>
         
         </div>
    );
  }
}

export default GetUsers;