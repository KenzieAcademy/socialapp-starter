import React from "react";
import DataService from "../../dataService";
import "./ProfileMessages.css";
import MessageProfile from "../messageProfile/MessageProfile";
import { userIsAuthenticated } from '../../redux/HOCs';

class ProfileMessages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    };
    this.client = new DataService();
  }


  componentDidMount() {
    new DataService()
      .getRecentMessages()
      .then(messages => {
        console.log(messages)
        this.setState({ messages })
      })
  }
  //     new DataService()
  //         .getMessages()
  //         .then(messages => {
  //             this.setState({ messages })
  //         })
  // }
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

    // if (msg.username === this.state.username) {
    return (
      <div className="MessageFeed">
        {/* <h2>Message Feed</h2> */}
        <ul>
          {this.state.messages.map(msg => <MessageProfile key={msg.id} {...msg} />)

          }
            console.log(msg)
            {/* <Message {...this.state.messages[0]} /> */}
          {/* <li>{this.state.messages[0].text}</li> */}
        </ul>
      </div>
    )
    // }

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

export default userIsAuthenticated(ProfileMessages);