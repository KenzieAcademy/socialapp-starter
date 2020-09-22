<<<<<<< HEAD
import React from "react";
import { Divider, Grid } from "semantic-ui-react";
import './Home.css';
=======
import React from 'react';
>>>>>>> master
import LoginForm from "../../components/loginForm/LoginForm";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import Menu from "../../components/menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">

        <Menu />
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <section class="ui center align container">

              <h5>Welcome Back</h5>
              <h2>Join us for Blast Off!</h2>
              {/* <h5>sign in</h5> */}
              <LoginForm />
            </section>
          </Grid.Column>
          <Grid.Column>
            {/* <h5>Ready to Join Us?</h5> */}
            <h2>Reserve Your Seat for the Adventure!</h2>
            {/* <h5>register</h5> */}
            <RegistrationForm />
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>

      </div >
    );
  }
}

export default userIsNotAuthenticated(Home);
