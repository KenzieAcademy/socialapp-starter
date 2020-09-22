import React from 'react'
//import DataService from "./pages/DataService"

class Message extends React.Component {
    handlerDelete = () => {
        console.log("delete")
        // this.client = new DataService()

        //}
        //componentDidMount() {
        //  this.client.deleteMessage().then(response => {
        //    console.log(response.data.messages)

        //})
    }

    render() {
        const username = JSON.parse(localStorage.getItem("login")).result.username
        let deleteButton
        if (username === this.props.message.username) {
            deleteButton = (<button onClick={this.handlerDelete}>
                Delete Message</button>)

        }

        return (

            <li className="Message">
                {JSON.stringify(this.props.message)}
                <br />
                {this.props.message.text}
                {deleteButton}
            </li>
        )
    }
}
export default Message