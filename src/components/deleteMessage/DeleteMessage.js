import React from 'react'
import DataService from '../../dataService';
import { userIsAuthenticated } from "../../redux/HOCs";

class DeleteMessage extends React.Component {
    constructor(props) {
        const loginData = JSON.parse(localStorage.getItem('login'))
        super(props)
        this.client = new DataService()
        this.state = {
            username: loginData.result.username,
            token: loginData.result.token,
            data: []
        }
    }

    handleDeleteMessage = event => {
        event.preventDefault()

        alert('Do you really want to delete this post?')
        console.log(this.props.id)
        this.client.deleteMessage({ messageID: this.props.id, token: this.state.token })



    }

    render() {
        return (
            <div className='DeleteMessage'>
                <button onClick={()=>props.removePosts(index)}><span>Delete 🗑️</span></button>
            </div>
        )
    }
}
export default userIsAuthenticated(DeleteMessage)

