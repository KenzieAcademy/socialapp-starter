import React from "react";
import "./DeleteAccount.css";
import DataService from "../../dataService";

class DeleteAccount extends React.Component {
  handleDelete = (e) => {
    e.preventDefault();
    // new DataService().deleteUser().then(res => {
    //   localStorage.clear();
    //   window.location.reload();
    // })
  };
  render() {
    return (
      <div className="DeleteAccount">
        <button onClick={this.handleDelete}>Delete Account</button>
      </div>
    );
  }
}

export default DeleteAccount;
