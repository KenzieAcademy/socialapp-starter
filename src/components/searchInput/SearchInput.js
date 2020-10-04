import React from "react";

class SearchInput extends React.Component {
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
      <div className="searchInput">
        <form>
          <label htmlFor="Search">Search</label>
          <input
            type="text"
            placeholder="Search"
            name="searchTerm"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchInput;
