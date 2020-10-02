import React from "react";
import Card from "react-bootstrap/Card";
import MiniProfileIMG from "../../assets/images/Placeholder_Image.gif";
import { Link } from "react-router-dom";

const styles = {
  paperContainer: {
    height: 120,
    width: 120,
    maxwidth: 20,
    maxheight: 20,
  },
};

const MiniProfile = (props) => {
  let joined = new Date(props.user.createdAt);

  let image = MiniProfileIMG;
  if (props.user.pictureLocation !== null) {
    image = `https://socialapp-api.herokuapp.com${props.user.pictureLocation}`;
  }

  let profileImage = (
    <img
      alt="profile"
      src={image}
      style={styles.paperContainer}
      class="btn btn-primary"
    />
  );
  if (props.user.username === localStorage.getItem("user")) {
    profileImage = (
      <a href={"profile/" + localStorage.getItem("user")}>
        <img
          alt="profile"
          src={image}
          style={styles.paperContainer}
          class="btn btn-primary"
        />
      </a>
    );
  }

  return (
    <div className="ProfileCard">
      <Card class="card" className="Miniprofile">
        <Card-Body class="card-body">
          {profileImage}
          <Card.Subtitle className="card-Subtitle">
            {props.user.displayName} <br></br>
            Member Since: {joined.toUTCString()}
          </Card.Subtitle>
        </Card-Body>
      </Card>
    </div>
  );
};

export default MiniProfile;
