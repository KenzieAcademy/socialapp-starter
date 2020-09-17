import React from "react";
import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./CreateMessage.css";
import DataService from "../../dataService";
import Emojis from "../emojis/Emojis";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.client = new DataService();
  }

  handleMessage = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    this.client.makeMessage(this.state).then((result) => {
      console.log(result.data);
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="MessageForm">
        <form id="message-form" onSubmit={this.handleMessage}>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="text"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Submit
          </button>
          <Emojis />
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default userIsAuthenticated(CreateMessage);
