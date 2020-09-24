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

class MiniProfile extends React.Component {
  render() {
    return (
      <Card class="card" className="Miniprofile">
        <Card-Body class="card-body">
          <img
            src={MiniProfileIMG}
            style={styles.paperContainer}
            class="btn btn-primary"
          />
          <p class="card-text">{this.props.username}</p>
          <Card.Subtitle class="card-Subtitle">Mini-Profile</Card.Subtitle>
        </Card-Body>
      </Card>
    );
  }
}

export default MiniProfile;
