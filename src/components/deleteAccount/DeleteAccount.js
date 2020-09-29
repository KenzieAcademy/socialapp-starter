import React from "react";
import "./DeleteAccount.css";
import DataService from "../../dataService";

class DeleteAccount extends React.Component {
<<<<<<< HEAD
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
=======

  clickHandler = () => {

  }
  render() {
    return (
      <div className="DeleteAccount">
        <button onClick={this.clickHandler}>Delete Account</button>
>>>>>>> 4b85910c4a36beeeb7b39b9fdbd9d3cc4e46bd06
      </div>
    );
  }
}

export default DeleteAccount;
