import React from "react"
import BackEndServices from "../../BackEndServices";
import Users from "../users/Users"

class UserList extends React.Component {
    state = { users: [] }

componentDidMount() {
    BackEndServices.getUsers().then(response => {
        console.log(response)
        this.setState({ users: response.data.users})
    })
}

    render() { 
        return (
            <div className="userList">
                <ul>
                    {this.state.users.map(
                        userObject => (
                            <Users key={userObject.id} {...userObject} />
                        )
                    )}
                </ul>
            </div>
        );
    }
}
 
export default UserList;