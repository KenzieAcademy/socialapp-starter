import React from "react";
import "./DeleteUserModal.css"
import { propTypes } from "react-spinkit";
import { Button, Modal } from "semantic-ui-react";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

function DeleteUserModal(props) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  return (
    <div className = "DeleteUserModal">
      <Button
        negative
        className = "DeleteUserButton"
        onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
      >
        Delete User
      </Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Delete this user account?</Modal.Header>
        <Modal.Content>
          If you wish to delete this user account, all the information for the
          user account will be lost and you will need to register a new user
          account!
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Cancel
          </Button>
          <Button negative onClick={props.handleDelete}>
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default DeleteUserModal;
