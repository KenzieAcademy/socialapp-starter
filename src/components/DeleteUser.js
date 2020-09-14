import React, { Component } from 'react';
import axios from 'axios';


class DeleteUser extends Component {

    // constructor(url = 'http://jservice.io/api/random', client = axios.create()){
    //     this.url = url;
    //     this.client = client;
    // }

    // constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){


    constructor(props) {
        super(props);
        this.state = {
        showMessage: false,
          username: "",
          password: "",
          displayName: "",
          about: "",
          statusCode: 0

        };
        this.client = new DataService();
      }    
  }

  deleteCurrentUser() {
    return this.user.DeleteUser().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  };

handleChange = (event) => {
  const formData = {...this.state.formData}
  formData[event.target.name] = event.target.value
    this.setState({formData: {User: event.target.value}});

}



getSubmit = (event) => {
    event.preventDefault();
    let userData = this.state.user.statusCode
      if (this.state.formData.user === this.state.data.user){
        this.setState({userData -= this.state.user.statusCode})
      }
      this.registerNewUser()
  
    }

// getSubmit = (event) => {
//   event.preventDefault();
//   let userData = this.state.user
//     if (this.state.formData.user === this.state.data.user){
//       this.setState({userData += this.state.data.user})
//     } else {
//       this.setState ({userData -= this.state.data.user})


//     }
//     this.registerNewUser()


}
showMessage = (bool) => {
  this.setState({
    showMessage: bool
  });
}
  //when the component mounts, get a the first question
  componentDidMount() {
    this.registerUser();
  }



  
  render() {
    return (
      <div>
        {/* {JSON.stringify(this.state.data)} */}

<SubmitForm handleChange = {this.handleChange}
    getSubmit = {this.getSubmit}/>
        <br />
        <Display 
        user = {this.state.data.user}
        age = {this.state.age}
        location = {this.state.location}
        displayName = {this.state.data.displayName} />
        {/* <input type="text" 
        name="answer" 
        placeholder="Place Answer Here..."
        onChange={this.inputData}/> */}
        <br />
        <div id="deleteUserDiv"></div>
        <strong>Click the button to delete user- </strong><br/>
        <button id="" onClick={this.showMessage.bind(null, true)}>Do Not Delete</button>
        <br />
        <button className="deleteUserButton" id="" onClick={this.showMessage.bind(null, false)}>Delete</button>
        { this.state.showMessage && (<div>{this.state.data.answer}</div>) }
        <div id=""></div>

      </div>
    );
  }
}
export default DeleteUser;
