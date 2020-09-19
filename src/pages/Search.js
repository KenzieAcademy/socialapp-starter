import React from "react";
<<<<<<< HEAD

=======
import { Link } from "react-router-dom";
>>>>>>> 86cd0263138da86a8919eb9949b53698e50d9c8e

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
        <Link to="/">Home</Link>
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
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    );
  }
<<<<<<< HEAD

}

export default Search;
=======
}

export default Search;
>>>>>>> 86cd0263138da86a8919eb9949b53698e50d9c8e
