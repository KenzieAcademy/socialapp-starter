import React from "./node_modules/react";
import Spinner from "./node_modules/react-spinkit";
import "./NewMessage.css";
import DataService from "../../DataService"

class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    };
    this.client = new DataService
  }

  handleMessage = e => {
    e.preventDefault();
    this.client.message(this.state).then(result => {
      alert(result.data)
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="NewMessage">
        <form id="new-message" onSubmit={this.handleMessage}>
          <label htmlFor="message">New Message</label>
          <input
            type="text"
            name="message"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="submit">Submit</label>

          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "message")(NewMessage);
