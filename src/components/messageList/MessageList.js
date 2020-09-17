import React from "react";
//import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./MessageList.css";
import DataService from "../../dataService";
import Menu from "../menu/Menu";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: null,
          text: "",
          username: "",
          createdAt: "",
          likes: [
            {
              id: null,
              username: "",
              messageId: null,
              createdAt: "",
            },
          ],
        },
      ],
    };

    this.client = new DataService();
  }

  getListOfMessages() {
    return this.client.getMessage().then((result) => {
      this.setState({
        messages: result.data.messages,
      });
      //console.log(result);
    });
  }

  componentDidMount() {
    this.getListOfMessages();
  }

  render() {
    //const { loading, error } = this.props;
    return (
      <div className="pageWrap">
        <div className="Menu">
          <Menu isAuthenticated={this.props.isAuthenticated} />
        </div>
        <div className="MessageList">
          <div className="hide">{JSON.stringify(this.state)}</div>
          {this.state.messages.map((message) => (
            <div key={message.id} className="MessageWrap">
              <div className="UserName">User Name: {message.username}</div>
              <div className="MessageText">Message: {message.text}</div>
              <div className="LikeWrap">
                <div className="LikesTitle">Likes: {message.likes.length}</div>
                {message.likes.map((like) => (
                  <div key={like.id} className="LikesUserName">
                    {like.username}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageList);
