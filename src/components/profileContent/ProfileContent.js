import React from "react";
import Button from "react-bootstrap/Button";

// import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../../components/profileContent/ProfileContent.css";
import MiniProfileIMG from "../../assets/images/marioParty.jpg";
import Form from "react-bootstrap/Form"
const styles = {
  paperContainer: {
    height: 120,
    width: 120,
    maxwidth: 20,
    maxheight: 20,
    backgroundImage: `url(${"static/src/img/main.jpg"})`,
  },
};


class ProfileContent extends React.Component {
  render() {
    return (

      <div className="ProfileBody">
        <div className="ProfileContent">
        <img
            src={MiniProfileIMG}
            style={styles.paperContainer}
            class="btn btn-primary"
          />
          
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Location</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Date Joined</Form.Label>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Favorite Brands</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Display Name</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
            </Form>
        </div>
        <br></br>
        <Button className="SaveButton" variant="dark" size="lg">
          Edit
        </Button>

      </div>
    );
  }
}

export default userIsAuthenticated(ProfileContent);
