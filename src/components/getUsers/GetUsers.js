import React , { Component } from 'react'
import GetUsersService from './GetUsersService'
import UpdateUserPic from '../UpdateUser/UpdateUserPic'

class GetUsers extends Component {
    constructor(props) {
        super(props)
        this.client = new GetUsersService()
        this.state = {
            user: {},
            users: [],
            mounted: false,
            userName: props.username,
            all: props.all
        }
    }

    componentDidMount() {
        if(!this.state.all) {
            return this.client.getUser(this.state.userName).then(result => {
                this.setState({
                    user: result.data.user,
                    mounted: true
                })
                this.displayUser()
            })
        }
        else {
            return this.client.getUsers().then(result => {
                this.setState({
                    users: result.data.users,
                    mounted: true
                })
                this.displayAllUsers()
            }
        )}
    }

    displayUser() {
        const profile = document.getElementById("user-profile")
        const user = this.state.user
                const profileImg = document.getElementById("profile-pic")
                console.log(user.pictureLocation)
                if (user.pictureLocation != null) {
                    profileImg.src = "https://socialapp-api.herokuapp.com/users/" + user.username + "/picture"
                }

                const profileName = document.createElement("h2")
                profileName.innerText = user.displayName
                profile.append(profileName)
                
                const profileUserName = document.createElement("h3")
                profileUserName.innerText = "Username: " + user.username
                profile.append(profileUserName)
                
                const profileAbout = document.createElement("p")
                profileAbout.innerText = "About me: " + user.about
                profile.append(profileAbout)
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
        const loginData = JSON.parse(localStorage.getItem("login"))
        let currentUser = loginData.result.username
        let user = this.state.userName

        if(!this.state.mounted) {
            return (
                <div id="user-profile">
                </div>
            )
        }
        else if(!this.state.all && currentUser === user) {
            return (
                <div>
                    <div id="user-profile">
                        <img id="profile-pic" src="https://i.postimg.cc/6QgJNjX8/default.png" alt="profile.img" />
                        <UpdateUserPic />
                    </div>
                    <div id="user-update">
                        <a href="http://localhost:3000/update">Update Profile Info</a>
                    </div>
                </div>
            )
        }
        else if(!this.state.all) {
            return (
                <div id="user-profile">
                    <img id="profile-pic" src="https://i.postimg.cc/6QgJNjX8/default.png" alt="profile.img" />
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