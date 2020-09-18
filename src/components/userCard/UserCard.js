import React from "react";
import DataService from "../../DataService";
import noDisplayPhoto from "../../assests/nodisplayphoto.png";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserCard">
        <h3>Display Name: Users Display Name</h3>
        <br />
        <h5>Photo</h5>
        <img src="" atl="userPicture" />

        <h4>
          About : <p>about user</p>
        </h4>
      </div>
    );
  }
}

export default UserCard;
