import React from "react";
import DataService from "../../DataService";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messageDataOut: { text: "" }, messageData: {} };

    this.client = new DataService();
  }

  handleCreateMessage = (e) => {
    e.preventDefault();
    this.client.createMessage(this.state.messageDataOut).then((response) => {
      console.log(response);
      this.setState((state) => {
        return { messageData: response.data.message };
      });
      this.props.handleSubmit();
      this.props.handleRefresh();
    });
  };

  handleChange = (e) => {
    const messageDataOut = { ...this.state.messageDataOut };
    messageDataOut[e.target.name] = e.target.value;
    this.setState({ messageDataOut });
  };

  handleClear = (e) => {
    this.setState({ messageDataOut: { text: "" } });
    this.props.handleSubmit();
    this.props.handleRefresh();
  };

  render() {
    if (!this.props.isSubmitted) {
      return (
        <form id="CreateMessage-button" onSubmit={this.handleCreateMessage}>
          <label htmlFor="text">Your Lucky Message</label>
          <textarea
            type="text"
            name="text"
            value={this.state.messageDataOut.text}
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
