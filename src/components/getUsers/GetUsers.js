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
        <button onClick={this.handleGetUsers}>Get User</button>
        <ul>
          {this.state.data.map(d => <li key={d.username}>{d.username}</li>)}
        </ul>
      </div>
    );
  }
}

export default GetUsers;