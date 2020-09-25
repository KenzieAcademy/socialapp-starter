import React from "react";
import Card from "react-bootstrap/Card";
import MiniProfileIMG from "../../assets/images/marioParty.jpg";

const styles = {
  paperContainer: {
    height: 120,
    width: 120,
    maxwidth: 20,
    maxheight: 20,
    backgroundImage: `url(${"static/src/img/main.jpg"})`,
  },
};

const MiniProfile = (props) => {
  let joined = new Date(props.user.createdAt);
  return (
    <Card className="Miniprofile">
      <Card-Body className="card-body">
        <img
          alt="profile"
          src={MiniProfileIMG}
          style={styles.paperContainer}
          className="btn btn-primary"
        />
        <Card.Subtitle className="card-Subtitle">
          {props.user.displayName} <br></br>
          Member Since: {joined.toUTCString()}
        </Card.Subtitle>
      </Card-Body>
    </Card>
  );
};

export default MiniProfile;
