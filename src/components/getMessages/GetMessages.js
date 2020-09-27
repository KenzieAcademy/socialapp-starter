import React from "react";
import DataService from '../../dataService';

import Message from "../message/Message"


class GetMessages extends React.Component {

  state = {
    messages: [],
  }



  componentDidMount() {
    new DataService()
      .getRecentMessages()
      .then(messages => {
        this.setState({ messages })
      })
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: []
  //   };
  //   this.client = new DataService();
  // }

  // handleGetMessages = e => {
  //   e.preventDefault();

  //     this.client.getMessages().then(response => {
  //       // alert(JSON.stringify(result.data))
  //       console.log(response)
  //       console.log(response.data.messages)
  //       this.setState({ data: response.data.messages })
  //     });


  // }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageFeed">
          <h2>Message Feed</h2>
          <h3>Loading...</h3>
        </div>
      )
    }
    return (
      <div className="MessageFeed">
        <h2>Message Feed</h2>
        <ul>
          {/* <Message {...this.state.messages[0]} /> */}
          {this.state.messages.map(msg => <Message key={msg.id} {...msg} /> )}
          {/* <li>{this.state.messages[0].text}</li> */}
        </ul>
      </div>
    )









    // const { loading, error } = this.props;
    // return (
    //   <div className="GetMessages">
    //       <button onClick={this.handleGetMessages}>Messages</button>
    //       <ul>
    //        {this.state.data.map(d => <li key={d.messages}>{d.text}</li>)}
    //        </ul>

    //      </div>
    // );
  }
}

export default GetMessages;