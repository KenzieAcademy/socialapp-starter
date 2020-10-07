import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import RegistrationFormButton from "../registrationForm/registrationFormButton";
import DINO from "../../images/Dino-PIC.png";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <Layout>
          <Header>
            <h2 className="slogan">
              You ain't seen nothin' till you Observit!
            </h2>
          </Header>
          <Content>
            <div className="form">
              <img
                src="https://lh3.googleusercontent.com/proxy/oiPMUPydSIwKgdqiXmu67D2b9bBmuYFltHSuzLGUSOowXij5aQeLvdOBds1D0cFKPlVwcmvEvgs_g6W9UFnO6UViCqr99vean6fU2l3pZ8blCZ0JbJtwnsTNyfGxksT2lSt7MwPBtDG4"
                alt="DINO-WALLPAPER"
                width="800vh"
                transform="scaleX(-1)"
              />
              <form id="login-form" onSubmit={this.handleLogin}>
                <div className="logo">
                  <img src={DINO} alt="DINO" height="40px" />
                  <strong>OBSERVIT</strong>
                </div>

                <div className="imput">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    autoFocus
                    required
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={this.handleChange}
                  />
                  <button type="submit" disabled={loading}>
                    Login
                  </button>
                  <hr />
                  <RegistrationFormButton />
                  {loading && <Spinner name="circle" color="blue" />}
                  {error && <p style={{ color: "red" }}>{error.message}</p>}
                </div>
              </form>
            </div>
          </Content>
          <Footer>Site Created By: Team 404</Footer>
        </Layout>

        {/* <div className="form">
          <form id="login-form" onSubmit={this.handleLogin}>
            <div className="logo">
              <img src={DINO} alt="DINO" height="40px" />
              <strong>OBSERVIT</strong>
            </div>

            <div className="imput">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                autoFocus
                required
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                onChange={this.handleChange}
              />
              <button type="submit" disabled={loading}>
                Login
              </button>
              <RegistrationFormButton />
              {loading && <Spinner name="circle" color="blue" />}
              {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
          </form>
        </div> */}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
