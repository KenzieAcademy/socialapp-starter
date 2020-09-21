import React , { Component } from 'react'
import GetUsersService from './GetUsersService'

class GetUsers extends Component {
    constructor(props) {
        super(props)
        this.client = new GetUsersService()
        this.state = {
            users: [],
            mounted: false,
            userName: props.username
        }
    }

    componentDidMount() {
        return this.client.getUsers().then(result => {
            this.setState({
                users: result.data.users,
                mounted: true
            })
            this.displayUsers()
        })
    }

    displayUsers() {
        const profile = document.getElementById("user-profile")
        const userList = this.state.users
        for (let i = 0; i < userList.length; i++) {
            if (this.state.userName === userList[i].username) {
                const profileImg = document.createElement("img")
                if (userList[i].pictureLocation === null) {
                    profileImg.src = "https://i.postimg.cc/6QgJNjX8/default.png"
                }
                else {
                    profileImg.src = userList[i].pictureLocation
                }
                profileImg.alt = "./default.png"
                profile.append(profileImg)
                const profileName = document.createElement("h3")
                profileName.innerText = userList[i].displayName
                profile.append(profileName)
                const profileAbout = document.createElement("p")
                profileAbout.innerText = userList[i].about
                profile.append(profileAbout)
            }
        }
    }

    render() {
        if(!this.state.mounted) {
            return (
                <div id="user-profile">
                </div>
            )
        }
        else {
            return (
                <div id="user-profile">
                    
                </div>
            )
        }
    }
}

export default GetUsers