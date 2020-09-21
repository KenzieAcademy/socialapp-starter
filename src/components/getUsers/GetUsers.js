import React from "react";
import DataService from '../../dataService';

class GetUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
    this.client = new DataService();
  }

  handleGetUsers = e => {
    e.preventDefault();
<<<<<<< HEAD
    
      this.client.getUsers().then(response => {
        // alert(JSON.stringify(result.data))
        console.log(response)
        console.log(response.data.users)
        this.setState({ data: response.data.users })
      });
        
    
=======

    this.client.getUsers().then(response => {
      // alert(JSON.stringify(result.data))
      console.log(response)
      console.log(response.data.users)
      this.setState({ data: response.data.users })
    });

>>>>>>> lesa-branch
  }

  render() {
    const { loading, error } = this.props;
    return (
      <div className="GetUsers">
<<<<<<< HEAD
          <button onClick={this.handleGetUsers}>Get User</button>
          <ul>
           {this.state.data.map(d => <li key={d.username}>{d.username}</li>)}
           </ul>
         
         </div>
=======
        <button onClick={this.handleGetUsers}>Get User</button>
        <ul>
          {this.state.data.map(d => <li key={d.username}>{d.username}</li>)}
        </ul>
      </div>
>>>>>>> lesa-branch
    );
  }
}

<<<<<<< HEAD
export default GetUsers;
=======
export default GetUsers;
>>>>>>> lesa-branch
