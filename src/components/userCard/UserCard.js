import React from "react";
import noDisplayPhoto from "../../assests/nodisplayphoto.png";
import DataService from "../../DataService";
import { displayName } from "react-spinkit";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
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

// handleChange = (event)=>{
//   const userData = {this.state.userData};
//   userData[event.target.name]=event.target.value; //new Object

  

// }

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
    
      <div className="UserCard">
       
       <h3></h3>
    
        
        <br />
        <h5>Photo</h5>
        <img src="" atl="userPicture" />

        <h4>
    About : <p></p>
        </h4>
      </div>
      
    );
  }
}

export default UserCard;
