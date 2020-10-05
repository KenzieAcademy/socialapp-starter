import React from "react";

class Users extends React.Component{

    render(){
        return(
            <li className="Users">
                 Say Hello to {this.props.username}
                <br/>
                {this.props.about}

            </li>
        )
    }
}
export default Users;