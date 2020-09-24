import React from 'react'



function UserItem(props) {
    return (
        <div className="UserItem">
            Coalition Member: {props.username}
            {" "}
            {props.text}
        </div>
        
    )
}

export default UserItem