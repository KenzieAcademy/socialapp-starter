import React from "react";
import DataService from "../../DataService";
import { Card } from "antd";
import GetUserPhoto from "../getUserPhoto/GetUserPhoto";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }

  componentDidMount() {}
  render() {
    if (!this.props.username) {
      return <div></div>;
    } else {
      return (
        <div className="UserCard">
          <Card title="User" style={{ width: 300 }}>
            <GetUserPhoto username={this.props.username} />
            <h3>{this.props.displayName}</h3>
            <br />
            <strong>
              About Me <br /> <p>{this.props.about}</p>
            </strong>
          </Card>
        </div>
      );
    }
  }
}

export default UserCard;
