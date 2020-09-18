import React, { Component } from 'react';
import DataService from "../../dataService"

// function UserDisplay(props) {
  
//   let userData=DataService.getAUser(props)
//   console.log(userData)
//   return <div className="Welcome"><h1>{props.name}</h1>

//   <h2>testing? {props.username}</h2>
    
//   </div>;
// }
// export default UserDisplay;


class UserDisplay extends Component {

  //set our initial state and set up our service as this.client on this component
  constructor(props)
  {super(props)
    this.client = new DataService();
    this.state = {
     data: {},
    

    }
  }
  gettheuser() {
    return this.client.GetAUser(this.props.name).then(result => {
      this.setState({
        data: result.data.user
      })
    })
  }
  getthepicture(){
    return this.client.GetUserPicture(this.props.name).then(result => {
      this.setState({
       picture:result
      })
    })
  }
  
componentDidMount(){
  this.gettheuser()
  this.getthepicture()
 
}
    render() {
    console.log(this.state)
    return(
      <div>
        
        <h1>{this.state.data.displayName}</h1>
        <h3>About me: <br/>
        < img src={this.state.data.pictureLocation} alt='no picture'/>
          {this.state.data.about}</h3>
        </div>
    )
   
    
  }
}
export default UserDisplay 