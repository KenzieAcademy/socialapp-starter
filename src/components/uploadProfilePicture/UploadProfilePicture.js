import React from "react";
import UploadProfilePictureService from "../../services/UploadProfilePictureService";
import "./UploadProfilePicture.css";
import { Form, Button, Input } from "semantic-ui-react";

class UploadProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null,
    };

    this.UploadProfilePictureService = new UploadProfilePictureService();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  handleUpload = (event) => {};

  render() {
    return (
      <div className="UploadProfilePicture">
        <Form>
          <Form.Field>
            <label>Upload A New Profile Picture</label>
            <Input type="file" name="picture" onChange = {this.handleChange} />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default UploadProfilePicture;
