import React, { Component } from "react";

class navBar extends Component{
  render() {
    return (
        <ul>
          <li>
            <button>Home</button>
          </li>
            <li>
                <button>About</button>
            </li>
          <li>
            <button>Play Game</button>
          </li>
          <li>
            <button>Meet</button>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      );
  }

}
export default navBar;