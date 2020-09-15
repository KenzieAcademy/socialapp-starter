import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

//Experimental Code Start

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      middlename: "",
      lastname: "",
      dob: "",
      creamername: "",
      favoritepet: "",
    };
  }

  handleFirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handlemiddlenameChange = (event) => {
    this.setState({
      middlename: event.target.value,
    });
  };

  handlelastnameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handledobChange = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };

  handlecreamernameChange = (event) => {
    this.setState({
      creamername: event.target.value,
    });
  };

  handlefavoritepetChange = (event) => {
    this.setState({
      favoritepet: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstname} ${this.state.middlename} ${this.state.lastname} ${this.state.dob} ${this.state.creamername} ${this.state.firstname}`
    );

    event.preventDefault();
  };
  render() {
    const {
      firstname,
      middlename,
      lastname,
      dob,
      creamername,
      favoritepet,
    } = this.state;

    return (
      <div className="Message">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <button types="submit">Edit Profile</button>

            <div>
              <input
                type="text"
                name="firstName"
                value={firstname}
                onChange={this.handleFirstnameChange}
              />
              <label htmlFor="name"> : First Name </label>
            </div>

            <div>
              <input
                type="text"
                name="middleName"
                value={middlename}
                onChange={this.handlemiddlenameChange}
              />
              <label htmlFor="name"> : Middle Name </label>
            </div>

            <div>
              <input
                type="text"
                name="LastName"
                value={lastname}
                onChange={this.handlelastnameChange}
              />
              <label htmlFor="name"> : Last Name </label>
            </div>

            <div>
              <input
                type="text"
                name="DOB"
                value={dob}
                onChange={this.handledobChange}
              />
              <label htmlFor="DOB"> : DOB </label>
            </div>

            <div>
              <input
                type="text"
                name="CreamerName"
                value={creamername}
                onChange={this.handlecreamernameChange}
              />
              <label htmlFor="alias"> : Creamer Name </label>
            </div>

            <div>
              <input
                type="text"
                name="Favorite Pet"
                value={favoritepet}
                onChange={this.handlefavoritepetChange}
              />
              <label htmlFor="petname"> : Favorite Pet </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

//End Of New Code for Editing Profile
export default userIsAuthenticated(Profile);
