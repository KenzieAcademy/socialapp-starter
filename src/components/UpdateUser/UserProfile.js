import React, { Component } from 'react';
import DataService from "../../dataService"
import { Link } from "react-router-dom";
import './UserProfile.css'
class UserProfile extends Component {
  constructor(props)
  {super(props)
    this.client = new DataService();
    this.state = {
     data: {},
    mount:0,
    displayName: 0,
    about:0,
    password:0,

    }
  }
  gettheuser() {
    return this.client.GetAUser(this.props.name).then(result => {
      
      this.setState({
        userinfo: result.data.user
      })
      this.getthepicture(this.props.name)
      
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
      
    })
    
  }
    userUpdate(){
        console.log('hello2333')
}
handleSubmit = (event) => {
  event.preventDefault();
 
  this.setState({
    displayName: event.target.elements.displayName.value,
    about: event.target.elements.about.value,
  password:event.target.elements.password.value
  })
  console.log(event.target.elements.displayName.value)
  console.log(this.state)
  this.test()
 
  console.log(this.objData)
  const textdata={
    password: event.target.elements.password.value,
    about: event.target.elements.about.value,
    displayName: event.target.elements.displayName.value,
}
console.log(textdata)
  this.client.UpdateUser(textdata,
    this.state.userinfo.username)
}

test(){if(this.state.displayName===''){
  this.setState({
    displayName: this.state.userinfo.displayName
  })
}
else{
  console.log(this.state)
  console.log('bye')
}
}
     
  
componentDidMount(){
  this.gettheuser()
  
 
}
    render() {
      if(this.state.mount===0)
      return(<div><h1>loading</h1></div>);
    
    console.log(this.state)
    return(
      <div id='profileInfo'>
       
    <h1 className='hello'>hello {this.state.userinfo.displayName}!</h1>
        < img 
        height='200'
        width='200'
        src={this.state.picture} alt=''/><button>new picture</button>
        <div><h3>About me:
           <br/>
           {this.state.userinfo.about}
        </h3></div><button>Update Bio</button>
        <div className='hide'>
          <form onSubmit={this.handleSubmit} >
            <div>Update Display Name</div>
            <label>Change your Display Name! </label><input type='text' 
            name='displayName'
             placeholder={this.state.userinfo.displayName} 
             ></input>
              <label>Let us Know About You! </label><input type='text' 
            name='about'
             placeholder={this.state.userinfo.about} 
             ></input>
             <label>Password to Update</label><input type='password' 
            name='password'
             placeholder='****' 
             ></input>
            
            <button type='submit'>Update</button>
            </form></div>
        <Link to='/'>hello</Link>
        <button onClick={this.client.getToken}>test</button>
        




        </div>
    )
   
    
  }
}
export default UserProfile


