import React from "react";
import "./DeleteAccount.css";
import DataService from "../../dataService";

class DeleteAccount extends React.Component {
  clickHandler = () => {
    new DataService().deleteUser().then((res) => {
      localStorage.clear();
      window.location.reload();
    });
  };
  render() {
    return (
      <div className="DeleteAccount">
        <button className="button-link" onClick={this.clickHandler}>Delete Account</button>
      </div>
    );
  }
}

export default DeleteAccount;
