import React from "react";
import Dataservice from "../../pages/dataService";
import ConfirmProp from "../comfimPrompt/ConfirmProp";

import "./deleteacct.css";

class DeleteAcctButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.client = new Dataservice();
  }
  handleDelete = () => {
    this.client.deleteuser().then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="DeleteAcctButton">
        <button id="del" onClick={this.handleDelete}>
          Delete Account
        </button>
      </div>
    );
  }
}

export default DeleteAcctButton;
