
// version one

import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import Service from "../services/Service";
import Menu from "../components/menu/Menu"
import ProfileContent from "../components/profileContent/ProfileContent";
import Button from "react-bootstrap/Button";
import "./Profile.css";


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new Service();

  }
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
    return (
      <div className="Body">
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>My Profile</h2>
          <ProfileContent />
          <Button className="DeleteUser" onClick={this.handleDelete}>
            {" "}
            Delete User
          </Button>
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