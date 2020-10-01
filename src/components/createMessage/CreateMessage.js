import React from "react";
import DataService from "../../DataService";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubmitted: false, messageData: { text: "" } };

    this.client = new DataService();
  }

  handleCreateMessage = (e) => {
    e.preventDefault();
    this.client.createMessage(this.state.messageData).then((response) => {
      console.log(response);
      this.props.handleSubmit();
    });
  };

  handleChange = (e) => {
    const messageData = { ...this.state.messageData };
    messageData[e.target.name] = e.target.value;
    this.setState({ messageData });
  };

  handleClear = (e) => {
    this.setState({ messageData: { text: "" } });
    this.props.handleSubmit();
  };

  render() {
    if (!this.props.isSubmitted) {
      return (
        <form id="CreateMessage-button" onSubmit={this.handleCreateMessage}>
          <label htmlFor="text">Your Lucky Message</label>
          <textarea
            type="text"
            name="text"
            value={this.state.messageData.text}
            onChange={this.handleChange}
          />
          <button type="sumbit" value="true">
            Send Your Luck to the World
          </button>
        </form>
      );
    } else {
      return (
        <div>
          Looks like shared your luck
          <button onClick={this.handleClear}>Create Another Message</button>
        </div>
      );
    }
  }
}

export default CreateMessage;
