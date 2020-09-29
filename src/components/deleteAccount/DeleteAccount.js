import React from "react";
import "./DeleteAccount.css";

class DeleteAccount extends React.Component {

  clickHandler = () => {

  }
  render() {
    return (
      <div className="DeleteAccount">
        <button onClick={this.clickHandler}>Delete Account</button>
      </div>
    );
  }
}

export default DeleteAccount;
