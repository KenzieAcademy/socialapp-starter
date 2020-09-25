import React from "react";

class Users extends React.Component {
  render() {
    return (
      <div>
        <li>
          Created at: {new Date(this.props.createdAt).toDateString()};
          {this.props.pictureLocation}; Username: {this.props.username};
          {this.props.about} DisplayName: {this.props.displayName}
        </li>
      </div>
    );
  }
}

export default Users;
