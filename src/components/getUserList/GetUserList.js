import React from "react";
import DataService from "../../DataService";
import UserCard from "../userCard/UserCard";

class GetUserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [{ username: "", displayName: "", about: "" }],
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.client.getUserList().then((result) => {
      this.setState({ users: result.data.users });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map((userObj) => (
          <UserCard {...userObj} />
        ))}
      </div>
    );
  }
}

export default GetUserList;
