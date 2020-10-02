import React from "react";
import { propTypes } from "react-spinkit";
import { Button, Modal } from "semantic-ui-react";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer, size: action.size };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

function DeleteUserMessageModal(props) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
    size: undefined,
  });
  const { open, dimmer, size } = state;

  return (
    <div>
      <Button
        negative
        onClick={() =>
          dispatch({
            type: "OPEN_MODAL",
            dimmer: "blurring",
            size: "mini",
          })
        }
      >
        Delete Message
      </Button>

      <Modal
        size={size}
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Delete Your Message</Modal.Header>
        <Modal.Content>
          Are you sure you want to delete your message?
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Cancel
          </Button>
          <Button negative onClick={props.handleDeleteUserMessage}>
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default DeleteUserMessageModal;
