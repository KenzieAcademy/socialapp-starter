import React from "react"
// import Navigation from "../components/Navigation/Navigation"
import { userIsAuthenticated } from "../redux/HOCs"

class MessageFeed extends React.Component {
  render() {
    return (
      <h3>Message Feed</h3>
      // <Navigation />
    )
  }
}
export default userIsAuthenticated(MessageFeed);

