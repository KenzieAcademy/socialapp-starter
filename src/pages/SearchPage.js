import React from "react";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu";
import GetUserList from "../components/getUserList/GetUserList";
import SearchInput from "../components/searchInput/SearchInput";
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

        <ul>
          <GetUserList />
          <li>Item 2</li>
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(SearchPage);
