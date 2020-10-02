import React from "react";
import Card from "react-bootstrap/Card";
<<<<<<< HEAD
import "../miniProfile/MiniProfile.css";
import MiniProfileIMG from "../../assets/images/Placeholder_Image_Thumb.gif";
import { Link } from "react-router-dom";
=======
import MiniProfileIMG from "../../assets/images/Placeholder_Image.gif";
>>>>>>> parent of 7b5762f... Merge pull request #60 from BenLynch87/Ben

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

  return (
<<<<<<< HEAD
    <div className="MiniProfileBody">
      <Card className="Miniprofile">
        <Card-Body className="MiniProfCardBody">
          <div className="ProfilePicThumb">{profileImage}</div>
=======
    <div className="ProfileCard">
      <Card class="card" className="Miniprofile">
        <Card-Body class="card-body">
          <img
            alt="profile"
            src={image}
            style={styles.paperContainer}
            class="btn btn-primary"
          />
>>>>>>> parent of 7b5762f... Merge pull request #60 from BenLynch87/Ben
          <Card.Subtitle className="card-Subtitle">
            <div className="MiniMemberInfo">
              <div className="MemberName">
                Logged In As: {props.user.displayName}
              </div>
              <div className="MemberSince">
                Member Since: {joined.toUTCString()}
              </div>
            </div>
          </Card.Subtitle>
        </Card-Body>
      </Card>
    </div>
  );
};

export default MiniProfile;
