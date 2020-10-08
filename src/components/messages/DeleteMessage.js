import React from "react";
import { Button } from "@material-ui/core";

class DeleteMessage extends React.Component {
  render() {
    return (
      <div>
        <Button color="secondary" type="submit">
          Delete Post!
        </Button>
      </div>
    );
  }
}

export default DeleteMessage;
