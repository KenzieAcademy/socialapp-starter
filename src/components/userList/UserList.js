import React from "react"
import UserItem from "../userItem/UserItem"
import { Feed } from "semantic-ui-react"

class UserList extends React.Component {

    render() {
        return (
            <Feed className="UserList">
                {this.props.user.map((userObj, i) => {
                    return <UserItem
                        key={i}
                        username={userObj.username}
                        displayName={userObj.displayName}
                        createdAt = {userObj.createdAt}
                    />
                })}
            </Feed>
        )
    }
}
export default UserList