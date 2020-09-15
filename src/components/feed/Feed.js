import React, { Component } from 'react';

//import our service
import DataService from '../../dataService';


class Feed extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new DataService();
        this.state = {
            feed: [],
            userfeed: []
        }
    }
    // stateless component


    //get a new message from the API and add it to the data object in state
    getMessages() { //catalyst to change state by getting messages//
        return this.client.getMessages().then(result => {
            const data = result.data.messages

            this.setState({ feed: data })
        })
    }
    getUserMessages = () => {
        //get all message and filter
        const loginData = JSON.parse(localStorage.getItem("login"))

        this.client.getMessages().then(result => {
            const userData = result.data.messages.filter(messages => loginData.result.username == messages.username)
            this.setState({ userfeed: userData })
            console.log(result.data.messages)
        })
    }
    //don't need??

    // postMessages(){
    //     this.feed.map(message =>{

    //     })
    //     const post
    //     return {tex, username}
    // }


    //when the component mounts, get the first message
    componentDidMount() {
        this.getMessages()
        this.getUserMessages()
    }


    // Function to display data.text .username
    //Alec WTF!!   #$%%^
    //display the results on the screen BULLET POINT 2:       //Conditional Rendering//
    render() {
        return (
            <div>
                <ul>
                    {this.state.feed.map(message => <li><h3>{message.username}</h3>{message.text}</li>)}
                    {/* {this.state.feed.map(message => <li>{message.text}</li>)} */}
                </ul>
            </div>

        )
    }
}
export default Feed;