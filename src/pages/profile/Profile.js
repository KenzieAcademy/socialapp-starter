import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import { Grid, PlaceholderParagraph, Segment, Input } from "semantic-ui-react";
import "./Profile.css";
import Menu from "../../components/menu/Menu";
import FootNavBar from "../../components/footNavBar/FootNavBar";
// import UploadImage from "../../components/addPhoto/AddPhoto";

import SideBar from "../../components/sideBar/SideBar";




class Profile extends React.Component {


  render() {
    return (
      <div className="profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        {/* <Segment placeholder>
          <Grid columns={1} relaxed='very' stackable>
            <Grid.Column > */}

        <SideBar isAuthenticated={this.props.isAuthenticated} />
        {/* <h2>User's Name</h2> */}
        {/* <UploadImage /> */}

        {/* </Grid.Column> */}


        {/* </Grid>
        </Segment> */}


        <FootNavBar isAuthenticated={this.props.isAuthenticated} />
      </div>

    );
  }
}

export default userIsAuthenticated(Profile);
