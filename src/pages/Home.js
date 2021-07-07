import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegisterForm from "../components/registerForm/RegisterForm";
import Logo from "../images/logo.png"
import FetchService from "../FetchService"
import { Grid, Segment, Header } from 'semantic-ui-react'

import homelogo from "../images/logo.png"
import { ItemGroup } from "semantic-ui-react";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.client = new FetchService()
  }
  componentDidMount() {
    this.client.userMessage()
  }

  render() {
    return (
      <div className="Home">
        <Menu />
        
        <Header as='h1' textAlign = 'center' color='blue'>Your Favorite Book Sharing Site</Header>



        <Grid columns={2} divided textAlign = 'center'>
          <Grid.Row>
            <Grid.Column>
              <img className="logo" src={Logo} />
            </Grid.Column>
            <Grid.Column>
              <Segment>
                The Book Nook is an interactive website where bibliophiles (book lovers)
                can review, blog and trade ideas about their favorite books.  There are 
                book clubs you can join or you can form your own.  Every genre is 
                represented, from Shakespeare to Hemingway or E. M. Forster to J. K. 
                Rowling.  This is the place to curl up with your laptop or tablet. 
                Enjoy.  

              </Segment>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <LoginForm />
            </Grid.Column>
            <Grid.Column>
              <RegisterForm />
            </Grid.Column>

          </Grid.Row>
        </Grid>

      </div>




    );

  }
}

export default userIsNotAuthenticated(Home);
