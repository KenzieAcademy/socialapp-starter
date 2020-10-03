import React from "react";
//import Menu from "../components/menu/Menu";
import DataService from "../../services/dataService";



class UserList extends React.Component {
    state = { users: [] }
    componentDidMount (){
        new DataService().getUsers().then(users => {
            this.setState({ users})
        })

    }

render (){
if (this.state.users.length === 0){
return(
        <div className="ListOfUsers">
           
            <h1>Current Users</h1>
            <h3>loading...</h3>
        </div>
)
}
return (
        <div className="ListOfUsers">
         
            <h1>this list</h1>
            <ul>
                bam
            </ul>
          
        </div>
    )
}
}

export default UserList;