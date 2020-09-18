import React from "react";
import DeleteAcctButton from "../components/daleteacct/DeleteAcct";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DeleteMessage from "../components/deleteMessage/DeleteMessage";
//import ConfirmProp from "../components/comfimPrompt/ConfirmProp";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <DeleteAcctButton />
        <DeleteMessage />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
