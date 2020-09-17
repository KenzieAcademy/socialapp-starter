import React from "react";
import { Form, Button, Header } from "semantic-ui-react";
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
    this.setState({ updateUserInfoObject: {[e.target.name]: e.target.value }});
  };

  handleUpdateUserInfo = (event) => {
    event.preventDefault();
    this.UpdateUserInfoService.updateInfo(this.state.updateUserInfoObject).then(
      (result) => {
        console.log(result);
      }
    );
    this.setState({submitted:true})
  };

  handleReset = (event) => {
    this.setState({
        submitted: false,
        formData: {
            firstName: '',
            lastName: '',
        }
    })
}
  
  render() {
    if(this.state.submitted) {
        return (
            <div className="UpdateUserInfoForm">
                <Header as = "h3">Thank You for Updating Your User Information!</Header>
                <br />
                <Button onClick = {this.handleReset}>Reset Form</Button>
            </div>
        )
    }

    return (
      <div className="UpdateUserInfoForm">
        <Form onSubmit={this.handleUpdateUserInfo}>
          <Form.Field>
            <label>Create a New Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Chose a New Display Name!</label>
            <input
              type="text"
              name="displayName"
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Update Your "About" Information!</label>
            <input
              type="text"
              name="about"
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          <Button type="submit">Update User Information</Button>
        </Form>
      </div>
    );
  }
}

export default UpdateUserInfoForm;
