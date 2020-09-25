import React from "react";
import "./updateuser.css";
import Dataservice from "../../pages/dataService";

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      displayName: "",
      messages: "",
    };
    this.client = new Dataservice();
  }
  render() {
    return (
      <div className="updateuser">
        <button id="update">Update</button>
      </div>
    );
  }
}
export default UpdateUser;
