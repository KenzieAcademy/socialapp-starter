import React from "react";

class Users extends React.Component{

    render(){
        return(
            <div>
            <li className="Users">
                Super Friend: {this.props.displayName} @ {this.props.username}

            </li>
            </div>
        )
    }
}
export default Users;