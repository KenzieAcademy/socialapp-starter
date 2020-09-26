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
        }
    }

    handleDeleteMessage = event => {
        event.preventDefault()
        console.log(this.state.messageId);
        alert('Do you really want to delete this post?')
        this.client.deleteMessage({ messageId: this.props.id })
    }

    render() {
        return (
            <div className='DeleteMessage'>
                <button type='submit' onClick={this.handleDeleteMessage} >Delete message</button>
            </div>
        )
    }
}

export default userIsAuthenticated(DeleteMessage)

