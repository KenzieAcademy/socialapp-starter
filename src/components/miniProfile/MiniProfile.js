import React from "react";
import Card from "react-bootstrap/Card";
import "../miniProfile/MiniProfile.css";
import MiniProfileIMG from "../../assets/images/Placeholder_Image_Thumb.gif";

const MiniProfile = (props) => {
  let joined = new Date(props.user.createdAt);

  return (
    <div className="ProfileCard">
      <Card className="Miniprofile">
        <Card-Body className="card-body">
          <div className="ProfilePicThumb">
            <img alt="profile" src={MiniProfileIMG} />
          </div>
          <Card.Subtitle className="card-Subtitle">
            <div className="MemberInfo">
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
