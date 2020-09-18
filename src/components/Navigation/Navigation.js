import React from "react"
import { withAsyncAction } from "../../redux/HOCs"
import * as ReactBootStrap from "react-bootstrap";

class Navigation extends React.Component {

    handleLogout = event => {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        return (

            <ReactBootStrap.Navbar bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                    <ReactBootStrap.Button variant="outline-info" onClick = {this.handleLogout} >Logout</ReactBootStrap.Button>
            </ReactBootStrap.Navbar>

        )
    }
}
export default withAsyncAction("auth", "logout")(Navigation);