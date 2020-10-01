import React from "react";
import noDisplayPhoto from "../../assests/nodisplayphoto.png";
import DataService from "../../DataService";
import { displayName } from "react-spinkit";
import { Card } from "antd";
import GetUserPhoto from "../getUserPhoto/GetUserPhoto";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      user: {
        username: "",
        displayName: "",
        about: "",
      },
      statusCode: 0,
    };
  }

  componentDidMount() {
    this.client.getUser(this.props.username).then((res) => {
      console.log(res.data.user);
      this.setState({
        user: {
          username: res.data.user.username,
          displayName: res.data.user.displayName,
          about: res.data.user.about,
        },
      });
    });
    console.log(this.state.user);
  }

  render() {
    return (
      <div className="UserCard">
        <GetUserPhoto username={this.props.username} />
        <Card
          title="All About Me!"
          extra={<a href="/ProfileOptions">Edit</a>}
          style={{ width: 300 }}
        >
          <strong>Display Name: </strong>
          <h3>{this.state.user.displayName}</h3>
          <br />
          <strong>
            About Me : <p>{this.state.user.about}</p>
          </strong>
        </Card>
      </div>
    );
  }
}

export default UserCard;
