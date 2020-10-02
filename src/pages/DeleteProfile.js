import { Button } from "antd";
import React from "react";
import DataService from "../dataService";
class DeletePage extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }

  state = { Username: "" };

  componentDidMount() {
    let temp = this.client.getUsername();
    console.log(temp);
    this.setState({
      username: temp,
    });
    console.log(this.state.username);
    // .then(console.log("User Deleted"));
  }
  //   handleChange = (e) => {};
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username);
    this.client.deleteUser(this.state.username).then((result) => {
      console.log("USER DELETED");
    });
  };
  render() {
    return (
      <div className="loading">
        {console.log(this.props)}
        <form onSubmit={this.handleSubmit}>
          <p>We are going to miss you, you are welcome back whenever u want</p>
          <p>⇩</p>
          <button className="Delete" onClick={this.handleChange} style={{ backgroundColor: "red", fontFamily: "monospace" }}>
            {" "}
            DELETE YOUR PROFILE
          </button>
        </form>
      </div>
    );
  }
}

export default DeletePage;
