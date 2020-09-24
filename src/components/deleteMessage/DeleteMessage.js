import React from 'react'
import DataService from '../../dataService';
import { userIsAuthenticated } from "../../redux/HOCs";

class DeleteMessage extends React.Component {
    constructor(props) {
        const loginData = JSON.parse(localStorage.getItem('login'))
        super(props)
        this.client = new DataService()
        this.state = {
            id: 0,
            token: loginData.result.token
        }
    }

    handleDeleteMessage = event  => {
        event.preventDefault()

        alert('delete button pushed')
        this.client.deleteMessage({
            id: this.state.id,
            token: this.state.token
        })
            .then(result => {
                console.log(result.data.messages.messageID)
                this.setState({
                    id: result.data.messages.messageID

                })
            });

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

