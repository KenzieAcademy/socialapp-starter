import React from "react";
import DataService from "../dataService";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      messageInput: "",
      count: 0,
    };
  }

  componentDidMount() {
    // this.client
    //   .postMessages()
    //   .then((response) => this.setState({ text: response.data.messages }));
  }
  // vcx;

  //axios to the header bearer to the token

  //make these methods
  //Method = (event) => {logic}
  // handleSubmit() {
  //   this.setState(state => ({
  //     text: this.state.text
  //     // console.log("Submitted");
  //     // )}
  // }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    // console.log(data)
    this.client.postMessages(this.state.messageInput).then((response) => {
      console.log("message sent");
      this.setState((newState) => ({
        messageInput: newState.messageInput,
        count: newState.count + 1,
      }));
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    // console.log(event.target);
    this.setState({ messageInput: event.target.value });
  };

  render() {
    //event syntax for onClick and handleCHange
    return (
      <div style={{ textAlign: "center" }} className="CreateMessage">
        <h1 style={{ textAlign: "center", fontSize: "30px", fontFamily: "fantasy" }}>🆆🅷🅰🆃❜🆂 🅾🅽 🆈🅾🆄🆁 🅼🅸🅽🅳❓</h1>
        <form onSubmit={this.handleSubmit}>
          <input style={{ textAlign: "center", fontSize: "30px", fontFamily: "normal", WebkitBorderRadius: "10px", paddingBottom: "10px" }}
            type="text"
            name="messageInput"
            placeholder="Write what's on your mind"
            // value={this.state.messageInput}
            onChange={this.handleChange}
          />
          <button style={{ background: "blue", fontFamily: "fantasy", border: "none", fontSize: "17px", borderRadius: "20px" }}>Tweet</button>
        </form>
        {/* <button onClick={handleSubmit}>Submit</button> */}
      </div>
    );
  }
}

export default CreateMessage;
