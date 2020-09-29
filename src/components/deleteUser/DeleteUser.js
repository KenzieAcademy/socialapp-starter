import React from 'react'
import {useEffect, useState} from 'react'
import DataService from '../../dataService'
import {store} from '../../redux'

const DeleteUser = () => {
        const client = new DataService()
        const [user, setUser] = useState({})
    
    useEffect(() => {
        setUser(store.getState().auth.login.result)
    }, [])

    const authorize = () => {
        const profileUsername = window.location.pathname.split('/')[2]
        const localUsername = user.username
        console.log(`${profileUsername} ${localUsername}`)
        if(profileUsername === localUsername) {
            return true
        } else {
            return false
        }
    }
    const confirm = () => {
        return window.confirm("Are you sure you want to delete your profile?")
    }
    const removeUser = () => {
        if(authorize()) {
                if(confirm()) {
                    client.deleteUser(user.username)
                    .then(() => {
                        localStorage.clear()
                        window.location.reload()
                    })
                }
        }
    }

    return(
            <button
                onClick={() => removeUser() }
            >
                Delete User
            </button>
        );
    }

export default DeleteUser