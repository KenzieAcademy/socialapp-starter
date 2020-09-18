import React from "react";
import DataService from "../../DataService";
import { Input } from "antd";

class PostMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.client = new DataService();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.client.postMessage(this.state).then((result) => {
      console.log(result.data);
      window.location.reload();
    });
    this.setState({
      text: "",
    });
    e.target.reset();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="messageForm">
        <form id="message-form" onSubmit={this.handleSubmit}>
          <label htmlFor="text">Message</label>
          <Input
            size="large"
            type="text"
            name="text"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default PostMessage;
