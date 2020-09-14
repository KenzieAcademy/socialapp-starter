import React from "react";
import DeleteUserService from "../../services/DeleteUserService";

class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DeleteUserService(props);
  }

  handleDelete = (event) => {
    console.log("hello");
  };

  render() {
    return (
      <div>
        <button className="delete-username" onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteUser;
