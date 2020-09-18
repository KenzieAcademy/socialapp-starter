import React from "react";
import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./CreateMessage.css";
import DataService from "../../dataService";
import Picker from "emoji-picker-react";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.client = new DataService();
  }
  onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject);
    this.setState(
      (state) => ({ text: state.text + emojiObject.emoji }),
      () => this.inputElement.focus()
    );
  };

  handleMessage = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    this.client.makeMessage(this.state);
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
            value={this.state.text}
            ref={(element) => (this.inputElement = element)}
          />
          <button type="submit" disabled={loading}>
            Submit
          </button>
          <Picker onEmojiClick={this.onEmojiClick} />
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default userIsAuthenticated(CreateMessage);
