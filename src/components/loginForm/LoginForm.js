import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }
  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                name='username'
                autoFocus
                required
                onChange={this.handleChange}
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                name='password'
                required
                onChange={this.handleChange}
              />

              <Button onClick={this.handleLogin} content='Login' primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>

            <Link to={"/registration"}>
              <Button content='Sign up' icon='signup' size='big' />
            </Link>


          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>

    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);


