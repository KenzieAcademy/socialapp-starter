// version one

import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import { Button, Card } from "react-bootstrap";
import DataService from "../services/DataService";
import Menu from "../components/menu/Menu";
import ProfileContent from "../components/profileContent/ProfileContent";
import UserInfo from "../components/userInfo/UserInfo";
import "./Profile.css";


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      user: {},
      username: "",
      displayName: "",
      createdAt: "",
    };
  }

  componentDidMount = () => {
    this.getUser();
  };

  getUser() {
    this.client.getUser(this.client.getUsername()).then((response) =>
      this.setState({
        user: response.data.user,
        username: response.data.user.username,
        displayName: response.data.user.displayName,
        createdAt: response.data.user.createdAt,
      })
    );
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = (e) => {
    e.preventDefault();
    this.client
      .deleteUser()
      .then((payload) => {
        console.log(payload);
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const Username = this.state.user.username;
    const DisplayName = this.state.user.displayName;
    const CreatedAt = this.state.user.createdAt;

    return (
      <div className="Body">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="Profile">
          <h3>My Profile</h3>
          <Card style={{ height: "70rem" }}>
            <ProfileContent />
            <Button
              variant="dark"
              className="DeleteUser"
              onClick={this.handleDelete}
            >
              {" "}
              Delete User
            </Button>
            <UserInfo
              username={Username}
              displayName={DisplayName}
              createdAt={CreatedAt}
            />
          </Card>
        </div>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
// my version below
//   render() {
//     return (
//       <div className="Profile">
//         <Menu />
//         <h2>Profile</h2>
//         <button onClick={this.handleDelete}> Delete User</button>



//       </div>
//     );
//   }
// }
// export default userIsAuthenticated(Profile);

// // import React from "react";
// // import Card from "react-bootstrap/Card";

// // // import { userIsAuthenticated } from "../redux/HOCs";
// // // import "../components/profileContent/ProfileContent"

// // class ProfileContent extends React.Component {
// //   render() {
// //     return (
// //       <div className="card">
// //         <Card className="ProfileMain" style={{ width: "25rem" }}>
// //           <Card.Img
// //             variant="top"
// //             src="https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-538707355.jpg"
// //           />
// //           <Card.Body>
// //             {/* pictureLocation */}
// //             <Card.Title>User Name</Card.Title>
// //             <Card.Title>Display Name</Card.Title>
// //             <Card.Title>about</Card.Title>
// //             <Card.Title>CreatedAT</Card.Title>
// //           </Card.Body>
// //         </Card>
// //       </div>
// //     );
// //   }
// // }

// // export default userIsAuthenticated(ProfileContent);