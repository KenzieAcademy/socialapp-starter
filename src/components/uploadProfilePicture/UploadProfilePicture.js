import React from "react";
import UploadProfilePictureService from "../../services/UploadProfilePictureService";
import "./UploadProfilePicture.css";
import { Form, Input, Label } from "semantic-ui-react";

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

  handleUpload = (event) => {
    if (this.state.picture) {
      this.UploadProfilePictureService.uploadProfilePicture(this.state.picture)
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
    }
  };

  render() {
    return (
      <div className="UploadProfilePicture">
        <Form>
          <Form.Field>
            <Label size="large" color="blue">
              Upload A New Profile Picture
            </Label>
            <Input
              action="Upload"
              type="file"
              name="picture"
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default UploadProfilePicture;
