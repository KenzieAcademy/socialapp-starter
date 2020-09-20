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

  componentDidMount() {
    this.handleGetUsers()
  }

  handleGetUsers() {
    
      this.client.getUsers().then(response => {
        // alert(JSON.stringify(result.data))
        console.log(response)
        console.log(response.data.users)
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
    {this.state.data.map(d => <div><li key={d.displayName}>{d.displayName}</li><li key={d.about}>{d.about}</li></div>)}
           </ul>
         
         </div>
    );
  }
}

export default GetUsers;
