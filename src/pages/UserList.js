import React from "react";
import GetUsers from "../components/getusers/GetUsers";
import Menu from "../components/menu/Menu";
import DataService from "../services/DataService";



class UserList extends React.Component {
    state = { getUsers: [] }
    componentDidMount (){
        new DataService().getUsers().then(getUsers => {
            this.setState({ getUsers})
        })

    }

render (){
if (this.state.users.length === 0){
return(
        <div className="UserList">
            <Menu /> 
         <h1>User List</h1>
         <h3>loading...</h3>
        </div>
)
}
/*return (
      <div className="UserList">
            <Menu />
            <h1>User List</h1>
            <ul>
                {this.state.getUsers.map(username => (
                <GetUsers key={user.username}{...username}/>
                ))}
        </ul>
          
        </div>
    )
}*/
//}

export default UserList;