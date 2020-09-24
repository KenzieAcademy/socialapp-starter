import React from "react"

function UserItem(props) {
    return (
    <div className="UserItem">
        
        <br/>
        UserName: {props.username}
        <br/>
        DisplayName: {props.displayName}
    </div>
    )
}

export default UserItem