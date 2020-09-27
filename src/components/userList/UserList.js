import React from 'react'
import Menu from '../../components/menu/Menu'
// import UserList from '../../components/userList/UserList'
import UserItem from '../userItem/UserItem'

class UserList extends React.Component {
    render() {
        return (
            <div className="UserList">{this.props.users.map((userObj, i) => {
                
                return <UserItem
                 key={i} 
                 text={userObj.text}
                 text={userObj.username}
                 />
            })}
            </div>
        )
    }
}

export default UserList;


