import React from "react";
import DataService from "../../DataService";

class UpdateAbout extends React.Component {
  constructor() {
    super();
    this.client = new DataService
    this.state = {
      isSubmitted:false,
      userData: {
        username: "",
    displayName: "",
    about: "",
    
      },
      statusCode: 0
    }
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    this.setState({
      submitted : true
    });
  }
  componentDidMount(){
    let about ={}
    let loginData = JSON.parse(localStorage.getItem("login"))
    this.client.updateAbout(loginData.result.username,about ).then(res => console.log(res.data.user.username))
  
    this.setState({userData:{
      userName:"",
          displayName:"",
       about:"",
  
    }
  });
  }

  render() {
    return (
      <div className="UpdateAbout">
        <form id="updateAbout-form">
          <label htmlFor="about">About: </label>
          <input type="text" name="about" />
          <button type="submit">Update About</button>
        </form>
      </div>
    );
  }
}

export default UpdateAbout;
