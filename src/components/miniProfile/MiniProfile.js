import React from "react";
import Card from "react-bootstrap/Card";
import MiniProfileIMG from "../../assets/images/Placeholder_Image.gif";

const styles = {
  paperContainer: {
    height: 120,
    width: 120,
    maxwidth: 20,
    maxheight: 20,
  },
};

class MiniProfile extends React.Component {
  render() {
    return (
      <div className="ProfileCard">
        <Card class="card" className="Miniprofile">
          <Card-Body class="card-body">
            <img
              src={MiniProfileIMG}
              style={styles.paperContainer}
              class="btn btn-primary"
            />
            <p class="card-text">{this.props.username}</p>
          </Card-Body>
        </Card>
      </div>
    );
  }
}

export default MiniProfile;
