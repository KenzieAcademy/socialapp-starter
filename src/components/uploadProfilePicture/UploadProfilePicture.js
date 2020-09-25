import React from "react";
import UploadProfilePictureService from "../../services/UploadProfilePictureService";
import "./UploadProfilePicture.css";
import { Form, Input, Label, Message } from "semantic-ui-react";

class UploadProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null,
      responseCode: null,
    };

    this.UploadProfilePictureService = new UploadProfilePictureService();
  }

  handleReset = (event) => {
    this.setState({ responseCode: null });
  };

  handleChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({ [event.target.name]: event.target.files[0] });
  };

  handleUpload = (event) => {
    if (this.state.picture) {
      this.UploadProfilePictureService.uploadProfilePicture(this.state.picture)
        .then((result) => {
          console.log(result);
          if ((result.data.statusCode = 200))
            this.setState({ responseCode: 200 });
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    if (this.state.responseCode === 200) {
      return (
        <div className="UploadProfilePicture">
          <Form
            encType="multipart/form-data"
            onSubmit={this.handleUpload}
            success
          >
            <Form.Field>
              <Label size="large" color="blue">
                Upload A New Profile Picture
              </Label>
              <Message
                success
                attached="bottom"
                header="Upload Successful"
                content="You Have Successfully Changed Your Profile Picture!"
                onDismiss={this.handleReset}
              />
            </Form.Field>
          </Form>
        </div>
      );
    }

    return (
      <div className="UploadProfilePicture">
        <Form encType="multipart/form-data" onSubmit={this.handleUpload}>
          <Form.Field>
            <Label size="large" color="blue">
              Upload A New Profile Picture
            </Label>
            <Input
              action="Upload"
              type="file"
              name="picture"
              onChange={this.handleChange}
              required
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default UploadProfilePicture;
