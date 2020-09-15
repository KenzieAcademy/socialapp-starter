import React, { Component } from 'react';

//import our service
import DataService from '../../dataService';


class Feed extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new DataService();
        this.state = {
            feed: []
        }
    }
// stateless component
    // makePost() {
    //     return messageArray
    //     console.log('this')

//get a new random question from the API and add it to the data object in state
getMessages() { //catalyst to change state by getting messages//
    return this.client.getMessages().then(result => {
        
        const data = result.data.messages
        console.log(data)
            this.setState({ feed:data })
    })
}
//when the component mounts, get the first message
componentDidMount() {
    return this.getMessages()
}
Function to display data.text .username
//Alec WTF!!   #$%%^
//display the results on the screen BULLET POINT 2:       //Conditional Rendering//
render() {
    return (
        <div>
//display on the page//call this
        </div>
    )
}
}
export default Feed;