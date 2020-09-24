import React from "react";
import DataService from "../dataService";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

import { message, Result } from "antd";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = { messageString };
    //delete line2.
    //1
  }

  componentDidMount() {
    this.client
      .postMessages()
      .then((response) =>
        this.setState({ messageString: response.data.messages })
      );
  }

  render() {
    return (
      <div className="CreateMessage">
        <input type="text" />
      </div>
    );
  }
}

export default CreateMessage;
