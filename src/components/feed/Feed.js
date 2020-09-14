import React from "react";
import QuestboardService from "../../pages/ServicePage"


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {
        "id": null,
        "text": "",
        "username": "",
        "createdAt": "",
        "likes": [
          {
            "id": null,
            "username": "",
            "messageId": null,
            "createdAt": ""
          }
        ]
      }
    }

    this.client = new QuestboardService();
  }

  getMessages() {
    return this.client.GetMessageList().then(result => {
      this.setState({
        messages: result.data
      // alert(JSON.stringify(result.data))
      })
    })
  }

  componentDidMount() {
    this.getMessages();

  }

  render() {
    return (
      <div className="MessageFeed">
        <h1>Message Feed</h1>
        <div>

        </div>
      </div>

    );
  }
}

export default Feed;
