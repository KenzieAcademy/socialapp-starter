import React from "react";
import Menu from "../components/menu/Menu";
import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { userIsAuthenticated } from "../redux/HOCs";



import UpdateProfileForm from "../components/updateProfileForm/UpdateProfileForm";


class UpdateProfile extends React.Component {





  render() {

    return (

      <div className="UpdateProfile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Update Profile</h2>
      HEllo

        <UpdateProfileForm />

      </div>

    );
  }
}
export default userIsAuthenticated(UpdateProfile);
