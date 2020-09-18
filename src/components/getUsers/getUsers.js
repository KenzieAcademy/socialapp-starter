import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DataService from "../../dataService"

class userData extends Component {

    //set our initial state and set up our service as this.client on this component
    constructor(props)
    {super(props)
      this.client = new DataService();
      this.state = {
       users:[],
      }
      this.client.getUsers().then(res =>{
        console.log(res.data.users)
        this.setState({users: res.data.users})
        console.log(this.state.users)
      })
    }

      render() {
      if(this.state.users === [])
      return(
        <div>
          
          <h1>loading</h1></div>
      )
      return(
        <div>
        {this.state.users.map(user => 
        <h3 key={user.username}
        >Here is  <Link to={{
          pathname: "/user/"+user.username,  
          state: { fromDashboard: true }
      }}
        onClick={() => 
        this.client.GetAUser(user.username).then(res =>{ console.log(res)})
        }
        >{user.displayName}
        </Link>
        </h3>)}
       
         </div>
      )
      
    }
  }
export default userData







// import React, { Component } from 'react';
// import DataService from "../../dataService"
// class userData extends Component {
//     //set our initial state and set up our service as this.client on this component
//     constructor(props){
//       super(props);
//       this.client = new DataService();
//       this.state = {
//         data: {},
//       }
//     }
//     getAllUsers() {
//       return this.client.getUsers().then(result => {
//         console.log(result.data.users)
//         this.setState({
//           data: result.data,
//           people:result.data.users
//         })
//         console.log(this.state.data)

// this.state.people.forEach(getPeople);

// function getPeople(item) {
//   console.log(item.username)
//   document.getElementById("test").innerHTML += 'Username:     ' +item.username + "<br>"
// }


//         console.log(this.state.data.users)
//       })

      
//     }
//     componentDidMount() {
//       this.getAllUsers();
//     }
//     render() {
//       if(this.state.data === {})
//       return(
//         <div>
          
//           <h1>loading</h1></div>
//       )
//       return (
//         <div>
//          <div>
//            <h1>
//           testing this out right here!!!!

          
//            </h1>
//                     </div>
//          <div id='test'></div>
//        </div>
//       );
//     }
//   }
// export default userData
