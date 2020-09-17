import React from "react";
import Dataservice from "../../pages/dataService";
import { Button } from "antd";
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
        <Button id="del" type="primary" onClick={this.handleDelete}>
          Delete Account
        </Button>
      </div>
    );
  }
}

export default DeleteAcctButton;
