import React, { Component } from 'react';
import DataService from "../../dataService"
class userData extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props){
      super(props);
      this.client = new DataService();
      this.state = {
        data: {},
      }
    }
    getAllUsers() {
      return this.client.getUsers().then(result => {
        this.setState({
          data: result.data,
          people:result.data.users
        })
        console.log(this.state.data)

this.state.people.forEach(getPeople);

function getPeople(item) {
  console.log(item.username)
  document.getElementById("test").innerHTML += 'Username:     ' +item.username + "<br>"
}


        console.log(this.state.data.users)
      })

      
    }
    componentDidMount() {
      this.getAllUsers();
    }
    render() {
      if(this.state.data === {})
      return(
        <div><h1>loading</h1></div>
      )
      return (
        <div>
         <div>
           <h1>
          
           </h1>
         </div>
         <div id='test'></div>
       </div>
      );
    }
  }
export default userData
