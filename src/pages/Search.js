import React from "react";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu";
import GetUserList from "../components/getUserList/GetUserList";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="Search">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <form>
          <label htmlFor="Search">Search</label>
          <input
            type="text"
            placeholder="Search"
            name="searchTerm"
            onChange={this.handleChange}
          />
        </form>
        <ul>
          <GetUserList />
          <li>Item 2</li>
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(Search);
