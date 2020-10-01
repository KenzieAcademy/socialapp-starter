import React from "react";
import UploadProfilePictureService from "../../services/UploadProfilePictureService";
import "./UploadProfilePicture.css";
import { Form, Input, Label, Message } from "semantic-ui-react";

class UploadProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadPicture: null,
      uploadResponseCode: null,
    };

    this.UploadProfilePictureService = new UploadProfilePictureService();
  }

  handleReset = (event) => {
    this.setState({ uploadResponseCode: null });
  };

  handleChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({ [event.target.name]: event.target.files[0] });
  };

  handleUpload = (event) => {
    if (this.state.uploadPicture) {
      this.UploadProfilePictureService.uploadProfilePicture(
        this.state.uploadPicture
      )
        .then((result) => {
          console.log(result);
          if (result.data.statusCode)
            this.setState({ uploadResponseCode: result.data.statusCode });
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.statusCode)
            this.setState({
              uploadResponseCode: error.response.data.statusCode,
            });
        });
    }
  };

  render() {
    if (this.state.uploadResponseCode === 200) {
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

    if (this.state.uploadResponseCode === 413) {
      return (
        <div className="UploadProfilePicture">
          <Form
            encType="multipart/form-data"
            onSubmit={this.handleUpload}
            error
          >
            <Form.Field>
              <Label size="large" color="blue">
                Upload A New Profile Picture
              </Label>
              <Message
                error
                attached="bottom"
                header="Upload Failed!"
                content="The Image You Selected is Too Large!"
                onDismiss={this.handleReset}
              />
            </Form.Field>
          </Form>
        </div>
      );
    }

    if (this.state.uploadResponseCode === 415) {
      return (
        <div className="UploadProfilePicture">
          <Form
            encType="multipart/form-data"
            onSubmit={this.handleUpload}
            error
          >
            <Form.Field>
              <Label size="large" color="blue">
                Upload A New Profile Picture
              </Label>
              <Message
                error
                attached="bottom"
                header="Upload Failed!"
                content="Unsupported Media Type! Please Choose a .gif, .jpeg, or .png File!"
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
              name="uploadPicture"
              accept="image/jpeg, image/gif, image/png"
              capture="user"
              onChange={this.handleChange}
              required
              fluid
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default UploadProfilePicture;
