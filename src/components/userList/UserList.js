import React from 'react'
import DataService from "../dataService/DataService"

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.client = new DataService()
        this.state = {
            users: ""
        }
    }
    render() {
        return (
        <div>
            
        </div>


        )
    }
}

export default UserList 