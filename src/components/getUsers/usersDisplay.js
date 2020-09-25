import React, { Component } from 'react';
import DataService from "../../dataService"
import { Link } from "react-router-dom";
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
  constructor(props) {
    super(props)
    this.client = new DataService();
    this.state = {

     data: {},
    mount:0


    }
  }
  gettheuser() {
    return this.client.GetAUser(this.props.name).then(result => {
      
      this.setState({
        userinfo: result.data.user
      })
      this.getthepicture(this.props.name)
      console.log(this.state)
      this.setState({
        mount:1
      })
    })
    
  }

  getthepicture(){
    return this.client.GetUserPicture(this.state.userinfo.username).then(result => { 
      this.setState({
        picture: result.config.url,
        mount:1

      })
      console.log(this.state)
    })
    
  }

  
componentDidMount(){
  this.gettheuser()
  
 
}
    render() {
      console.log(this.state)
      if(this.state.mount===0)
      return(<div><h1>loading</h1></div>);
    
    console.log(this.state)
    return(
      <div><div><Link to='/'>home</Link></div>
       
    <h1>hello, I am {this.state.userinfo.displayName}</h1>
        < img 
        height='200'
        width='200'
        src={this.state.picture} alt=''/>
        <h3>About me:
           <br/>
           {this.state.userinfo.about}
        </h3>
        </div>
    )
  }
}
export default UserDisplay 