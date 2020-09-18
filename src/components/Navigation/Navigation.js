// // import React from "react"
// import { withAsyncAction } from "../../redux/HOCs"
// import "bootstrap/dist/css/bootstrap.min.css"
// import * as ReactBootStrap from "react-bootstrap";

// class Navigation extends React.Component {

//     handleLogout = event => {
//         event.preventDefault();
//         this.props.logout();
//     }

//     render() {
//         return (

//             <ReactBootStrap.Navbar bg="dark" variant="dark">
//                 <ReactBootStrap.Navbar.Brand href="#home">Welcome</ReactBootStrap.Navbar.Brand>
//                 <ReactBootStrap.Nav className="mr-auto">
//                     <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
//                     <ReactBootStrap.Nav.Link href="#features">Profile</ReactBootStrap.Nav.Link>
//                     <ReactBootStrap.Nav.Link href="#pricing">Message Feed</ReactBootStrap.Nav.Link>
//                 </ReactBootStrap.Nav>
//                 <ReactBootStrap.Button variant="outline-info" onClick={this.handleLogout} >Logout</ReactBootStrap.Button>
//             </ReactBootStrap.Navbar>

//         )
//     }
// }
// export default withAsyncAction("auth", "logout")(Navigation);