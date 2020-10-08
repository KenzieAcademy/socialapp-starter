import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu";
import GetUserList from "../components/getUserList/GetUserList";
import "./PageStyles.css";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SearchPage">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="Users-List">
          <ul>
            <GetUserList />
          </ul>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(SearchPage);
