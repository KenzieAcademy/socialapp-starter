import React from "react";
import noDisplayPhoto from "../../assests/nodisplayphoto.png";
import DataService from "../../DataService";
import { displayName } from "react-spinkit";
import { Card } from "antd";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      user: {
        userName: "",
        displayName: "",
        about: "",
      },
      statusCode: 0,
    };
  }

  componentDidMount() {
    let about = {};
    let loginData = JSON.parse(localStorage.getItem("login"));
    this.client.getUser(loginData.result.username).then((res) => {
      console.log(res.data.user);

      this.setState({
        user: {
          userName: res.data.user.username,
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
        <br />
        <h5>Photo</h5>
        <img src="" atl="userPicture" />
        <br />

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
