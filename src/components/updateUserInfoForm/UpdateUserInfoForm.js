import React from "react";
import { Form, Button, Header, Input, Label, TextArea, Message} from "semantic-ui-react";
import UpdateUserInfoService from "../../services/UpdateUserInfoService";
import "./UpdateUserInfoForm.css";

class UpdateUserInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      updateUserInfoObject: {
        password: "",
        about: "",
        displayName: "",
      },
    };

    this.UpdateUserInfoService = new UpdateUserInfoService();
  }

  handleChange = (e) => {
    this.setState({
      updateUserInfoObject: { [e.target.name]: e.target.value },
    });
  };

  handleUpdateUserInfo = (event) => {
    event.preventDefault();
    this.UpdateUserInfoService.updateInfo(this.state.updateUserInfoObject).then(
      (result) => {
        console.log(result);
      }
    )
    .catch((error) => console.log(error));
    this.setState({ submitted: true });
  };

  handleReset = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="UpdateUserInfoForm">
          <Message
            success
            header="Form Completed!"
            content='You have Successfully Updated Your User Information!'
          />
          <Button onClick={this.handleReset}>Reset Form</Button>
        </div>
      );
    }

    return (
      <div className="UpdateUserInfoForm">
        <Form onSubmit={this.handleUpdateUserInfo}>
          <Form.Field>
            <Label size="large" color="blue">Create a New Password</Label>
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <Label size="large" color="blue">Chose a New Display Name!</Label>
            <Input
              type="text"
              name="displayName"
              onChange={this.handleChange}
              required
              minLength="3"
              maxLength="20"
            />
          </Form.Field>
          <Form.Field>
            <Label size="large" color="blue">Update Your "About" Information!</Label>
            <TextArea
              type="text"
              name="about"
              onChange={this.handleChange}
              required
              maxLength="255"
            />
          </Form.Field>
          <Button type="submit">Update User Information</Button>
        </Form>
      </div>
    );
  }
}

export default UpdateUserInfoForm;
