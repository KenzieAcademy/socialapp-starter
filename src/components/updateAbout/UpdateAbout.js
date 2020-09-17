import React from "react";
import DataService from "../../DataService";

class UpdateAbout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="UpdateAbout">
        <form id="updateAbout-form">
          <label htmlFor="about">About</label>
          <input type="text" name="about" />
          <button type="submit">Update About</button>
        </form>
      </div>
    );
  }
}

export default UpdateAbout;
