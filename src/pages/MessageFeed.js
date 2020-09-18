import React from "react"

import { userIsAuthenticated } from "../redux/HOCs"

class MessageFeed extends React.Component {
  render() {
    return (
      <h3>Message Feed</h3>
      
    )
  }
}
export default userIsAuthenticated(MessageFeed);

