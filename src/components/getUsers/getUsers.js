import React, { Component } from 'react';
import DataService from "../../dataService"
import UsersDisplay from "./usersDisplay"
class userData extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props){
      super(props);
      this.client = new DataService();
      this.state = {
        data: {},
        hello:[0,2,3]
      }
    }
    //get a new random question from the API and add it to the data object in state
    getAllUsers() {
      return this.client.getUsers().then(result => {
        this.setState({
          data: result.data,
          people:result.data.users
        })

this.state.people.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("test").innerHTML += 'Username ' + item.username + "<br>";
}


        console.log(this.state.data.users[0])
      
      //  let newArray= people.forEach((element, index, array) => {
      //     console.log(element.username); // 100, 200, 300
      // });
        console.log(this.state.people.forEach((element) => {
          console.log(element.username); // 100, 200, 300
      }))
      })

      
    }
    //when the component mounts, get a the first question
    componentDidMount() {
      this.getAllUsers();
    }
    //display the results on the screen
    render() {
      if(this.state.data === {})
      return(
        <div><h1>loading</h1></div>
      )
      return (
        <div>
         <div>
           <h1>
             {this.state.hello}
          <UsersDisplay
          users={this.state.people}
          />
           </h1>
         </div>
         <div id='test'></div>
         <h3>What/Who is <input id='answer'></input> ?</h3><button onClick={this.SubmitQuestion}>Submit</button>
        </div>
      );
    }
  }
export default userData
