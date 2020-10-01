import React from "react";
import {
  Form,
  Button,
  Header,
  Input,
  Label,
  TextArea,
  Message,
} from "semantic-ui-react";
import UpdateUserInfoService from "../../services/UpdateUserInfoService";
import "./UpdateUserInfoForm.css";

class UpdateUserInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseCode: null,
      updateUserInfoObject: {},
    };

    this.UpdateUserInfoService = new UpdateUserInfoService();
  }

  handleChange = (e) => {
    let formData = { ...this.state.updateUserInfoObject };
    formData[e.target.name] = e.target.value;
    this.setState({
      updateUserInfoObject: formData,
    });
  };

  handleUpdateUserInfo = (event) => {
    event.preventDefault();
    //Evaluates the updateUserInfoObject, and if a key has an empty string as it's value, that key is deleted
    for (let property in this.state.updateUserInfoObject) {
      if (this.state.updateUserInfoObject[property].length === 0) {
        delete this.state.updateUserInfoObject.property;
      }
    }

    this.UpdateUserInfoService.updateInfo(this.state.updateUserInfoObject)
      .then((result) => {
        console.log(result);
        this.setState({
          responseCode: result.data.statusCode,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleReset = (event) => {
    this.setState({
      statusCode: null,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    if (this.state.statusCode === 200) {
      return (
        <div className="UpdateUserInfoForm">
          <Form onSubmit={this.handleUpdateUserInfo}>
            <Form.Field>
              <Label size="large" color="blue">
                Create a New Password
              </Label>
              <Form.Input
                type="password"
                name="password"
                required
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label size="large" color="blue">
                Chose a New Display Name!
              </Label>
              <Form.Input
                type="text"
                name="displayName"
                required
                onChange={this.handleChange}
                minLength="3"
                maxLength="20"
              />
            </Form.Field>
            <Form.Field>
              <Label size="large" color="blue">
                Update Your "About" Information!
              </Label>
              <Form.TextArea
                type="text"
                name="about"
                required
                onChange={this.handleChange}
                maxLength="255"
              />
            </Form.Field>
          </Form>
          <Message
            success
            header="Form Completed!"
            content="You have Successfully Updated Your User Information!"
            onDismiss={this.handleReset}
          />
        </div>
      );
    }

    return (
      <div className="UpdateUserInfoForm">
        <Form onSubmit={this.handleUpdateUserInfo}>
          <Form.Field>
            <Label size="large" color="blue">
              Create a New Password
            </Label>
            <Form.Input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Label size="large" color="blue">
              Chose a New Display Name!
            </Label>
            <Form.Input
              type="text"
              name="displayName"
              onChange={this.handleChange}
              minLength="3"
              maxLength="20"
            />
          </Form.Field>
          <Form.Field>
            <Label size="large" color="blue">
              Update Your "About" Information!
            </Label>
            <TextArea
              type="text"
              name="about"
              onChange={this.handleChange}
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
