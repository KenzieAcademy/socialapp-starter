import React from "react";
import Menu from "./components/menu/menu";
import { userIsAuthenticated } from "../redux/HOCs";
import QuestBoardService from "./ServicePage";





class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.client = new QuestBoardService();
    this.state = {
      users: {},
      data: [],



    }
  }

  CurrentUser() {
    return this.client.get(this.url + "/users/{username}");

  }

  render() {




    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <div>
        

        </div>

      

      </div>
    );
  }
}






export default userIsAuthenticated(Profile);



