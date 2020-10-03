import React from "react";
import DataService from "../../DataService";
import { Popconfirm } from "antd";

class DeleteUserButton extends React.Component {
  constructor() {
    super();

    this.state = {
      userData: { username: "" },
      isSubmitted: false,
    };

    this.client = new DataService();
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.client.deleteUser(this.state).then((result) => {
      this.props.handleDeleteUserUpdate();

      this.setState({ isSubmitted: true });
      let emptyTokenObj = {
        login: { result: null, loading: true, error: null },
      };
      localStorage.setItem("login", JSON.stringify(emptyTokenObj));
    });
  };

  handleHome = (e) => {
    window.location.pathname = "/";
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (this.state.isSubmitted) {
      return (
        <div>
          Your User Profile was Deleted please return to{" "}
          <button onClick={this.handleHome}>Login</button>
        </div>
      );
    }
    return (
      <Popconfirm
        title="Are you sure？"
        okText="Yes"
        cancelText="No"
        onConfirm={this.handleDelete}
      >
        <button className="DeleteUserButton">Delete</button>
      </Popconfirm>
    );
  }
}

export default DeleteUserButton;
