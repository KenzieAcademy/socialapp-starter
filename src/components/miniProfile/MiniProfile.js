import React from "react";
import Card from "react-bootstrap/Card";
import "../miniProfile/MiniProfile.css";
import MiniProfileIMG from "../../assets/images/Placeholder_Image.png";
import { Link } from "react-router-dom";

const styles = {
  paperContainer: {
    // height: 120,
    // width: 120,
    maxwidth: 125,
    maxheight: 125,
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
      alt="Profile Pic"
      src={image}
      style={styles.paperContainer}
      class="img-fluid"
      variant="dark"
      title="Profile Pic"
    />
  );
  if (props.user.username === localStorage.getItem("user")) {
    profileImage = (
      <a href={"profile/" + localStorage.getItem("user")}>
        <img
          alt="Profile Pic"
          src={image}
          style={styles.paperContainer}
          class="img-fluid"
          variant="dark"
          title="Profile Pic"
        />
      </a>
    );
  }

  return (
    <div className="MiniProfileBody">
      <Card>
        <Card-Body>
          <div
            className="ProfilePicThumb"
            alt="Profile Pic"
            title="Go To Profile"
          >
            {profileImage}
          </div>
          <Card.Subtitle>
            <div className="MiniMemberInfoBox">
              <div className="MemberNameBox">
                <div className="MemberNameHeader">Logged In As:</div>
                <div className="MemberNameText">{props.user.displayName}</div>
              </div>
              <br></br>
              <div className="MemberSinceBox">
                <div className="">Member Since:</div>
                <div className="MemberSinceText">{joined.toUTCString()}</div>
              </div>
            </div>
          </Card.Subtitle>
        </Card-Body>
      </Card>
    </div>
  );
};

export default MiniProfile;
