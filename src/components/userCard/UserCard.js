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
        username: props.username,
        displayName: props.displayName,
        about: props.about,
      },
      statusCode: 0,
    };
  }

  componentDidMount() {
    this.setState({
      user: {
        username: this.props.username,
        displayName: this.props.displayName,
        about: this.props.about,
      },
    });
  }
  render() {
    if (!this.props.username) {
      return <div></div>;
    } else {
      return (
        <div className="UserCard">
          <GetUserPhoto username={this.props.username} />
          <Card
            title="All About Me!"
            extra={<a href="/ProfileOptions">Edit</a>}
            style={{ width: 300 }}
          >
            <strong>Display Name: </strong>
            <h3>{this.props.displayName}</h3>
            <br />
            <strong>
              About Me : <p>{this.props.about}</p>
            </strong>
          </Card>
        </div>
      );
    }
  }
}

export default UserCard;
