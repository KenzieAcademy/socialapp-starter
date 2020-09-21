import React from "react";
import noDisplayPhoto from "../../assests/nodisplayphoto.png";
import DataService from "../../DataService";
import { displayName } from "react-spinkit";
import { Card } from 'antd';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService
    this.state = {
     //isSubmitted:false,
      data:{
        "username": "",
        "displayName": "",
        "about": "",
    
      },
      statusCode: 0
    }
    
}

// handleChange = (event)=>{
//   const userData = {this.state.userData};
//   userData[event.target.name]=event.target.value; //new Object

  

// }

// handleSubmit = (event)=>{
//   event.preventDefault();
//   this.setState({
//     submitted : false
//   });
// }
componentDidMount(){
  let about ={}
  let loginData = JSON.parse(localStorage.getItem("login"))
  this.client.getUser(loginData.result.username ).then(res => console.log(res))


  this.setState({


  
});
console.log(this.state)

}

  render() {
    

    return (
    
      
      <div className="UserCard">

            <br />
        <h5>Photo</h5>
        <img src="" atl="userPicture" />
          <br/>

        <Card title="All About Me!" extra={<a href="/ProfileOptions">Edit</a>} style={{ width: 300 }}>
        <h3>User Name: 
          {this.state.data.userName}</h3>
        <br/>
        <h4>
            About Me : <p>  
              {this.state.data.about}</p>
        </h4>
      
      
    </Card>
        
        
      
        
        
      </div>
      
    );
  }
}

export default UserCard;
