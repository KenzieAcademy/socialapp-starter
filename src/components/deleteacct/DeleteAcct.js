import React from "react";
import Dataservice from "../../pages/dataService";
import "./deleteacct.css";
import { Button } from "antd";

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
        <Button
          id="del"
          type="primary"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this account?"))
              this.handleDelete(DeleteAcctButton);
          }}
        >
          Delete Account
        </Button>
      </div>
    );
  }
}

export default DeleteAcctButton;
