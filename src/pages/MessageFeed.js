import React from "react";
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageFeed2 from "../components/feed2/Feed2"
import TextInput from "../components/TextInput/TextInput"
import Profiles from "../components/Profiles/Profiles";
import QuestboardService from "../pages/ServicePage"

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
        <Menu isAuthenticated={this.props.isAuthenticated} />
            <TextInput />
            <MessageFeed2 />
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
