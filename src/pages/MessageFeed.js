import React from "react";
import MenuAuthenticated from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageFeed2 from "../components/feed2/Feed2"
import TextInput from "../components/TextInput/TextInput"
import UserList from "../components/UserList/UserList"
import "../components/feed2/feed2.css"

class MessageFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: ""
    }
  }

  stateChange= (event) => {
    
    
    this.setState({post: event.target.value});
    console.log(this.state.post)

}

clicked(){
    console.log("clicked")
}


  render() {
    return (
      <div className="feed">
        <MenuAuthenticated isAuthenticated={this.props.isAuthenticated} />
            <div id="feedAndInput">
            <MessageFeed2 />
            <TextInput />

            </div>
            <div><UserList/></div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
