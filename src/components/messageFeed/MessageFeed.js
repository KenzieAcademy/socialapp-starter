import React from "react";
import DataService from '../../DataService'

import SingleMessage from './SingleMessage'

class MessageFeed extends React.Component {


  constructor(props) {
    super(props)



    this.state = {

      messages: [],








    }
    this.client = new DataService()
  }
  componentDidMount() {
    this.client.getMessages().then(messages => {

      this.setState({ messages })


    })



  }


  render() {


    if (this.state.messages.length === 0) {
      return (
        <h3>Loading...</h3>
      )
    }


    return (

      this.state.messages.map(
        messageObject => <SingleMessage
          message={messageObject}
          currentUser={messageObject.likes}
        />)

    )
  }
}



























export default MessageFeed




