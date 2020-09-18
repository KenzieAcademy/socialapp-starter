import React from "react";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleChange = (e) => {
    e.preventDefault ()
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="Search">
        <form>
        <label htmlFor= "Search">Search</label>
        <input
          type="text"
          placeholder="Search"
          name="searchTerm"
          onChange={this.handleChange}
        />
        </form>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    );
  }

}

export default Search;