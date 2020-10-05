import React from "react";
import Spinner from "react-spinkit";
import "./NewMessage.css";
import { Input } from 'antd';

class NewMessage extends React.Component {
  render() {
    const { loading, error } = this.props;
    return (
      <div className="NewMessage">
        <h2>New Message</h2>
        <form id="new-message" onSubmit={this.props.handleMessage}>
          <Input.TextArea
            value={this.props.message}
            minLength={2}
            maxLength={255}
            name="message"
            autoFocus
            required
            onChange={this.props.handleChange}
          />

          <button className="new-message-button"
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
          <div>Character Count: {this.props.message.length}/255</div>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default NewMessage;
