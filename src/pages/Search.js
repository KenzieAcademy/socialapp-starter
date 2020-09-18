import React from "react";


class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Search"
          name="searchTerm: "
          onChange={this.handleChange}
        />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    );
  }

}

export default Search;