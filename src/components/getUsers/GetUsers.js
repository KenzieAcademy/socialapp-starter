import React , { Component } from 'react'
import GetUsersService from './GetUsersService'

class GetUsers extends Component {
    constructor(props) {
        super(props)
        this.client = new GetUsersService()
        this.state = {
            users: [],
            mounted: false,
            userName: props.username,
            all: props.all
        }
    }

    componentDidMount() {
        return this.client.getUsers().then(result => {
            this.setState({
                users: result.data.users,
                mounted: true
            })
            if (!this.state.all) {
                this.displayUser()
            }
            else {
                this.displayAllUsers()
            }
        })
    }

    displayUser() {
        const profile = document.getElementById("user-profile")
        const userList = this.state.users
        for (let i = 0; i < userList.length; i++) {
            if (this.state.userName === userList[i].username) {
                const profileImg = document.createElement("img")
                if (userList[i].pictureLocation === null) {
                    profileImg.src = "https://i.postimg.cc/6QgJNjX8/default.png"
                }
                else {
                    profileImg.src = "https://socialapp-api.herokuapp.com/users/" + userList[i].username + "/picture"
                }
                profileImg.alt = "image not found"
                profile.append(profileImg)

                const profileName = document.createElement("h2")
                profileName.innerText = userList[i].displayName
                profile.append(profileName)
                
                const profileUserName = document.createElement("h3")
                profileUserName.innerText = "Username: " + userList[i].username
                profile.append(profileUserName)
                
                const profileEmail = document.createElement("h3")
                profileEmail.innerText = "Email: " + userList[i].email
                profile.append(profileEmail)
                
                const profileAbout = document.createElement("p")
                profileAbout.innerText = "About me: " + userList[i].about
                profile.append(profileAbout)
            }
        }
    }

    displayAllUsers() {
        const profile = document.getElementById("user-profile")
        const userList = this.state.users
        for (let i = 0; i < userList.length; i++) {
                const profileImg = document.createElement("img")
                if (userList[i].pictureLocation === null) {
                    profileImg.src = "https://i.postimg.cc/6QgJNjX8/default.png"
                }
                else {
                    profileImg.src = "https://socialapp-api.herokuapp.com/users/" + userList[i].username + "/picture"
                }
                profileImg.alt = "./default.png"
                profile.append(profileImg)
                const profileName = document.createElement("a")
                profileName.href = "http://localhost:3000/profile/" + userList[i].username
                profileName.innerText = userList[i].displayName
                profile.append(profileName)
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